const { token, prefix } = require("./config.json")
const mongoose = require('mongoose')
const { config } = require("dotenv")
const { badwords } = require("./data.json")
const commontags = require('common-tags')
const discord = require("discord.js")
const ReactionRole = require("reaction-role")
const { Attachment } = require("discord.js");
const client = new discord.Client({
  disableEveryone: true
});
const { addexp } = require("./handlers/xp.js")
const join = require('join')
const fs = require("fs")    
const ms = require("ms")
const fetch = require("node-fetch")
const { Canvas } = require("canvas-constructor")
const moment = require("moment")
const { Client, MessageEmbed } = require('discord.js');
const Enmap = require('enmap');
const hbin = require('hastebin');
const { VultrexDB } = require("vultrex.db");
const database = require('quick.db');
require('dotenv').config();
const bot = new Client({ partials: ['MESSAGE'] });
const db = require('quick.db')


client.commands = new discord.Collection();
client.aliases = new discord.Collection();




["command"].forEach(handler => { 
  require(`./handlers/${handler}`)(client)
})



client.on("ready", () => { 
  console.log("I am Reday to Go")
  client.user.setActivity(db.get(`status`), {type: "STREAMING",url:'https://www.twitch.tv/varks01'})

  });
client.on('channelCreate', channel => {
    const embed = new MessageEmbed()
    .setAuthor('Channel Created!', client.user.avatarURL())
    .setColor('GREEN')
    .addField(`**Channel Name**`,channel.name)
    .addField(`**Channel Type**`,channel.type)
    .addField(`**Category**`,channel.parent.name)
    .setFooter(`Channel ID ${channel.id}`)
    .setTimestamp();

    client.channels.cache.get('716445773687947344').send(embed);
});

client.on('channelDelete', channel => {
    const deletedAt = moment(Date.now() - channel.createdAt).toDate().toDateString();

    const embed = new MessageEmbed()
    .setAuthor('Channel Deleted!', client.user.avatarURL())
    .setColor('RED')
    .addField(`**Channel Name**`,channel.name)
    .addField(`**Channel Type**`,channel.type)
    .addField(`**Channel Category**`,channel.parent.name)
    .addField(`**Created At**`,channel.createdAt.toDateString())
    .setFooter(`Channel ID, ${channel.id}`)
    .setTimestamp();

    client.channels.cache.get('716445773687947344').send(embed);
});

client.on('channelUpdate', (oldC, newC) => {
    let importantChange;

    if (oldC.name !== newC.name) importantChange = 'name';
    if (oldC.type !== newC.type) importantChange = 'type';
    if (oldC.parent !== newC.parent) importantChange = 'parent';
    if (oldC.topic !== newC.topic) importantChange = 'topic';
    if (oldC.parent.id === '679515614280286262' || newC.parent.id === '679515614280286262') importantChange = undefined;
     
    if (!importantChange) return undefined;

    const embed = new MessageEmbed()
    .setAuthor('Channel Update!', client.user.avatarURL())
    .setColor('ORANGE');
    
    switch (importantChange) {
        case 'name':
            embed.addField('Old Name', oldC.name, true);
            embed.addField('New Name', newC.name, true);
            break;
        case 'type':
            embed.addField('Old Channel Type', oldC.type, true);
            embed.addField('New Channel Type', newC.type, true);
            break;
        case 'parent': 
            embed.addField('Old Category', oldC.parent.name, true);
            embed.addField('New Category', newC.category.name, true);
            break;
        case 'topic':
            embed.addField('Old Topic', oldC.topic, true);
            embed.addField('New Topic', newC.topic, true);
    }

    client.channels.cache.get('716445773687947344').send(embed);
});
client.on('emojiUpdate', (oldC, newC) => {
    let importantChange;

    if (oldC.name !== newC.name) importantChange = 'name';

    if (!importantChange) return undefined;

    const embed = new MessageEmbed()
    .setAuthor('Emoji Update!', client.user.avatarURL())
    .setColor('ORANGE')
    .setFooter('Moderation Logs')
    .setTimestamp();
    
    switch (importantChange) {
        case 'name':
            embed.addField('Old Name', oldC.name, true);
            embed.addField('New Name', newC.name, true);
            break;
    }

    client.channels.cache.get('716445773687947344').send(embed);
});

client.on('guildMemberUpdate', (oldC, newC) => {
    let importantChange;
    let roleAddedOrRemoved;

    if (oldC.nickname !== newC.nickname) importantChange = 'nickname';
    if (oldC.roles.cache.difference(newC.roles.cache).size) {
        const changes = oldC.roles.cache.difference(newC.roles.cache);

        changes.map(role => {
            if (newC.roles.cache.has(role) && !oldC.roles.cache.has(role)) {
                roleAddedOrRemoved = role;
                importantChange = 'roleAdd';
            } else {
                roleAddedOrRemoved = role;
                importantChange = 'roleRemove';
            }
        });
    }

    if (!importantChange) return undefined;

    const embed = new MessageEmbed()
    .setAuthor('Member Update!', client.user.avatarURL())
    .setColor('ORANGE')
    .addField('User Tag', newC.user.tag)
    .setFooter('Moderation Logs')
    .setTimestamp();
    
    switch (importantChange) {
        case 'nickname':
            embed.addField('Old Nickname', oldC.nickname, true);
            embed.addField('New Nickname', newC.nickname, true);
        case 'roleAdd':
            embed.addField('Role Added/Removed!', roleAddedOrRemoved.name);
        case 'roleRemove':
            embed.addField('Role Added/Removed!', roleAddedOrRemoved.name);
    }

    client.channels.cache.get('716445773687947344').send(embed);
});

client.on('messageDelete', message => {
    if(!message.partial) {
        const channel = client.channels.cache.get('716445773687947344');
        if(channel) {
            const embed = new discord.MessageEmbed()
                .setAuthor(`${message.author.username}`, message.author.avatarURL())
                .setDescription(`**>Message sent by** ${message.author.tag} **deleted in** ${message.channel.name} \n**>Content:** ${message.content}`)
                .setFooter(`Author: ${message.author.id} | Message ID: ${message.id}`)
                .setColor(`ORANGE`)
                .setTimestamp();
            channel.send(embed);
        }
    }
});
client.on('messageUpdate', (message, newMessage) => {
     let guild = message.guild;
          const channel = client.channels.cache.get('716445773687947344');
        if(channel) {
   let embed = new discord.MessageEmbed()
      .setAuthor(`${message.author.tag}`, message.author.avatarURL())
      .setColor(`GREEN`)
      .setDescription(`**Message edited in <#${message.channel.id}>**`)
      .addField(`Old Content`, message.content, true)
      .addField(`New Content`, newMessage.content, true)
      .setFooter(`UserID: ${message.author.id}`);
                      channel.send(embed);
 }
})
let countChannel = {
  total: "714949782900310046",
  member: "714949921664401549",
  bots: "714949972344307722",
  serverID: "516323176301723648"
}

client.on("guildMemberAdd", member => {
   if (member.guild.id !== countChannel.serverID) return;
  client.channels.cache.get(countChannel.total).setName(`Total Users: ${member.guild.memberCount}`);
  client.channels.cache.get(countChannel.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
  client.channels.cache.get(countChannel.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
 
 
  
   member.roles.add(member.guild.roles.cache.get('710219166145052744'));
})
client.on("guildMemberRemove", member => {
  if (member.guild.id !== countChannel.serverID) return;
  
  client.channels.cache.get(countChannel.total).setName(`Total Users: ${member.guild.memberCount}`);
  client.channels.cache.get(countChannel.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
  client.channels.cache.get(countChannel.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
})
client.on("messageReactionRemove", member => {

})
  
  client.on("message", async message => {
            if(message.content === prefix + "test"){
      let msg = await message.channel.send('To create a ticket react with 📩')
      msg.react("📩")
      
    }
   if(!message.member.hasPermission("ADMINISTRATOR")) {
     }   
    let confirm = false;
   
    var i;
    for(i = 0;i < badwords.length; i++) {
      
      if(message.content.toLowerCase().includes(badwords[i].toLowerCase()))
        confirm = true;
      
    }
   if(confirm) {
      message.delete()
message.member.send(`Sorry that word is Blacklisted`)
   }
  
if(message.author.bot) return;
  
  if(!message.guild) return;
  if(!message.content.startsWith(prefix)) return;
  
     if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
   
    let command = client.commands.get(cmd);
   
    if (!command) command = client.commands.get(client.aliases.get(cmd));

   
    if (command) 
  command.run(client, message, args);

return addexp(message)

});
  client.login(token);
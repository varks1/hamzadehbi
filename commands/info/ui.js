const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");
const db = require('quick.db')
const moment = require("moment");
const duration = require("duration")
  const pm = require("pretty-ms");

module.exports = {
    name: 'ui',
    category: 'info',
    description: 'Bot give user info.',
    usage: `${(process.env.PREFIX)}whois`,
    run: (client, message, args) => {
       let now = Date.now();
     const user = message.mentions.users.first() || message.author;
            function game() {
    let game;
    if (user.presence.activities.length >= 1) game = `${user.presence.activities[0].name}`;
    else if (user.presence.activities.length < 1) game = "None"
    return game;
  }
      
        if(!user.bot) var abot = 'No'
  if(user.bot) var abot = 'Yes'
  var accountdays = Date.now() - user.createdAt
  
  var accountagemiliseconds = Date.now() - user.createdAt
  
var duration = moment.duration(accountagemiliseconds, 'milliseconds');
var days = duration.asDays();
          const member = message.guild.member(user);
    let embed = new MessageEmbed()
    .setColor(`#303434`)
    .setThumbnail(user.displayAvatarURL())
    .addFields(
        { name: '**Member information:**', value: `** >Display name:** ${member.displayName}
** >Joined at:** ${moment.utc(member.joinedAt).format('DD/MM/YYYY')}
** >Roles[${member.roles.cache.size}]:** ${member.roles.cache.map(role => role.toString()).join(' ')}
** >Bot?** ${abot}`, inline: true },
        { name: '**User information:**', value: `** >Username**: ${user.username}
** >Tag:** ${user.tag}
** >ID:** ${user.id}
**>Created at:** ${moment.utc(user.createdAt).format('DD/MM/YYYY')}
** >Currently Playing** ${game()}
** >Account Age:** `, inline: true },)
    .setTimestamp()
    .setFooter(`${message.guild.name}` , message.guild.iconURL())
            
   message.channel.send({embed: embed});
  }
}

const {MessageEmbed} = require('discord.js');
const {prefix} = require('../../config.json');
module.exports={
    name: "help",
    description: "give commands info",
    category: "info",
    run: async(bot,message,args)=>{

        let Embed = new MessageEmbed()
        .setAuthor(`${message.guild.name}`, message.guild.iconURL())
        .setTitle(`CMD LIST`)
        .addField(`**🎭|FUN**`, "``8ball``,``level``,``say``,``poll``,``ui``,``choose``,\n ``esay``,``oldest``")
        .addField(`**📜|INFO**`, "``corona``,``help``")
        .addField(`**🛠️|MODERATION**`, "``ban``,``kick``,``mute``,``unmute``,``clear``,``giveaway``,\n ``unban`` ")
        message.channel.send(Embed)
    }
    }
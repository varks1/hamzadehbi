const {MessageEmbed} = require('discord.js')
const ms = require("ms");
const moment = require("moment");
module.exports={
    name: "unban",
    description: "Shove",
    category: "moderation",
    usage: ";unban <username or user ID> <reason>",
    run: async(client, message, args) =>{
      message.delete()
      let memberInfo = message.mentions.members.first();
  try {
          let member = (args[0]);
        let author = message.guild.members.cache.get(message.author.id);
    
            if (!member)
            return message.reply('Please give me USER ID');
        if (!author.hasPermission("BAN_MEMBERS"))
            return message.reply('Nice try | :clown:');
    
        message.guild.members.unban(member)
            .then(k => {
      const Embed = new MessageEmbed()
        .setTitle(`Action: Unban`)
        .setDescription(`✅ <@${args[0]}> was unbanned \n \n By: **${message.author.username}**`)
        .setColor(`#77b254`)
        message.channel.send(Embed)
            });

    } catch (error) {
      return message.channel.send(`Something went wrong: ${error.message}`);
    }
}}
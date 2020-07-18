const {MessageEmbed} = require('discord.js')
const db = require('quick.db')
const {prefix} = require('../../config.json')
module.exports={
    name: "rich",
    description: "There is a big chance I insult you!",
    category: "info",
run : async (bot, message, args) => {

   let xps = db.all().filter(data => data.ID.startsWith(`money`)).sort((a, b) => b.data - a.data).slice(0,10)
   let indexnum = 0;
   const list = xps.filter(xp=> message.guild.members.has(xp.ID.split('_')[1])).map(i=> `**${++indexnum}. ${message.guild.members.get(i.ID.split('_')[1])}** - $${i.data} :money_with_wings: `).join("\n")

       const embed = new MessageEmbed()
    .setTitle("Money Leaderboard!")
    .setColor(65535)
    .setDescription(list)
    .setTimestamp()
    message.channel.send(embed)
}
}
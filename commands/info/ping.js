const Discord = require('discord.js')
module.exports = {
    name: "ping",
    category: 'info',
    description: "Returns latency and API ping",
    timeout: 10000,
    run: async (bot, message, args) => {
         message.channel.send(`🏓 Pinging....`).then(msg=>{
        const _ = new Discord.MessageEmbed()
        
      .setDescription(`🏓 Pong!\n  \n ⏱️ ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms`)
        .setColor('#ffca58')
        msg.edit(_);
        msg.edit("\u200B")
    })
    }
}
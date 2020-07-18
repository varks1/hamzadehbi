const {MessageEmbed} = require('discord.js');
const database = require('quick.db')
module.exports={
    name: 'withall',
    category: 'info',
    description: 'text here',
    run: async(bot,message,args)=>{
      const user = message.author;
      
      if(args[0]) return message.reply("Invalid arguments!")
      
      let coins = database.get(`coins_${message.guild.id}_${user.id}`)
      let bank = database.get(`bank_${message.guild.id}_${user.id}`)
      
      if(bank == 0) return message.reply("You have no coins to withraw!")
      
      database.set(`bank_${message.guild.id}_${user.id}`, 0)
      database.add(`coins_${message.guild.id}_${user.id}`, bank)
      
      return message.reply(`You have succesfully withdrawn **$${bank}** from your bank!`)
    }
}
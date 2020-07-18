const {MessageEmbed} = require('discord.js');
const database = require('quick.db')
module.exports={
    name: 'depall',
    category: 'info',
    description: 'text here',
    run: async(bot,message,args)=>{
      const user = message.author;
      
      if(args[0]) return message.reply("Invalid arguments!")
      
      let coins = database.get(`coins_${message.guild.id}_${user.id}`)
      let bank = database.get(`bank_${message.guild.id}_${user.id}`)
      
      if(coins == 0) return message.reply("You have no coins to deposit!")
      
      database.set(`coins_${message.guild.id}_${user.id}`, 0)
      database.add(`bank_${message.guild.id}_${user.id}`, coins)
      
      return message.reply(`You have succesfully deposited **$${coins}** to your bank!`)
    }
}
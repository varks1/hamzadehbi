const {MessageEmbed} = require('discord.js');
const database = require('quick.db');
module.exports={
    name: 'coins',
    category: 'info',
    description: 'text here',
    run: async(bot,message,args)=>{
      
      if (message.author.id !== "290143878315507712") return;
      
      const user = message.author;
      
      let coins = database.get(`coins_${message.guild.id}_${user.id}`)
      
      if(coins === null){
        database.set(`coins_${message.guild.id}_${user.id}`, 0)
      }
      
      database.add(`coins_${message.guild.id}_${user.id}`, 10)
      message.reply("I have added 10 coins to your balance!");
    }
}
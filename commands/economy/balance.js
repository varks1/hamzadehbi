const {MessageEmbed} = require('discord.js');
const database = require('quick.db');
module.exports={
    name: 'bal',
    category: 'info',
    description: 'text here',
    run: async(bot,message,args)=>{
      
      const user = message.mentions.users.first() || message.author;
      
      if(args[1]) return message.reply("Please enter valid arguments.")
      
      let coins = database.get(`coins_${message.guild.id}_${user.id}`)
      let bank = database.get(`bank_${message.guild.id}_${user.id}`)
      
      if(coins === null){
        coins = 0;
      }
      
      if(bank === null){
        bank = 0;
      }
      
      const embed = new MessageEmbed()
      .setTitle(`**${user.username}'s Balance**`)
      .addField("Cash💸", `**${coins}**`)
      .addField("Bank🏦", `**${bank}**`)
      .setColor("#00ff44");
      
      message.channel.send(embed);
    }
}
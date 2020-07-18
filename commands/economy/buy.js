const Discord = require('discord.js')
const db = require('quick.db')
module.exports={
    name: "buy",
    description: "There is a big chance I insult you!",
    category: "info",
run : async (client, message, args) => {
  
   let author = db.fetch(`money_${message.author.id}`)
         if (args[0].toLowerCase().includes("blue")) {
        if (author < 8000) { 
        return message.channel.send(' You can\'t afford this!')
    }
     message.member.roles.add("719117308353708092")
           let embed = new Discord.MessageEmbed()
           .setTitle("Purcahse Item!")
           .addField("Item", "Blue Color Role")
           .addField("Cost", `8,000`)
           .setColor('#5dbcd2')
      message.channel.send(embed)
          db.subtract(`money_${message.author.id}`, 8000)
          
    }
        if (args[0].toLowerCase().includes("red")) {
        if (author < 8000) { 
        return message.channel.send(' You can\'t afford this!')
    }
     let role = message.member.guild.roles.cache.get(r => r.id === '717882119971405924')
     if(role) return message.channel.send("You already have the red role!")
     message.member.roles.add("717882119971405924")
           let embed = new Discord.MessageEmbed()
           .setTitle("Purcahse Item!")
           .addField("Item", "Red Color Role")
           .addField("Cost", `8,000`)
           .setColor('#de2e43')
      message.channel.send(embed)
          db.subtract(`money_${message.author.id}`, 8000)
          
    }
    if (args[0].toLowerCase().includes("rod")) {
      if (author < 10000) return message.channel.send('<a:no:676180589895876611> You can\'t afford this!')
      let fishing_rod = db.fetch(`fishing_rod_${message.author.id}`)
      if (fishing_rod === true) return message.channel.send("You already have a fishing rod!") 
      let embed = new Discord.MessageEmbed()
      .setTitle("Purchase Item!")
      .addField("Item", "Fishing Rod 🎣")
      .addField("Cost", "10,000")
      .setColor(65535)
      message.channel.send(embed)
      db.set(`fishing_rod_${message.author.id}`, true)
    }
           if (args[0].toLowerCase().includes("acc")) {
        if (author < 20) { 
        return message.channel.send(' You can\'t afford this!')
    }
           let embed = new Discord.MessageEmbed()
           .setTitle("Purcahse Item!")
           .addField("**Item**", "Random")
           .addField("**Cost**", `100,000`)
           .setDescription(`✅Account was Sent on Private!!`)
           .setColor('#de2e43')
      message.channel.send(embed)
          db.subtract(`money_${message.author.id}`, 20)
          

  
  }
}
}
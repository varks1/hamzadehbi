const {MessageEmbed} = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')
module.exports={    
    name: "beg",
    description: "There is a big chance I insult you!",
    category: "info",
run : async (client, message, args) => {
      let ms_2 = require('parse-ms')
      let timeout = 120000
    let amount = Math.floor(Math.random() * 10) + 1;
    let beg = await db.fetch(`beg_${message.author.id}`)
    if (beg !== null && timeout - (Date.now() - beg) > 0) {
     let time = ms_2(timeout - (Date.now() - beg));
      message.channel.send(`You already begged! Try again in **${time.seconds} seconds**!`)
    } else {
    let embed = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setColor(65535)
    .setDescription(`**Beg For Money**`)
    .addField(`Collected`, amount)
    message.channel.send(embed)
     db.add(`coins_${message.guild.id}_${message.author.id}`, amount)
      db.set(`beg_${message.author.id}`, Date.now())
    }
}
}
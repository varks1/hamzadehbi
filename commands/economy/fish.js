const {MessageEmbed} = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')
module.exports={    
    name: "fish",
    description: "There is a big chance I insult you!",
    category: "info",
run : async (client, message, args) => {
        let ms_2 = require('parse-ms')
     let if_has_fishing_rod = await db.fetch(`fishing_rod_${message.author.id}`)
    if (if_has_fishing_rod === null) return message.channel.send("You are too bad at fishing!, go buy a fishing rod to fish!")
      const number_of_fish = [
        0,
        1,
        2,
        3,
        4,
        5
      ]
      let timeout = 60000
      let fish_time = await db.fetch(`fish_time_${message.author.id}`)
    if (fish_time !== null && timeout - (Date.now() - fish_time) > 0) {
      let time = ms_2(timeout - (Date.now() - fish_time))
      message.channel.send(`Your fishing too fast and the fish got away! Try again in ${time.seconds} seconds!`)
    }
   let time = ms_2(timeout - (Date.now() - fish_time))
    if (fish_time !== null && timeout - (Date.now() - fish_time) > 0) return 
      let number_real = number_of_fish[Math.floor(Math.random() * number_of_fish.length)]
      let author = await db.fetch(`coins_${message.author.id}`)
      let fish_1 = 100
      let fishing_sell_amount = fish_1*number_real
      if (number_real === 0) {
        let embed2 = new MessageEmbed()
      .setTitle("Fishing Trip! 🎣")
      .setColor("BLUE")
      .setDescription(`You were too slow and the fish got away!`)
        message.channel.send(embed2)
      }
    if (number_real === 0) return
      let embed = new MessageEmbed()
      .setTitle("Fishing Trip! 🎣")
      .setColor("BLUE")
      .setDescription(`You caught **${number_real}** fish! 🐟 \n\ You sold it for **${fishing_sell_amount}** 💰`)
      message.channel.send(embed)
    if (number_real > 0) {
      db.add(`coins_${message.guild.id}_${message.author.id}`, fishing_sell_amount)
    }
    
    db.set(`fish_time_${message.author.id}`, Date.now())
    }
}
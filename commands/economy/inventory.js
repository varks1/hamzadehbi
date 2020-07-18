const {MessageEmbed} = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')
module.exports={
    name: "inv",
    description: "There is a big chance I insult you!",
    category: "info",
  run : async (client, message, args) => {
       let user = message.mentions.users.first() || message.author
   if (user.bot) return message.channel.send("Bots dont have a inventory!")
   let if_has_rod = await db.fetch(`fishing_rod_${user.id}`)
   if (if_has_rod === true) if_has_rod = "Fishing Rod 🎣 \n\ *ID* `rod`"
   if (if_has_rod === null) if_has_rod = ""

   let embed = new MessageEmbed()
   .setTitle(`${user.username} Inventory`)
   .setColor(65535)
   .setDescription(`${if_has_rod}`)
   message.channel.send(embed)
 } 
}
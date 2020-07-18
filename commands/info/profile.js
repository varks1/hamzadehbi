const discord = require("discord.js")
const fetch = require("node-fetch")
const { Canvas } = require("canvas-constructor")
const moment = require("moment");
      module.exports={
  name: "profile",
  category: "moderation",
  run: async (client, message, args) => {
      const user = message.mentions.users.first() || message.author;
      const avatar = await fetch(user.avatarURL({format: 'jpg'}))
    
    
let mage = new Canvas(500, 250)
.setColor("#ffffff")
.addRect(0, 0, 500, 250) 
.setColor("#ffca58")
.addRect(0, 0, 500, 80)
.setColor("#000000")
.setTextFont('bold 40px Impact') 
.addText("PROFILE CARD", 110, 55)
.setColor("#000000")
.setTextFont('bold 20px Impact') 
.addText(`ID - ${user.id}`, 30, 140)
.addText(`TAG - ${user.tag}`, 30, 170)
.addText(`GUILD NAME - ${message.guild.name}`, 30, 200)
.setColor("#000000")
.addCircle(60, 40, 33)
.addCircularImage(await avatar.buffer(), 60, 40, 30)
.toBuffer();
    message.channel.send({files: [mage]}) //lol i forget again
    
  }
}
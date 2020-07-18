const discord = require("discord.js")
const fetch = require("node-fetch")
const { Canvas } = require("canvas-constructor")
module.exports={
  name: "slap",
  category: "fun",
  run: async (client, message, args) => {
            const user = message.mentions.users.first();
    if (!user) return message.channel.send("Who do you whant to battle? Air?");
    if (user.bot)
       return message.channel.send("Bots are too strong for your kind!");
    if (user.id === message.author.id)
      return message.channel.send("You whant to Suicide?");
        const authorAvatar = await fetch(message.author.avatarURL({format: 'jpg'}));
        const userAvatar = await fetch(user.avatarURL({format: 'jpg'}));
        const background = await fetch("https://cdn.discordapp.com/attachments/501012654538752018/719878940373549086/unknown.png");
    
         const mage = new Canvas(626, 357)
        .addImage(await background.buffer(), 0, 0, 626, 357)
        .setColor("#ffffff")
        .addCircle(450, 85, 60)
        .addCircularImage(await authorAvatar.buffer(), 450, 85, 60)
        .setColor("#ffffff")
        .addCircle(150, 90, 51)
        .addCircularImage(await userAvatar.buffer(), 150, 90, 51)
        .toBuffer();
    message.channel.send({files: [mage]})
  }
}
    
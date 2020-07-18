
const discord = require("discord.js")
const fetch = require("node-fetch")
const { Canvas } = require("canvas-constructor")
const db = require('quick.db')
const { getInfo } = require("../../handlers/xp.js")
      module.exports={
  name: "msg",
  category: "moderation",
  run: async (client, message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        const data = await client.db.get(`level-${message.guild.id}-${member.id}`);
        if(!data) return message.reply("This user does not have a rank!");
      const tag = await member.user.tag
      const img = await fetch("https://cdn.discordapp.com/attachments/675541440020873247/702887944897429524/yay.jpg")
      const img2 = await fetch(member.user.avatarURL({format: 'jpg'}))
      let xp = await db.fetch(`xp_${member.user.id}_${message.guild.id}`)|| 0;
      const {level, remxp, levelxp} = getInfo(xp);
      if (member.user.bot) return message.channel.send("Bot's Don't have leveling systems!")
  let mage = new Canvas(400, 180)
      .addImage(await img.buffer(), 0, 0,400, 180)
      .addCircularImage(await img2.buffer(), 85, 90, 64)
      .setTextAlign('center')
      .setTextFont('18pt Klavika Regular')
      .setColor('#FFFFFF')
      .addResponsiveText(`${member.user.tag}`, 285, 54, 230)
      .setTextAlign('center')
      .setTextFont('18pt Klavika Regular')
      .addText(`${remxp}/${levelxp}`, 50, 50)
      .setColor("#e67e22")
      .addRect(150, 26,((100/ (remxp*50)*levelxp))*50, 20)
      .toBuffer();
   let imageE = {files: [mage]}
  await message.channel.send(imageE)
}
      }
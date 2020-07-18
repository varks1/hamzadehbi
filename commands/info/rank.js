const { MessageEmbed, MessageAttachment } = require('discord.js');
const db = require('quick.db')
const { getInfo } = require("../../handlers/xp.js")
const { createCanvas, loadImage } = require('canvas');
const { join } = require('path');
const fetch = require("node-fetch")
const { Canvas } = require("canvas-constructor")
module.exports={
    name: 'level',
    category: 'info',
    description: 'XP System & Rank Card',
    run: async(client,message,args)=>{
        const user = message.mentions.users.first() || message.author;
    const xp = await db.get(`xp_${user.id}_${message.guild.id}`) || 0;
    const {level, remxp, levelxp} = getInfo(xp);
    if(xp === 0) return message.channel.send(`**${user.tag}** is out of the xp`)
        const canvas = createCanvas(1000, 333);
        const ctx = canvas.getContext("2d");
        const background = await loadImage("https://media.discordapp.net/attachments/689864927992742139/720274573328908328/20200610_145235.jpg?width=1442&height=480");
        ctx.drawImage( background, 0, 0,1000, 333)
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#41b2b0";
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(30, 250, 770, 65);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.strokeRect(30, 250, 770, 65);
        ctx.stroke();
        ctx.fillStyle = "#41b2b0";
        ctx.globalAlpha = 0.6;
        ctx.fillRect(30, 250, ((100 / `${levelxp}`) * `${remxp}`) * 7.7, 65);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.font = "30px Verdana";
        ctx.textAlign = "center";
        ctx.fillStyle = ("#ffffff");
        ctx.fillText(`${remxp} / ${levelxp} XP`, 425, 292);
        ctx.fillStyle = ("#ffffff");
        ctx.font = "50px Verdana";
        ctx.textAlign = "left";
        ctx.fillText(user.tag, 240, 120);
        ctx.fillStyle = ("#ffffff");
        ctx.font = "50px Verdana";
        ctx.fillText("LEVEL:", 240, 200);
        ctx.fillText(`${level}`, 420, 200);
        ctx.arc(130, 130, 95, 0, Math.PI * 2, true);
        ctx.lineWidth = 10;
        ctx.strokeStyle = "#41b2b0";
        ctx.stroke();
        ctx.closePath();
        ctx.clip();
        const avatar = await loadImage(user.displayAvatarURL({ format: "jpg" }));
        ctx.drawImage(avatar, 36, 36, 190, 190);
        const attachment = new MessageAttachment(canvas.toBuffer(), "rank.png");
        message.channel.send(attachment);
          }
}
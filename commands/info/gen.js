const { MessageEmbed, MessageAttachment } = require('discord.js');
const { createCanvas, loadImage } = require('canvas');
const { join } = require('path');
module.exports={
    name: 'gen',
    category: 'info',
    description: 'Drake test command',
    run: async(bot,message,args)=>{
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const canvas = createCanvas(1000, 1000);
        const ctx = canvas.getContext("2d");
        ctx.globalAlpha = 1;
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, 1000, 1000);
        ctx.fill();
        ctx.font = "125px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = ("#000000");
        ctx.fillText(args[0]);

        ctx.textAlign = "center";
        ctx.fillText(args[0], 600, 250);

        const attachment = new MessageAttachment(canvas.toBuffer(), "Dady-VARKS.png");
        message.channel.send(`Rank Card for **${member.user.username}**.`, attachment);
    }
}
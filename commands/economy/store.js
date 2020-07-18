const Discord = require('discord.js')
const {MessageEmbed} = require('discord.js');
const db = require('quick.db')
const {prefix} = require('../../config.json');
module.exports={
    name: "store",
    description: "There is a big chance I insult you!",
    category: "info",
run : async (bot,message,args) => {
    let embed = new MessageEmbed()
    .setColor(65535)
    .setThumbnail('https://cdn.discordapp.com/attachments/689843709008674884/704132740257415228/shop.png')
    .setTitle("Shop!")
    .setDescription("To buy a item, run: `;buy <item name>`")
    .addField("🟣 Purple - 1,000", "Purple Role Colour!", true)
    .addField("🟡 Yellow - 1,000", "Yellow Role Colour!", true)
    .addField("🟠 Orange - 1,000", "Orange Role Colour!", true)
    .addField("🟢 Green - 2,000", "Green Role Colour!", true)
    .addField("⚫ Black - 2,000", "Black Role Colour!", true)
    .addField("🔴 Red - 2,000", "Red Role Colour!", true)
    .addField("🔵 Blue - 10,000", "Blue Role Colour!", true)
    .addField("👤 Account - 100,000", "Cyan Role Colour!", true)
    .addField("🎣 Rod - 10,000", "Fishing rod to fish!", true)
    message.channel.send(embed)
    }
}
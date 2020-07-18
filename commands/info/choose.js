const {MessageEmbed} = require('discord.js');
const {prefix} = require('../../config.json');
module.exports={
    name: "choose",
    description: "There is a big chance I insult you!",
    category: "info",
    run: async(bot,message,args)=>{
   if(!args[2])return message.send(`Bruh I just can choose between 3 names`)

        let Embed = new MessageEmbed()
        .setTitle(`Hmm🤔`)
        .setDescription(`\n I choose **${args[~~(Math.random() * args.length)]}**\n`)
        .setColor(`#ffca58`)
        message.channel.send(Embed)
    }
    }
const {MessageEmbed} = require('discord.js');
const {prefix} = require('../../config.json');
module.exports={
    name: "8ball",
    description: "There is a big chance I insult you!",
    category: "info",
    run: async(bot,message,args)=>{
    let question = message.content.split(" ").slice(1).join(" ")
    if(!question)return message.channel.send("You did not specify your question!")
    else{
        let responses = [
            "Ah",
            "La",
            "Wa9ila",
            "Amchi 3nd Ymak",
            "idk"
        ]
        let Embed = new MessageEmbed()
        .setTitle(`❓${message.author.username} Question❓`)
        .setDescription(`${question}\n \n🎱**8ball**\n \n ${responses[~~(Math.random() * responses.length)]}\n`)
        .setColor(`#ffca58`)
        message.channel.send(Embed)
    }
    }
}
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'esay',
    category: 'info',
    description: 'Bot repeats what you tell it to.',
    usage: `${(process.env.PREFIX)}say`,
    run: (client, message, args) => {
        message.delete()
       let embed = new MessageEmbed()
                .setDescription(args.join(' '))

        message.channel.send(embed) 

        }
    }
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'say',
    category: 'info',
    description: 'Bot repeats what you tell it to.',
    usage: `${(process.env.PREFIX)}say`,
    run: (client, message, args) => {
        message.delete()
     message.channel.send(args.join(' ')) 

        }
    }
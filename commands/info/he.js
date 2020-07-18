const Discord = require('discord.js');

module.exports = {
    name: 'he',
    category: 'info',
    description: 'Bot repeats what you tell it to.',
    usage: `${(process.env.PREFIX)}say`,
    run: (client, message, args) => {
  try {
    const attachment = new Discord.MessageAttachment('https://media.discordapp.net/attachments/694351946823237734/715341133147799603/Pngtreeeid_mubarak_calligraphy_3574550.png?width=677&height=677');
       
    message.channel.send(attachment);
    } catch (error) {
      return message.channel.send(`Something went wrong: ${error.message}`);
      // Restart the bot as usual.
    }
}
}
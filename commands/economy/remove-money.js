const {MessageEmbed} = require('discord.js');
const db = require('quick.db')
module.exports={
    name: "remove",
    description: "There is a big chance I insult you!",
    category: "info",
    run : async (client, message, args) => {
          if (!message.member.hasPermission('MANAGE_GUILD')) { // if message.author / member does not have the permission MANAGE_GUILD, return.
        return message.channels.send('You\'re missing the permission `MANAGE_GUILD` to use this command.').then(msg => {
            setTimeout(() => {
                msg.delete()
            }, 2500); // delete after 2.5 seconds.
        })
    }

    let user = message.mentions.members.first() || message.author

    if (isNaN(args[0])) return message.channel.send(`${message.author}, you need to input a valid number to remove.`) // if args[0] (first input) is not a number, return.
    db.subtract(`coins_${message.guild.id}_${user.id}`, args[0])
    let bal = await db.fetch(`coins_${message.guild.id}_${user.id}`)

    let embed = new MessageEmbed()
    .setAuthor(`Removed Money!`, message.author.displayAvatarURL)
    .addField(`Amount`, `${args[0]}$`)
    .addField(`Balance Updated`, `${bal}$`)
    .setColor(65535)
    .setTimestamp()
    message.channel.send(embed)





}
}
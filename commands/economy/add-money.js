const {MessageEmbed} = require('discord.js');
const db = require('quick.db')
module.exports={
    name: "add",
    description: "There is a big chance I insult you!",
    category: "info",
    run : async (client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) {
      let user = message.mentions.users.first() || message.author
        return message.reply('You do not have enough permission to use this command.')
    }

    if (!args[0]) return message.reply('Please specify an amount to add.')
    if (isNaN(args[0])) return message.reply('That was not a valid number!')

    let user = message.mentions.users.first() || message.author
    if (user.bot) return message.channel.send("Bot's cant have money!")
    let bal = await db.fetch(`coins_${message.guild.id}_${user.id}`)

    let embed = new MessageEmbed()
    .setTitle("🏧Admin-bank")
    .setAuthor(user.tag)
    .addField("Amount", `${args[0]} PLC`)
    .setColor(65535)
    message.channel.send(embed)
    db.add(`coins_${message.guild.id}_${user.id}`, args[0])
   }
}
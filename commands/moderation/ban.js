const {MessageEmbed} = require('discord.js')
module.exports={
    name: "ban",
    description: "Shoves foot up ass of specified member so far they fly out the server!",
    category: "moderation",
    usage: ";ban <username or user ID> <reason>",
    run: async(bot, message, args) =>{
              message.delete()
            message.delete()
        if(!message.member.permissions.has("BAN_MEMBERS"))return message.reply(`Nice try | 🤡.`)
        if(!args[0])return message.reply(`Please mention the member to who you want to ban.`)
        let User = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
        if(!User)return message.channel.send(`Bruh had khona makaynch f server.`)
        let Reason = args.slice(1).join(" ")
        if(!args[1])return message.reply(`Please give reason.`)
        if(!Reason) return message.reply(`Please give reason.`)
        if(!User.bannable)return message.reply(`U can not ban this member.`)
        
            try {
            await  User.send(`You are banned from **${message.guild.name}** by **${message.author.username}** for: **${Reason}**`)
            }
              catch(err) {}
        User.ban(Reason)
        const Embed = new MessageEmbed()
        .setTitle(`Action: Ban`)
        .setDescription(`**${bot.users.cache.get(User.id).tag}** have been Banned \n Reason: **${Reason}**\n By: **${message.author.username}**`)
        .setFooter(`ID: ${bot.users.cache.get(User.id).id}`)
        .setColor(`#ff2050`)
      message.channel.send(Embed);
    }
}
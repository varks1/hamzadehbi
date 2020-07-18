const Discord = require('discord.js');

module.exports={
    name: 'clear',
    category: 'moderation',
    run: async(bot, message, args)=>{
      message.delete()
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("oof.");
  if(!args[0]) return message.channel.send("oof");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`I have deleted \`${args[0]} message\`!`).then(msg => msg.delete(5000));
  });
}}
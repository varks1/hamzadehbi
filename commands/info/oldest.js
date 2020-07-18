const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");
const db = require('quick.db')
const moment = require("moment");
const duration = require("duration")
module.exports = {
  name: "oldest",
  category: "info",
  description: "Get the oldest account creation date in the guild!",
  run: async (bot, message, args) => {
    let mem = message.guild.members.cache
      .filter((m) => !m.user.bot)
      .sort((a, b) => a.user.createdAt - b.user.createdAt)
      .first();
    const Embed = new MessageEmbed()
      .setTitle(`The oldest member in ${message.guild.name}`)
      .setColor(`#303434`)
      .setFooter(`${mem.user.username}` , mem.user.displayAvatarURL() )
      .setDescription(`**${mem.user.tag}** is the oldest user in ${message.guild.name}! \n**Account creation date:** ${moment.utc(mem.user.createdAt).format('DD/MM/YYYY')}`);
    message.channel.send(Embed);
  },
};
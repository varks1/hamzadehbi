const db = require('quick.db')
const {MessageEmbed} = require('discord.js');
const Discord = require('discord.js')
const ms = require('parse-ms')
const {prefix} = require('../../config.json');
module.exports={
    name: "rob",
    description: "rob someone",
    category: "info",
run : async (client, message, args) => {
    let ms_2 = require('parse-ms')
    let user = message.mentions.members.first()
    let timeout = 600000
    let user2 = message.mentions.users.first()
    if (!user2) return message.channel.send("Please mention a user to rob!")
    let targetuser = await db.fetch(`money_${user2.id}`) // fetch mentioned users balance
    let author = await db.fetch(`money_${message.author.id}`) // fetch authors balance
    let random = Math.floor(Math.random() * 200) + 1; // random number 200-1, you can change 200 to whatever you'd like
    if (user2.id === message.author.id) return message.channel.send("You can't rob yourself, silly!")
    if (!user) {
        return message.channel.send('Sorry, you forgot to mention somebody.')
    }
    if (author < 250) { // if the authors balance is less than 250, return this.
        return message.channel.send('<a:no:676180589895876611> You need atleast 250$ to rob somebody.')
    }
    if (targetuser < 200) return message.channel.send(`The user has to have at least $200 to rob them!`)
    if (targetuser < 0) { // if mentioned user has 0 or less, it will return this.
        return message.channel.send(`${user.user.username} does not have anything to rob.`)
    }  
       let daily = await db.fetch(`rob_${message.author.id}`)
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
      let time = ms_2(timeout - (Date.now() - daily));
      message.channel.send(`You already robbed aonother user! Try again in ${time.minutes} minutes!`)
    } else {
      const result = [
        "WINWIN",
        "LOOSELOOSE"
      ]
       let awnser = result[Math.floor(Math.random() * result.length)];
      if (awnser === "LOOSELOOSE") {
        message.channel.send("HAHA! You Paid **250**PLC to the owner")
        db.subtract(`coins_${message.guild.id}_${message.author.id}`, 250)
        db.add(`coins_${message.guild.id}_${user.id}`, 250)
       db.set(`rob_${message.author.id}`, Date.now())
      }
      if (awnser === "WINWIN") {
message.channel.send(`You stole a MASSIVE portion! :money_mouth: \nYour payout was **${random}** PLC`)


    db.subtract(`coins_${message.guild.id}_${user.id}`, random)
    db.add(`coins_${message.guild.id}_${message.author.id}`, random)
    db.set(`rob_${message.author.id}`, Date.now())
}
    }
}
}
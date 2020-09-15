const http = require("http");//by Ali-xD
const express = require("express");//by Ali-xD
const app = express();//by Ali-xD
app.get("/", (request, response) => {//by Ali-xD
  response.sendStatus(200);//by Ali-xD
});//by Ali-xD
app.listen(process.env.PORT);//by Ali-xD
setInterval(() => {//by Ali-xD
  http.get(`http://name.glitch.me/`);//by Ali-xD
}, 280000);//by Ali-xD
const Discord = require("discord.js"),//by Ali-xD
client = new Discord.Client(),//by Ali-xD
settings = {//by Ali-xD
    prefix: "!g"//by Ali-xD
};//by Ali-xD
//by Ali-xD
const { GiveawaysManager } = require("discord-giveaways");//by Ali-xD
//by Ali-xD
const manager = new GiveawaysManager(client, {//by Ali-xD
    storage: "./giveaways.json",//by Ali-xD
    updateCountdownEvery: 5000,//by Ali-xD
    default: {//by Ali-xD
        botsCanWin: false,//by Ali-xD
        exemptPermissions: [],//by Ali-xD
        embedColor: "#FF0000",//by Ali-xD
        reaction: "🎉"//by Ali-xD
    }//by Ali-xD
});//by Ali-xD
client.giveawaysManager = manager;//by Ali-xD
//by Ali-xD
client.on("ready", () => {//by Ali-xD
    console.log("Ali-xD");//by Ali-xD
});//by Ali-xD
//by Ali-xD
client.login(process.env.BOT_TOKEN);//by Ali-xD
client.on("message", (message) => {//by Ali-xD
    const ms = require("ms"); //by Ali-xD
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);//by Ali-xD
    const command = args.shift().toLowerCase();//by Ali-xD
    if(command === "start"){//by Ali-xD
      if (!message.member.hasPermission("ADMINISTRATOR"))  return;//by Ali-xD
      message.delete();//by Ali-xD
       //by Ali-xD
    let time = args[0];//by Ali-xD
                      let winners = args[1];//by Ali-xD
                      let prize = args.slice(2).join(" ")//by Ali-xD
                      if (!time || !winners || !prize) return message.reply(`Wrong Use | Usage : \n ${settings.prefix}gstart <time> <winners> <prize>`)//by Ali-xD
                      if (isNaN(winners)) return message.reply(`Winner Need To Be Number`)//by Ali-xD
                      if (!time) return message.reply(`1s , 1m , 1h , 1w , 1mo`)//by Ali-xD
//by Ali-xD
client.giveawaysManager.start(message.channel, {//by Ali-xD
    time: ms(args[0]),//by Ali-xD
    prize: args.slice(2).join(" "),//by Ali-xD
    winnerCount: parseInt(args[1]),//by Ali-xD
        hostedBy: message.author ,//by Ali-xD
    messages: {//by Ali-xD
        giveaway: "🎉🎉**GIVEAWAY** 🎉🎉",//by Ali-xD
        giveawayEnded: "🎉🎉 **GIVEAWAY ENDED** 🎉🎉",//by Ali-xD
        timeRemaining: "Time remaining: **{duration}**!",//by Ali-xD
        inviteToParticipate: "React with 🎉 to enter!",//by Ali-xD
        winMessage: `Congratulations, {winners}! You won **{prize}**! ${message.url}`,//by Ali-xD
        embedFooter: "Giveaways",//by Ali-xD
        noWinner: "Could not determine a winner!",//by Ali-xD
        hostedBy: "**Hosted by: {user}**",//by Ali-xD
        winners: "winner(s)",//by Ali-xD
        endedAt: "Ended at",//by Ali-xD
        units: {//by Ali-xD
            seconds: "seconds",//by Ali-xD
            minutes: "minutes",//by Ali-xD
            hours: "hours",//by Ali-xD
            days: "days",//by Ali-xD
            pluralS: true //by Ali-xD
         }//by Ali-xD
    }//by Ali-xD
});//by Ali-xD
    }//by Ali-xD
});//by Ali-xD
//by Ali-xD
client.on("message", (message) => {//by Ali-xD
    const ms = require("ms"); //by Ali-xD
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);//by Ali-xD
    const command = args.shift().toLowerCase();//by Ali-xD
    if(command === "reroll"){//by Ali-xD
      if (!message.member.hasPermission("ADMINISTRATOR"))  return;//by Ali-xD
      message.delete();//by Ali-xD
        let messageID = args[0];//by Ali-xD
      if(!messageID) messageID = "**None**";//by Ali-xD
        client.giveawaysManager.reroll(messageID).then(() => {//by Ali-xD
            message.channel.send("Success! Giveaway rerolled!");//by Ali-xD
        }).catch((err) => {//by Ali-xD
            message.channel.send("No giveaway found for "+messageID+", please check and try again");//by Ali-xD
        });//by Ali-xD
    }//by Ali-xD
});//by Ali-xD
client.on("message", (message) => {//by Ali-xD
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);//by Ali-xD
    const command = args.shift().toLowerCase();//by Ali-xD
    if(command === "end"){//by Ali-xD
      if (!message.member.hasPermission("ADMINISTRATOR"))  return;//by Ali-xD
      message.delete();//by Ali-xD
        let messageID = args[0];//by Ali-xD
      client.giveawaysManager.delete(messageID).then(() => {//by Ali-xD
            message.channel.send("Success! Giveaway Ended!");//by Ali-xD
        }).catch((err) => {//by Ali-xD
          if(!messageID) messageID = "**None**";//by Ali-xD
            message.channel.send("No giveaway found for "+messageID+", please check and try again");//by Ali-xD
        });//by Ali-xD
    }//by Ali-xD
});//by Ali-xD
//by Ali-xD

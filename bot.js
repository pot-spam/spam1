const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("441708478076157952")
setInterval(function() {
channel.send(`احتاج كريدت شباب`);
}, 30)
})

client.login(process.env.BOT_TOKEN);

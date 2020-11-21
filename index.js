const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('Nzc5Nzc0MzAwOTc4NDEzNTk4.X7lbaA.y3McMCAIGYfJsC7VjMnOnEkRASE');

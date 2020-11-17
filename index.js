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

client.login('NzEzMzUwMDMzMDg0NTE0MzI1.Xse0_Q.bdZKGdmdTeMfCP3WKYV7DwHBN2c');

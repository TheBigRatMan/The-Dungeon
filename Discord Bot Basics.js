const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!' //customizable

client.once('ready', () =>{
  console.log(`logged in as ${client.user.tag}`);

  /*
  Sets the bot's activity
  Sets the type of activity
  */
  client.user.setActivity('!help', {type: 'LISTENING'});
});

client.on('message', message =>{
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  
  if(command === 'ping'){
    message.channel.send('pong!');
  }else if(command == 'beep'){
    message.channel.send('boop?');
  }
});

client.login('BOT_TOKEN_HERE');

//replace the original code with the following

const fs = require('fs');

const Discord = require('discord.js');

const prefix = '!';

const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//client.on('...'){...} so on and so forth until the client.login('...');

//be sure to make your command files inside of a folder named: commands;

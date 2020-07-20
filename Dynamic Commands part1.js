+ const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
+ client.commands = new Discord.Collection();

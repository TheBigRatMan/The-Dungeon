client.on('guildMemberAdd', member =>{
  const channel = member.guild.channels.cache.find(ch => ch.name === 'welcomer');
    
  channel.send(`Welcome to our server ${member}, please visit the rules channel`);
});

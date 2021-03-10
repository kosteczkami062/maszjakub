const Discord = require('discord.js');
const Random = require('random');
const Commando = require('discord.js-commando');
const handler = require('./config/handler.js')
const config = {
    prefix: "mcp ",
    token: ""
};
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setActivity('coding', {type: "WATCHING"});
});

client.login(config.token)

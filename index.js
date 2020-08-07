const Discord = require('discord.js');
const fs = require('fs');
require('dotenv').config()
const client = new Discord.Client();
client.prefixes=require('./prefixes.json');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('We must not allow other people\'s limited perceptions to define us.', { type: 'WATCHING' });
});

const defprefix=process.env.PREFIX
let prefix=defprefix
const token=process.env.CLIENT_TOKEN
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.on('message', message => {
    if(message.guild) {
        if (!client.prefixes[message.guild.id]) {
            client.prefixes[message.guild.id] = {
                prefixes: defprefix
            };
            fs.writeFile("./prefixes.json", JSON.stringify(client.prefixes, null, 4), err => {
                if (err) throw err;
            })
        }
        prefix = client.prefixes[message.guild.id].prefixes;
    }
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;
    const usage = command.usage;
    if(usage==='server') {
        if(message.channel.type ==='dm')
            return message.reply('Sorry, you can only use that command in a server')
    }
try {
    command.execute(client, message, args);
} catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
}
});

client.login(token);
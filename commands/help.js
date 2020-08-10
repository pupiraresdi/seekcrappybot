const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
    name: 'help',
    execute(client, message, args) {
        if(args[0])
        return;
            const help = new Discord.MessageEmbed()
                .setTitle("Bot Commands")
                .addField("`Preifx`", `${client.prefixes[message.guild.id].prefixes}`)
                .addField("`General`", "Show You my general commands.")
                .addField("`Fun`", "Show you the minigames commands.")
                .setColor('RANDOM')
                .setFooter('Made by SeekNExpose#4157 | Helper - Meliodaf#1900')
                .setFooter(`Made by SeekNExpose#4157`, `${client.users.cache.get('713290150750453832').avatarURL({
                    format: 'png',
                    dynamic: true,
                    size: 256
                    })}`);
            message.channel.send(help);
       
    }
}
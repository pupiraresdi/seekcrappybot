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
                .addField("`Minigames`", "Show you the minigames commands.")
                .setColor('RANDOM')
                .setFooter('Made by SeekNExpose#4157 | Helper - Meliodaf#1900')
                .setThumbnail('https://cdn.discordapp.com/attachments/729902925307969612/737184187496529980/Screenshot_195.png');
            message.channel.send(help);
       
    }
}
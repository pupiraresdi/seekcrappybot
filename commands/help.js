const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
    name: 'help',
    execute(client, message, args) {
        if(args[0])
        return;
        const info = new Discord.MessageEmbed()
            .setTitle('Bot Information / Commands')
            .setDescription([
                "`Prefix`: /",
                "`Bot Info`: /info",
                "`Bot Stats`: /stats",
            ].join('\n\n'))
            .setColor('RANDOM')
            .setFooter('Made by SeekNExpose#4157 | Helper - Meliodaf#1900')
            .setThumbnail('https://cdn.discordapp.com/attachments/729902925307969612/737184187496529980/Screenshot_195.png');
            message.channel.send(info);

        const general = new Discord.MessageEmbed()
            .setTitle('General Commands')
            .setDescription([
                "`meme`- Shows a meme",
                "`support`- Show you a discord link to Legend World Support Server",
                "`invite`- Allows you to add me to your server"
            ].join('\n\n'))
            .setColor('RANDOM')
            .setFooter('Made by SeekNExpose#4157 | Helper - Meliodaf#1900')
            .setThumbnail('https://cdn.discordapp.com/attachments/729902925307969612/737184187496529980/Screenshot_195.png');
            message.channel.send(general);

        const minigames = new Discord.MessageEmbed()
            .setTitle('Minigames Commands')
            .setDescription([
                "`rps challenge`- A rock, paper, scissors command. Example /rps challenge (user)",
                "`8ball`- Example /8ball Am I Cool?"
            ].join('\n\n'))
            .setColor('RANDOM')
            .setFooter('Made by SeekNExpose#4157 | Helper - Meliodaf#1900')
            .setThumbnail('https://cdn.discordapp.com/attachments/729902925307969612/737184187496529980/Screenshot_195.png');
            message.channel.send(minigames);

        const moderator = new Discord.MessageEmbed()
            .setTitle('Moderator Commands')
            .setDescription([
                "`rrole`- Remove role command. Example - /rrole (user) (role)",
                "`grole`- Give role command. Example - /grole (user) (role)"
            ].join('\n\n'))
            .setColor('RANDOM')
            .setFooter('Made by SeekNExpose#4157 | Helper - Meliodaf#1900')
            .setThumbnail('https://cdn.discordapp.com/attachments/729902925307969612/737184187496529980/Screenshot_195.png');
            message.channel.send(moderator)
            
    }
}
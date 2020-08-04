const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
module.exports = {
	name: 'meme',
	async execute(client, message, args) {
        const subReddits = ["dankmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random);
        const memeembed = new Discord.MessageEmbed()
        memeembed.setColor('RANDOM')
        memeembed.setImage(img)
        memeembed.setTitle(`Legend World Memes`)
        memeembed.setFooter('Made by SeekNExpose#4157 | Helper - Meliodaf#1900')
        memeembed.setURL(`https://reddit.com/r/${random}`);
        message.channel.send(memeembed);
    }
}
console.log('Beep beep 🦾 ')

const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

client.on('ready', () => {
    console.log('💙');
});

const replies = [
    "The Force will be with you. Always. ✨ ",
    "“I find your lack of faith disturbing. 🤖 ",
    "Now, young Skywalker, you will die. ⚡️ ", 
    "It's no use Anakin I have the high ground 🏔"
]

client.on('message', msg => {
    console.log(msg.content);
    if( msg.channel.id == '802931490019082300' && msg.content === 'Force') {
        const index = Math.floor(Math.random() * replies.length);
        msg.channel.send(replies[index]);
    }
});


client.login(process.env.BOT_TOKEN);
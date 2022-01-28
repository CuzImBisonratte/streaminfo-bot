const tmi = require('tmi.js');
const fs = require('fs');
const config = require('./config.json');

const client = new tmi.Client({
    // options: { debug: true },
    // identity: {
    //     username: config.bot_name,
    //     password: config.bot_oauth
    // },
    channels: ["CuzImBisonratte"]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    if (self) return;
    if (tags.mod || tags.badges.broadcaster) {
        if (message.startsWith('!title')) {
            const title = message.substring(7);
            // Check if the title is longer than 19 characters
            if (title.length > 18) {} else {

                // Write to file ./results/title.txt and create file if it doesn't exist
                fs.writeFile('./results/title.txt', title, (err) => {
                    if (err) throw err;
                    console.log('Title written to file');
                });
            }
        }
        if (message.startsWith('!game')) {
            const game = message.substring(6);
            if (game.length > 15) {} else {
                // Write to file ./results/game.txt and create file if it doesn't exist
                fs.writeFile('./results/game.txt', game, (err) => {
                    if (err) throw err;
                    console.log('Title written to file');
                });
            }
        }
    }
});

client.on("connected", (address, port) => {
    console.log(`* Connected to ${address}:${port}`);
});
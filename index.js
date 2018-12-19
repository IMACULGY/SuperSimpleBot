/**
 * A ping-pong bot, whenever you send "!ping", it replies "pong!".
 */

// Import the discord.js module
const Discord = require("discord.js");
// Create an instance of a Discord client
const client = new Discord.Client();
const config = require("./config.json");
 
/**
 * The ready event is vital, it means that only _after_ this will your bot
 * start reacting to information received from Discord
 */
client.on("ready", () => {
    console.log("I am ready!");
});
 
// Create an event listener for messages
client.on("message", (message) => {
    // Ignore the message if the author of the message is another bot.
    if(message.author.bot) return;

    // Ignore the message if the message does not start with the specified prefix.
    if(message.content.indexOf(config.prefix) != 0) return;
    
    /**
     * Here we separate our "command" name, and our "arguments" for the command. 
     * e.g. if we have the message "+say Is this the real life?" , we'll get the following:
     * command = say
     * args = ["Is", "this", "the", "real", "life?"]
    */
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // If the command is "ping", send "pong!" to the same channel or DM.
    if (command === "ping") {
        message.channel.send("pong!");
    }
});
 
// Log the bot in using the token from https://discordapp.com/developers/applications/me
client.login(config.token);
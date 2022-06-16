const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", async () => {
    const data = [{
        name: "ping",
        description: "Replies with Pong!",
    }];
    await client.application.commands.set(data, '809801148721528904');
    console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) {
        return;
    }
    if (interaction.commandName === 'ping') {
        await interaction.reply({ content: 'Pong!', ephemeral: true });
    }
});

client.login(process.env.DISCORD_TOKEN);
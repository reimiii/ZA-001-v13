const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "websocket ping",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({ content: `Ping lo **${client.ws.ping}**ms` });
    },
};

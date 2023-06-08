const ow = require('overwatch-stats-api');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ow')
		.setDescription('Overwatch stuff'),
	async execute(interaction) {
        const stats = await ow.getAllStats('Manatee-11305', 'pc');
        console.log(stats)
		await interaction.reply(stats);
	},
};
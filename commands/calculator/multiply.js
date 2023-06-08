const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('multiply')
		.setDescription('Multiply two numbers. ')
        .addIntegerOption(option => option.setName('number1')
            .setDescription('First number')
            .setRequired(true))
        .addIntegerOption(option => option.setName('number2')
            .setDescription('Second number')
            .setRequired(true)),
	async execute(interaction) {
        const num1 = interaction.options.getInteger('number1') ?? 'No reason provided';
        const num2 = interaction.options.getInteger('number2') ?? 'No reason provided';
        const result = (num1*num2).toLocaleString(undefined, { minimumFractionDigits: 2 });
		await interaction.reply(`
            ${num1.toLocaleString(undefined, { minimumFractionDigits: 2 })} * ${num2.toLocaleString(undefined, { minimumFractionDigits: 2 })} = ${result}`
        );
	},
};
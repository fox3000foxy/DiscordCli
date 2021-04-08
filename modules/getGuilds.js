let { Guilds } = require('./variables').variables

function getGuilds(client, choices) {
	choices = [], Guilds = client.guilds.cache.map(guild => guild.id)
	for (i = 0; i < Guilds.length; i++) {
		Guild = client.guilds.cache.get(Guilds[i]).name
		choices.push(Guild)
	}
	return { choices, Guild, Guilds }
}

exports.getGuilds = getGuilds
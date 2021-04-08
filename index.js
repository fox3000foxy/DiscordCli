require('console-png').attachTo(console);
const { chalk, rl, fs } = require('./modules/requires').node_modules
let { image, getGuilds, getMessages, renderChoices, getChannels } = require('./modules').modules
let { choices, Guild, ChannelsId, selectCursor, mode, selected } = require('./modules/variables').variables
const { client } = require('./modules/constants').constants
let token;
fs.readFile('secrets.json', (e, data) => {
	return token = JSON.parse(data).token;
})
setTimeout(() => {
	client.login(token)
}, 500)
//console.clear()
process.on('unhandledRejection', (error, promise) => { console.log("Invalid token... Please check your 'secrets.json' file !") });
console.log("Connexion... Please wait...")
client.on('ready', () => { console.clear(); process.title = "Logged as " + client.user.username + "#" + client.user.discriminator; getState(mode); renderChoices(mode, choices, selected, ChannelsId); });
//client.on('ready', () => { console.log(client) });
client.on('message', message => { if (message.channel == channelOfMessage) getMessages(Guild, ChannelsId, selectCursor[1]) })
rl.on('line', (message) => {
	if (mode == 2) {
		if (message == '') return
		if (message.startsWith('#http')) {
			image(message); return;
		};
		channelOfMessage.send(message)
	}
})
rl.on('close', () => { console.clear(); process.exit(0) })

process.stdin.on('keypress', eventHandler);

function eventHandler(s, key) {
	if (key.name === "up" && (selected - 1) >= 0 && mode < 2) { selected--; }
	else if (key.name === "down" && (selected + 1) < choices.length && mode < 2) { selected++; }
	else if (key.name === "left") { if (mode <= 0) process.exit(0); mode = 0; getState(mode); selected = selectCursor[0] }
	else if (key.name === "right") { selectCursor[mode] = selected; if (mode >= 2) return; mode += 1; getState(mode); selected = selectCursor[mode]; selectCursor[2] = selectCursor[1] }
	else return; /*don't render if nothing changed*/
	console.clear();
	renderChoices(mode, choices, selected, Guild.name, ChannelsId);
}
let template, guildSelected, channelSelected
function getState(mode) {
	if (mode == 0) { choices = getGuilds(client).choices; Guild = getGuilds(client).Guild; Guilds = getGuilds(client).Guilds }
	if (mode == 1) { guildSelected; choices = getChannels(client, choices, Guilds[selected]).choices; Guild = getChannels(client, choices, Guilds[selected]).Guild; ChannelsId = getChannels(client, choices, Guilds[selected]).ChannelsId; }
	if (mode == 2) { guildSelected + channelSelected; let getmessage = getMessages(Guild, ChannelsId, selected); channelOfMessage = getmessage.channel; theChannelName = getmessage.theChannelName }
	if (mode == 0) { template = "Logged as " + client.user.username + "#" + client.user.discriminator }
	if (mode == 1) { guildSelected = ": " + Guild.name }
	if (mode == 2) { channelSelected = "#" + theChannelName }
	if (mode == 0) { process.title = template }
	if (mode == 1) { process.title = template + guildSelected }
	if (mode == 2) { process.title = template + guildSelected + channelSelected }
}

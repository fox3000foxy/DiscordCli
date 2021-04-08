const image = require('./image').image,
    getGuilds = require('./getGuilds').getGuilds,
    getMessages = require('./getMessages').getMessages,
    renderChoices = require('./renderChoices').renderChoices,
    getChannels = require('./getChannel').getChannels,
    modules = { image, getGuilds, getMessages, renderChoices, getChannels }
exports.modules = modules
const http = require('http'),
    https = require('https'),
    sharp = require('sharp'),
    fs = require('fs'),
    readline = require('readline'),
    charm = require('charm')(process.stdout),
    rl = readline.createInterface(process.stdin, process.stdout),
    chalk = require('chalk'),
    Client = new require('discord.js').Client,
    jimp = require('jimp'),
    node_modules = { http, https, sharp, fs, charm, rl, chalk, Client, jimp }

exports.node_modules = node_modules;



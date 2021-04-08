const { http, https, sharp, fs, jimp } = require('./requires').node_modules

function print(fileName) {
    jimp.read("temp/file.jpg", function (err, image) {
        if (err) {
            console.log(err)
        }
        else {
            image.write("temp/" + fileName + ".png")
            setTimeout(() => {
                sharp('temp/' + fileName + '.png')
                    .rotate(0)
                    .resize(128)
                    .toBuffer()
                    .then(data => {
                        fs.writeFileSync('temp/' + fileName + '1.png', data);
                        console.clear()
                        console.png(fs.readFileSync('temp/' + fileName + '1.png'))
                        fs.unlink("temp/file.jpg", (e) => { })
                        fs.unlink("temp/" + fileName + ".png", (e) => { })
                        fs.unlink("temp/" + fileName + "1.png", (e) => { })
                    })
            }, 1500)
        }
    })
}

function image(message) {
    file = fs.createWriteStream("temp/file.jpg");
    if (message.indexOf("http://") != -1) { http.get(message.split("#")[1], function (response) { response.pipe(file) }); }
    if (message.indexOf("https://") != -1) { https.get(message.split("#")[1], function (response) { response.pipe(file) }); }
    console.log("Wait launching of image : 3.5 seconds...")
    setTimeout(() => { print(message.split('/')[message.split('/').length - 1]) }, 5000)
}
exports.image = image
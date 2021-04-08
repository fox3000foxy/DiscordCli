const { charm } = require('./requires').node_modules

function renderChoices(mode, choices, selected, name) {
    charm.foreground("white");
    if (!mode) mode = 0
    /*
        charm.write("\n\n\n\n\n\n\n\n\n\n\n\n\n")
        decal = "\t\t\t\t\t"
     */
    decal = ""
    if (mode == 0) { charm.write(decal + "Select a guild:\n") }
    else if (mode == 1) { charm.write(decal + "Select channel of " + name + ":\n") }
    else if (mode == 2) { console.log(decal + "Please wait 2 seconds...") }//;setTimeout(()=>console.clear(),1950)}
    if (mode != 2) {
        choices.forEach(function (choice, i) {
            if (i === selected)
                charm.write(decal + " | > " + choice + "\r\n");
            else
                charm.write(decal + " |   " + choice + "\r\n");
        });
    }
}

exports.renderChoices = renderChoices
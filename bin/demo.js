#!/usr/bin/env node

const path = require('path')
const fs = require('fs')
// Delete the 0 and 1 argument (node and script.js)
var args = process.argv.splice(2);
console.log(args);
var opp = args[0]
if (opp == "g") {
    var switchType = args[1]
    var source = process.cwd() + "\\src\\app"
    var dist = "src/app/" + args[2]
    var nameArray = args[2].split("/")
    var name = nameArray[nameArray.length - 1]
    switch (switchType) {
        case "c":
            const component = require('../lib/component')
            component.generate(name, dist)
            break;
        case "m":
            const module = require('../lib/module')
            module.generate(name, dist)
            break
        case "s":
            const service = require('../lib/service')
            service.generate(name, dist)
            break
        case "f":
            const factory = require('../lib/factory')
            factory.generate(name, dist)
            break

        default:
            break;
    }
} else if (opp == "new") {
    var name = args[1];
    const source = require('../lib/source')
    source.generate(name)
}
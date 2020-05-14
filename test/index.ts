import Jasmine from "jasmine";

declare global {
    var L: typeof console.log;
    var E: typeof console.error;
}

///@ts-ignore
global.L = console.log
///@ts-ignore
global.E = console.error

var jasmine = new Jasmine({});
jasmine.loadConfigFile("jasmine.json")
jasmine.execute()

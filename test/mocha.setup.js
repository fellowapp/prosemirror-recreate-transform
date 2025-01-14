import jsdom from "jsdom";

// So we can get `requestAnimationFrame`
const dom = new jsdom.JSDOM("", { pretendToBeVisual: true });

// Fill in the globals Mithril needs to operate. Also, the first two are often useful to have just in tests.
global.window = dom.window;
global.navigator = dom.window.navigator;
global.document = dom.window.document;
global.requestAnimationFrame = dom.window.requestAnimationFrame;

global.innerWidth = global.window.innerWidth; //860;
global.innerHeight = global.window.innerHeight; //960;

// Require Mithril to make sure it loads properly.
// require("mithril");

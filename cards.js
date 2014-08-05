var tpl = require("./card.ejs");
var styles = require("./card.styl");
var insertCSS = require("insert-css");
var insertStylesheet = require('insert-stylesheet');

insertStylesheet('//fonts.googleapis.com/css?family=Francois+One');
insertCSS(styles);

module.exports = function createCard(front, back) {
    var ctx = {
        front: front,
        back: back
    };
    var html = tpl(ctx);
    return html;
};

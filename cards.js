var tpl = require("./card.ejs");
var styles = require("./card.styl");
var insertCSS = require("insert-css");
var insertStylesheet = require('insert-stylesheet');

insertStylesheet('//fonts.googleapis.com/css?family=Francois+One');
insertStylesheet('//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css');
insertCSS(styles);

module.exports = function createCard(front, back, options) {
    options = options || {};
    var category = options.category || 'no_category';
    var memo_level = options.memo_level || 0;
    var ctx = {
        front: front,
        back: back,
        memo_level: memo_level,
        wiki_href: options.wiki_href
    };
    
    var html = tpl(ctx);
    var cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.classList.add(category);
    cardElement.innerHTML = html;

    return cardElement;
};

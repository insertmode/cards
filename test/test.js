var test = require('prova');

var createCard = require('../cards');
var front = require('../front.ejs')();
var back = require('../back.ejs')();

test('can create a card', function(assert) {
    assert.plan(2);
    var cardElement = createCard(front, back);
    document.body.innerHTML = '';
    assert.ok(cardElement);
    document.body.appendChild(cardElement);
    
    cardElement = createCard(front, back);
    assert.ok(cardElement);
    document.body.appendChild(cardElement);
    document.getElementsByClassName('card')[1].classList.add('flip');
});

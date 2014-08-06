var test = require('prova');

var createCard = require('../cards');
var front = require('../front.ejs')();

test('can create a card', function(assert) {
    assert.plan(1);
    html=createCard(front, 'back');
    document.body.innerHTML = html + html;
    document.getElementsByClassName('card')[1].classList.add('flip');
    assert.ok(html);
});

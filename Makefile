BIN := $(shell npm bin)

build/cards.js: cards.js card.styl card.ejs
	mkdir -p build
	$(BIN)/browserify cards.js > build/cards.js 

test:
	node test/test.js -b
.PHONY :  test

clean:
	rm -rf build
.PHONY : clean

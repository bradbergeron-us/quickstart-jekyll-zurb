all: compile


compile:
	bundle exec jekyll build


distclean:
	git clean -dfxq


setup:
	npm install -g bower

	bower install
	bundle install


server:
	bundle exec jekyll serve --watch


.PHONY: all compile distclean setup server

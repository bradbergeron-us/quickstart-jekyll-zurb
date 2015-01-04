all: compile


clean:
	rm -rf _site


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


.PHONY: all clean compile distclean setup server

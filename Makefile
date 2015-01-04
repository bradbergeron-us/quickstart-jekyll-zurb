all: compile


clean:
	rm -rf _site


compile:
	bundle exec jekyll build


setup:
	npm install -g bower

	bower install
	bundle install


server:
	bundle exec jekyll serve --watch


.PHONY: all clean compile setup server

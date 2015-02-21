all: jekyll sass


clean:
	rm -rf _site


jekyll:
	bundle exec jekyll build


sass:
	mkdir -p _site/asset
	sassc -I _vendor/foundation/scss asset/app.scss _site/asset/app.css


setup:
	bower install
	bundle install


server:
	bundle exec foreman start


.PHONY: *

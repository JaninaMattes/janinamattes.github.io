default: install

h help:
	@egrep '^\S|^$$' Makefile

install-js:
	npm install

install-gems:
	bundle config set --local path vendor/bundle
	bundle install

install: install-js install-gems

serve:
	bundle exec jekyll serve --trace --livereload

build:
	JEKYLL_ENV=production bundle exec jekyll build --trace
# Jekyll + ZURB Foundation 5 Quickstart

[![Build Status](http://img.shields.io/travis/lvillani/quickstart-jekyll-zurb.svg?style=flat)](https://travis-ci.org/lvillani/quickstart-jekyll-zurb)
[![License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](http://choosealicense.com/licenses/mit/)

--------------------------------------------------------------------------------

A template project to quickly start a new project based on ZURB Foundation and the Jekyll static
site generator.

Unlike other projects (such as Octopress), this is a minimal skeleton repository upon which you
can build your project. You _have_ to understand all the moving parts and how they are configured.

This project is meant to be deployed on GitHub Pages, no Grunt or Gulp involved (though you are free
to use them).


## What's Inside

- Jekyll 2
- SASS 3
- ZURB Foundation 5 + Foundation JS plugins
- Barebones page template
- Sensible Jekyll defaults
- Site-wide Atom feed for all blog posts
- Integration with GitHub Pages Jekyll plugins


## Getting Started

Clone this repository and perform the automated setup procedure:

    git clone git://github.com/lvillani/quickstart-jekyll-zurb.git my-site
    cd my-site
    make setup

At this point you can start the development server by running:

    make server


## Directory & File Layout

    .
    ├── asset/         -- Static assets (e.g.: images, CSS files)
    ├── _layouts/      -- Jekyll Layouts
    ├── _posts/        -- Blog posts
    ├── _site/         -- Output directory for generated content
    ├── _config.yml    -- Jekyll Configuration file
    ├── Gemfile        -- Ruby Bundler configuration file
    ├── Guardfile      -- Guard configuration file (used to make LiveReload work)
    ├── bower.json     -- Bower dependencies
    ├── .bowerrc       -- Bower configuration file
    ├── Gemfile.lock   -- Ruby Bundler configuration file
    ├── Makefile       -- Top level Makefile
    └── robots.txt     -- Directives for web crawlers

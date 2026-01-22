# Testing website locally
1. Install Homebrew: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
1. Install rbenv: `brew install rbenv ruby-build`
1. Install Ruby 3.4+: `rbenv install 3.4.8; rbenv global 3.4.8; ruby -v`
1. Install bundler: `gem install bundler --user-install`
1. Install deps: `bundle install`
1. To preview site: `bundle exec jekyll serve`

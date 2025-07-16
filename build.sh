#!/bin/bash
mkdir -p public/build
handlebars -m public/src/components/home.hbs -f public/build/home.js
handlebars -m public/src/components/posts.hbs -f public/build/posts.js
handlebars -m public/src/components/settings.hbs -f public/build/settings.js

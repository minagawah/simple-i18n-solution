PUBLIC_URL = /

# Prettier

prettier.server:
	cd server && npm run prettier

prettier: prettier.server

# Watch: Server + Client

clean.css:
	rm -fR server/public/css/*

build.css: clean.css
	cd server && npm run build:css

watch.server:
	cd server && npm run watch

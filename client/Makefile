help:
# http://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

PYTHON := .venv/bin/python
PIP := .venv/bin/pip
PACKAGE := fretboard
LIST_TARGETS := $(PACKAGE) tests

# install scripts

install:  ## install dependencies
	if [ ! -d "node_modules" ]; then \
  		npm install; \
	fi

	if [ ! -f ".env" ]; then \
  		cp sample.env .env; \
  	fi

# Application

run-client:
	npm run start

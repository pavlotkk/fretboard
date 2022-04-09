help:
# http://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

PYTHON := .venv/bin/python
PIP := .venv/bin/pip
PACKAGE := fretboard
LIST_TARGETS := $(PACKAGE) tests

# install scripts

install-env:
	if [ ! -d ".venv" ]; then \
  		python -m venv .venv; \
		$(PYTHON) -m pip install --upgrade pip; \
	fi

	if [ ! -f ".env"]; then \
  		cp sample.env .env; \
  	fi

install: install-env  ## install dependencies
	$(PIP) install -r requirements.txt
	$(PIP) install -r requirements-app.txt
	$(PIP) install -r requirements-api.txt

install-dev: install-env  ## install dev dependencies
	$(PIP) install -r requirements-dev.txt

# linters

black: install-env  ## Run black linter with fixing mode
	$(PYTHON) -m black $(LIST_TARGETS)

flake8: install-env  ## Run flake8 linter
	$(PYTHON) -m flake8 $(LIST_TARGETS)

isort: install-env  ## Run isort linter with fixing mode
	$(PYTHON) -m isort $(LIST_TARGETS)

lint: black isort flake8  ## Run all linters


# CI test scripts

test-black: install-env ## Report the black code linting warnings
	$(PYTHON) -m black --check --diff $(LIST_TARGETS)

test-flake8: install-env ## Report the flake8 code lint checker warnings
	$(PYTHON) -m flake8 $(LIST_TARGETS)

test-isort: install-env ## Report the isort checker warnings
	$(PYTHON) -m isort $(LIST_TARGETS) -c

test-lint: test-black test-isort test-flake8 ## Report all linting warnings

test-pytest:
	$(PYTHON) -m pytest


# Application

run:
	$(PYTHON) -m $(PACKAGE)

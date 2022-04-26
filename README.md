[![Api](https://github.com/tpagit/fretboard/actions/workflows/api.yml/badge.svg?branch=main)](https://github.com/tpagit/fretboard/actions/workflows/api.yml)
[![Frontend](https://github.com/tpagit/fretboard/actions/workflows/frontend.yml/badge.svg?branch=main)](https://github.com/tpagit/fretboard/actions/workflows/frontend.yml)

# fretboard
Fun project for learning music theory with python.

![](docs/example-fretboard.png)
![](docs/example-theory-scales.png)
![](docs/example-learn-scales.png)

## Features:

1. Show selected notes on fretboard
2. Build a scale from an any note:
   * Major
   * Minor
   * Harmonic minor
   * Ascending and descending melodic minor
3. Practice learning scale notes

## Tech stack:
1. [Python 3.9](https://www.python.org/)
2. [Node 17.8.0](https://nodejs.org/en/)
3. [React](https://reactjs.org/) for Browser GUI
4. [SCSS](https://sass-lang.com/guide)
5. [FastAPI](https://fastapi.tiangolo.com) for REST API
6. [PyCharm](https://www.jetbrains.com/pycharm/) as IDE
7. [Docker](https://www.docker.com/) for containerization

Additionally:
* [Prettier](https://www.jetbrains.com/help/idea/prettier.html#prettier_before_you_start) plugin for PyCharm

## Development

### API server
1. Call `make install` to prepare dev environment. Use `make install-dev` for install dependencies (pytest, black, etc)
2. Run `make run-api` to start app

### Client
0. `cd client`
1. Call `make install` to prepare dev environment
2. `make run-client` to start app

## Production

Call `make spin-up` to start all in Docker in production mode

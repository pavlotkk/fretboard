FROM node:17-alpine as fe

ENV NODE_ENV=production

WORKDIR /app

COPY ["client/package.json", "client/package-lock.json", "client/tsconfig.json", "./"]

RUN npm install --save-prod

COPY client/ .
COPY client/prod.env ./.env

RUN npm run build

FROM python:3.9-alpine

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY --from=fe /app/build ./client/build
COPY ./fretboard ./fretboard
COPY prod.env .env

EXPOSE 5000

CMD ["python3", "-m", "fretboard.api"]
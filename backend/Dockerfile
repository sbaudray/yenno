FROM node:22-alpine

WORKDIR /usr/local/app

COPY package.json package-lock.json ./
RUN --mount=type=cache,id=npm,target=/usr/local/share/.cache/npm \
    npm ci

COPY src ./src

ENV HOST=0.0.0.0

CMD ["npm", "run", "dev"]

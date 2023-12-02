FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install
# Instalar Quasar CLI globalmente
RUN npm install -g @quasar/cli

COPY . .

RUN quasar build

EXPOSE 8080

CMD ["quasar", "dev"]


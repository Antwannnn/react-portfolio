# Utilisez l'image officielle de Node.js comme base
FROM node:21-alpine3.20

# Définissez le répertoire de travail
WORKDIR /app

# Copiez le package.json et le package-lock.json
COPY package.json .
COPY package-lock.json .

# Installez les dépendances
RUN npm install

# Copiez le reste de l'application
COPY . .

# Construisez l'application Next.js
RUN npm run build

# Exposez le port sur lequel l'application sera accessible
EXPOSE 3000

# Démarrez l'application
CMD ["npm", "run", "dev"]

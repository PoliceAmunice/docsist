FROM node:16.13.1

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Provide source code
COPY . .

EXPOSE ${PORT}

# Run webpack server
CMD yarn serve
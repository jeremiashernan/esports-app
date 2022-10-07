# PUBG Esports

## Minimum Requirements

- Node: 12.0 or later
- Yarn: 1.22 or later

## Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
1. Build your container:
   ```bash
   docker build -t pubg-esports .
   ```
1. Run your container:
   ```bash
   docker run -p 3000:3000 pubg-esports
   ```

You can view your images created with `docker images`.

## Running Locally

First, run the development server:

```bash
yarn dev
```

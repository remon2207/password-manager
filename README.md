# Usage

If development in the this project Please Use Docker Compose.

## frontend

### STEP 1

Execute the following command.

```bash
cp frontend/.env.local.example frontend/.env.local
```

### STEP 2

Enter environment variables in `.env.local` file.

### STEP 3

Execute the following command.

```bash
docker compose run --rm nextjs npm i
```

## backend

Execute the following command.

```bash
cp backend/.env.example backend/.env
```

### STEP 2

Enter environment variables in `.env` file.


### STEP 3

Execute the following command.

```bash
docker compose run --rm api npm run dev:build
```

## common

Last start the server by executing the following command.

```bash
docker compose up -d
```

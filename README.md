
## Create migrations

```
pnpm run typeorm migration:generate ./src/migrations/ -d ./src/typeorm.ts
```

## Run migrations

```
pnpm run build
pnpm run typeorm migration:run -d ./src/typeorm.ts
```
# Cloudflare Pages

Репозиторий уже подготовлен для публикации через GitHub.

## Настройки проекта

- Repository: `tsudmakerai/BumpMesh`
- Production branch: `cloudflare-pages`
- Framework preset: `None`
- Build command: оставить пустым
- Build output directory: `.`
- Root directory: оставить пустым

## Подключение

1. Cloudflare Dashboard → Workers & Pages → Create application → Pages → Connect to Git.
2. Выбрать `tsudmakerai/BumpMesh`.
3. Указать настройки выше.
4. Нажать Save and Deploy.

После первого деплоя Cloudflare выдаст адрес вида `https://bumpmesh.pages.dev`. Все последующие коммиты в ветку `cloudflare-pages` будут публиковаться автоматически.

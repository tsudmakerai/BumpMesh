# Cloudflare Pages

## Настройки проекта

- Repository: `tsudmakerai/BumpMesh`
- Production branch: `cloudflare-pages`
- Framework preset: `None`
- Build command: `node build.js`
- Build output directory: `dist`
- Root directory: оставить пустым
- Node.js: 20 или новее

Cloudflare собирает обычный `dist/index.html`. Браузеру больше не нужны `DecompressionStream`, загрузка частей или распаковка приложения — это повышает совместимость с Android-планшетами и встроенным браузером Notion.

После изменения настроек запустите Retry deployment или Create deployment.

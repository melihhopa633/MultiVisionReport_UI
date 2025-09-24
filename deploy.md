# Docker Deploy

## Çalıştırma

```bash
docker-compose up -d
```

Uygulama http://localhost adresinde çalışır.

## Durdurma

```bash
docker-compose down
```

## Logları görme

```bash
docker-compose logs -f
```

## Yeniden build

```bash
docker-compose build --no-cache
docker-compose up -d
```

Bu kadar!
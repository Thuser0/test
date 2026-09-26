# DevTools Security Redirect

Тестовое задание: при открытых DevTools страница `2.html` через `security.js` перенаправляет на `main.html`.

## Как запустить

```bash
npm start
```

Откройте [http://127.0.0.1:43123/main.html](http://127.0.0.1:43123/main.html).

## Сценарий проверки

1. Откройте `main.html`.
2. Откройте DevTools (F12).
3. Перейдите по ссылке на `2.html`.
4. `security.js` обнаруживает DevTools и делает редирект на `main.html`.

## Файлы

| Файл | Назначение |
|------|------------|
| `main.html` | Стартовая страница со ссылкой на `2.html` |
| `2.html` | Защищённая страница, подключает `security.js` |
| `security.js` | Детекция DevTools и редирект |

Детекция: разница `outerWidth/innerWidth` и `outerHeight/innerHeight` (пристыкованные DevTools).
При превышении порога выполняется `location.replace('main.html')`.

# Frappe Client App — Тестовое задание для ББР Банк

## 📌 Описание

Проект выполнен в рамках тестового задания для **ББР Банка**.  
Основная задача — разработать простое веб-приложение на базе **Frappe Framework** с интеграцией **Dadata API** для автозаполнения данных клиента по ИНН и наименованию.

---

## ✅ Функциональность

1. **Doctype "Client"** с полями:
   - Наименование (`name1`)
   - ИНН (`inn`)
   - КПП (`kpp`)
   - Адрес (`address`)

2. **Интеграция с Dadata (Suggestions API)**:
   - Подсказки при вводе наименования или ИНН
   - Автозаполнение полей: Наименование, ИНН, КПП

3. **Получение адреса по ИНН**:
   - Серверный метод на Python (`get_address_by_inn`)
   - Кнопка **«Получить адрес»** на форме клиента
   - При нажатии:
     - Выполняется запрос к Dadata
     - Адрес подставляется в поле `address`
     - Отображается сообщение об успешности

---

## 🔐 Конфиденциальные данные

### API ключ Dadata

Ключ для доступа к API Dadata хранится **вне репозитория**, чтобы избежать утечек:

* **Backend ключ** хранится в:

  ```
  sites/clients.local/site_config.json
  ```

  ```json
  {
    "dadata_api_key": "ваш_секретный_токен"
  }
  ```

* **Frontend ключ** хранится в `.secrets.js` (игнорируется Git):

  ```js
  window.DADATA_TOKEN = 'ваш_секретный_токен';
  ```

  И подключается в HTML перед `client.js`.

---

## 📎 Зависимости

* [Frappe Framework](https://frappeframework.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [Dadata Suggestions API](https://dadata.ru/suggestions/)
* [jQuery Suggestions Plugin (CDN)](https://cdn.jsdelivr.net/npm/suggestions-jquery/)

---

## 🧪 Скриншоты



---

## 👤 Автор

Лакеева Ольга Александровна 
Тестовое задание для ББР Банк, 2025

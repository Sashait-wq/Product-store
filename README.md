# Product Store

## Опис проєкту

**Product Store** — це Angular-додаток для роботи з даними товарів, що отримуються з публічного API [DummyJSON](https://dummyjson.com/products).  
Додаток реалізує повний цикл роботи з даними: отримання, обробку, збереження у стані через NgRx Store та відображення у компонентному інтерфейсі.

---

## Основні можливості

- Отримання даних з API через ApiService (HTTP-запити до DummyJSON).
- Обробка бізнес-логіки через ProductService — шар між компонентами та API.
- Збереження стану у глобальному NgRx Store для оптимізації запитів і реактивності.
- Відображення товарів у вигляді карток через ProductCardComponent.
- Фільтрація та пошук товарів через ProductFiltersComponent і SearchBarComponent.
- Детальний перегляд товару на окремій сторінці (ProductDetailsPageComponent).
- Скелетон-завантаження (через ngx-skeleton-loader) під час очікування даних.
- Реактивні потоки — усі дані підписуються через Observable без ручного оновлення стану.

---

## Технології

- **Angular 20**
- **RxJS**
- **NgRx Store / Effects / Selectors**
- **ngx-skeleton-loader**
- **TypeScript**
- **HTML / SCSS**

---

## Структура проєкту

```
src/
 └── app/
      ├── core/
      │    ├── model/
      │    │    └── product.model.ts
      │    └── services/
      │         └── api.service.ts
      │
      ├── features/products/
      │    ├── components/
      │    │    ├── product-card/
      │    │    ├── product-filters/
      │    │    ├── product-list/
      │    │    └── search-bar/
      │    ├── pages/
      │    │    ├── product-details-page/
      │    │    └── products-page/
      │    └── services/
      │         └── product.service.ts
      │
      ├── store/
      │    ├── product.action.ts
      │    ├── products.reducer.ts
      │    ├── products.effects.ts
      │    └── products.selectors.ts
      │
      └── app.component.html
```

---

## Додаткові пакети

| Пакет                  | Призначення                                        |
| ---------------------- | -------------------------------------------------- |
| `@ngrx/store`          | Управління станом додатку                          |
| `@ngrx/effects`        | Реакція на асинхронні події (HTTP-запити)          |
| `@ngrx/store-devtools` | Інструменти розробника для дебагу                  |
| `ngx-skeleton-loader`  | Відображення скелетонів під час завантаження даних |

---

## 👨‍💻 Автор

**Sasha** — Frontend Developer (Angular, TypeScript, RxJS, NgRx)

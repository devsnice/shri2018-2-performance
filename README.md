**Что сделал:**

* удалил неиспользующийся js-код
* удалил бутстрап, стили для корректного отображения перенес в стили проекта
* удалил комментарии из html, сам html не прогонял через минимизацию
* удалил react.js, блок, который он рендерил, перенес в html руками
* удалил banner.js, вставил баннер в html
* шрифты перенёс на cdn, чтобы уменьшить количество запросов к одному хосту, шрифты загружаются из html, чтобы уменьшить request-chain
* оптимизировал favicon, сжал png, которая используется внутри, собрал заново из трёх картинок 16x16, 32x32, 64x64
* добавил gulp для минификации итоговых .css и .js файлов
* добавил адаптивные изображения для баннера
* сжал изображения, использовал webp вместо png/jpg
* изображения для баннера сделал адаптивным, чтобы загружалась разная картинка в зависимости от экрана
* итоговый css и js заинлайнил в html, чтобы первая отрисовка произошла быстрее
* добавил font-display: swap, чтобы не было эффекта невидимого шрифта, который определен браузером по умолчанию

**Итог:**

451 попугай 

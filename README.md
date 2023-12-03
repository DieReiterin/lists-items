# Pet #7
#  Cписок (Lists) с вложенными списками (Items)


## Версия node.js: v18.15.0

## Версия npm: 9.6.2


## Демо: https://lists-items.vercel.app/


<img width="800" alt="lists-items" src="https://github.com/DieReiterin/lists-items/blob/main/src/assets/lists-items.png">




## Локальный запуск
#### `npm run serve`
#### `http://localhost:8080/`

____________________________________________________

# Тестовая задача
 
Левая панель имеет список Lists с вложенными списками неких items. 
У каждого item есть параметры "количество"" и "цвет", которые можно менять вручную. 
Item помечается как выбранный с помощью чекбокса.
 
Все выбранные items отображаются на правой панели в отдельном блоке для каждого List в указанном количестве в виде цветных квадратиков.
 
Каждый отдельный блок List имеет два состояния: отсортированное и перемешанное в случайном порядке.
 
Входные данные: 5 листов от 4 до 10 вложенных элементов (произвольно)
Макеты для примера смотри на второй странице.
 
## Требования
•	При клике на чекбокс уровня List должны выбираться все вложенные items. Если все вложенные items уже выбраны, то снимать с них выделение. Если выбран хотя бы один item, но не все, то отображать точку в чекбоксе родительского List'a.
•	Должна быть возможность изменять параметр "количество" у items (обычного input достаточно, значение должно быть >= 0);
•	Должна быть возможность изменять параметр "цвет" у items (input type="color");
•	Сортировка и перемешивание List'ов по отдельности;
•	Все действия на странице должны происходить без её перезагрузки;
•	Все изменяемые значения должны быть реактивными;
•	У каждого item изначально должны быть указаны параметры "количество"" и "цвет" по умолчанию (задать произвольно).
 
## Дополнительно
•	Lists в левой панели должны сворачиваться и разворачиваться;
•	При клике на квадратик в правой панели он должен удаляться (уменьшаться параметр "количество" у соответствующего item).
## Требования по коду
•	Задание выполнить с использованием vue.js (vuex, pinia если необходимо), можно использовать css препроцессоры;
•	Код должен быть написан понятно и аккуратно, с соблюдением табуляции и прочих элементов написания, без лишних элементов и функций, не имеющих отношения к функционалу тестового задания;
•	Читабельность и наличие элементарной архитектуры;
•	Верстка должна быть выполнена без использования UI библиотек.

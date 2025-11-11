// Перетворюємо кількість хвилин у сприйнятливий формат
function convertMinutesToHours (minutes) {
    let learningDurationInHours = Math.floor(minutes / 60); // Обраховуємо кількість годин
    let learningDurationInMinutes = minutes % 60; // Обраховуємо кількість хвилин
    return `${learningDurationInHours} годин та ${learningDurationInMinutes} хвилин.`;
}
// Сортуємо курси за тривалістю
function sortCoursesByDuration (courses) {
    courses.sort((courseA, courseB) => {
        let durationA = courseA[7];
        let durationB = courseB[7];

        return durationA - durationB;
    })
    return courses;
}
// Знаходження середньої кількості користувачів, що цікавляться курсами
function getAverageViews(courses) {
    let sum = 0;
    let fieldsCount = 0;
    courses.forEach(course => {
        sum += course[5] + course[6];
        fieldsCount += 2;
    });
    let avgUsers = sum / fieldsCount;
    return avgUsers;
    
}
// Знаходимо курс з мінімальною кількістю користувачів за другу добу
function findMinViewsDay2Id(courses) {
    courses.sort((courseA, courseB) => {
        let secondDayUsersA = courseA[6];
        let secondDayUsersB = courseB[6];
        return secondDayUsersA - secondDayUsersB;
    })
    return courses[0][0];
}
// Додаємо новий курс до масиву
function addCourseToArr(newCourse, coursesArr) {
    // Якщо в нього відсутня хоч якась інфо
    if (newCourse.some(course => course == null)) {
        coursesArr.unshift(newCourse);
    }
    // Якщо в ньому присутня вся інфо
    else {
        coursesArr.push(newCourse)
        coursesArr.sort((courseAuthorA, courseAuthosB) => {
            if (courseAuthorA[2] == null) return -1;
            if (courseAuthosB[2] == null) return 1;

            return courseAuthorA[2].localeCompare(courseAuthosB[2]);
        })
    }
    return coursesArr;
}
// Обчислення тривалості вивчення декількох курсів одночасно
function calculateLearningDuration(learningCourses) {
    let learningDuration = 0
    if (learningCourses.length <= 3) {
        learningCourses.forEach(course => {
            learningDuration += course[7];
        });
    }
    else {
        learningCourses.forEach(course => {
            learningDuration += course[7] * 1.5;
        })
    }
    return convertMinutesToHours(learningDuration);
}

// Додаємо 10 записів курсів у масив
let courses = [
    [   
        1, // ID
        'Весела Фізика: Експерименти вдома', // Назва
        'Наука Дітям', // Автор
        ['Іван Петренко', 'Олена Бойко'], // Викладачі
        'Практичні', // Тип занять 
        540, // Кількість користувачів, що прочитали про курс за першу добу
        600, // Кількість користувачів, що прочитали про курс за другу добу
        600 // Тривалість курсу (хв.)
    ],
    [2, 'Цікава Хімія: Шипучки та Вулкани', 'Наука Дітям', ['Анна Cидоренко', 'Максим Вовк'], 'Практичні', 650, 800, 720],
    [3, 'Магія Малювання: Акварельні дива', 'Арт-Студія "Пензлик"', ['Іван Петренко', 'Олена Бойко'], 'Проект', 500, 620, 900],
    [4, 'Світ Комах: Хто живе у траві?', 'Юні Дослідники', ['Олена Ковальчук'], 'Тести', 210, 250, 480],
    [5, 'Подорож Сонячною Системою', 'Космо-Клуб', ['Сергій Бакланов', 'Вікторія Заєць'], 'Змішаний', 700, 950, 1200],
    [6, 'Основи гри на Укулеле', 'Музична Скринька', ['Дмитро Сокіл'], 'Практичні', 350, 300, 1500],
    [7, 'Юний Пекар: Прості рецепти печива', 'Смаколик', ['Іван Борщ'], 'Проект', 410, 550, 540],
    [8, 'Навколо Світу: Географія для малят', 'Юні Дослідники', ['Марина Ткач'], 'Тести', 280, 310, 630],
    [9, 'Історії про Динозаврів', 'Космо-Клуб', ['Олег Бондар'], 'Змішаний', 800, 750, 800],
    [10, 'Мій перший Робот (з Лего)', 'Техно-Діти', ['Анна Васильчук'], 'Проект', 600, 880, 1800]
];

console.log(`Середня кількість зацікавлених користувачів: ${getAverageViews(courses)}`);

console.log(`Id курсу з мінімальною кількістю зацікавлених користувачів на другу добу: ${findMinViewsDay2Id(courses)}`);

let newCourseWithAll = [11, 'Світ логіки та математики', 'Логічне мислення', ['Ольга Андрощук'], 'Практичні завдання', 400, 380, 1000]
let newCourseWithNull = [11, 'Світ логіки та математики', , ['Ольга Андрощук'], , 400, 380, 1000]
console.log(`Додаємо новий курс:`)
console.log(addCourseToArr(newCourseWithAll, courses))

let learningCourses = [
    [2, 'Цікава Хімія: Шипучки та Вулкани', 'Наука Дітям', ['Анна Cидоренко', 'Максим Вовк'], 'Практичні', 650, 800, 720],
    [3, 'Магія Малювання: Акварельні дива', 'Арт-Студія "Пензлик"', ['Іван Петренко', 'Олена Бойко'], 'Проект', 500, 620, 900]
]
let learningMoreCourses = [
    [7, 'Юний Пекар: Прості рецепти печива', 'Смаколик', ['Іван Борщ'], 'Проект', 410, 550, 540],
    [8, 'Навколо Світу: Географія для малят', 'Юні Дослідники', ['Марина Ткач'], 'Тести', 280, 310, 630],
    [9, 'Історії про Динозаврів', 'Космо-Клуб', ['Олег Бондар'], 'Змішаний', 800, 750, 800],
    [10, 'Мій перший Робот (з Лего)', 'Техно-Діти', ['Анна Васильчук'], 'Проект', 600, 880, 1800]
]

console.log(`Вивчення цих курсів сумарно займе: ${calculateLearningDuration(learningMoreCourses)}`)
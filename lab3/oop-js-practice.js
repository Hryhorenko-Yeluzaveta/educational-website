class ChildAccount {
    constructor(name, surname, age, email, purpose, datetime) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.email = email;
        this.purpose = purpose;
        this.datetime = datetime;
    }
    toString() {
        return `\nАкаунт: ${this.name} ${this.surname} (вік: ${this.age}), ` + `Email: ${this.email}, ` + `Дата звернення: ${this.datetime.toString()}`;
    }
}

// Фільтрація за місяцем та проміжком часу
function filteredByDate(accounts, month, startHour, endHour) {
    --month;
    return accounts.filter(account => {
        return account.datetime.getMonth() === month && account.datetime.getHours() >= startHour && account.datetime.getHours() < endHour;
    });
}
// Отримання дитини з найменшим віком
function getChildWithMinAge(accounts) {
    return accounts.reduce((prevAcc, currAcc) => {
        if (prevAcc.age < currAcc.age) {
            return prevAcc;
        }
        else {
            return currAcc;
        }
    })
}
// Поділити дітей за віком на три класи
function classificationChildren(accounts) {
    let earlyClass = 0;
    let averageClass = 0;
    let preschoolClass = 0;
    let schoolClass = 0
    accounts.forEach(account => {
        if (account.age <=3) {
            earlyClass++
        } else if (account.age <= 5) {
            averageClass++
        } else if (account.age <= 7) {
            preschoolClass++
        } else {
            schoolClass++
        }
    })
    let results = [earlyClass, averageClass, preschoolClass, schoolClass]
    return results;
}
// Відсортувати дітей за емейлом у алфавітному порядку
function sortChildenByEmail(accounts) {
    return accounts.sort((childA, childB) => {
        return childA.email.localeCompare(childB.email);
    })
}

let accounts = [
    new ChildAccount('Марія', 'Петренко', 6,'maria.p@example.com', 'Запис на "Весела Фізика"', new Date('2025-10-15T10:30:00')),
    new ChildAccount('Іван', 'Ковальчук', 3,'ivan.k@example.com', 'Технічна проблема', new Date('2025-10-18T14:20:00')),
    new ChildAccount('Олена', 'Бондар', 8,'olena.b@example.com', 'Технічна проблема', new Date('2025-11-05T09:15:00')),
    new ChildAccount('Максим', 'Ткаченко', 5,'maks.t@example.com', 'Запис на "Магія Малювання"', new Date('2025-11-10T18:00:00') ),
    new ChildAccount('Анна', 'Шевченко', 7,'anna.sh@example.com', 'Залишити відгук', new Date('2025-10-22T11:45:00')),
    new ChildAccount('Данило', 'Мельник', 2,'danylo.m@example.com', 'Питання про розклад', new Date('2025-11-20T16:05:00') ),
    new ChildAccount('Софія', 'Григоренко', 10,'sofia.g@example.com', 'Проблема з доступом', new Date('2025-12-01T12:00:00')),
    new ChildAccount('Кирило', 'Заєць', 4,'kyrylo.z@example.com', 'Запис на "Цікава Хімія"', new Date('2025-12-02T13:10:00')),
    new ChildAccount('Вікторія', 'Поліщук', 9,'vika.p@example.com', 'Технічна проблема', new Date('2025-10-30T17:50:00')),
    new ChildAccount('Назар', 'Лисенко', 6,'nazar.l@example.com', 'Запис на "Юний Пекар"', new Date('2025-11-05T09:15:00'))
];

let filteredAccounts = filteredByDate(accounts, 10, 8, 15);
console.log('Відфільтровані акаунти за датою та часом');
console.log(filteredAccounts.toString());

console.log('\nДитина з найменшим віком:');
let youngestAcc = getChildWithMinAge(accounts);
console.log(`Вік: ${youngestAcc.age}, E-mail: ${youngestAcc.email}, Дата звернення: ${youngestAcc.datetime} \n`);

let childrenClasses = classificationChildren(accounts);
console.log(`Кількість дітей до 3 років (ранні): ${childrenClasses[0]}`);
console.log(`Кількість дітей від 3 до 5 років (середні): ${childrenClasses[1]}`);
console.log(`Кількість дітей від 5 до 7 років (дошкільні): ${childrenClasses[2]}`);
console.log(`Кількість дітей від 7 років (школярі): ${childrenClasses[3]}`);

console.log('\nВідсортовані діти в алфавітному порядку:')
sortedAccounts = sortChildenByEmail(accounts);
sortedAccounts.forEach((acc => {
    console.log(`Email: ${acc.email}, Мета зворотнього звʼязку: ${acc.purpose}`);
}))
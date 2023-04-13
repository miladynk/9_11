const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list":{
            "id_1": "Наталья",
            "id_2": "Мария",
            "id_3": "Ирина",
            "id_4": "Анна",
            "id_5": "Ольга",
            "id_6": "Инга",
            "id_7": "Ирис",
            "id_8": "Светлана",
            "id_9": "Ксения",
            "id_10": "Марина"
        }
    }`,

    maleprofessionJson: `{
        "count": 10,
        "list": {
            "id_1": "водитель",
            "id_2": "шахтер",
            "id_3": "рабочий",
            "id_4": "грузчик",
            "id_5": "тракторист",
            "id_6": "слесарь",
            "id_7": "доктор",
            "id_8": "актер",
            "id_9": "дирижер",
            "id_10": "певец"
        }
    }`,

    femaleprofessionJson: `{
        "count": 10,
        "list": {
            "id_1": "учительница",
            "id_2": "актриса",
            "id_3": "писательница",
            "id_4": "медсестра",
            "id_5": "воспитатель",
            "id_6": "веб-разработчик",
            "id_7": "продавщица",
            "id_8": "певица",
            "id_9": "психолог",
            "id_10": "руководитель"
        }
    }`,

    birthMonthJson: `{
        "count": 12,
        "list":{
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"

        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина', // отдельную генерацию пола randomIntnumber + тернарный оператор

        randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {  // для ФИО
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function () {
        let gender = this.randomIntNumber();
        return gender === this.randomIntNumber() ? this.GENDER_MALE : this.GENDER_FEMALE;
        },

    randombirthYear: function () {
        let birthYear = this.randomIntNumber (1950, 2000);
        return birthYear
    },

    randomBirthday: function () {
        let month = this.randomValue(this.birthMonthJson);
        let day;
        if (month === "февраля") {
            day = this.randomIntNumber(1,28); 
        } else if (month === "апреля" || "июня" || "сентября" || "ноября") {
            day = this.randomIntNumber(1,30);
        } else {
            day = this.randomIntNumber(1,31);
        }
        return day + ' ' + month;
    },

    randomFirstName: function() {
    
        let firstNameMale = this.randomValue (this.firstNameMaleJson);
        let firstNameFemale = this.randomValue (this.firstNameFemaleJson);

        if (this.person.gender === this.GENDER_MALE) {

        return firstNameMale;

        } else {
        return firstNameFemale;
        } 
    },


     randomSurname: function() {
        let surnameMale = this.randomValue (this.surnameJson);
        let surnameFemale = (this.randomValue (this.surnameJson) + 'a');

        if (this.person.gender === this.GENDER_MALE) {
            return surnameMale;
        } else {
            return surnameFemale;
        }
    },

    randomsecondName: function() {
        const secondName = this.randomValue(this.firstNameMaleJson);
        if (this.person.gender === this.GENDER_MALE) {
            if (secondName === 'Андрей') {
                return 'Андреевич';
            } else if (secondName === 'Никита') {
                return 'Никитич';
            } else if (secondName === 'Дмитрий') {
                return 'Дмитриевич' ;    
            } else {
                return secondName + 'ович';
            }
        } else if (this.person.gender === this.GENDER_FEMALE) {
            if (secondName === "Андрей") {
                return 'Андреевна';
            } else if (secondName === 'Никита') {
                return 'Никитишна';
            } else if (secondName === 'Дмитрий') {
                return 'Дмитриевна';
            } else {
                return secondName + 'овна';
            }
        }
    },

    randomProfession: function () {
        let maleprofession = this.randomValue(this.maleprofessionJson);
        let femaleprofession = this.randomValue(this.femaleprofessionJson);
        if(this.person.gender === this.GENDER_MALE) {
            return maleprofession;
        } else {
            return femaleprofession;
        }
    },
    
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.birthYear = this.randombirthYear();
        this.person.secondName = this.randomsecondName();
        this.person.profession = this.randomProfession();
        this.person.birthMonth = this.randomBirthday();
        return this.person;
    }
};

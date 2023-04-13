
document.querySelector('#showResult').addEventListener('click', () => {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('secondNameOutput').innerText = initPerson.secondName;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('birthMonthOutput').innerText = initPerson.birthMonth;
});

document.querySelector('#refresh').addEventListener('click', () => {

//window.onload = function()
    //const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('secondNameOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';
    document.getElementById('birthMonthOutput').innerText = '';
});


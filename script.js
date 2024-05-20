const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const hours = document.querySelector('#hrs');
const minute = document.querySelector('#min');
const second = document.querySelector('#sec');
const leftedDays = document.querySelector('#leftedDays');


setInterval(() => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let date = new Date();
    console.log(date);
    const targetDate = new Date('2024-01-01');
    leftedDays.textContent = Math.ceil((date.getTime() - targetDate.getTime())/(1000*3600*24))  ;

    day.textContent = (date.getDate() <10 ? "0" : "") + date.getDate();
    month.textContent = monthNames[(date.getMonth())] ;
    year.textContent = date.getFullYear();

    hours.textContent = (date.getHours() <10 ? "0" : "") + date.getHours();
    minute.textContent = (date.getMinutes() <10 ? "0" : "") +date.getMinutes();
    second.textContent = (date.getSeconds() <10 ? "0" : "") + date.getSeconds();

}, 1000);
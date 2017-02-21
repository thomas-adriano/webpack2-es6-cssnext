import $ from 'jquery';
import cats from 'cats';

console.log($('body').html);
console.log('HHHEEELLLOOO!!!!');

document.getElementById("cats-btn").addEventListener("click", (evt) => {
    cats(evt);
});
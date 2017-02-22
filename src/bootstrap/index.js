import $ from 'jquery';

console.log($('body').html);
console.log('HHHEEELLLOOO!!!!');

let btn = document.getElementById('cats-btn');
btn.addEventListener('click', (evt) => {
    btn.innerHTML = '<i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>';
    System.import('cats').then(module => module.default());
});
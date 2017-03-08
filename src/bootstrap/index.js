import $ from 'jquery';
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

console.log($('body').html);
console.log('HHHEEELLLOOO!!!!');

let btn = document.getElementById('cats-btn');
btn.addEventListener('click', (evt) => {
    btn.innerHTML = '<i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>';
    System.import('cats').then(module => module.default());
});
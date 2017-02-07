import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

import webpackImg from 'images/webpack2-logo.svg'
import cssnextLogo from 'images/cssnext-logo.svg'
import es6Logo from 'images/es6-logo.png'

console.log('HHHEEELLLOOO!!!!');

let body = document.getElementsByTagName('body')[0];

body.innerHTML = ''+
    '<section class="logos">'+
        '<img class="logo-img" src="'+webpackImg+'" alt="Webpack 2">'+
        '<img class="logo-img" src="'+es6Logo+'" alt="ES6">'+
        '<img class="logo-img" src="'+cssnextLogo+'" alt="CSSNext">'+
    '</section>'+

    '<p class="project-description">'+
        '<strong>Hello!</strong> This is a skeleton project containing the minimum setup for a project managed with Webpack'+
        '2 and support for ES2015 (es6) and CSSNext.'+
    '</p>'+
    '<footer class="footer">'+
     'made with <i class="fa fa-coffee" aria-hidden="true"></i>'+
    '</footer>';
import $ from 'jquery';
import 'bootstrap/thirdparty.js';
import './index.css';
import cssNextLogo from 'images/cssnext-logo.svg';
import es6Logo from 'images/es6-logo.png';
import webpack2Logo from 'images/webpack2-logo.svg';

console.log('HHHEEELLLOOOUU!!!!');

let images = [];
images.push(cssNextLogo);
images.push(es6Logo);
images.push(webpack2Logo);
$('.logos').append(images.map(i => '<img class="logo-img" src='+i+'></img>'));
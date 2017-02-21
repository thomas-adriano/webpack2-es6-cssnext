import catBath from 'images/cat_bath.gif';
import catWalker from 'images/cat_walker.gif';

export default function () {
    let prevContent = document.body.innerHTML;

    let images = [img(catBath), img(catWalker)];

    document.body.innerHTML = images.join('');

    function img(imgSrc) {
        return `<img src="${imgSrc}"></img>`;
    }

}





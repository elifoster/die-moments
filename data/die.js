var moments = document.getElementsByClassName('js-moments-tab');

for (var moment of moments) {
    moment.parentNode.removeChild(moment);
}
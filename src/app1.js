import './app1.css'
import $ from "jquery"

const $output = $('.output')
const $number = $('#number')
const $button1 = $('.plus1')
const $button2 = $('.minus1')
const $button3 = $('.multi2')
const $button4 = $('.divide2')
const n = localStorage.getItem('n')
$number.text(n || 100)
$button1.on('click', () => {

    let n = parseInt($number.text());
    n += 1;
    $number.text(n)
    localStorage.setItem('n', n)
});
$button2.on('click', () => {

    let n = parseInt($number.text());
    n -= 1;
    $number.text(n)
    localStorage.setItem('n', n)
});
$button3.on('click', () => {

    let n = parseInt($number.text());
    n *= 2;
    $number.text(n)
    localStorage.setItem('n', n)
});
$button4.on('click', () => {

    let n = parseInt($number.text());
    n /= 2;
    $number.text(n)
    localStorage.setItem('n', n)
});
import $ from 'jquery';
import { debounce } from 'lodash';

let count = 0;

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append(`<p id='count'>${count} clicks on the button</p>`);
$('body').append('<p>Copyright - Holberton School</p>');

$('button').on("click", _.debounce(updateCounter))

function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}

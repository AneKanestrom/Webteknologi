/* Part 2 */

console.log('PART 2')

for (let i = 1; i <= 20;i++) {
    console.log(i)
}

/* Part 3 */

console.log('PART 3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (let i = 0; i < numbers.length; i++) {
    let a =  numbers[i]%3 == 0
    let b = numbers[i]%5 == 0

    if (a) {
        console.log('eple')
    }

    if (b) {
        console.log('kake')
    }

    if (a && b ) {
        console.log('eplekake')
    }
	console.log(numbers[i])
}

/* Part 4 */
let title = document.getElementById('title') 
title.innerText = 'Hello, JavaScript'

/* Part 5 */

let magic = document.getElementById('magic')

function changeDisplay () {
    magic.style.display = 'none'
}

function changeVisibility () {
    magic.style.visibility = 'hidden'
    magic.style.display = 'block'
}

function reset () {
    magic.style.display = 'block'
    magic.style.visibility = 'visible'
}


/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

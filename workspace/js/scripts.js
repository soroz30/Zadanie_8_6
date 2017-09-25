var a = Number(prompt('Enter number a'));
var b = Number(prompt('Enter number b'));
var value = (a * a) + (2 * a * b) - (b * b);

console.log(value);

if (value > 0) {
    console.log('wynik dodatni');
} else if (value < 0) {
    console.log('wynik ujemny');
} else {
    console.log('wynik równy zero');
}
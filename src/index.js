module.exports = function toReadable(number) {
    const units = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ];
    const hundredths = [
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ];
    const category = number % 10;

        if (number < 20) {
            return units[number];
        } else if (number < 100) {
            return hundredths[Math.floor(number / 10) - 2] + (category ? " " + units[category] : "");
        } else if (number < 1000) {
            return units[Math.floor(number / 100)] + " hundred" + (number % 100 === 0 ? "" : " " + toReadable(number % 100));
        } else {
            return toReadable(Math.floor(number / 1000)) + " thousand" + (number % 1000 !== 0 ? " " + toReadable(number % 1000) : "");
        }
}

document.getElementById('operationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (isNaN(number1) || isNaN(number2)) {
        result = 'Harap masukkan kedua bilangan!';
    } else {
        switch (operation) {
            case 'add':
                result = number1 + number2;
                break;
            case 'subtract':
                result = number1 - number2;
                break;
            case 'multiply':
                result = number1 * number2;
                break;
            case 'divide':
                result = number2 !== 0 ? number1 / number2 : 'Tidak dapat membagi dengan nol!';
                break;
            default:
                result = 'Operasi tidak valid!';
        }
    }

    document.getElementById('result').textContent = `Hasil: ${result}`;
});

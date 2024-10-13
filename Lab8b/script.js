function operate(op) {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(n1) || isNaN(n2)) {
        resultDiv.textContent = 'Please enter valid numbers.';
        resultDiv.style.color = 'red';
        return;
    }

    let result;
    switch(op) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            if (n2 === 0) {
                resultDiv.textContent = 'Cannot divide by zero.';
                resultDiv.style.color = 'red';
                return;
            }
            result = n1 / n2;
            break;
    }

    resultDiv.textContent = `Result: ${result}`;
    resultDiv.style.color = 'green';
}
function clearCalc(){
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = '';
    resultDiv.style.color = '#28a745'; // Reset to default color
}
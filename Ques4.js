function sumEvenNumbers() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    let sum = 0;
    
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    console.log(`Sum of even numbers: ${sum}`);
}

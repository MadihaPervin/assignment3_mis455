function calculateAverages() {
    const start = parseInt(document.getElementById('startNum').value);
    const end = parseInt(document.getElementById('endNum').value);
    
    console.log(`Average of even numbers: ${averageEvenNumbers(start, end)}`);
    console.log(`Average of odd numbers: ${averageOddNumbers(start, end)}`);
}

function averageEvenNumbers(start, end) {
    let sum = 0;
    let count = 0;
    
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
            count++;
        }
    }
    
    return count === 0 ? 0 : sum / count;
}

function averageOddNumbers(start, end) {
    let sum = 0;
    let count = 0;
    
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            sum += i;
            count++;
        }
    }
    
    return count === 0 ? 0 : sum / count;
}

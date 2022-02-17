


document.getElementById('calc').addEventListener('click', function () {
    const incomeValue = parseFloat(document.getElementById('income').value);
    const foodValue = parseFloat(document.getElementById('food').value);
    const rentValue = parseFloat(document.getElementById('rent').value);
    const clothsValue = parseFloat(document.getElementById('cloths').value);
    let expenses = document.getElementById('expenses');
    // expenses = expenses.innerText;

    const totalExpenses = foodValue + rentValue + clothsValue;
    expenses.innerText = totalExpenses;

    let balance = document.getElementById('balance');
    // balance = balance.innerText;
    const remainingBalance = incomeValue - totalExpenses;
    balance.innerText = remainingBalance;

    // console.log(expensesText);



});








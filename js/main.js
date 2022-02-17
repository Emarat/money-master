function userInput(ID) {
    const userValue = parseFloat(document.getElementById(ID).value);
    return userValue;
}


document.getElementById('calc').addEventListener('click', function () {
    const incomeValue = userInput('income');
    const foodValue = userInput('food');
    const rentValue = userInput('rent');
    const clothsValue = userInput('cloths');
    // const incomeValue = parseFloat(document.getElementById('income').value);
    // const foodValue = parseFloat(document.getElementById('food').value);
    // const rentValue = parseFloat(document.getElementById('rent').value);
    // const clothsValue = parseFloat(document.getElementById('cloths').value);
    let expenses = document.getElementById('expenses');


    const totalExpenses = foodValue + rentValue + clothsValue;
    expenses.innerText = totalExpenses;

    let balance = document.getElementById('balance');

    const remainingBalance = incomeValue - totalExpenses;
    balance.innerText = remainingBalance;

    // console.log(expensesText);



});








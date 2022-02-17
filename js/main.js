// geting user input using function 
function userInput(ID) {
    const userValue = parseFloat(document.getElementById(ID).value);
    return userValue;
};

// getting total expenses cost & remaining balance 
function expensesBalance(ID) {
    let expensesAndBalance = document.getElementById(ID);
    return expensesAndBalance;
};



document.getElementById('calc').addEventListener('click', function () {
    // call user input 
    const incomeValue = userInput('income');
    const foodValue = userInput('food');
    const rentValue = userInput('rent');
    const clothsValue = userInput('cloths');

    // const incomeValue = parseFloat(document.getElementById('income').value);
    // const foodValue = parseFloat(document.getElementById('food').value);
    // const rentValue = parseFloat(document.getElementById('rent').value);
    // const clothsValue = parseFloat(document.getElementById('cloths').value);
    // let expenses = document.getElementById('expenses');
    // let balance = document.getElementById('balance');

    const expenses = expensesBalance('expenses');
    const balance = expensesBalance('balance');

    // total expenses calculation
    const totalExpenses = foodValue + rentValue + clothsValue;
    expenses.innerText = totalExpenses;


    // remainingBalance calculation 
    const remainingBalance = incomeValue - totalExpenses;
    balance.innerText = remainingBalance;

});

// bonus part 
document.getElementById('save').addEventListener('click', function () {

    const savingPercent = document.getElementById('saving-value').value;
    const savingAmount = document.getElementById('saving-amount');


    const incomeValue = userInput('income');


    const savings = (savingPercent / 100) * incomeValue;
    savingAmount.innerText = savings;
    // console.log(savings);
    const exsistingMoney = document.getElementById('balance').innerText;
    let exsistingBalance = document.getElementById('remaining-balance');



    let exsisitingBalanceAmount = exsistingMoney - savings;
    exsistingBalance.innerText = exsisitingBalanceAmount;

});








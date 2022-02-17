// geting user input using function 
function userInput(ID) {
    const userValue = parseFloat(document.getElementById(ID).value);
    // error validation
    if (isNaN(userValue)) {
        alert('Not a Number! Please Enter Number Value & Try Again');
    } else if (userValue < 0) {
        alert('Please Enter Positive Number Value & Try Again');
    }

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


    const expenses = expensesBalance('expenses');
    const balance = expensesBalance('balance');

    // total expenses calculation
    const totalExpenses = foodValue + rentValue + clothsValue;
    expenses.innerText = totalExpenses;


    // remainingBalance calculation 
    if (totalExpenses > incomeValue) {
        alert('You  Have InSufficient Balance');

    }
    else {
        const remainingBalance = incomeValue - totalExpenses;
        balance.innerText = remainingBalance;
    }

});

// bonus part 
document.getElementById('save').addEventListener('click', function () {

    const savingPercent = document.getElementById('saving-value').value;
    const savingAmount = document.getElementById('saving-amount');

    const incomeValue = userInput('income');

    const savings = (savingPercent / 100) * incomeValue;
    savingAmount.innerText = savings;

    const exsistingMoney = document.getElementById('balance').innerText;
    let exsistingBalance = document.getElementById('remaining-balance');



    if (savings > exsistingMoney) {

        alert('You Do Not Have Sufficient Balance');

    }
    else {
        let exsisitingBalanceAmount = exsistingMoney - savings;
        exsistingBalance.innerText = exsisitingBalanceAmount;

    }

});








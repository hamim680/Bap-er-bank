// step-1:add even listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
//   step-2:get the deposit amount from the deposit input field
const depositField = document.getElementById('deposit-field');
const newDepositAmountString = depositField.value; 
const newDepositAmount = parseFloat(newDepositAmountString);

// step-3: deposit current value
const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);

// step-4:add numbers to set total deposit
const currentDepositTotal = previousDepositTotal + newDepositAmount;
// set the deposit total
depositTotalElement.innerText = currentDepositTotal;

// step-5:get balance current total
const balanceTotalElement = document.getElementById('balance-total')
const previousBalanceString = balanceTotalElement.innerText;
// console.log(previousBalanceString);
const previousBalanceTotal = parseFloat(previousBalanceString);

// step-6:calculate total balance
const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

// set the balance total
balanceTotalElement.innerText = currentBalanceTotal;


// step-7
depositField.value = '';
})
// step-1: add 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawString);
    
    // step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);
    
      // step 7
      withdrawField.value = '';


    if(newWithdrawAmount > previousBalance){
        alert('Baap er bank e eto tk nai');
        return;
    }

    // step-4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step6
    const newBalanceTotal = previousBalance - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
  
})
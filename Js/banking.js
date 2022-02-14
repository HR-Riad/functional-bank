


document.getElementById('deposite-button').addEventListener('click',function()
{

    const depositInput = document.getElementById('deposit-input');
    const depositAmountValue =  depositInput.value ;
    const depositAmount = parseFloat(depositAmountValue);

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalValue = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalValue);


     depositTotal.innerText = previousDepositTotal + depositAmount;
    
 
/* update balance */
const balanceTotal =document.getElementById ('balance-total');
const balanceAmountValue = balanceTotal.innerText;
const previousBalanceTotal =  parseFloat(balanceAmountValue);

balanceTotal.innerText = previousBalanceTotal + depositAmount;
  

    depositInput.value=''; 
})
/* 
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountValue = withdrawInput.value ;
    const withdrawAmount = parseFloat (withdrawAmountValue);

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalValue =withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(withdrawTotalValue);

    withdrawTotal.innerText = previouswithdrawTotal + withdrawAmount;

    withdrawInput.value = '';
    
}) */
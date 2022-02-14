/* function doubleIt(num){
    const result = num *2 ;
    return result;
}
const first = doubleIt(5);
const second = doubleIt (7);
 */

/* 
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountValue =  inputField.value ;
    const amountValue = parseFloat(inputAmountValue);

    
    inputField.value=''; 
 
    return amountValue;
} */
/* document.getElementById('deposite-button').addEventListener('click',function()
{

    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountValue =  depositInput.value ;
    // const depositAmount = parseFloat(depositAmountValue);
    
    const depositAmount = getInputValue('deposit-input')

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalValue = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalValue);


     depositTotal.innerText = previousDepositTotal + depositAmount;
    
  */
/* update balance */
/* 
const balanceTotal =document.getElementById ('balance-total');
const balanceAmountValue = balanceTotal.innerText;
const previousBalanceTotal =  parseFloat(balanceAmountValue);

balanceTotal.innerText = previousBalanceTotal + depositAmount;
  

    

})

// Money withdraw and reduce balance for withdraw


document.getElementById('withdraw-button').addEventListener('click',function(){
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountValue = withdrawInput.value ;
    // const withdrawAmount = parseFloat (withdrawAmountValue);

    const withdrawAmount = getInputValue('withdraw-input');

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalValue =withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(withdrawTotalValue);

    withdrawTotal.innerText = previouswithdrawTotal + withdrawAmount;
 */
    // update balance after withdraw

/* 
    const balanceTotal =document.getElementById ('balance-total');
    const balanceAmountValue = balanceTotal.innerText;
    const previousBalanceTotal =  parseFloat(balanceAmountValue);
    
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

   
    
}) */
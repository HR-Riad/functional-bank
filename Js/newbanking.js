
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountValue =  inputField.value ;
    const amountValue = parseFloat(inputAmountValue);

    
    inputField.value=''; 
 
    return amountValue;
}

function updateTotalField(totalFieldId, amount){

    
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal  = parseFloat(totalText);
     totalElement.innerText = previousTotal  + amount;
    

}


document.getElementById('deposite-button').addEventListener('click',function()
{

    const depositAmount = getInputValue('deposit-input')


    updateTotalField('deposit-total',depositAmount);
 
/* update balance */

const balanceTotal =document.getElementById ('balance-total');
const balanceAmountValue = balanceTotal.innerText;
const previousBalanceTotal =  parseFloat(balanceAmountValue);

balanceTotal.innerText = previousBalanceTotal + depositAmount;
  

    

})

// Money withdraw and reduce balance for withdraw



document.getElementById('withdraw-button').addEventListener('click',function(){
  

    const withdrawAmount = getInputValue('withdraw-input');


  updateTotalField ('withdraw-total',withdrawAmount);

    // update balance after withdraw


    const balanceTotal =document.getElementById ('balance-total');
    const balanceAmountValue = balanceTotal.innerText;
    const previousBalanceTotal =  parseFloat(balanceAmountValue);
    
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

   
    
})
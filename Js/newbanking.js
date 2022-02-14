
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

function updateBalance(amount,isAdd){
const balanceTotal =document.getElementById ('balance-total');
const balanceAmountValue = balanceTotal.innerText;
const previousBalanceTotal =  parseFloat(balanceAmountValue);
if (isAdd==true){
    balanceTotal.innerText = previousBalanceTotal + amount;
}
  else{
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
}


document.getElementById('deposite-button').addEventListener('click',function()
{

    const depositAmount = getInputValue('deposit-input')


     updateTotalField('deposit-total',depositAmount);

     updateBalance(depositAmount,true);
    

})

// Money withdraw and reduce balance for withdraw



document.getElementById('withdraw-button').addEventListener('click',function(){
  

    const withdrawAmount = getInputValue('withdraw-input');

     updateTotalField ('withdraw-total',withdrawAmount);

     updateBalance(withdrawAmount,false);
      
    
})
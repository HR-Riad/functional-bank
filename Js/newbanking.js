
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
function getCurrentBalance(){
const balanceTotal =document.getElementById ('balance-total');
const balanceAmountValue = balanceTotal.innerText;
const previousBalanceTotal =  parseFloat(balanceAmountValue);

return previousBalanceTotal;
}


function updateBalance(amount,isAdd){
    const balanceTotal = document.getElementById('balance-total');

    previousBalanceTotal = getCurrentBalance();

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

    if(depositAmount>0){
        updateTotalField('deposit-total',depositAmount);

        updateBalance(depositAmount,true);
       
    }



})

// Money withdraw and reduce balance for withdraw



document.getElementById('withdraw-button').addEventListener('click',function(){
  
   const currentBalance = getCurrentBalance();
    const withdrawAmount = getInputValue('withdraw-input');

    if(withdrawAmount>0  && withdrawAmount<currentBalance ){
        updateTotalField ('withdraw-total',withdrawAmount);

        updateBalance(withdrawAmount,false);

    }
    if(withdrawAmount>currentBalance){
        console.log('cant withdraw');
    }
    
      
    
})
/* document.getElementById('deposite-button').addEventListener('click', function(){
const depositInput = document.getElementById('deposit-input');

const depositAmount = depositInput.value ;

// get current deposit 

const depositTotal = document.getElementById('deposit-total');

const  depositTotalValue = depositTotal.innerText;

depositTotal.innerText = depositAmount;

}) */


document.getElementById('deposite-button').addEventListener('click',function()
{

    const depositInput = document.getElementById('deposit-input');
    
    const depositAmount = depositInput.value ;

    const depositTotal = document.getElementById('deposit-total');

    const DepositeTotalValue = depositTotal.innerText;
    depositTotal.innerText = depositAmount;
    depositInput.value=''; 
})
document.getElementById('btn-deposit').addEventListener('click',function(){
   const depositAmount = document.getElementById("input-deposit");
    const depositAmountString=depositAmount.value
    const currentDeposit=parseFloat(depositAmountString);
    
    const totalDeposit=document.getElementById("total-deposit");
    const totalAmountString=totalDeposit.innerText
    const previousDeposit=parseFloat(totalAmountString);
    const totalDEpostAmount=currentDeposit+previousDeposit
    totalDeposit.innerText=totalDEpostAmount;

    const balance=document.getElementById("total-balance");
    const balanceString=balance.innerText;
    const totalBalance=parseFloat(balanceString)
    const totalBalanceAmount=totalDEpostAmount+totalBalance
    balance.innerText=totalBalanceAmount; 
   

    // last step
    depositAmount.value='';
})
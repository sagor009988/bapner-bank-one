document.getElementById("btn-withdraw").addEventListener('click',function(){
    const withdrawInput=document.getElementById('filed-withdraw');
    const withdrawString=withdrawInput.value ;
    const currentWithdraw=parseFloat(withdrawString);

    const withdraw=document.getElementById("withdraw-amount");
    const withdrawamountString=withdraw.innerText;
    const totalwithdraw=parseFloat(withdrawamountString);
       
    const totalwithdrawamount=totalwithdraw+ currentWithdraw;
    
    withdraw.innerText=totalwithdrawamount;

    // balance amount adjust
    const total=document.getElementById("total-balance");
    const totalString=total.innerText ;
   
    const totalnewBalance=parseFloat(totalString)
    const newBalance=totalnewBalance-totalwithdrawamount;
    total.innerText=newBalance;

    withdrawInput.value='';
      


})
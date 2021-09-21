function computeloan(){
    var amount=document.getElementById("pa").value;
    var roi=document.getElementById("roi").value;
    var months=document.getElementById("months").value;
    var interest= amount*roi/100;
    var payment=((amount*1 + interest)/months);
    console.log(payment);
    payment= payment.toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
    });
    document.getElementById('payment').innerHTML= "Monthly payment amount: " + payment;
}
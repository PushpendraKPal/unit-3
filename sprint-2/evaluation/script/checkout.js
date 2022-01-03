var form = document.getElementById('form');
form.addEventListener('submit', submit);

function submit(event){
    event.preventDefault()
    var hno = document.getElementById('houseno').value; 
    var sno = document.getElementById('streetno').value; 
    var col = document.getElementById('colony').value; 
    var cit = document.getElementById('city').value; 
    var sta = document.getElementById('state').value; 

    if(hno == "" || sno == "" || col == "" || cit == "" || sta == "")
    alert("Please Fill All the Input Boxes")
    else{
        accepted();
        coocked();
        ready();
        out();
        delivered();
    }
}


function accepted(){
    alert("Your Order is accepted!")
}

function coocked(){
    setTimeout(()=>{
        alert("Your oredr is being cooked");
    }, 3000)
}

function ready(){
    setTimeout(()=>{
        alert("Your order is ready")
    }, 8000)
}

function out(){   
    setTimeout(()=>{
        alert("Your order is out of Delivery")
    }, 10000)
}

function delivered(){
    setTimeout(()=>{
        alert("Order Delivered!")
    }, 12000)
}
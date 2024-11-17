let but = document.getElementById('button');
let mainPage = document.getElementById('main-page');
    mainPage.style.display='none';
but.addEventListener('click', function() {
    let loginCard = document.getElementById("login-card");    
    let acc = document.getElementById("acc").value;
    let pass = document.getElementById("pass").value;
    if(acc==''){
        alert('accout number is required');
    }
    else if(pass==''){
        alert('password is required');
    }
    else{
        loginCard.style.display = "none";
        mainPage.style.display='block';
    }
});



let depositButoon = document.getElementById('depositbut');

depositButoon.addEventListener('click', () => {
    let depositInput = document.getElementById('deposit-input');
    let depositNewInput = parseFloat(depositInput.value);
    let dipositspan = document.getElementById('depositspan'); 
    let dipositNewSpan = parseFloat(dipositspan.innerHTML) ;

    let sum = depositNewInput + dipositNewSpan;
     document.getElementById("depositspan").innerHTML = sum;

// change balance
    let totalSpan = document.getElementById('totalspan').innerHTML;
    let newTotalSpan = parseFloat(totalSpan);

    let totalNewSpan = depositNewInput + newTotalSpan;
    totalSpan = document.getElementById('totalspan').innerHTML= totalNewSpan.toFixed(2);

    // withdrow
    let withdrow_but = document.getElementById('withdrow_but');
    withdrow_but.addEventListener('click', function() {
        let withdrow_input = document.getElementById('withdrow_input').value;
        let newwithdrow_input = parseFloat(withdrow_input);

        let withdro_span = document.getElementById('withdrow_span').innerHTML;
        let newwithdro_span = parseFloat(withdro_span);

        let sum2 = newwithdro_span+newwithdrow_input;

        document.getElementById('withdrow_span').innerHTML=sum2.toFixed(2);


        // totalbalance in withdrow 
        let mainbalance = document.getElementById('totalspan').innerHTML;
        let new_mainbalance = parseFloat(mainbalance);
        let totalmul =new_mainbalance - newwithdrow_input;
        mainbalance = document.getElementById('totalspan').innerHTML=totalmul.toFixed(2)


    } )
})




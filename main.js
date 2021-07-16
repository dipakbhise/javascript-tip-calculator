// ----------------Function Bill amount in Number Start--------------------

function amtNum() {

    let billAmt = document.getElementById("bill").value;

    if (isNaN(billAmt)) {
        
        alert("Enter Only Numbers in a Bill Amount Field");
        document.getElementById("bill").value = "";
             
    }

    if (billAmt == 0) {

        document.getElementById("individualbill").value = 0;
        
    }
}

// ----------------Function bill amount in number End--------------------



// ----------------Function Waiterservice Start--------------------

function waiterservice() {

    let billAmt = document.getElementById("bill").value;
    
    // if (isNaN(billAmt)) {
    //     alert("enter Number in a Bill Amount")       
    // }
    
    let tipPerc = document.getElementById("tippercent").value;

    if ((tipPerc == 0)){
        document.getElementById("poor").innerHTML = "How was the Service?";
        
    }else if(tipPerc <= 5) {

        document.getElementById("poor").innerHTML = "Not So Good";

    }else if((tipPerc <= 10)){

        document.getElementById("poor").innerHTML = "Medium Service";

    }else if((tipPerc <= 15)){
        document.getElementById("poor").innerHTML = "Good Service";

    }else if((tipPerc <= 20)){
        document.getElementById("poor").innerHTML = "Excellent Service";

    }else if((tipPerc > 20)){
        document.getElementById("poor").innerHTML = "Thanks! For Giving Tip";

    }else{
        document.getElementById("poor").innerHTML = "";
    }
    
}

if((tipPerc == 100)){
    alert("You Cant give");

}


// ----------------Function Waiter Service End--------------------





// ----------------Function BillCal Start--------------------



function BillCal() {

    

    let billAmt = document.getElementById("bill").value;
    
    // if (isNaN(billAmt)) {
    //     alert("enter Number")       
    // }

    if ( billAmt === "") {
        billAmt = 0;
        
    }
    
    let tipPerc = document.getElementById("tippercent").value;

    // if (tipPerc == 5) {

    //     document.getElementById("poor").innerHTML = "Poor Service";
        
    // }
    
    let perCal = billAmt * (tipPerc / 100);
    
    // alert(perCal);

    // let tipAmt = perCal;

    document.getElementById("totaltip").value = perCal;
    
    let total = Number(billAmt) + Number(perCal);
    
    if (isNaN(total)) {
        total = "";
        
    }else{
        total = Number(billAmt) + Number(perCal);
    }

    document.getElementById("totalbill").value = total;

    
    
    // alert(total);

    document.getElementById("billamnt").innerHTML = ` ${billAmt}`;

    document.getElementById("tipprcnt").innerHTML = ` ${tipPerc}%`;

    document.getElementById("tipamnt").innerHTML = ` ${perCal}`;


    document.getElementById("totalamnt").innerHTML = `<hr> ${total}`;
    
    
    
   
    }

    // ----------------Function BillCal End--------------------





    // ----------------Function INdividual start--------------------


    function tipCal(params) {

        let billAmt = document.getElementById("bill").value;

        

        
        let tipPerc = document.getElementById("tippercent").value;

        
        
        let perCal = billAmt * (tipPerc / 100);

        let total = Number(billAmt) + Number(perCal);
        

        let persons = document.getElementById("persons").value;


        let netBill = billAmt / persons;
    
        let individual = perCal / persons;
        
        if (persons == "") {
            
            document.getElementById("individualtip").value = "";
            
        }else{
        
        
            document.getElementById("individualtip").value = individual;
        
        }

        if ( billAmt === "") {
            billAmt = 0;
            persons = 0;
            
        }


        let individualBill = total / persons;

       

        if (persons == "") {
            individualBill = 0;
            
            
        }else{
            document.getElementById("individualbill").value = individualBill;

            
        }

        

        


        // -------------Total Bill

    document.getElementById("billamnt1").innerHTML = ` ${billAmt}`;

    document.getElementById("tipprcnt1").innerHTML = ` ${tipPerc}%`;

    document.getElementById("tipamnt1").innerHTML = ` ${perCal}`;


    document.getElementById("totalamnt1").innerHTML = `<hr> ${total}`;
    
    

    // ---------Total Bill End--------------

    // --------------Individual start-------------------

    document.getElementById("indipersons1").innerHTML = ` ${persons}`;
    
    document.getElementById("netbill").innerHTML = ` ${netBill}`;

    document.getElementById("inditipamnt1").innerHTML = ` ${individual}`;

    document.getElementById("inditotal1").innerHTML = ` ${individualBill}`;

    

        
    }


     // ----------------Function INdividual End--------------------


     // ...........------------trial--------------------------

     
// function tipcalcy() {

    

// let billAmt = document.getElementById("bill").value;

// if (isNaN(billAmt)) {
//     alert("enter Number")       
// }

// let tipPerc = document.getElementById("tippercent").value;

// let perCal = billAmt * (tipPerc / 100);

// // alert(perCal);

// let total = Number(billAmt) + Number(perCal);

// if (isNaN(total)) {
//     total = "";
    
// }else{
//     total = Number(billAmt) + Number(perCal);
// }

// // alert(total);

// document.getElementById("totalbill").value = total;

// let persons = document.getElementById("persons").value;

// let individual = perCal / persons;

// if (persons == "") {
    
//     document.getElementById("individualtip").value = "";
    
// }else{


//     document.getElementById("individualtip").value = individual;

// }

    
// }




// fills the Quantity Selection Using an Array
var numPizzas = 10;
var quantityString = "";
for(var i = 1; i <= numPizzas; i++){
    quantityString += `<option>${i}</option>`;
}
document.getElementById('quantity').innerHTML = quantityString;

// fills the Pizza Selection Using an Array
var pizzaType = ["Pepperoni", "Cheese", "Meat Lovers", "Supreme", "Buffalo Chicken"];
var pizzaString = "";
pizzaType.forEach(function(pizza) {
    pizzaString += `<option value="${pizza}" onclick="setPizzaPrice(this)">${pizza}</option>`;
});
document.getElementById('pizzaType').innerHTML = pizzaString;

// Validates the Data Entered on the Form
document.getElementById('orderBtn').addEventListener('click', function(){
    var isValid;
    var name = document.getElementById('name').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    console.log("Order Submitted");
    if(name == ""){
        isValid = false;
        document.getElementById('alertName').innerHTML = "required fields are missing";
        document.getElementById('alertName').style.color = "red";
        document.getElementById('name').style.backgroundColor = "red";        
    }
    if(phoneNumber == ""){
        isValid = false;
        document.getElementById('alertPhone').innerHTML = "required fields are missing";
        document.getElementById('alertPhone').style.color = "red";
        document.getElementById('phoneNumber').style.backgroundColor = "red";        
    }
    else if(isValid = true){
        printOrder();
    }
});

// prints the Order Information
function printOrder(){
    for(var i = 1; i <= numPizzas; i++){
        if(document.getElementById('quantity').value == i){
            var quantity = i;
        }
    }
    var subTotal = quantity * 7.99;
    console.log(subTotal);
    var tax = 1.076;
    var total = (subTotal * tax);
    console.log(total);
    var orderInfo = [document.getElementById('name').value, document.getElementById('phoneNumber').value, document.getElementById('quantity').value, document.getElementById('pizzaType').value, subTotal.toFixed(2), "7.6%", total.toFixed(2)]    
    console.log(orderInfo);
    
    var summaryInfo  = "<ul>";
    summaryInfo += "<li>Name:</li>";
    summaryInfo += "<li>Phone Number:</li>";
    summaryInfo += "<li>Quantity:</li>";
    summaryInfo += "<li>Pizza:</li>";
    summaryInfo += "<li>Subtotal:</li>";
    summaryInfo += "<li>Tax:</li>";
    summaryInfo += "<li>Total:</li>";
    summaryInfo += "</ul>"

    document.getElementById('summaryInfo').innerHTML = summaryInfo;
    
    var orderSummary = "<ul>";
    orderInfo.forEach(function(pizzaInfo){
        orderSummary += `<li>${pizzaInfo}</li>`;
    });
    orderSummary += "</ul>";

    document.getElementById('orderSummary').innerHTML = orderSummary;

    document.getElementById('orderTitle').innerHTML = "Order Summary";
    document.getElementById('orderReceipt').style.backgroundColor = "#fafafa";
}



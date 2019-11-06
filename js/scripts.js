
function BankAccount () {
  this.name,
  this.balance = 0
}

//we were aiming for a prototype that takes the user input and sets properties of the object
BankAccount.prototype.createAcct = function(name, initialDeposit) {
  this.name = name;
  this.balance = initialDeposit
}

//we were aiming for a prototype method that takes in a transaction and updates the inital deposit value
BankAccount.prototype.newDeposit = function(initialDeposit, deposit) {
  this.balance = initialDeposit + this.deposit
}



//user interface logic

$(document).ready(function(){
  // attachContactListeners();
  var bankAccount = new BankAccount();
  $("form#openAcct").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedInitialDeposit = parseInt($("input#initialDeposit").val());

    $("input#name").val("");
    $("input#initialDeposit").val("");

    bankAccount.createAcct(inputtedName, inputtedInitialDeposit);
    console.log(bankAccount)
  });


  var bankAccount = new BankAccount();
  $("form#existingAcct").submit(function(event){
    event.preventDefault();
    var inputtedDeposit = parseInt($("input#deposit").val());

  $("input#deposit").val("");

  bankAccount.newDeposit(inputtedDeposit);
  // so far, this only returns NaN, so work on this form's entry isn't working
  });


});

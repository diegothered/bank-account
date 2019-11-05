
function BankAccount (name, initialDeposit) {
  this.name = name,
  this.initialDeposit = initialDeposit
}

//user interface logic
var bankAccount = new BankAccount ();

$(document).ready(function() {
  // attachContactListeners();
  $("form#openAcct").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedInitialDeposit = parseInt($("input#initialDeposit").val());
    console.log(inputtedInitialDeposit)

    $("input#name").val("");
    $("input#initialDeposit").val("");
    //
    $('.showInitialBalance').text(inputtedName +", your initial balance is " + inputtedInitialDeposit);

  });
});

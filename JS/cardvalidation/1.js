function validateCardNumber(cardNumber) {
    if (cardNumber.length > 19 || cardNumber < 16) {
        return false;
    }
    var cardNum = cardNumber.split("-");
    var card = "";
    for (var i = 0; i < cardNum.length; i++) {
        card = card + cardNum[i];
    }
    if (isNaN(card)) {
        console.log("Information is not correct...");
        return false;
    }
    document.writeln(card);
    console.log(card);
    return true;
}

validateCardNumber("1234-1234-1234-3455");
validateCardNumber("1234-12341234-3455");
validateCardNumber("1234123412343455");
validateCardNumber("kjjk-ueue-8834-jdj8");
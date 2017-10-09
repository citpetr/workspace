function validateEmail(email) {
    var mailSeparated = email.split('@');
    document.writeln(email + '<br>');

    if (email.indexOf('@') === -1) {
        document.writeln('Sorry, but you input is not corrected email. Please try again.' + '<br>');
    }
    if (mailSeparated[1].indexOf('.') === -1) {
        document.writeln('Sorry, but you input is not corrected email. Please try again.' + '<br>');
    }
}
var email1 = "johnny1@yandex.ru";
var email2 = "23@hohoho.net";


validateEmail(email1);
validateEmail(email2);
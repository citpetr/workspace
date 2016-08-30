var passengers = [{ name: "Jane Doloop", paid: true },
    { name: "Dr. Evel", paid: true },
    { name: "Sue Property", paid: false },
    { name: "John Funcall", paid: true }
]

function processPassengers(passengers, testFunction) {
    for (var i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

function checkNoFlyList(passenger) {
    return (passenger.name === "Dr. Evel");
}

function checkNotPaid(passenger) {
    return (!passenger.paid);
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
    document.writeln("Самолет не полетит, так как есть пассажиры из черного списка \n");
}

var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
    document.writeln(" <h1> Самолет не может вылететь, кто-то не заплатил за билет... <h1>");
    console.log("ТУТУТУТУТУ")
}
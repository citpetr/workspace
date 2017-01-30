window.onload = function() {
    //electroAccount(554, 584, 5.7, 120, 120, 120, 115, 113, 112);
    var processing = document.getElementById("process");
    processing.onclick = action;

}

function action() {
    var total = (document.getElementById("total")).value;
    var previousTotal = (document.getElementById("totalPrevious")).value;
    var cost = (document.getElementById("cost")).value;
    var room1 = (document.getElementById("room1")).value;
    var room2 = (document.getElementById("room2")).value;
    var room3 = (document.getElementById("room3")).value;
    var room1PreviousMonth = (document.getElementById("room1Previous")).value;
    var room2PreviousMonth = (document.getElementById("room2Previous")).value;
    var room3PreviousMonth = (document.getElementById("room3Previous")).value;

    electroAccount(previousTotal, total, cost, room1, room2, room3, room1PreviousMonth, room2PreviousMonth, room3PreviousMonth);
}

function electroAccount(previousTotal, total, cost, room1, room2, room3, room1PreviousMonth, room2PreviousMonth, room3PreviousMonth) {
    var totalAccountPerMonth = total - previousTotal; //Общий счетчик
    var pricePerWatt = cost; // цена за киловатт
    var totalCost = totalAccountPerMonth * pricePerWatt;

    var roomOneAccount = room1 - room1PreviousMonth; //счетчик первой комнаты 
    var roomTwoAccount = room2 - room2PreviousMonth; // счетчик второй комнаты
    var roomThreeAccount = room3 - room3PreviousMonth; // счетчик третьей комнаты

    var totalAccountWithoutRooms = totalAccountPerMonth - (roomOneAccount + roomTwoAccount + roomThreeAccount); // Количество киловатт "общего расхода" электроэнергии (коридор, туалет, кухня)
    var totalCostWithoutRooms = totalAccountWithoutRooms * pricePerWatt;
    var costCommunalElectro = totalCostWithoutRooms / 3;

    var room1Cost = roomOneAccount * pricePerWatt;
    var room2Cost = roomTwoAccount * pricePerWatt;
    var room3Cost = roomThreeAccount * pricePerWatt;

    var room1FullCost = room1Cost + costCommunalElectro;
    var room2FullCost = room2Cost + costCommunalElectro;
    var room3FullCost = room3Cost + costCommunalElectro;

    var itog = document.getElementById("infoDisplay");
    itog.innerHTML = (
        "Общий счетчик: " + totalAccountPerMonth + "<br>" +
        "Общий счет: " + (totalAccountPerMonth * pricePerWatt) + "<br>" +
        "Общий счет, без комнат: " + totalAccountWithoutRooms + " КВт. Стоимость: " + totalCostWithoutRooms + " рублей. <br>" +
        "Комната 1: " + roomOneAccount + "КВт, стоимость: " + room1Cost + " рублей. Стоимость с \"общим\" светом: " + room1FullCost + "руб" + "<br>" +
        "Комната 2: " + roomTwoAccount + "КВт, стоимость: " + room2Cost + " рублей. Стоимость с \"общим\" светом: " + room2FullCost + "руб" + "<br>" +
        "Комната 3: " + roomThreeAccount + "КВт, стоимость: " + room3Cost + " рублей. Стоимость с \"общим\" светом: " + room3FullCost + "руб" + "<br>" +
        "Общая сумма: " + (room1FullCost + room2FullCost + room3FullCost));
    return itog;
}
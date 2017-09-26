window.onload = function() {
    //electroAccount(554, 584, 5.7, 120, 120, 120, 115, 113, 112);
    var processing = document.getElementById("process");
    processing.onclick = action;

}

function action() {
    var total = (document.getElementById("total")).value;
    var previousTotal = (document.getElementById("totalPrevious")).value;
    var cost = (document.getElementById("cost")).value;
    var kaRoom = (document.getElementById("kaRoom")).value;
    var shRoom = (document.getElementById("shRoom")).value;
    var yuRoom = (document.getElementById("yuRoom")).value;
    var kaRoomPrevious = (document.getElementById("kaRoomPrevious")).value;
    var shRoomPrevious = (document.getElementById("shRoomPrevious")).value;
    var yuRoomPrevious = (document.getElementById("yuRoomPrevious")).value;

    electroAccount(previousTotal, total, cost, kaRoom, shRoom, yuRoom, kaRoomPrevious, shRoomPrevious, yuRoomPrevious);
}

function electroAccount(previousTotal, total, cost, kaRoom, shRoom, yuRoom, kaRoomPrevious, shRoomPrevious, yuRoomPrevious) {
    var totalAccountPerMonth = total - previousTotal; //Общий счетчик
    var pricePerWatt = cost; // цена за киловатт
    var totalCost = totalAccountPerMonth * pricePerWatt;

    var kaDifference = kaRoom - kaRoomPrevious; //счетчик первой комнаты 
    var shDifference = shRoom - shRoomPrevious; // счетчик второй комнаты
    var yuDifference = yuRoom - yuRoomPrevious; // счетчик третьей комнаты

    var totalAccountWithoutRooms = totalAccountPerMonth - (kaDifference + shDifference + yuDifference); // Количество киловатт "общего расхода" электроэнергии (коридор, туалет, кухня)
    var totalCostWithoutRooms = totalAccountWithoutRooms * pricePerWatt;
    var costCommunalElectro = totalCostWithoutRooms / 3;

    var kaRoomCost = kaDifference * pricePerWatt;
    var shRoomCost = shDifference * pricePerWatt;
    var yuRoomCost = yuDifference * pricePerWatt;

    var kaRoomFullCost = yuRoomCost + costCommunalElectro;
    var shRoomFullCost = kaRoomCost + costCommunalElectro;
    var yuRoomFullCost = shRoomCost + costCommunalElectro;

    kommunal(previousTotal, total, totalAccountPerMonth, totalCost, totalAccountWithoutRooms, totalCostWithoutRooms, costCommunalElectro);

    rasschet("ka", kaRoomPrevious, kaRoom, kaDifference, kaRoomCost, costCommunalElectro, kaRoomFullCost);
    rasschet("sh", shRoomPrevious, shRoom, shDifference, shRoomCost, costCommunalElectro, shRoomFullCost);
    rasschet("yu", yuRoomPrevious, yuRoom, yuDifference, yuRoomCost, costCommunalElectro, yuRoomFullCost);
}

function kommunal(previousTotal, total, totalAccountPerMonth, totalCost, totalAccountWithoutRooms, totalCostWithoutRooms, costCommunalElectro) {
    var oldValue = document.getElementById("komOldValue");
    var newValue = document.getElementById("komNewValue");
    var differentValue = document.getElementById("komDifference")
    var costVal = document.getElementById("costVal");
    var komVal = document.getElementById("komVal");
    var komCost = document.getElementById("komCost");
    var komCostPerRoom = document.getElementById("komCostPerRoom");

    oldValue.innerHTML = previousTotal;
    newValue.innerHTML = total;
    differentValue.innerHTML = totalAccountPerMonth;
    costVal.innerHTML = totalCost;
    komVal.innerHTML = totalAccountWithoutRooms;
    komCost.innerHTML = totalCostWithoutRooms;
    komCostPerRoom.innerHTML = costCommunalElectro;
}

function rasschet(secondName, roomPreviousValue, roomCurrentValue, roomDifference, roomCost, costCommunalElectro, roomFullCost) {
    var oldLiteral = secondName + "OldValue";
    var roomOldValue = document.getElementById(oldLiteral);
    var newLiteral = secondName + "NewValue";
    var roomNewValue = document.getElementById(newLiteral);
    var diffLiteral = secondName + "Difference";
    var roomDifferentValue = document.getElementById(diffLiteral);
    var costLiteral = secondName + "Cost";
    var roomCostValue = document.getElementById(costLiteral);
    var fullCostLiteral = secondName + "FullCost";
    var roomFullCostValue = document.getElementById(fullCostLiteral);

    roomOldValue.innerHTML = (roomPreviousValue);
    roomNewValue.innerHTML = (roomCurrentValue);
    roomCostValue.innerHTML = (roomCost);
    roomDifferentValue.innerHTML = (roomDifference);
    roomFullCostValue.innerHTML = (roomFullCost);

}

// Такая вот борода
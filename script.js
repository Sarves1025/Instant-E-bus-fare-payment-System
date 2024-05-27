let walletBalance = 0.0;
function calculateFare() {
const source = document.getElementById("source").value;
const destination = document.getElementById("destination").value;
// Simulated fare calculation
const fare = simulateFareCalculation(source, destination);
const fareResult = document.getElementById("fareResult");
fareResult.innerHTML = `Fare: $${fare.toFixed(2)}`;
}
function topUpWallet() {
// Simulate adding funds to the wallet
walletBalance += 1000.0;
const walletBalanceElement = document.getElementById("walletBalance");
walletBalanceElement.innerHTML = `Wallet Balance: $${walletBalance.toFixed(2)}`;
}

function payFare() {

const fare =
parseFloat(document.getElementById("fareResult").textContent.replace("Fare: $", ""));
if (walletBalance >= fare) {
walletBalance -= fare;
const walletBalanceElement = document.getElementById("walletBalance");
walletBalanceElement.innerHTML = `Wallet Balance:
$${walletBalance.toFixed(2)}`;
alert(`Fare of $${fare.toFixed(2)} paid from wallet.`);
} else {
alert("Insufficient balance in the wallet.");
}
}
function simulateFareCalculation(source, destination) {
// Simulated fare calculation based on source and destination
// You can define your fare calculation logic here.
// This is a simple example:
if (source === "Coimbatore" && destination === "Pollachi") {
return 40.0;
} else if (source === "Coimbatore" && destination === "Karur") {
return 100.0;
}
else if (source === "Coimbatore" && destination === "Palani") {
return 105.0;
}
else if (source === "Coimbatore" && destination === "Udumalpet") {
return 65.0;
}
else if (source === "Coimbatore" && destination === "Ottanchatram") {
return 115.0;
}
else if (source === "Tirupur" && destination === "Pollachi") {
return 60.0;
}
else if (source === "Tirupur" && destination === "Karur") {
return 80.0;
}
else if (source === "Tirupur" && destination === "Palani") {
return 75.0;
}
else if (source === "Tirupur" && destination === "Udumalpet") {
return 60.0;
}

else if (source === "Tirupur" && destination === "Ottanchatram") {
return 135.0;
}
else if (source === "Annur" && destination === "Pollachi") {
return 80.0;
}
else if (source === "Annur" && destination === "Karur") {
return 150.0;
}
else if (source === "Annur" && destination === "Palani") {
return 180.0;
}
else if (source === "Annur" && destination === "Udumalpet") {
return 125.0;
}
else if (source === "Annur" && destination === "Ottanchatram") {
return 135.0;
}
else if (source === "Mettupalayam" && destination === "Pollachi") {
return 80.0;
}
else if (source === "Mettupalayam" && destination === "Karur") {
return 130.0;
}
else if (source === "Mettupalayam" && destination === "Palani") {
return 170.0;
}
else if (source === "Mettupalayam" && destination === "Udumalpet") {
return 110.0;
}
else if (source === "Mettupalayam" && destination === "Ottanchatram") {
return 145.0;
}
else if (source === "Erode" && destination === "Pollachi") {
return 100.0;
}
else if (source === "Erode" && destination === "Karur") {
return 50.0;
}
else if (source === "Erode" && destination === "Palani") {
return 60.0;
}
else if (source === "Erode" && destination === "Udumalpet") {

return 75.0;
}
else if (source === "Erode" && destination === "Ottanchatram") {
return 127.0;
}
else {
return 0.0; // Invalid route
}
}
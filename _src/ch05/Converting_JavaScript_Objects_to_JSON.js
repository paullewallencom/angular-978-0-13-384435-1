var accountObj = {
    name: "Baggins",
    number: 10645,
    members: ["Frodo, Bilbo"],
    location: "Shire"
};
var accountStr = JSON.stringify(accountObj);
console.log(accountStr);
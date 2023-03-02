const age = 32;
const ageToDrink = 18;
const moneyOnPocket = 11; 
const requiredMoneyToDrink = 10.9;
const sober = "Yes"

function conditionToDrink() {
if (age >= ageToDrink && moneyOnPocket >= requiredMoneyToDrink && sober === "Yes") {
    return "Here is your cold pint!"
    } else {
            return "No cold pint for you!!!"
    }
}

console.log(conditionToDrink())

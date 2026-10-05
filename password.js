
let correctPassword = "987654"

for (let i=1; i<=5; i++) {
    let password = prompt("Enter your password")

    if (password === correctPassword){
        alert("phone unlocked")
    } else {
        alert("Incorrect password. Attempt " + i +" of 5");
        if (i === 5){
            alert("phone is locked. Try again after a minute")
        }
    }
}
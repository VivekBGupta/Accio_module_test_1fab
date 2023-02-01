let img1 = document.getElementById("image_1");
let img2 = document.getElementById("image_2");
let img3 = document.getElementById("image_3");
let img4 = document.getElementById("random");

let img1_form = document.getElementById("form")
let img2_data = document.getElementById("data")
let img3_dice = document.getElementById("dice")
let img4_ = document.getElementById("random")

let dice_img = document.getElementById("image")
let score = document.getElementById("score")
let error = document.getElementById("error")
let badLuck = document.getElementById("bad-luck")
let congrats = document.getElementById("congrats")
let Rdigit = document.getElementById("Rnumber")


let clicked_imag1 = true
let clicks = 0

img1.addEventListener("click", function () {
    if (clicked_imag1 == true) {
        img1_form.style.display = "block";
    }
    clicked_imag1 = false
});

img1_form.addEventListener("click", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let username = document.getElementById("username").value

    let user = { name, email, username }

    let userData = JSON.stringify(user)
    localStorage.setItem("username", userData)

    if (name != "" && username != "") {
        clicks++
    }
})

img2.addEventListener("click", function () {
    if (clicks > 0) {
        img1_form.style.display = "none";
        img2_data.style.display = "block";

        let data_name = document.getElementById("data-name")
        let data_username = document.getElementById("data-username")


        let user = localStorage.getItem("username")
        let data = JSON.parse(user)

        data_name.innerText = `${data.name}`
        data_username.innerText = `${data.username}`;
        clicks++
    }
});

img3.addEventListener("click", function () {
    // img1_form.style.display = "none";
    // img2_data.style.display = "none";
    if (clicks > 1) {
        img3_dice.style.display = "block";
    }
});

let tryagain = 0
let sum = 0
let attempt = 0

dice_img.addEventListener("click", function () {
    if (attempt < 3) {
        let diceNum = Math.floor(Math.random() * 6) + 1;
        score.innerHTML += diceNum + " ";
        sum += diceNum;
        attempt++;
        if (attempt == 3) {
            if (sum > 10) {
                img4.style.pointerEvents = "auto";
                error.innerText = "Now you can click on the fourth Image"
                img4_.style.display = "block";
            } else {
                if (tryagain == 1) {
                    badLuck.style.display = "block"
                } else {

                    error.innerText = "Try again, Sum is not greater than 10";
                    sum = 0
                    tryagain++
                    score.innerHTML = ""
                }
                attempt = 0;
            }
        }
    }
})

img4.addEventListener("click", function () {
    img2_data.style.display = "none";
    img3_dice.style.display = "none";
    congrats.style.display = "block";
    img4_.style.display = "none";

    let random_digit = generateString(12)
    Rdigit.innerText = `${random_digit}`;

});

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


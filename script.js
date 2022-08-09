const button = document.getElementById("btn");
const text = document.getElementById("color");
const textColor = text.style;
const body = document.body.style;

button.addEventListener("click", () => {
    color = random();
    text.innerHTML = color;
    textColor.color = color;
    body.backgroundColor = color;
})

function random() {
    let chars = 'ABCDEF0123456789';

    let str = '';
    for (let i = 0; i < 6; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return '#' + str;
}

//your JS code here. If required.

let counter = document.getElementById("counter");
let increment = document.getElementById("incrementBtn");

increment.addEventListener("click", () => {
    let value = parseInt(counter.innerText);
    alert(value);

    value++;
    counter.innerText = value;
})

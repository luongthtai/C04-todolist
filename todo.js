function main() {
    let li = document.getElementsByTagName("li");

    for (let i = 0; i < li.length; i++) {
        let span = document.createElement("span");
        span.innerHTML = "x";
        span.className = "close";
        li[i].appendChild(span);

        let lis = li[i];

        span.onclick = function () {
            lis.remove();
        }

        lis.onclick = function () {
            // lis.className = "checked"
            lis.classList.toggle("checked");
        }
    }
}

function newElement() {
    let input = document.getElementById("myInput");
    let value = input.value;
    let ul = document.getElementById("myUL");
    let liplus = document.createElement("li");
    liplus.innerHTML = value;
    ul.appendChild(liplus);

    main();
}

main();
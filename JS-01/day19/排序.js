var ouls = document.querySelector(".main ul");
var olis = document.querySelectorAll("li");
var newArr = [].slice.call(olis);
var data = 1;
function btn() {
    data *= -1
    newArr.sort(function (m, n) {
        return (m.innerHTML - n.innerHTML) * data;
    })

    for (let i = 0; i < newArr.length; i++) {
        ouls.appendChild(newArr[i]);
    }

}
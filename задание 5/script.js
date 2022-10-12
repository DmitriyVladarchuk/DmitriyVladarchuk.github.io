function price(){
    var n1, n2, res;
    n1 = document.getElementById('tb1').value;
    n2 = document.getElementById('tb2').value;
    var regex = /^[1-9]\d+$/;

    if (!regex.test(n1) || !regex.test(n2)) {
        alert("Введите корректные числа.");
        return false;
    }
    
    alert("Запрос выполняется");
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    res = n1 * n2;
    document.getElementById('output').innerHTML = "Итоговая цена: " + res;

}


    
window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let a = document.getElementById("click");
    a.addEventListener("Click", price);
});
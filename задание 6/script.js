function task1 (){
    var n1, n2, res;
    n1 = document.getElementById('field1').value;
    n2 = document.getElementById('field2').value;
    var regex = /^[1-9]\d+$/;

    if (!regex.test(n1) || !regex.test(n2))
    {
        alert("Неккоректный запрос, проверьте чтобы оба значения были положитенльными числами");
        return false;
    }
    
    alert("Ваш запрос выполняется");
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    res = n1 * n2;
    document.getElementById('output').innerHTML = "Итоговая цена: " + res;

}


    
window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let a = document.getElementById("click");
    a.addEventListener("Click",task1);
});

function updatePrice() {
    let s = document.getElementsByName("prodType");
    let select = s[0];
    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
      price = prices.prodTypes[priceIndex];
    }
    
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = (select.value == "2" ? "block" : "none");
    
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function(radio) {
      if (radio.checked) {
        let optionPrice = prices.prodOptions[radio.value];
        if (optionPrice !== undefined) {
          price += optionPrice;
        }
      }
    });

    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = (select.value == "3" ? "block" : "none");


    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        let propPrice = prices.prodProperties[checkbox.name];
        if (propPrice !== undefined) {
          price += propPrice;
        }
      }
    });
    
    let prodPrice = document.getElementById("prodPrice");
    prodPrice.innerHTML = price + " рублей";
  }
  
  function getPrices() {
    var kolvo;
    kolvo = document.getElementById('fieldCalc').value;
    return {
      prodTypes: [61 * kolvo, 1 * kolvo, 1 * kolvo],
      prodOptions: {
        option1: 3271 * kolvo,
        option2: 37 * kolvo, 
      },
      prodProperties: {
        prop1: 19162 * kolvo,
        prop2: 1297 * kolvo,
      }
    };
  }
  
  window.addEventListener('DOMContentLoaded', function (event) {

    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = "none";
    
    let s = document.getElementsByName("prodType");
    let select = s[0];
    select.addEventListener("change", function(event) {
      let target = event.target;
      console.log(target.value);
      updatePrice();
    });
    
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function(radio) {
      radio.addEventListener("change", function(event) {
        let r = event.target;
        console.log(r.value);
        updatePrice();
      });
    });
  
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener("change", function(event) {
        let c = event.target;
        console.log(c.name);
        console.log(c.value);
        updatePrice();
      });
    });
  
    updatePrice();
  });
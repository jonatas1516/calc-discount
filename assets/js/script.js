const values = [10, 244, 99, 2, 20, 33, 250];

const input = document.querySelector("#discount");

const paragraph1 = document.querySelector(".paragraph1 span");

const paragraph2 = document.querySelector(".paragraph2 span");

const paragraph3 = document.querySelector(".paragraph3 span");

const btn = document.querySelector(".btn");

btn.addEventListener("click", verify);

let valueTotalSD = 0;

let valueTotalCD = 0;

function verify() {
  if (input.value != "") {
    values.forEach((value) => {
      valueTotalSD += value;
      paragraph1.innerHTML = `${valueTotalSD.toFixed(2)}`;

      if (value > 30) {
        const discount = calculateDiscount(value, input.value);
        valueTotalCD = valueTotalCD + (value - discount);
      } else {
        valueTotalCD += value;
      }
      paragraph2.innerHTML = `${valueTotalCD.toFixed(2)}`;
    });

    paragraph3.innerHTML = `${(valueTotalSD - valueTotalCD).toFixed(2)}`;
  } else {
    alert("Digite o valor do desconto");
  }

  valueTotalSD = 0;

  valueTotalCD = 0;
}

function calculateDiscount(price, discount) {
  return (price * discount) / 100;
}

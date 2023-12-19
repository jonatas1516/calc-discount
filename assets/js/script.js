const paragraph1 = document.querySelector(".paragraph1 span");

const paragraph2 = document.querySelector(".paragraph2 span");

const values = [10, 244, 99, 2, 20, 33, 250];

const btn = document.querySelector(".btn");

btn.addEventListener("click", verify);

let valueTotalSD = 0;

let valueTotalCD = 0;

let check = 0;

function verify() {
  if (check == 0) {
    values.forEach((value) => {
      valueTotalSD += value;

      if (value > 30) {
        const discount = calculateDiscount(parseFloat(value), 10);
        valueTotalCD = parseFloat(valueTotalCD) + (value - discount);
      } else {
        valueTotalCD += value;
      }
    });
    check = 1;
  } else {
    alert("Recarrega a pagina");
  }

  paragraph1.innerHTML = `${valueTotalSD}`;

  paragraph2.innerHTML = `${valueTotalCD}`;
}

function calculateDiscount(price, discount) {
  return (parseFloat(price) * discount) / 100;
}

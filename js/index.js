let total = 0;
let discountApplied = false;

function handleClickBtn(target) {
  const selectedItemsContainer = document.getElementById("selected-items");
  const itemName = target.childNodes[3].childNodes[3].innerText;
  const li = document.createElement("li");
  li.innerText = itemName;
  selectedItemsContainer.appendChild(li);

  const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];

  total = parseInt(total) + parseInt(price);

  document.getElementById("total-price").innerText = total;

  if (total >= 200) {
    document.getElementById("apply-btn").removeAttribute("disabled");
  } else {
    document.getElementById("apply-btn").setAttribute("disabled", "true");
  }

  if (total > 0) {
    document.getElementById("purchase-btn").removeAttribute("disabled");
  } else {
    document.getElementById("purchase-btn").setAttribute("disabled", "true");
  }
}

document.getElementById("apply-btn").addEventListener("click", function () {
  const couponCode = document.getElementById("input-code").value;

  if (couponCode === "SELL200" && total >= 200) {
    const discountAmount = total * 0.2; // 20% discount
    const originalTotal = total; // Store the original total

    discount -= discountAmount;

    document.getElementById("discount").innerText = discountAmount.toFixed(2);
    document.getElementById("total-price").innerText = total.toFixed(2);

    discountApplied = true;

    // Calculate 'total price' - 'discount' = 'Total'
    const calculatedTotal = originalTotal - discountAmount;
    document.getElementById("total").innerText = calculatedTotal.toFixed(2);
  } else {
    alert("Invalid coupon code or Purchase up to 200TK");
    return;
  }
});

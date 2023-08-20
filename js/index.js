let total = 0

function handleClickBtn(target){
    const selectedItemsContainer = document.getElementById('selected-items')
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li')
    li.innerText = itemName
    selectedItemsContainer.appendChild(li)


    const price = target.childNodes[3].childNodes[5].innerText.split(' ')[0];

    total = parseInt(total)  + parseInt(price)
   
    document.getElementById('total-price').innerText=total

}
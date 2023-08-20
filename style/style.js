let products = document.querySelectorAll('#products');

let totalPriceString = document.getElementById('total-price');
let totalPrice = parseFloat(totalPriceString.innerText);

let finalPriceString = document.getElementById('final-price');
let finalPrice = parseFloat(finalPriceString.innerText)

let discountPrice = document.getElementById('discount-price');

let productList = document.getElementById('product-list');

let applyButton = document.querySelector('#btn-apply')

if(totalPrice > 200){
   applyButton.removeAttribute('disabled');
   applyButton.classList.remove('bg-[#E527B280]')   
   applyButton.classList.add('bg-[#E527B2]')   
}

if(totalPrice > 0){
   document.getElementById('btn-purchase').removeAttribute('disabled');
} 

applyButton.addEventListener('click', function(){
   let promoCodeField = document.getElementById('code-field').value;
   if(promoCodeField === 'SELL200'){
      let discountPercent = (totalPrice / 100) * 20;
      discountPrice.innerText = discountPercent.toFixed(2);

      totalPrice -= discountPercent;
      console.log(totalPrice)
      finalPriceString.innerText = totalPrice.toFixed(2);
   } else if(promoCodeField === ''){
      return alert("Input Your Promo Code")
   } else{
      return alert("Wrong Promo Code")
   }
})


for(let i = 0; i < products.length; i++){
   let product = products[i];
   let productNameString = product.childNodes[5];
   let productName = productNameString.innerText
   let productPriceString = product.childNodes[7].childNodes[0];
   let productPrice = parseFloat(productPriceString.innerText);

   product.addEventListener('click', function(){
      totalPrice += productPrice;
      totalPriceString.innerText = totalPrice.toFixed(2);      

      finalPrice += productPrice;
      finalPriceString.innerText = finalPrice.toFixed(2);

      let listCount = productList.childElementCount;

      let p = document.createElement('p');
      p.classList.add('text-lg', 'font-medium', 'leading-loose')
      p.innerHTML = `${listCount + 1}. ${productName}`;
      productList.appendChild(p);
   })
}
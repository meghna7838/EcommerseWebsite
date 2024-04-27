const divEle = document.querySelector('.products');

async function getProduct(id)
{
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const res = await response.json();
    displayProduct(res);
}

function displayProduct(res){
    const divcontainer = document.createElement('div');
    divcontainer.classList.add("product");
    divEle.appendChild(divcontainer);
    console.log(res);
    const thumnail = document.createElement("img");
    thumnail.setAttribute('src',res.thumbnail);
    console.log(res.thumbnail);
    thumnail.style.height = '150px';
    thumnail.style.width = '150px';
    thumnail.style.marginLeft='auto';
    thumnail.style.marginRight='auto';
    divcontainer.append(thumnail);
    const divHead = document.createElement('div');
    divHead.innerHTML = `<h4>${res.title}</h4>`;
    console.log(res.title);
    divcontainer.append(divHead);
    const divPrice = document.createElement('div');
    divPrice.innerHTML = `<h5>Price : ${res.price}</h5>`;
    console.log(res.title);
    divcontainer.append(divPrice);
    const addToCart = document.createElement("button");
    addToCart.textContent = "ADD TO CART";
    addToCart.setAttribute("id","btnATC"); 
    divcontainer.append(addToCart);
}

function getAllProducts()
{
    for(let i=1;i<=29;i++)
    {
        getProduct(i);
    }
}
getAllProducts();

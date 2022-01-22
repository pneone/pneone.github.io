const productsBtn = document.querySelectorAll('.product_btn');
const cartProductsList = document.querySelector('.modal-content');
const cart = document.querySelector('.cart');
const cartNavigation = document.querySelector('.trash');
const cartQuantity = cart.querySelector('.cart-body_count');
const fullPrice = document.querySelector('.sale_price');
const saleFullPrice = document.querySelector('.price_title');
const countsCartItems = cart.querySelector('.count');
let count = 0;
let price = 0;

const randomId = () => {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpaces = (str) => {
	return str.replace(/\s/g, '');
};

const normalPrice = (str) => {
	return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

const plusFullPrice = (currentPrice) => {
    console.log(currentPrice);
	return price += currentPrice;
};

const minusFullPrice = (currentPrice) => {
	return price -= currentPrice;
};

const calculateSale = () =>{
    saleProcent = (price/100)*40;
    return price - saleProcent;
};

const printQuantity = () => {
	let productsListLength = cartProductsList.querySelector('.modal_body').children.length;
	cartQuantity.textContent = productsListLength;
    console.log(productsListLength);
};

const printFullPrice = () => {
    cart.querySelector('.price').textContent =`${normalPrice(calculateSale())} `;
	fullPrice.textContent = `${normalPrice(calculateSale())} `;
};

const printSalePrice = () => {
    saleFullPrice.textContent = `${normalPrice(price)} `;
};

const generateCartProduct = (img, title, price, id) => {
	return `
    <div  class="cart_item" data-id="${id}" >
        <div class="cart_item_img"><img  src="${img}"  ></div>
        <div class="cart_price" style="display: none;">${price}</div>
        <div class="cart_item_title">${title}</div>
        <div class="cart_item_navigation">
            <button class="minus"><svg class="minus_svg" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.748047" y="0.944336" width="20.4932" height="20.4932" rx="5.5" stroke="#F19C31"/>
                <line x1="5.86719" y1="11.2021" x2="16.1255" y2="11.2021" stroke="#F19C31" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></button>
            <div class="count">1</div>
            <button class="plus"><svg class="plus_svg" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.826172" y="1.04883" width="20.4932" height="20.4932" rx="5.5" stroke="#F19C31"/>
                <line x1="5.94922" y1="11.3047" x2="16.2076" y2="11.3047" stroke="#F19C31" stroke-linecap="round"/>
                <line x1="11.0645" y1="6.16406" x2="11.0645" y2="16.4224" stroke="#F19C31" stroke-linecap="round"/>
            </svg></button>
            <button class="trash">
                <svg class="trash_svg" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.62725 1.84219H4.48365C4.56263 1.84219 4.62725 1.77757 4.62725 1.69859V1.84219H10.084V1.69859C10.084 1.77757 10.1486 1.84219 10.2276 1.84219H10.084V3.13458H11.3764V1.69859C11.3764 1.06496 10.8612 0.549805 10.2276 0.549805H4.48365C3.85002 0.549805 3.33486 1.06496 3.33486 1.69859V3.13458H4.62725V1.84219ZM13.674 3.13458H1.03729C0.719573 3.13458 0.462891 3.39126 0.462891 3.70897V4.28337C0.462891 4.36235 0.52751 4.42697 0.606489 4.42697H1.69066L2.13402 13.8147C2.16274 14.4268 2.66892 14.9097 3.28101 14.9097H11.4302C12.0441 14.9097 12.5485 14.4286 12.5772 13.8147L13.0206 4.42697H14.1048C14.1837 4.42697 14.2484 4.36235 14.2484 4.28337V3.70897C14.2484 3.39126 13.9917 3.13458 13.674 3.13458ZM11.292 13.6173H3.41923L2.98484 4.42697H11.7264L11.292 13.6173Z" fill="#F19C31"/>
                </svg>

            </button>
        </div>
    </div>
	`;
};

const deleteProducts = (productParent) => {
    let id = productParent.dataset.id;
    console.log(id);
	document.querySelector(`.card[data-id="${id}"]`).querySelector('.product_btn').disabled = false;
    let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.cart_price').textContent));
	minusFullPrice(currentPrice);
	printFullPrice();
    printSalePrice();
	productParent.remove();

	printQuantity();

};

const plusProductCount = () => {
    return count += 1;
    
}
const minusProductCount = () => {
    return count -= 1;
    
}

productsBtn.forEach(el => {
	el.closest('.card').setAttribute('data-id', randomId());

	el.addEventListener('click', (e) => {
		let self = e.currentTarget;
		let parent = self.closest('.card');
		let id = parent.dataset.id;
        console.log(id)
		let img = parent.querySelector('.card-img-top').getAttribute('src');
		let title = parent.querySelector('.title').textContent;
        let priceString = priceWithoutSpaces(parent.querySelector('.card_price').textContent);
        
		let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.card_price').textContent));
        console.log(priceString)

		plusFullPrice(priceNumber);
        printFullPrice();
        printSalePrice();
        // printCartCount();
		cartProductsList.querySelector('.modal_body').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceString, id));
		printQuantity();
        self.disabled = true;
		
	});
});

cartProductsList.querySelector('.modal_body').addEventListener('click', (e) => {
    if (e.target.classList.contains('trash_svg')) {
        
        deleteProducts(e.target.closest('.cart_item'));
    }
});

cartProductsList.querySelector('.modal_body').addEventListener('click', (e) => {
    if (e.target.classList.contains('plus_svg')) {
        console.log('ss')
        plusProductCount(); 
        console.log('count',count);
    }
    else if (e.target.classList.contains('minus_svg')) {
        
        if (count == 1){
            document.querySelector(`.card[data-id="${id}"]`).querySelector('.minus_svg').disabled = false;
        }else{
            console.log('ss')
            minusProductCount(); 
            console.log('count',count);
        }
        
    }
});
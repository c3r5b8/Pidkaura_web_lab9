// create map, id - max quantity
let max_product_quantity = {
    'product1_q': 4,
    'product2_q': 15,
    'product3_q': 3,
}

let product_quantity = {
    'product1_q': 1,
    'product2_q': 1,
    'product3_q': 1,
}

let product_price = {
    'product1_q': 1000,
    'product2_q': 450,
    'product3_q': 1235,
}

calculateTotal();

function add(id) {
    let product_q = document.getElementById(id);
    product_quantity[id] += 1;
    product_q.innerHTML = product_quantity[id];

    if (product_quantity[id] >= max_product_quantity[id]) {
        let addBtn = document.getElementById(id + '_add');
        addBtn.disabled = true;
    }
    calculateTotal();
}

function subtract(id) {
    let product_q = document.getElementById(id);
    product_quantity[id] -= 1;
    product_q.innerHTML = product_quantity[id];

    if (product_quantity[id] < max_product_quantity[id]) {
        let addBtn = document.getElementById(id + '_add');
        addBtn.disabled = false;
    }

    if (product_quantity[id] <= 0) {
        deleteProduct(id.slice(0, -2));
    }
    calculateTotal();
}

function deleteProduct(id) {
    let product = document.getElementById(id);
    product.style.display = 'none';
}

function calculateTotal() {
    let subTotal = document.getElementById('subtotal');
    let total = document.getElementById('total');

    let subtotal = 0;
    for (let key in product_quantity) {
        subtotal += product_quantity[key] * product_price[key];
    }

    subTotal.innerHTML = subtotal;

    let shipping = 100
    total.innerHTML = subtotal + shipping;
}

document.getElementById('product1_q_add').addEventListener('click', () => add('product1_q'));
document.getElementById('product2_q_add').addEventListener('click', () => add('product2_q'));
document.getElementById('product3_q_add').addEventListener('click', () => add('product3_q'));

document.getElementById('product1_q_min').addEventListener('click', () => subtract('product1_q'));
document.getElementById('product2_q_min').addEventListener('click', () => subtract('product2_q'));
document.getElementById('product3_q_min').addEventListener('click', () => subtract('product3_q'));

document.getElementById('product1_remove').addEventListener('click', () => deleteProduct('product1'));
document.getElementById('product2_remove').addEventListener('click', () => deleteProduct('product2'));
document.getElementById('product3_remove').addEventListener('click', () => deleteProduct('product3'));
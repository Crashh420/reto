let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoItems = document.getElementById('carrito-items');
    const totalElement = document.getElementById('total');
    
    // Limpiar la lista de items
    carritoItems.innerHTML = '';

    // Agregar los productos al carrito
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        carritoItems.appendChild(li);
    });

    // Actualizar el total
    total = carrito.reduce((acumulado, item) => acumulado + item.precio, 0);
    totalElement.textContent = total;
}

function finalizarCompra() {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío');
    } else {
        alert(`Gracias por tu compra! El total es: $${total}`);
        carrito = []; // Vaciar el carrito
        actualizarCarrito(); // Actualizar la vista del carrito
    }
}

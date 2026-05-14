// ===== Class =====
class Order {
    constructor(id, customerId, name, phone, service, category, quantity, price, status, date, bookingTime, type) {
        this.id = id;
        this.customerId = customerId;
        this.name = name;
        this.phone = phone;
        this.service = service;
        this.category = category;
        this.quantity = quantity;
        this.price = price;
        this.status = status;
        this.date = date;
        this.bookingTime = bookingTime;
        this.type = type;
    }
}

let orders = [];

// ===== Load =====
function loadFromLocalStorage() {
    try {
        let data = localStorage.getItem("orders");
        if (data) orders = JSON.parse(data);
    } catch {
        alert("Error loading data");
    }
}

// ===== Save =====
function saveToLocalStorage() {
    localStorage.setItem("orders", JSON.stringify(orders));
}

// ===== Price =====
function calculatePrice(service, quantity) {
    let b = service === "wash" ? 5 : 3;
    return b * quantity;
}

// ===== Add =====
function addOrder() {
    let customerId = document.getElementById("customerId").value;
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let service = document.getElementById("service").value;
    let category = document.getElementById("category").value;
    let quantity = document.getElementById("quantity").value;
    let bookingTime = document.getElementById("bookingTime").value;
    let type = document.getElementById("type").value;

    if (!name || !phone || !quantity || !bookingTime) {
        alert("Fill all fields");
        return;
    }

    let price = calculatePrice(service, quantity);
    let date = new Date().toLocaleDateString();

    let order = new Order(
        Date.now(),
        customerId,
        name,
        phone,
        service,
        category,
        quantity,
        price,
        "Pending",
        date,
        bookingTime,
        type
    );

    orders.push(order);
    saveToLocalStorage();
    renderOrders();

    alert("Booking Added ✅");
}

// ===== Delete =====
function deleteOrder(id) {
    orders = orders.filter(o => o.id !== id);
    saveToLocalStorage();
    renderOrders();
}

// ===== Status =====
function Status(id) {
    let order = orders.find(o => o.id === id);
    order.status = order.status === "Pending" ? "Done" : "Pending";
    saveToLocalStorage();
    renderOrders();
}

// ===== Render =====
function renderOrders(list = orders) {
    let container = document.getElementById("ordersList");
    container.innerHTML = "";

    list.forEach(o => {
        container.innerHTML += `
      <div class="card">
        <h3>${o.name} (#${o.customerId})</h3>
        <p>📞 ${o.phone}</p>
        <p>🧺 ${o.category} - ${o.service}</p>
        <p>📦 Qty: ${o.quantity}</p>
        <p>💰 ${o.price}$</p>
        <p>📅 ${o.date}</p>
        <p>⏰ ${o.bookingTime}</p>
        <p>🚚 ${o.type}</p>
        <p>Status: ${o.status}</p>

        <button onclick="Status(${o.id})">Change Status</button>
        <button onclick="deleteOrder(${o.id})">Delete</button>
        <button onclick="printOrder(${o.id})">Print 🧾</button>
      </div>
    `;
    });

    document.getElementById("count").innerText = orders.length;
    document.getElementById("total").innerText = calculateTotal();
}

// ===== Search =====
function searchOrders() {
    let value = document.getElementById("search").value.toLowerCase();
    let filtered = orders.filter(o => o.name.toLowerCase().includes(value));
    renderOrders(filtered);
}

// ===== Filter =====
function filterOrders(status) {
    if (status === "All") renderOrders();
    else renderOrders(orders.filter(o => o.status === status));
}

// ===== Total =====
function calculateTotal() {
    return orders.reduce((sum, o) => sum + o.price, 0);
}

// ===== Clear =====
function clearAll() {
    orders = [];
    saveToLocalStorage();
    renderOrders();
}

// ===== Theme =====
function Theme() {
    document.body.classList.toggle("dark");
}

// ===== Username =====
function saveUsername() {
    let name = document.getElementById("username").value;
    document.cookie = "username=" + name;
    document.getElementById("welcome").innerText = "Welcome " + name;
}

// ===== Print =====
function printOrder(id) {
    let o = orders.find(x => x.id === id);

    let w = window.open('', '', 'width=600,height=600');

    w.document.write(`
    <html>
    <body style="font-family:Arial;text-align:center">
      <h2>Laundry Invoice</h2>
      <p>ID: ${o.customerId}</p>
      <p>Name: ${o.name}</p>
      <p>Phone: ${o.phone}</p>
      <p>${o.category} - ${o.service}</p>
      <p>Qty: ${o.quantity}</p>
      <p>Price: ${o.price}$</p>
      <p>Date: ${o.date}</p>
      <p>Time: ${o.bookingTime}</p>
      <p>${o.type}</p>
      <hr>
      <p>Thank you ❤️</p>
    </body>
    </html>
  `);

    w.document.close();
    w.print();
}

// ===== INIT =====
document.getElementById("addBtn").addEventListener("click", addOrder);

loadFromLocalStorage();
renderOrders();
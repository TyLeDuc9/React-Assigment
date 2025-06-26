const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;
const cors = require('cors')
app.use(cors())

// Cấu hình để phục vụ ảnh tĩnh trong thư mục 'img'
app.use('/img', express.static(path.join(__dirname, 'img')));

// Dữ liệu đồ uống (sử dụng đường dẫn ảnh thay vì import)
const drinks = [
    {
        id: 1,
        name: "Pineapple Tequila",
        price: "150",
        des: "Delicious Pineapple Tequila Cocktail Recipe",
        imageUrl: "/img/product1.jpg"
    },
    {
        id: 2,
        name: "Sake Mojito",
        price: "90",
        des: "Refreshing Sake Mojito Recipe",
        imageUrl: "/img/product2.jpg"
    },
    {
        id: 3,
        name: "Mojito Hawái",
        price: "120",
        des: "Mojito Hawái By: Carlos Puche",
        imageUrl: "/img/product3.jpg"
    },
    {
        id: 4,
        name: "Blackberry Mocktail",
        price: "140",
        des: "Bursting with flavor and vibrancy",
        imageUrl: "/img/product4.jpg"
    },
    {
        id: 5,
        name: "Blackberry Mocktail",
        price: "155",
        des: "Bursting with flavor and vibrancy",
        imageUrl: "/img/product5.jpg"
    },
    {
        id: 6,
        name: "Vodka Sea Breeze",
        price: "165",
        des: "The Vodka Sea Breeze is a refreshing",
        imageUrl: "/img/product6.jpg"
    },
    {
        id: 7,
        name: "Matcha Bubble Tea",
        price: "55",
        des: "This simple but delicious Matcha Bubble Tea with Brown Sugar is the perfect afternoon treat",
        imageUrl: "/img/product7.jpg"
    },
    {
        id: 8,
        name: "Vodka Hot Chocolate",
        price: "80",
        des: "Creamy Vodka Hot Chocolate Recipe for Cozy Nights",
        imageUrl: "/img/product8.jpg"
    },
    {
        id: 9,
        name: "Oreo Milkshake Recipe",
        price: "50",
        des: "Get ready to whip up the most scrumptious Oreo",
        imageUrl: "/img/product9.jpg"
    },
    {
        id: 10,
        name: "Sakura Late",
        price: "140",
        des: "Sakura latte is a sweet and creamy warm drink that blends milk with cherry",
        imageUrl: "/img/product10.jpg"
    }
];

// Route trả về danh sách đồ uống
app.get('/v1/drinks', (req, res) => {
    res.status(200).json(drinks);
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:${PORT}`);
});

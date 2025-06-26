const express = require('express')
const path = require('path')
const app = express()
const PORT = 8080
const cors = require('cors')
app.use(cors())
app.use('/img', express.static(path.join(__dirname, 'img')))
const foods = [
    {
        id: 1,
        name: "Lipton Onion Soup Burger",
        price: "120",
        des: "Delicious Pineapple Tequila Cocktail Recipe",
        imageUrl: "/img/product1.jpg"
    },
    {
        id: 2,
        name: "Ramen",
        price: "150",
        des: "Shoyu ramen is a classic Japanese noodle",
        imageUrl: "/img/product2.jpg"
    },
    {
        id: 3,
        name: "Vietnamese Pho",
        price: "70",
        des: "Recipe video above",
        imageUrl: "/img/product3.jpg"
    },
    {
        id: 4,
        name: "Banh mi",
        price: "40",
        des: "Banh mi streetfood from Vietnam",
        imageUrl: "/img/product4.jpg"
    },
    {
        id: 5,
        name: "Vietnamese Broken Rice",
        price: "55",
        des: "Broken rice served with vegan ribs, tofu meat",
        imageUrl: "/img/product5.jpg"
    },
    {
        id: 6,
        name: "Spaghetti",
        price: "85",
        des: "Haitian Spaghetti is a flavorful pasta dish made with tomato sauce",
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
        name: "Lobster",
        price: "800",
        des: "I absolutely love preparing these grilled Lobster tails",
        imageUrl: "/img/product8.jpg"
    },
    {
        id: 9,
        name: "Steak",
        price: "200",
        des: "Soy salmon steak with sambal salad",
        imageUrl: "/img/product9.jpg"
    },
    {
        id: 10,
        name: "Pan Fried Ribeye Steak",
        price: "900",
        des: "This pan fried ribeye is the ultimate meat lover's entree",
        imageUrl: "/img/product10.jpg"
    }
]
app.get('/v1/foods', (req, res) => {
    console.log('📦 Gửi dữ liệu món ăn:', foods.length, 'items')
    res.status(200).json(foods);
})
app.listen(PORT, () => {
    console.log("Server is running");
})
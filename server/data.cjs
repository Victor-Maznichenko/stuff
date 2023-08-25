const { faker } = require('@faker-js/faker');

module.exports = () => {
    const data = { products: [], users: [], categories: [] }
    const getRandom = (arr) => arr[Math.floor((Math.random()*arr.length))];


    for (let i = 0; i < 20; i++) {
        data.categories.push({ 
            id: i, 
            name: faker.commerce.product(),
            image: faker.image.url()
        });

        data.users.push({
            id: i,
            email: faker.internet.email(),
            password: faker.internet.password(),
            name: faker.person.firstName(),
            avatar: faker.internet.avatar(),
            cart: [],
            favorite: []
        });
    }

    for (let i = 0; i < 800; i++) {
        data.products.push({ 
            id: i, 
            title: faker.commerce.productName(),
            price: Math.ceil(faker.commerce.price()),
            description: faker.commerce.productDescription(),
            category: getRandom(data.categories),
            images: [ faker.image.url(), faker.image.url(), faker.image.url() ],
            quantity: 0
        });
    }
    return data
}
const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');
// we can create a function to return a random / fake "Product"
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};
    
const newFakeProduct = createProduct();
console.log(newFakeProduct);


const createUser = () => {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        id: faker.datatype.uuid(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        password: faker.internet.password(),
    };
    
};


const newUser = createUser();
console.log(newUser);

const createCompany = () => {
    return {
        id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {street:faker.address.street(),
        city:faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
        },
    };
    
};

const newCompany = createCompany();
console.log(newCompany);

app.get("/api/users/new", (req, res) => {
    res.json( createUser() );
});

app.get("/api/companies/new", (req, res) => {
    res.json( createCompany() );
});

app.get("/api/user/company", (req, res) => {
    res.json({
        company: createCompany(),
        user: createUser()
    });
});

app.listen(8000)

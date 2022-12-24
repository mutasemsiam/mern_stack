const Product = require("../models/product.model");

module.exports.createProduct = (request, response) => {

    const { title, price, desc } = request.body;   
    Product.create({
        title,
        price,
        desc
    })

        .then(newProduct => response.json({product: newProduct}))
        .catch(err => response.json(err));
}

module.exports.findAllProducts = (request, response) => {
    Product.find()
        .then(allProducts => response.json({products: allProducts}))
        .catch(err => response.json(err));
}

module.exports.findOneProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
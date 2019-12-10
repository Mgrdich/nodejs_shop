const Product = require("../models/products");

exports.getProducts = (req, res) => {
    Product.fetchAll((products) => { //given to it when it is passed
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });

    });
};

exports.getProduct = (req, res) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        res.render('shop/product-detail', {
            product: product,
            pageTitle: product.title,
            path: `/products`,
        });

    });
};

exports.getIndex = (req, res) => {
    Product.fetchAll((products) => { //given to it when it is passed
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });

    });
};

exports.getCart = (req, res) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
    });
};

exports.postCart = (req, res) => {
    const prodID = req.body.productId;
    console.log(prodID);
    res.redirect('/');

};

exports.getCheckout = (req, res) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout',
    })
};

exports.getOrders = (req, res) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Orders',
    })
};
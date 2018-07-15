var Product = require('../models/product');
 
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
 new Product({
    imagePath: '/images/image2.jpeg',
     title: 'Thumbnail label',
     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
     price: 90
 }),
 new Product({
    imagePath: '/images/image3.jpeg',
    title: 'Thumbnail label',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
    price: 75
}),
new Product({
    imagePath: '/images/image4.jpeg',
    title: 'Thumbnail label',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
    price: 60
}),
new Product({
    imagePath: '/images/image5.jpeg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
    price: 25
}),
new Product({
    imagePath: '/images/image6.jpeg',
    title: 'Thumbnail label',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
    price: 50
}),
new Product({
    imagePath: '/images/image7.jpeg',
    title: 'Thumbnail label',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
    price: 55
}),
new Product({
    imagePath: '/images/image8.jpeg',
    title: 'Thumbnail label',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
    price: 35
}),
new Product({
    imagePath: '/images/image9.jpeg',
    title: 'Thumbnail label',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
    price: 65
}),
new Product({
    imagePath: '/images/image10.jpeg',
    title: 'Thumbnail label',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
    price: 85
})
];

Product.insertMany(products, function(err, docs) {
    if (err) {
        console.log(err);
    } 
    if (docs.length === products.length) {
        exit();
        
    console.log('Success!');
    } 
});

function exit() {
    mongoose.disconnect();
}
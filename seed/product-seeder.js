var Product = require('../models/product');
 
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');﻿

 var products = [
 new Product({
     imagePath: 'https://www.pexels.com/photo/blue-boots-classic-comfort-266840/',
     title: 'Thumbnail label',
     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
     price: 90
 }),
 new Product({
    imagePath: 'https://www.pexels.com/photo/footwear-leather-shoes-wear-267320/',
    title: 'Thumbnail label',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
    price: 75
}),
new Product({
    imagePath: 'https://www.pexels.com/photo/blue-leather-ankle-strap-black-heeled-sandals-40377/',
    title: 'Thumbnail label',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
    price: 60
}),
new Product({
    imagePath: 'https://www.pexels.com/photo/woman-in-a-window-247298/',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
    price: 25
}),
new Product({
    imagePath: 'https://www.pexels.com/photo/woman-in-white-and-multicolored-midi-dress-holding-door-908929/',
    title: 'Thumbnail label',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
    price: 50
}),
new Product({
    imagePath: 'https://www.pexels.com/photo/adult-armchair-attractive-beautiful-235498/',
    title: 'Thumbnail label',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
    price: 55
}),
new Product({
    imagePath: 'https://www.pexels.com/photo/black-framed-hippie-sunglasses-701877/',
    title: 'Thumbnail label',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
    price: 35
}),
new Product({
    imagePath: 'https://www.pexels.com/photo/accessory-box-time-watch-264722/',
    title: 'Thumbnail label',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
    price: 65
}),
new Product({
    imagePath: 'https://www.pexels.com/photo/adult-armchair-attractive-beautiful-235498/',
    title: 'Thumbnail label',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur debitis delectus deserunt dolore dolorem eum expedita, inventore nobis omnis perferendis possimus quas repellat soluta, sunt voluptate, voluptates! Assumenda, nulla?',
    price: 85
})
];

var done = 0;

for(var i = 0;i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done == products.length) {
            console.log('Products saved');
            exit();
        }
    });
}

function exit() { 
    mongoose.disconnect();
}

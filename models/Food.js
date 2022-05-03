'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var foodSchema = Schema( {
    restaurant: String,
    foodName: String,
    foodType: String,
    calories: Number,
} );

module.exports = mongoose.model( 'Food', foodSchema );

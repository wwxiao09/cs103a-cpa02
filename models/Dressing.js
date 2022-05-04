'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var dressingSchema = Schema( {
    dressingName: String,
    calories: Number,
    carbs: Number,
    restaurantName: Mixed,
} );

module.exports = mongoose.model( 'Dressing', dressingSchema );

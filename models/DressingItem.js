'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var DressingItemSchema = Schema( {
  userId: ObjectId,
  dressingID: ObjectId,
} );

module.exports = mongoose.model( 'DressingItem', DressingItemSchema);
const mongoose = require('mongoose');

// Defined schemas for each CSV type
const pickupSchema = new mongoose.Schema({
  cardId: { type: String, required: true },
  userId: { type: String, required: true },
  timestamp: { type: String, required: true },
  status: { type: String, default: 'PICKED_UP' },
  comment: { type: String, default: '' },
});

const deliveryExceptionSchema = new mongoose.Schema({
  cardId: { type: String, required: true },
  userId: { type: String, required: true },
  timestamp: { type: String, required: true },
  status: { type: String, default: 'DELIVERY_EXCEPTION' },
  comment: { type: String, default: '' },
});

const deliveredSchema = new mongoose.Schema({
  cardId: { type: String, required: true },
  userId: { type: String, required: true },
  timestamp: { type: String, required: true },
  status: { type: String, default: 'DELIVERED' },
  comment: { type: String, default: '' },
});

const returnedSchema = new mongoose.Schema({
  cardId: { type: String, required: true },
  userId: { type: String, required: true },
  timestamp: { type: String, required: true },
  status: { type: String, default: 'RETURNED' },
  comment: { type: String, default: '' },
});

const Pickup = mongoose.model('Pickup', pickupSchema);
const DeliveryException = mongoose.model('DeliveryException', deliveryExceptionSchema);
const Delivered = mongoose.model('Delivered', deliveredSchema);
const Returned = mongoose.model('Returned', returnedSchema);

module.exports = {
  Pickup,
  DeliveryException,
  Delivered,
  Returned,
};

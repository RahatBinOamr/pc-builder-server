const { default: mongoose } = require('mongoose');

const PcSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['In Stock', 'Out of Stock'],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  keyFeatures: {
    brand: { type: String },
    model: { type: String },
    specification: { type: String },
    port: { type: String },
    type: { type: String },
    resolution: { type: String },
    voltage: { type: String },
  },
  individualRating: {
    type: Number,
    min: 0,
    max: 5,
  },
  averageRating: {
    type: Number,
    min: 0,
    max: 5,
  },
  reviews: [{ type: String }],
});

const Builder = mongoose.model('pc_builders', PcSchema);
module.exports = Builder;

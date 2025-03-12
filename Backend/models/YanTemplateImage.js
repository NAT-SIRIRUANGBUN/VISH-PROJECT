const mongoose = require('mongoose');

const yanTemplateImageSchema = new mongoose.Schema({
  yan_template_image_id: { type: Number, required: true },
  yan_category: [{ type : Number }],
  yan_level: { type: Number, enum: [0,1,2,3], required: true },
  yan_image_base64: { type: String },
});

module.exports = mongoose.model('ํYanTemplateImage', yanTemplateImageSchema);
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const slugs = require("slugs");

const storeSchema = new mongoose.Schema({
    name: {
      type: String,
      trim: true,
      required: "Please enter a store name!"
    },
    slug: String,
    description: String,
    tags: [String]
});

storeSchema.pre('save', function(next) {
  if (!this.modified('name')) {
    return next(); // stops function from continuing
  }
  // TODO: Make slugs more resilient to duplicats
  this.slug = slug(this.name);
  next();
});

module.exports = mongoose.model('Store', storeSchema);

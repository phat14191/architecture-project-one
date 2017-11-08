const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//*5 from mongoose
const vocabularySchema = new Schema({
  vn: {
    type: String,
    required: true
  },
  en: {
    type: String,
    required: true
  },
  isMemorized: {
    type: Boolean,
    required: true
  }
});


// *6
                //model take 2 param ""
const Vocabulary = mongoose.model("Vocabulary", vocabularySchema);
//whatever model return will expose that module;
module.exports = Vocabulary;

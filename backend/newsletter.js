const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://oswin:oswinalex@cluster0.7mnzpn3.mongodb.net/?retryWrites=true&w=majority&dbname=newtest')
.then(()=>{
    console.log("Newsletter register schema connected ")

})

.catch(()=>{
    console.log("failed to connect")
})


const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
});

const Newsletter = mongoose.model('Newsletter', newsletterSchema);

module.exports = Newsletter;
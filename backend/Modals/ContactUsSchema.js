const mongoose = require('mongoose');

const ContactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    
    message: {
        type: String,
    }
    
    
});

const contact = new mongoose.model("users",ContactUsSchema);


module.exports = contact;
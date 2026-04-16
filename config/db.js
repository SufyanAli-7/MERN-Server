const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect("mongodb+srv://sufyanali:GMpzWNzg4pfc3LeP@cluster7.fm1apo4.mongodb.net/?appName=Cluster7")
        .then(() => {
            console.log('Connected to MongoDB');
        }).catch((err) => {
            console.error('Error connecting to MongoDB:', err);            
        });
}

module.exports = { connectDB };
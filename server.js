
const express = require('express');

const cors = require('cors');
const mongoose = require('mongoose');
const stroyRoutes = require('./routes/storyRoutes');


const app = express();
const PORT = process.env.PORT || 5000;


//! Middleware
app.use( express.json());

// RouteS
app.use( '/api/stories', stroyRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/emoji-stroy-generator', {
        useNewUrlParser: true,
        useUnifiedTopology: true,})
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.error('Error connecting to MongoDB:', error));

        app.listen(PORT,()=>{
            console.log(`Server running on port ${PORT}`);
        });
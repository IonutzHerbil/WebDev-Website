// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Use body-parser middleware to parse JSON and form data
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const mongoose = require('mongoose');

const url = `mongodb+srv://webclubutcluj:Bauspeweb@cluster0.vhftu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)

mongoose.connect(url)
// Define a Mongoose schema for form data
const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    programmingLanguages: String,
    dateSubmitted: { type: Date, default: Date.now }
});

const FormData = mongoose.model('FormData', formSchema);

app.post('/', async (req, res) => {
    const { name, email, message, programmingLanguages } = req.body;

    if (!name || !email || !message || !programmingLanguages) {
        return res.status(400).json({ error: 'Please fill in all fields.' });
    }

    try {
        const newFormData = new FormData({ name, email, message, programmingLanguages });
        await newFormData.save();
        res.status(200).json({ message: 'Form submitted and saved to database!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save form data.' });
    }
});

app.get('/', async (req, res) => {
    try {
        const formData = await FormData.find();
        res.status(200).json(formData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve form data.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

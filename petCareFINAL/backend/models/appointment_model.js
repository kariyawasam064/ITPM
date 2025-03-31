const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    petName: { type: String, required: true },
    email: { type: String, required: true },
    contactNumber: { type: String, required: true },
    doctorName: { type: String, required: true, ref: 'Vetenarian' },
    time: { type: String, required: true },
    status: { type: String, default: 'not accepted' } // New field for status
});

module.exports = mongoose.model('Appointment', appointmentSchema);

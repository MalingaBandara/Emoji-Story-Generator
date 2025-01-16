
const mongoose = require('mongoose');

const strorySchema = new mongoose.Schema({
emojiSequence: { type: [String], required: true },
 translation:  { type: String, required: true },
 authorNickname: { type: String, required: true },
 likes: { type: Number, default: 0 },
 {timestamps: true}
);

module.exports = mongoose.model('Story', strorySchema);
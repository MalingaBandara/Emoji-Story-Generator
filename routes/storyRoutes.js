const express = require('express');
const router = express.Router();

// trans function
const translateEmojiStory  = ( emojiSequence )=>{
    const emojiDictionary = {
        "😁": 'happy',
        "😂": 'laughing',
        "😅": 'grinning',
        "😂": 'winking',
        "😉": 'smiling',
        "😌": 'smile',
    }

    return emojiSequence.map( (emoji)=> emojiDictionary[emoji] || emoji ).join(" ");
};


//? Routings
//* Create a new emoji story 
router.post( '/', async (req, res)=>{
    const { emojiSequence } = req.body;
    const translation = translateEmojiStory(  emojiSequence );
    const newStroy = new Stroy({
        emojiSequence,
        translation,
        authorNickname: 'anonymous', // author
    });
    await newStroy.save();
    res.status( 201 ).json( newStroy );
} );


//* Get all stories
router.get( '/', async (req, res)=>{
    const stories = await Stroy.find({});
    res.status( 200 ).json( stories );
});

module.exports = router;
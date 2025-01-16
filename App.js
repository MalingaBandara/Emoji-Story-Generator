
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EmojiStroryGenerator() {
    const [emoji, setEmoji] = useState('');
    const [stories, setstories] = useState([]);

    useEffect(() => {
        axios.get('/api/stories').then(response => {
            setstories(response.data);
        });
        },[]);

        const handleSubmit = ()=>{
            const response = axios.post('/api/stories', {emojiSequence: emoji});
            setstories([...stories, response.data]);
        };

        return (
            <div>
            <h1>Emoji Story Generator</h1>
            <textarea value={emoji} onChange={(e) => setEmoji(e.target.value)} placeholder="Enter emoji sequence" ></textarea>
            <button onClick={handleSubmit}>Submit</button>
            <div>
                <h2>Stories</h2>
                {stories.map(story => (
                    <div key={story._id}>
                        <p>{story.authorNickname}</p>
                        <h3>Story ID: {story._id}</h3>
                        <p>{story.emojiSequence}</p>
                        <p>{story.story}</p>
            </div>))}
            </div>
        )

    }
# Emoji Story Generator

## Description
The Emoji Story Generator is a MERN (MongoDB, Express.js, React.js, Node.js) stack application that allows users to compose creative stories using emojis. Each emoji sequence is translated into a narrative, providing an engaging platform for users to share and enjoy stories made entirely with emojis.

---

## Features

- **Compose Emoji Stories**: Users can create stories by inputting sequences of emojis.
- **Automatic Translation**: Emoji sequences are translated into narratives using predefined rules.
- **Story Display**: All submitted stories are displayed along with their translations and the number of likes.
- **Community Interaction**: Users can like stories to show appreciation (future feature).

---

## Assumptions

1. **Emoji Input**: Users will input emojis as text, which the application will process as an array.
2. **Translation Rules**: The translation is based on a predefined emoji-to-text dictionary. For simplicity, only common emojis (e.g., 😊, 📖, ❤️) are initially supported.
3. **Author Nicknames**: Stories are submitted anonymously, with a default nickname of `"anonymous"`. This can be extended to support user accounts in the future.
4. **Like System**: The `likes` counter is initialized at `0` for each story.
5. **Scalability**: The backend is designed to support additional features, such as user authentication and advanced translation algorithms.

---

## Application Logic

### **Frontend Logic**
- **Story Composition**: Users input a sequence of emojis in a text area.
- **API Integration**: Submitting the story sends a POST request to the backend to save the story and generate a translation.
- **Dynamic Display**: All stories are fetched via a GET request and displayed dynamically.

### **Backend Logic**
- **Emoji Translation**:
  - An emoji dictionary maps common emojis to words (e.g., 😊 -> "happy").
  - The application checks for patterns in the emoji sequence and generates a narrative accordingly.
- **Database Interaction**:
  - Stories are stored in a MongoDB collection with fields for `emojiSequence`, `translation`, `authorNickname`, `likes`, and timestamps (`createdAt`, `updatedAt`).
  - Stories can be retrieved, added, or updated via RESTful endpoints.

### **Translation Logic**
A simple dictionary-based translation is used:
- **Input**: Emoji sequence (e.g., `["😊", "📖", "❤️"]`).
- **Translation**: Matches emojis to words (e.g., "A happy story about a book filled with love.").
- **Fallback**: If an emoji is not in the dictionary, it is left untranslated.

---

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API Client**: Axios

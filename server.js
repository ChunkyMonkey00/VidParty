const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let usedCodes = new Set();

function generateRoomCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let roomCode = '';
    for (let i = 0; i < 6; i++) {
        roomCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return roomCode;
}

app.get('/generate-room-code', (req, res) => {
    let roomCode;
    do {
        roomCode = generateRoomCode();
    } while (usedCodes.has(roomCode));

    usedCodes.add(roomCode);
    res.json({ roomCode });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

document.addEventListener('DOMContentLoaded', () => {
    const roomCodeDisplay = document.getElementById('roomCode');

    // Function to generate a random room code
    function generateRoomCode() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let roomCode = '';
        for (let i = 0; i < 6; i++) {
            roomCode += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return roomCode;
    }

    // Function to check if a room code is available
    async function isRoomCodeAvailable(roomCode) {
        try {
            const response = await fetch(`https://ancient-refuge-10338.herokuapp.com/check-room-code?roomCode=${roomCode}`, { method: 'GET' });
            const data = await response.json();
            return data.available;
        } catch (error) {
            console.error('Error checking room code availability:', error);
            return false;
        }
    }

    // Function to update the room code display
    function updateRoomCodeDisplay(roomCode) {
        roomCodeDisplay.textContent = roomCode;
    }

    // Function to handle hosting a room
    async function hostRoom() {
        let roomCode;
        do {
            roomCode = generateRoomCode();
        } while (!(await isRoomCodeAvailable(roomCode)));

        updateRoomCodeDisplay(roomCode);
        console.log('Room hosted successfully. Room code:', roomCode);

        // Add more logic here as needed, like creating a session, etc.
    }

    // Call the function to start hosting a room
    hostRoom();
});

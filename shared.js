// Define sizes and prices
const prices = {
    "8x12": 45, "12x8": 45,
    "12x16": 75, "16x12": 75,
    "16x20": 95, "20x16": 95,
    "16x24": 105, "24x16": 105,
    "24x36": 130, "36x24": 130
};

const sizes = {
    portrait: [
        { value: "8x12", text: '8" x 12"', width: 8, height: 12 },
        { value: "12x16", text: '12" x 16"', width: 12, height: 16 },
        { value: "16x20", text: '16" x 20"', width: 16, height: 20 },
        { value: "16x24", text: '16" x 24"', width: 16, height: 24 },
        { value: "24x36", text: '24" x 36"', width: 24, height: 36 }
    ],
    landscape: [
        { value: "12x8", text: '12" x 8"', width: 12, height: 8 },
        { value: "16x12", text: '16" x 12"', width: 16, height: 12 },
        { value: "20x16", text: '20" x 16"', width: 20, height: 16 },
        { value: "24x16", text: '24" x 16"', width: 24, height: 16 },
        { value: "36x24", text: '36" x 24"', width: 36, height: 24 }
    ]
};

function showMessage(message) {
    const messageModal = document.getElementById('messageModal');
    const modalMessage = document.getElementById('modalMessage');
    const closeModalBtn = document.getElementById('closeModalBtn');

    modalMessage.textContent = message;
    messageModal.style.display = 'flex';

    closeModalBtn.addEventListener('click', () => {
        messageModal.style.display = 'none';
    });
    window.addEventListener('click', (event) => {
        if (event.target === messageModal) {
            messageModal.style.display = 'none';
        }
    });
}

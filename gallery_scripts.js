document.addEventListener('DOMContentLoaded', () => {
    const gallerySelects = document.querySelectorAll('.gallery-size-select');
    const galleryBuyButtons = document.querySelectorAll('.gallery-buy-btn');

    // Populate dropdowns with landscape sizes
    const landscapeSizes = sizes.landscape;
    gallerySelects.forEach((select, index) => {
        landscapeSizes.forEach(size => {
            const option = document.createElement('option');
            option.value = size.value;
            option.textContent = size.text;
            select.appendChild(option);
        });

        // Set up event listener for change
        select.addEventListener('change', () => {
            const selectedSizeValue = select.value;
            const priceDisplay = document.getElementById(`gallery-item-${index + 1}-price`);
            const price = prices[selectedSizeValue];
            priceDisplay.textContent = `Price: $${price}`;
        });

        // Set initial price display
        const initialPrice = prices[select.value];
        const priceDisplay = document.getElementById(`gallery-item-${index + 1}-price`);
        if (initialPrice) {
            priceDisplay.textContent = `Price: $${initialPrice}`;
        } else {
            priceDisplay.textContent = `Price: TBD`;
        }
    });

    // Set up event listeners for buy buttons
    galleryBuyButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const selectElement = document.getElementById(`gallery-item-${index + 1}-size`);
            const selectedSizeValue = selectElement.value;
            const price = prices[selectedSizeValue];
            const selectedSizeText = selectElement.options[selectElement.selectedIndex].text;
            const message = `Added Artwork ${index + 1} (${selectedSizeText}) to the cart for $${price}!`;
            showMessage(message);
        });
    });
});

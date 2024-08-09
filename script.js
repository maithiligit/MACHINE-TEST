const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // 1. Get User Input
    const name = document.getElementById('name').value;
    const photoFile = document.getElementById('photo').files[0];
    const rank = document.getElementById('rank').value;

    // 2. Generate a Random ID (Auto-generated)
    const id = generateRandomID();

    // 3. Handle Image Upload (Using HTML5 FileReader)
    const reader = new FileReader();
    reader.onload = function (e) {
        // 4. Generate PDF/Image (using a library like jsPDF or html2canvas)
        //  - This is where you'd use a library to create the PDF/Image
        //  - Include a styling section (like 'style.css') for the PDF/Image

        // Example using jsPDF (install using npm install jspdf):
        const doc = new jsPDF(); 
        doc.addImage(e.target.result, 'JPEG', 10, 10, 100, 100); // Add image
        doc.text(`ID: ${id}`, 10, 120); // Add ID
        doc.text(`User Name: ${name}`, 10, 130); // Add name
        doc.text(`Rank: ${rank}`, 10, 140); // Add rank
        doc.save('user_data.pdf'); // Save the PDF

        // Alternatively, you could use html2canvas to take a snapshot 
        // of a section of your HTML to create an image.
    }

    if (photoFile) {
        reader.readAsDataURL(photoFile);
    } else {
        // Handle case where no photo is selected (e.g., use placeholder image)
    }
});

// Helper function to generate a random ID
function generateRandomID() {
    return '#' + Math.floor(Math.random() * 900000) + 100000;
}
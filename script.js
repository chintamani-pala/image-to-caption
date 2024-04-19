let selected=""
document.getElementById("imagelink").value=""
document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Get the selected file
    const reader = new FileReader();

    reader.onload = function(e) {
        const imagePreview = document.getElementById('imagePreview');
        const img = document.createElement('img');
        img.src = e.target.result; // Set the source of the image to the result of FileReader
        img.classList.add('preview-image'); // Optional: Add CSS class for styling
        imagePreview.innerHTML = ''; // Clear previous preview
        imagePreview.appendChild(img); // Append the new image to the preview container
    };

    reader.readAsDataURL(file); // Read the file as a Data URL
    document.getElementById("dismiss-image").style.display="block"
    document.getElementById("link").style.display="none"
    selected="image"
});
function clearImagePreview() {
    document.getElementById('imagePreview').innerHTML = '';
    document.getElementById("dismiss-image").style.display="none"
    document.getElementById("link").style.display="block"
    selected=""
}

document.getElementById("imagelink").addEventListener("keyup",()=>{
    if(document.getElementById("imagelink").value=="" || document.getElementById("imagelink").value==null || document.getElementById("imagelink").value==undefined){
        document.getElementById("image").style.display="block"
        selected=""
    }
    else{
        document.getElementById("image").style.display="none"
        selected="link"
    }
})
let selected = "";
const imagelink = document.getElementById("imagelink");
const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');
const dismissImage = document.getElementById("dismiss-image");
const imageInputContainer = document.getElementById("imageInputContainer");
const link = document.getElementById("link");
const image = document.getElementById("image");

imagelink.value = "";

imageInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.classList.add('preview-image');
        imagePreview.innerHTML = '';
        imagePreview.appendChild(img);
    };

    reader.readAsDataURL(file);
    dismissImage.style.display = "block";
    imageInputContainer.style.display = "none";
    link.style.display = "none";
    selected = "image";
});

function clearImagePreview() {
    imagePreview.innerHTML = '';
    dismissImage.style.display = "none";
    link.style.display = "block";
    imageInputContainer.style.display = "flex";
    selected = "";
}

imagelink.addEventListener("keyup", () => {
    const linkValue = imagelink.value;
    if (!linkValue) {
        image.style.display = "block";
        selected = "";
    } else {
        image.style.display = "none";
        selected = "link";
    }
});

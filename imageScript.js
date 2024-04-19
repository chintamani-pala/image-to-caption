const uploadToCloudinary = async () => {
    const cloudName = 'dxy4rpbwk';
    const uploadPreset = 'imagetotext';
    
    const imageInput = document.getElementById('imageInput').files[0];
    const formData = new FormData();
    formData.append('file', imageInput);
    formData.append('upload_preset', uploadPreset);

    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        return data.secure_url;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error; // Re-throw the error to be caught by the caller
    }
}

function genCaptionFromUrl(url) {
    fetch(`https://image-to-text-seven-dusky.vercel.app/generate?imageUrl=${url}`)
        .then(response => {
            // Check if the response is in JSON format
            if (response.headers.get('content-type').includes('application/json')) {
                return response.json();
            } else {
                // If not JSON, handle the response as text
                return response.text();
            }
        })
        .then(data => {
            // Display the parsed data in the result element
            document.getElementById("result").style.display = "block";
            document.getElementById('result').innerHTML = "Loading...";
            document.getElementById('result').innerHTML = typeof data === 'object' ? data.text : data;
            document.getElementById("generate-caption").disabled=false
            document.getElementById("generate-caption").style.backgroundColor="#6366F1"

        })
        .catch(error => {
            document.getElementById('result').innerHTML = error;
            document.getElementById("generate-caption").disabled=false
            document.getElementById("generate-caption").style.backgroundColor="#6366F1"
        });
}

document.getElementById('generate-caption').addEventListener('click', async function() {
    document.getElementById("generate-caption").disabled=true
    document.getElementById("generate-caption").style.backgroundColor="#636964"
    if (selected === 'link') {    
        let url = document.getElementById('imagelink').value;
        url = url.trim();
        document.getElementById("result").style.display = "block";
        document.getElementById('result').innerHTML = "Generating...";
        if (url === "" || url === null || url === undefined) {
            document.getElementById('result').innerHTML = "Enter a valid URL";
            return;
        }
        genCaptionFromUrl(url);
    } else if (selected === 'image') {
        try {
            document.getElementById("result").style.display = "block";
            document.getElementById('result').innerHTML = "Uploading...";
            let url = await uploadToCloudinary();
            document.getElementById('result').innerHTML = "Generating...";
            genCaptionFromUrl(url);
        } catch (error) {
            document.getElementById('result').innerHTML = 'Error uploading image';
        }
    } else {
        document.getElementById("result").style.display = "block";
        document.getElementById('result').innerHTML = "Enter a valid Input";
    }
});

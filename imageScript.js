// // function uploadToCloudinary() {
// //     const cloudName = 'dxy4rpbwk';
// //     const uploadPreset = 'imagetotext';
    
// //     const imageInput = document.getElementById('image').files[0];
// //     const formData = new FormData();
// //     formData.append('file', imageInput);
// //     formData.append('upload_preset', uploadPreset);

// //     fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
// //         method: 'POST',
// //         body: formData
// //     })
// //     .then(response => response.json())
// //     .then(data => {
// //         console.log('Uploaded image link:', data);
// //     })
// //     .catch(error => {
// //         console.error('Error uploading image:', error);
// //     });
// // }

// // document.getElementById('generate-caption').addEventListener('click', function() {
// //     if(selected=="link"){    
// //     let url = document.getElementById('imagelink').value;
// //     url=url.trim()
// //     document.getElementById("result").style.display="block";
// //     document.getElementById('result').innerHTML = "Loading...";
// //     console.log(url)
// //     if(selected=="Link" && url=="" || url==null || url==undefined){
// //         document.getElementById('result').innerHTML = "Enter a valid URL";
// //         return
// //     }
// //     fetch(`https://image-to-text-seven-dusky.vercel.app/generate?imageUrl=${url}`)
// //         .then(response => {
// //             // Check if the response is in JSON format
// //             if (response.headers.get('content-type').includes('application/json')) {
// //                 return response.json();
// //             } else {
// //                 // If not JSON, handle the response as text
// //                 return response.text();
// //             }
// //         })
// //         .then(data => {
// //             // Display the parsed data in the result element
// //             document.getElementById('result').innerHTML = typeof data === 'object' ? data.text : data;
// //         })
// //         .catch(error => {
// //             document.getElementById('result').innerHTML = error;
// //         });
// //     }
// //     else if(selected=="image"){
// //         uploadToCloudinary()
// //     }
// //     else{
// //         document.getElementById("result").style.display="block";
// //         document.getElementById('result').innerHTML = "Enter a valid URL";
// //     }
// // });





// const uploadToCloudinary = async () =>{
//     const cloudName = 'dxy4rpbwk';
//     const uploadPreset = 'imagetotext';
    
//     const imageInput = document.getElementById('imageInput').files[0];
//     const formData = new FormData();
//     formData.append('file', imageInput);
//     formData.append('upload_preset', uploadPreset);

//     fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Uploaded image link:', data.secure_url);
//         return data.secure_url
//         // Here you can handle the uploaded image link, for example, display it to the user
//         // You can also trigger caption generation or perform other actions based on the uploaded image
//     })
//     .catch(error => {
//         console.error('Error uploading image:', error);
//         // Handle errors, such as displaying an error message to the user
//     });
// }

// function genCaptionFromUrl(url){
//     fetch(`https://image-to-text-seven-dusky.vercel.app/generate?imageUrl=${url}`)
//             .then(response => {
//                 // Check if the response is in JSON format
//                 if (response.headers.get('content-type').includes('application/json')) {
//                     return response.json();
//                 } else {
//                     // If not JSON, handle the response as text
//                     return response.text();
//                 }
//             })
//             .then(data => {
//                 // Display the parsed data in the result element
//                 document.getElementById('result').innerHTML = typeof data === 'object' ? data.text : data;
//             })
//             .catch(error => {
//                 document.getElementById('result').innerHTML = error;
//             });
// }
// document.getElementById('generate-caption').addEventListener('click', async function() {
//     if (selected === 'link') {    
//         let url = document.getElementById('imagelink').value;
//         url = url.trim();
//         document.getElementById("result").style.display = "block";
//         document.getElementById('result').innerHTML = "Loading...";
//         console.log(url);
//         if (url === "" || url === null || url === undefined) {
//             document.getElementById('result').innerHTML = "Enter a valid URL";
//             return;
//         }
//         genCaptionFromUrl(url)
//     } else if (selected === 'image') {
//         let url=await uploadToCloudinary(()=>{
//             console.log("accepted")
//         });
//         genCaptionFromUrl(url)
//     } else {
//         document.getElementById("result").style.display = "block";
//         document.getElementById('result').innerHTML = "Enter a valid option";
//     }
// });




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
        console.log('Uploaded image link:', data.secure_url);
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

        })
        .catch(error => {
            document.getElementById('result').innerHTML = error;
        });
}

document.getElementById('generate-caption').addEventListener('click', async function() {
    if (selected === 'link') {    
        let url = document.getElementById('imagelink').value;
        url = url.trim();
        document.getElementById("result").style.display = "block";
        document.getElementById('result').innerHTML = "Generating...";
        console.log(url);
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

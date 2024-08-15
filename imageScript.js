// const uploadToCloudinary = async () => {
//     const cloudName = "dxy4rpbwk";
//     const uploadPreset = "imagetotext";
  
//     const imageInput = document.getElementById("imageInput").files[0];
//     const formData = new FormData();
//     formData.append("file", imageInput);
//     formData.append("upload_preset", uploadPreset);
  
//     try {
//       const response = await fetch(
//         `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );
//       const data = await response.json();
//       return data.secure_url;
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       throw error;
//     }
//   };






  
//   const getRandomColor = () => {
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += Math.floor(Math.random() * 16).toString(16);
//     }
//     return color;
//   };
  
//   const getBackgroundColor = () => {
//     let color;
//     do {
//       color = getRandomColor();
//     } while (color === "#000000" || color === "#FFFFFF");
    
//     // Convert hex color to RGBA with reduced opacity
//     const hexToRgba = (hex, alpha) => {
//       const r = parseInt(hex.slice(1, 3), 16);
//       const g = parseInt(hex.slice(3, 5), 16);
//       const b = parseInt(hex.slice(5, 7), 16);
//       return `rgba(${r}, ${g}, ${b}, ${alpha})`;
//     };
  
//     return hexToRgba(color, 0.3); // Set opacity to 0.5
//   };
  
//   const showData = (data) => {
//     const mainRescon = document.getElementById("result");
  
//     // Clear previous content
//     mainRescon.innerHTML = "";
  
//     // Check if data is an object and has captions property
//     const dataArray = Array.isArray(data.captions) ? data.captions : [data];
  
//     dataArray.forEach((item) => {
//       const pElement = document.createElement("p");
//       pElement.style.backgroundColor = getBackgroundColor();
//       pElement.style.padding = "10px";
//       pElement.style.marginBottom = "10px";
//       pElement.style.fontSize = "18px"; // Set a default font size for captions
//       pElement.innerHTML = item;
//       mainRescon.appendChild(pElement);
//     });
//   };
  

// const clearResult = () =>{
//     document.getElementById("result").innerHTML = ""
// }


//   const genCaptionFromUrl = async (ImgUrl) => {
//     const useEmoji = document.getElementById("emoji").value == "true" ? true : false 
//     const useHashtag = document.getElementById("hashtags").value == "true" ? true : false 
//     const limitOdCaption = document.getElementById("captionsCount").value
//     try {
//       const url = "https://image-to-caption.com/api/generateCaption";
//       const payload = {
//         imageUrl: ImgUrl,
//         useEmojis: useEmoji,
//         useHashtags: useHashtag,
//         limit: limitOdCaption,
//       };
  
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });
  
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
  
//       const data = await response.json();
//       document.getElementById("result").style.display = "block";
//       document.getElementById("result").innerHTML = "Loading...";
//       clearResult()
//       showData(data);
//       document.getElementById("generate-caption").disabled = false;
//       document.getElementById("generate-caption").style.backgroundColor =
//         defaultBtnColor;
//     } catch (error) {
//       console.error("Error:", error);
//       clearResult()
//       const errorEle = document.createElement("p");
//       errorEle.innerHTML = "Error generating caption";
//       errorEle.style.fontSize = "24px";
//       errorEle.style.backgroundColor = getBackgroundColor();
//       clearResult()
//       document.getElementById("result").appendChild(errorEle);
//       document.getElementById("generate-caption").style.backgroundColor =
//         defaultBtnColor;
//       document.getElementById("generate-caption").disabled = false;
//     }
//   };
  
//   document
//     .getElementById("generate-caption")
//     .addEventListener("click", async function () {
//       document.getElementById("generate-caption").disabled = true;
//       document.getElementById("generate-caption").style.backgroundColor =
//         "#636964";
//         clearResult()
//       let url = "";
//       if (selected === "link") {
//         url = document.getElementById("imagelink").value.trim();
//         if (!url) {
//           document.getElementById("result").innerHTML = "Enter a valid URL";
//           document.getElementById("generate-caption").disabled = false;
//           document.getElementById("generate-caption").style.backgroundColor =
//             defaultBtnColor;
//           return;
//         }
//         document.getElementById("result").style.display = "block";
//         const loadingElem = document.createElement("p");
//         clearResult()
//         loadingElem.innerHTML = "Generating...";
//         loadingElem.style.backgroundColor = getBackgroundColor();
//         loadingElem.style.fontSize = "24px"; // Make the text size large
//         document.getElementById("result").appendChild(loadingElem);
//         genCaptionFromUrl(url);
//       } else if (selected === "image") {
//         try {
//           document.getElementById("result").style.display = "block";
//           const uploadingElem = document.createElement("p");
//           clearResult()
//           uploadingElem.innerHTML = "Uploading...";
//           uploadingElem.style.backgroundColor = getBackgroundColor();
//           uploadingElem.style.fontSize = "24px"; // Make the text size large
//           document.getElementById("result").appendChild(uploadingElem);
//           let url = await uploadToCloudinary();
//           const generatingElem = document.createElement("p");
//           generatingElem.style.backgroundColor = getBackgroundColor();
//           clearResult()
//           generatingElem.innerHTML = "Generating...";
//           generatingElem.style.fontSize = "24px"; // Make the text size large
//           document.getElementById("result").innerHTML=""
//           document.getElementById("result").appendChild(generatingElem);
//           genCaptionFromUrl(url);
//         } catch (error) {
//           const errorElem = document.createElement("p");
//           clearResult()
//           errorElem.innerHTML = "Error uploading image";
//           errorElem.style.fontSize = "24px"; // Make the text size large
//           document.getElementById("result").appendChild(errorElem);
//           document.getElementById("generate-caption").style.backgroundColor =
//             defaultBtnColor;
//           document.getElementById("generate-caption").disabled = false;
//         }
//       } else {
//         clearResult()
//         document.getElementById("result").style.display = "block";
//         const invalidInputElem = document.createElement("p");
//         invalidInputElem.innerHTML = "Enter a valid Input";
//         invalidInputElem.style.backgroundColor = getBackgroundColor();
//         invalidInputElem.style.fontSize = "24px"; // Make the text size large
//         document.getElementById("result").appendChild(invalidInputElem);
//         document.getElementById("generate-caption").disabled = false;
//         document.getElementById("generate-caption").style.backgroundColor =
//           defaultBtnColor;
//       }
//     });
  




const cloudName = "dxy4rpbwk";
const uploadPreset = "imagetotext";

// Cache DOM elements
const defaultBtnColor = "rgb(59 130 246)"
const resultElement = document.getElementById("result");
const generateCaptionButton = document.getElementById("generate-caption");
const fileInput = document.getElementById("imageInput");
const imageLinkInput = document.getElementById("imagelink");
const emoji = document.getElementById("emoji");
const hashtags = document.getElementById("hashtags");
const captionsCount = document.getElementById("captionsCount");

const uploadToCloudinary = async () => {
    const formData = new FormData();
    formData.append("file", fileInput.files[0]);
    formData.append("upload_preset", uploadPreset);

    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        return data.secure_url;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
};

const getRandomColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 16).toString(16);
    }
    return color;
};

const getBackgroundColor = () => {
    let color;
    do {
        color = getRandomColor();
    } while (color === "#000000" || color === "#FFFFFF");

    const hexToRgba = (hex, alpha) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    return hexToRgba(color, 0.3);
};

const showData = (data) => {
    resultElement.innerHTML = "";

    const dataArray = Array.isArray(data.captions) ? data.captions : [data];
    dataArray.forEach(item => {
        const pElement = document.createElement("p");
        pElement.style.backgroundColor = getBackgroundColor();
        pElement.style.padding = "10px";
        pElement.style.marginBottom = "10px";
        pElement.style.fontSize = "18px";
        pElement.innerHTML = item;
        resultElement.appendChild(pElement);
    });
};

const clearResult = () => {
    resultElement.innerHTML = "";
};

const genCaptionFromUrl = async (ImgUrl) => {
    const useEmoji = emoji.value === "true";
    const useHashtag = hashtags.value === "true";
    const limitOdCaption = captionsCount.value;
    
    try {
        const url = "https://image-to-caption.com/api/generateCaption";
        const payload = { imageUrl: ImgUrl, useEmojis: useEmoji, useHashtags: useHashtag, limit: limitOdCaption };

        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        resultElement.style.display = "block";
        resultElement.innerHTML = "Loading...";
        clearResult();
        showData(data);
        generateCaptionButton.disabled = false;
        generateCaptionButton.style.backgroundColor = defaultBtnColor;
    } catch (error) {
        console.error("Error:", error);
        clearResult();
        const errorEle = document.createElement("p");
        errorEle.innerHTML = "Error generating caption";
        errorEle.style.fontSize = "24px";
        errorEle.style.backgroundColor = getBackgroundColor();
        resultElement.appendChild(errorEle);
        generateCaptionButton.style.backgroundColor = defaultBtnColor;
        generateCaptionButton.disabled = false;
    }
};

generateCaptionButton.addEventListener("click", async () => {
    generateCaptionButton.disabled = true;
    generateCaptionButton.style.backgroundColor = "#636964";
    clearResult();

    if (selected === "link") {
        const url = imageLinkInput.value.trim();
        if (!url) {
            resultElement.innerHTML = "Enter a valid URL";
            generateCaptionButton.disabled = false;
            generateCaptionButton.style.backgroundColor = defaultBtnColor;
            return;
        }
        resultElement.style.display = "block";
        const loadingElem = document.createElement("p");
        loadingElem.innerHTML = "Generating...";
        loadingElem.style.backgroundColor = getBackgroundColor();
        loadingElem.style.fontSize = "24px";
        resultElement.appendChild(loadingElem);
        genCaptionFromUrl(url);
    } else if (selected === "image") {
        try {
            resultElement.style.display = "block";
            const uploadingElem = document.createElement("p");
            uploadingElem.innerHTML = "Uploading...";
            uploadingElem.style.backgroundColor = getBackgroundColor();
            uploadingElem.style.fontSize = "24px";
            resultElement.appendChild(uploadingElem);

            const imgUrl = await uploadToCloudinary();
            const generatingElem = document.createElement("p");
            generatingElem.innerHTML = "Generating...";
            generatingElem.style.backgroundColor = getBackgroundColor();
            generatingElem.style.fontSize = "24px";
            clearResult();
            resultElement.appendChild(generatingElem);
            genCaptionFromUrl(imgUrl);
        } catch (error) {
            const errorElem = document.createElement("p");
            clearResult();
            errorElem.innerHTML = "Error uploading image";
            errorElem.style.fontSize = "24px";
            resultElement.appendChild(errorElem);
            generateCaptionButton.style.backgroundColor = defaultBtnColor;
            generateCaptionButton.disabled = false;
        }
    } else {
        clearResult();
        resultElement.style.display = "block";
        const invalidInputElem = document.createElement("p");
        invalidInputElem.innerHTML = "Enter a valid Input";
        invalidInputElem.style.backgroundColor = getBackgroundColor();
        invalidInputElem.style.fontSize = "24px";
        resultElement.appendChild(invalidInputElem);
        generateCaptionButton.disabled = false;
        generateCaptionButton.style.backgroundColor = defaultBtnColor;
    }
});

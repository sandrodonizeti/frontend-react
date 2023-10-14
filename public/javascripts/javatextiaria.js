const textarea = document.getElementById('textiaria');
textarea.scrollTop = textarea.scrollHeight;

const uploadButton = document.getElementById("upload-button");
const imagePreview = document.getElementById("image-preview");

uploadButton.addEventListener("change", function () {
  const selectedFile = uploadButton.files[0];
  if (selectedFile) {
    const imageUrl = URL.createObjectURL(selectedFile);
    imagePreview.src = imageUrl;
    imagePreview.style.display = "block";
  }
});


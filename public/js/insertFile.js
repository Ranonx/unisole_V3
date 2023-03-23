// public/js/insertFile.js
const uploadedFiles = [];

function addFileRow(file) {
  const tableBody = document.querySelector(".uploaded-files tbody");
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
      <td>${file.name}</td>
      <td>
        <button class="btn btn-danger cancel-upload">Cancel</button>
      </td>
    `;

  tableBody.appendChild(newRow);

  newRow.querySelector(".cancel-upload").addEventListener("click", () => {
    // Remove the row from the table
    tableBody.removeChild(newRow);

    // Remove the file from the uploadedFiles array
    const index = uploadedFiles.indexOf(file);
    if (index > -1) {
      uploadedFiles.splice(index, 1);
    }
  });
}

document
  .getElementById("inputGroupFile02")
  .addEventListener("change", async (event) => {
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Read the content of the file using the FileReader API
      const reader = new FileReader();
      reader.onload = (e) => {
        // Add the file content to the uploadedFiles array
        uploadedFiles.push({ name: file.name, content: e.target.result });

        // Add the uploaded file to the table
        addFileRow(file);
      };
      reader.readAsDataURL(file);
    }

    // Clear the input value to allow uploading the same file again
    event.target.value = "";
  });

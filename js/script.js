const textarea = document.querySelector("textarea");
const fileNameInput = document.querySelector(".file-name input");
const selectMenu = document.querySelector(".menu-option select");
const saveBtn = document.querySelector(".save-btn");

saveBtn.addEventListener("click", () => {
  const blob = new Blob([textarea.value], { type: selectMenu.value });
  const fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = fileNameInput.value;
  link.href = fileUrl;
  link.click(); // click link to download file
});

selectMenu.addEventListener("change", () => {
  // Getting selected option text
  let selectOptions = selectMenu.options[selectMenu.selectedIndex].text;
  const FILE_TYPE = selectOptions.split(" ")[0];
  saveBtn.innerText = `Save as ${FILE_TYPE} File`;
});

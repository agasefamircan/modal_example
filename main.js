// Open Modal butonu yaradiriq
const openModalBtn = document.createElement("button");
openModalBtn.className = "openBtn";
openModalBtn.textContent = "Open Modal";
document.body.appendChild(openModalBtn);

// modalin yerlesdiyi conteyneri yaradiriq
const modalContainer = document.createElement("div");
modalContainer.className = "modal-container";
modalContainer.style.display = "none";
document.body.appendChild(modalContainer);

//  Modalin ozunu yaradaq
const modal = document.createElement("div");
modal.className = "modal";
modalContainer.appendChild(modal);

// Modalin headerini yaradaq
const modalHeader = document.createElement("div");
modalHeader.className = "modal-header";
modal.appendChild(modalHeader);

// header content elave edek
const modalHeading = document.createElement("h4");
modalHeading.textContent = "Modal Header";
modalHeader.appendChild(modalHeading);

// Modali baglamaq ucun birdene close buton yaradaq
const closeBtn = document.createElement("span");
closeBtn.className = "close-btn";
closeBtn.innerHTML = "&times;";
modalHeader.appendChild(closeBtn);

// ortadaki contenti yaradaq
const modalContent = document.createElement("p");
modalContent.textContent = "Modal haqqinda maraqli melumat oxuya bilersiz";
modal.appendChild(modalContent);

// Modalin footerini yaradaq
const modalFooter = document.createElement("div");
modalFooter.className = "modal-footer";
modal.appendChild(modalFooter);

// footer content elave edek
const modalFooterText = document.createElement("p");
modalFooterText.textContent = "Modal Footer";
modalFooter.appendChild(modalFooterText);

// open modal butonuna klikleyende modalin acilmasi ucun eventlistener elave edek
openModalBtn.addEventListener("click", () => {
  modalContainer.style.display = "flex";
});

// closebtn e klikleyende modalin baglanmsi ucun eventlistener elave edek
closeBtn.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

// eger user , modal conteynerinden kenara klikleyerse modali baglamaq ucun eventlistener
modalContainer.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});

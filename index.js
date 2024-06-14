let formEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");

function validateForm() {
    let isValid = true;

    if (siteNameInputEl.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
        siteNameErrMsgEl.style.color = "red";
        siteNameErrMsgEl.style.fontWeight = "bold";
        siteNameErrMsgEl.style.fontSize = "12px";
        isValid = false;
    } else {
        siteNameErrMsgEl.textContent = "";
    }

    if (siteUrlInputEl.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
        siteUrlErrMsgEl.style.color = "red";
        siteUrlErrMsgEl.style.fontWeight = "bold";
        siteUrlErrMsgEl.style.fontSize = "12px";
        isValid = false;
    } else {
        siteUrlErrMsgEl.textContent = "";
    }

    return isValid;
}

function createAndAppendBookmark() {
    let sitename = siteNameInputEl.value;
    let siteUrl = siteUrlInputEl.value;

    let anchorEl = document.createElement("a");
    anchorEl.href = siteUrl;
    anchorEl.textContent = siteUrl;
    anchorEl.target = "_blank";

    let siteNameEl = document.createElement("p");
    siteNameEl.textContent = sitename;

    let listitem = document.createElement("li");
    listitem.appendChild(siteNameEl);
    listitem.appendChild(anchorEl);
    listitem.classList.add("item");

    let UnListdiv = document.getElementById("bookmarksList");
    UnListdiv.appendChild(listitem);
    UnListdiv.classList.add("liststyle");
}

formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
        createAndAppendBookmark();
        formEl.reset(); // Clear the form after successful submission
    }
});

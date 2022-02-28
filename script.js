function toggle_patient() {
  let patient = document.getElementById("patient_logo");
  let page = document.getElementById("page");
  let icon = document.getElementById("comment");
  let icon_bg = document.getElementById("icon_bg")
  const area = document.getElementById("playlist-area");



  if (patient.style.width === "0px") {
    page.style.gridTemplateColumns = "6rem 20rem auto";
    patient.style.width = "10rem";
    icon.style.color = "var(--accent)";
    icon_bg.style.backgroundColor = "white";
    area.style.justifyContent = "space-between"
  }
  else {
    page.style.gridTemplateColumns = "6rem 0 auto";
    patient.style.width = "0px";
    icon.style.color = "white";
    icon_bg.style.backgroundColor = "var(--accent)";
    area.style.justifyContent = "space-around"
  }

}



const shareIcon = document.getElementById("share-icon");
const profileDiv = document.getElementById("profile-container");
const socialMediaIcons = document.getElementById("social-media-icons");

socialMediaIcons.style.display = 'none';


// shareIcon.addEventListener("click", () => {
//   profileDiv.style.display = "none";
//   socialMediaIcons.style.display = "flex";
// })

function socialMediaIcon() {
  if (window.innerWidth < 600) {
    profileDiv.style.display = "none";
    socialMediaIcons.style.display = "flex";
  } else if(window.innerWidth > 992)
  profileDiv.style.display = "flex";
  socialMediaIcons.style.display = "flex";
}

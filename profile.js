
// get all the clickable links

const aboutUsButton = document.querySelector('.aboutLink');
const expButton = document.querySelector('.expLink');
const projectButton = document.querySelector('.proLink');
const contactButton = document.querySelector('.contactLink');

var aboutUsContent = document.querySelector('.aboutMeDescription')
var experienceContent = document.querySelector('.myExperience')
var projectContent = document.querySelector('.myProjects')
var contactsContent = document.querySelector('.contactDetails')



//press about us to display about us content

aboutUsButton.addEventListener('click', function handleClick() {
    aboutUsContent.style.display = "block";
    experienceContent.style.display = "none";
    projectContent.style.display = "none";
    contactsContent.style.display = "none";


  });



  //press description display description content

  expButton.addEventListener('click', function handleClick() {
    aboutUsContent.style.display = "none";
    experienceContent.style.display = "block";
    projectContent.style.display = "none";
    contactsContent.style.display = "none";

  });


  //press experience display experience content

  projectButton.addEventListener('click', function handleClick() {
    aboutUsContent.style.display = "none";
    experienceContent.style.display = "none";
    projectContent.style.display = "block";
    contactsContent.style.display = "none";
  });


    //press projects display projects content

    contactButton.addEventListener('click', function handleClick() {
        aboutUsContent.style.display = "none";
        experienceContent.style.display = "none";
        projectContent.style.display = "none";
        contactsContent.style.display = "block";
      });
    
    



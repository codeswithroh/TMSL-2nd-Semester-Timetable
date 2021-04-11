// query selector
const header = document.querySelector('#header');
const rohit = document.querySelector('#rohit');
const EE = document.querySelector('#EE');
const ECE = document.querySelector('#ECE');
const CSE = document.querySelector('#CSE');
const IT = document.querySelector('#IT');

const about= document.querySelector('#about-me');
const info= document.querySelector('.about');
const note= document.querySelector('#note');

about.addEventListener('click', function() {
    info.classList.toggle('fade');
    note.classList.toggle('fade');
})


// to get the value selected from the selectbox
function checkData() {
    var all = rohit.department.options[rohit.department.selectedIndex].value;
    var sectionece = ECE.section.options[ECE.section.selectedIndex].value;
    var sectionee = EE.section.options[EE.section.selectedIndex].value;
    var sectioncse = CSE.section.options[CSE.section.selectedIndex].value;
    var sectionit = IT.section.options[IT.section.selectedIndex].value;
    rohit.style.display = "none";

    // different sections will be shown here according to the value of all
    if (all === "ee") {
        EE.style.display = "block";
        about.style.display="none";
        info.style.display="none";
        note.style.display="none";
        header.innerHTML = "Choose Your Section:";
        if (sectionee === 'a') {
            window.open('section-routines/ee-sec-a.html', "_self")
        } else if (sectionee === 'b') {
            window.open('section-routines/ee-sec-b.html', "_self")
        } else if (sectionee === 'c') {
            window.open('section-routines/ee-sec-c.html', "_self")
        }
    } else if (all === 'ece') {
        ECE.style.display = "block";
        about.style.display="none";
        info.style.display="none";
        note.style.display="none";
        header.innerHTML = "Choose Your Section:";
        if (sectionece === 'a') {
            window.open('section-routines/ece-sec-a.html', "_self")
        } else if (sectionece === 'b') {
            window.open('section-routines/ece-sec-b.html', "_self")
        }
    } else if (all === 'eie') {
        window.open('section-routines/eie.html', "_self")
    } else if (all === 'cse') {
        CSE.style.display = "block";
        header.innerHTML = "Choose Your Section:";
        if (sectioncse === 'a') {
            window.open('section-routines/cse-sec-a.html', "_self")
        } else if (sectioncse === 'b') {
            window.open('section-routines/cse-sec-b.html', "_self")
        }
    } else if (all === 'aiml') {
        window.open('section-routines/aiml.html', "_self")
    } else if (all === 'it') {
        IT.style.display = "block";
        about.style.display="none";
        info.style.display="none";
        note.style.display="none";
        header.innerHTML = "Choose Your Section:";
        if (sectionit === 'a') {
            window.open('section-routines/it-sec-a.html', "_self")
        } else if (sectionit === 'b') {
            window.open('section-routines/it-sec-b.html', "_self")
        }
    } else if (all === 'ce') {
        window.open('section-routines/ce.html', "_self")
    } else if (all === 'me') {
        window.open('section-routines/me.html', "_self")
    } else if (all === 'ft') {
        window.open('section-routines/ft.html', "_self")
    } 

 
}
// app.js

function openTab(evt, tabName) {
    
    var i, tabcontent, tablinks;

    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function getGreeting() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    if (currentHour >= 5 && currentHour < 12) {
        return "Good Morning!";
    } else if (currentHour >= 12 && currentHour < 18) {
        return "Good Afternoon!";
    } else {
        return "Good Evening!";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const greeting = getGreeting();
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.textContent = greeting;
});



var i = 0;
var txt= "Welcome to my Webpage!";
var speed = 55;

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();


document.querySelectorAll('.tablinks').forEach(button => {
    button.addEventListener('click', function() {

        document.querySelector('.computer').style.display = 'none';
        

        document.getElementById("demo").innerHTML = '';
    });
});

let index = 0;

function showSlide() {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    if (index >= images.length) index = 0;
    if (index < 0) index = images.length - 1;
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    index++;
    showSlide();
}

function prevSlide() {
    index--;
    showSlide();
}

setInterval(nextSlide, 3000);

const image = document.getElementById('moving-computer');

image.addEventListener('click', () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const imgWidth = image.offsetWidth;
    const imgHeight = image.offsetHeight;

    const randomX = Math.floor(Math.random() * (viewportWidth - imgWidth));
    const randomY = Math.floor(Math.random() * (viewportHeight - imgHeight));

    image.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

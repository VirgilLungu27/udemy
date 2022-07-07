const tesimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
    {
        name: 'Rebecca Myles',
        position: 'Marketing',
        photo: "https://randomuser.me/api/portraits/women/40.jpg",
        text: "I studied economics at my university, but it was a thing my parents recommended. I really hated it, so I dropped out. Eventually, I went into cooking and was a professional chef for 3–4 years. My brother is a tour guide, and a tourist did bootcamps. He mentioned this, and it inspired me. That’s when I got the money together to do one. I started Codecademy to prepare for it. Because I was so new to coding, and because the bootcamp was going to speed through front-end topics like CSS and HTML, I used Codecademy for that."
    },
    {
        name: 'Alex Stoica',
        position: 'Central Midfielder',
        photo: "https://randomuser.me/api/portraits/men/22.jpg",
        text: "I went from no code to landing a job as a software engineer mostly because I was interested in tech and in startups. I found Codecademy and signed up for a Pro membership at the end of 2019. At the time, I dabbled a little bit in HTML and CSS, but otherwise I had no experience. I made the change mostly because I saw the impact tech could have."
    },
    {
        name: 'Thomas Manner',
        position: 'Student',
        photo: "https://randomuser.me/api/portraits/men/15.jpg",
        text: "After I got my master’s degree, I started working at an architecture firm. It was not what I anticipated. I felt like I wasn’t getting to be creative or technical. I had just moved to Chicago for my job and ended up getting laid off right when the pandemic hit. I thought this was a good opportunity to take a step back and see what it was that I was missing from my career. That’s when I really went all-in on Codecademy."
    }
]

let idx = 1;

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx];

    testimonial.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;

    idx++;

    if(idx > testimonials.length - 1) {
        idx = 0;
    }
}

updateTestimonial();
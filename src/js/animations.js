const phoneIcon = document.getElementsByClassName('phone-icon')[0]
const contactLink = document.getElementById('contact-link')

contactLink.onmouseover = () => {phoneIcon.classList.toggle('ring-phone')}
contactLink.onmouseout = () => {phoneIcon.classList.toggle('ring-phone')}
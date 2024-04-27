const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    //serviceID - templateID - #form -publicKey
    emailjs.sendForm('service_gtujkhs','template_sfytz9p', '#contact-form','dSb-rXpinux6zf9mSJ_H2')
    .then(() => {
        contactMessage.textContent = 'Message sent successfully'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    },() => {
        //catch error
        contactMessage.textContent = 'Message not sent (service error)'
    })

}

contactForm.addEventListener('submit', sendEmail)
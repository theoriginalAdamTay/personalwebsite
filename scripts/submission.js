function submitForm() {
    var spamProtectField = document.getElementById('spamProtection').value;
    const spamProtectAnswer = "Connor Rozee"
    if (spamProtectField.toUpperCase() != spamProtectAnswer.toUpperCase()) {
        alert("Validation failed, please try again");
        document.getElementById('contactFormSubmit').disabled = true;
        document.getElementById('contactForm').reset();
    }
    else {
        alert("Validation successful!");
        const message = encodeURIComponent(document.getElementById('contactMessage').value);
        window.open('mailto:ogadamtay313@gmail.com?subject=Message%20from%20a%20website%20user&body={message}', '_blank');
    }
}
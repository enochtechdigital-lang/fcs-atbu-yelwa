function copyText(text) {
    // 1. Use the Clipboard API to copy the text
    navigator.clipboard.writeText(text).then(() => {
        // 2. Success feedback
        alert("Account number " + text + " copied to clipboard!");
    }).catch(err => {
        // 3. Error handling
        console.error('Could not copy text: ', err);
    });
}

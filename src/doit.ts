function doit() {
    const wrapper = document.getElementById("wrapper");
    if (!wrapper) {
        return;
    }
    const text = document.createElement("text");
    text.textContent = "Hello world!"
    wrapper.appendChild(text);
}
  
doit();
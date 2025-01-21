let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

     voices.forEach((voice, i) => {
        let option = document.createElement("option");
        option.value = i; // Use the index to set the value
        option.textContent = voice.name; // Set the display name
        voiceSelect.appendChild(option); // Append the option to the select element
    });
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click",()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})


const terminalForm = document.querySelector("#terminal-form");
const terminalInput = document.querySelector("#terminal-input");
const terminalText = document.querySelector(".terminal-text");

terminalForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const command = terminalInput.value.trim().toLowerCase();
  terminalInput.value = "";

  switch (command) {
    case "help":
      terminalText.innerHTML +=
        "<p>Available commands: ls, about, help</p>";
      break;
    case "about":
      terminalText.innerHTML += "<p>This is a Terminal Index Page.</p>";
      break;
    case "ls":
      terminalText.innerHTML += "<p>Desktop</p>";
      break;
    default:
      terminalText.innerHTML += `<p>${command}: command not found</p>`;
  }
});

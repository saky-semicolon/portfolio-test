function toggleChat() {
  const chatContainer = document.getElementById("chat-container");
  chatContainer.style.display =
    chatContainer.style.display === "flex" ? "none" : "flex";
}

const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function appendMessage(text, className) {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = text;
  messageDiv.classList.add("message", className);
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function appendOptions(options) {
  const optionsDiv = document.createElement("div");
  optionsDiv.classList.add("options");

  options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-button");
    button.onclick = () => handleUserOption(option);
    optionsDiv.appendChild(button);
  });

  chatBox.appendChild(optionsDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function handleUserInput() {
  const text = userInput.value.trim();
  if (!text) return;

  appendMessage("You: " + text, "user");
  userInput.value = "";

  const response = getResponse(text.toLowerCase());
  appendMessage("Bot: " + response, "bot");

  if (response.includes("choose")) {
    appendOptions(["Pricing", "Features", "Support"]);
  }
}

function handleUserOption(option) {
  appendMessage("You: " + option, "user");
  let response = "";

  if (option === "Pricing")
    response = "Our pricing plans start at $10 per month.";
  else if (option === "Features")
    response = "We offer AI-driven analytics, automation, and 24/7 support.";
  else if (option === "Support")
    response = "You can reach us at support@example.com.";

  appendMessage("Bot: " + response, "bot");
}

function getResponse(input) {
  if (input.includes("help"))
    return "Sure! What do you need help with? Choose an option below:";
  return "I didn't quite understand that. Try typing something else!";
}

appendMessage("Bot: Hi! Need help? Choose an option below:", "bot");
appendOptions(["Pricing", "Features", "Support"]);

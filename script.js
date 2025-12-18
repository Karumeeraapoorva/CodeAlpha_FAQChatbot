const faqs = [
  {
    q: "What is CodeAlpha?",
    a: "CodeAlpha is a software company providing internships in AI, Web and App Development."
  },
  {
    q: "What is the duration of internship?",
    a: "The internship duration is typically 1 month."
  },
  {
    q: "Will I get a certificate?",
    a: "Yes, you will receive a QR verified completion certificate."
  },
  {
    q: "Is this internship paid?",
    a: "Currently, CodeAlpha internships are unpaid but provide learning and certification."
  },
  {
    q: "How many tasks should I complete?",
    a: "You must complete at least 2 or 3 tasks to be eligible for the certificate."
  },
  {
    q: "Do I get placement support?",
    a: "Yes, placement and resume support is provided based on performance."
  }
];

function similarity(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  let matches = 0;
  a.split(" ").forEach(word => {
    if (b.includes(word)) matches++;
  });
  return matches;
}

function getAnswer(userQ) {
  let bestMatch = { score: 0, answer: "Sorry 🤔 I didn't understand that." };

  faqs.forEach(faq => {
    const score = similarity(userQ, faq.q);
    if (score > bestMatch.score) {
      bestMatch = { score, answer: faq.a };
    }
  });

  return bestMatch.answer;
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");
  const text = input.value.trim();

  if (text === "") return;

  const userDiv = document.createElement("div");
  userDiv.className = "user";
  userDiv.textContent = text;
  chatBox.appendChild(userDiv);

  const botDiv = document.createElement("div");
  botDiv.className = "bot";
  botDiv.textContent = getAnswer(text);
  chatBox.appendChild(botDiv);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

const faqs = [
  { q: "What is CodeAlpha?", a: "CodeAlpha is a company providing internships in AI, Web and App Development." },
  { q: "What is CodeAlpha internship?", a: "It is an online internship program focused on practical projects." },
  { q: "Is CodeAlpha internship free?", a: "Yes, the internship is completely free." },
  { q: "Is CodeAlpha internship paid?", a: "No, the internship is unpaid." },
  { q: "What is the duration of internship?", a: "The duration is usually one month." },
  { q: "How many tasks should I complete?", a: "You need to complete at least two or three tasks." },
  { q: "Will I get a certificate?", a: "Yes, you will receive a QR verified completion certificate." },
  { q: "Will I get an offer letter?", a: "Yes, an offer letter is provided at the start." },
  { q: "Is there a letter of recommendation?", a: "Yes, based on your performance." },
  { q: "Is this internship online?", a: "Yes, it is fully online." },
  { q: "Can beginners apply?", a: "Yes, beginners are welcome." },
  { q: "Is GitHub mandatory?", a: "Yes, GitHub is required for code submission." },
  { q: "How do I submit my tasks?", a: "Tasks must be submitted through the submission form." },
  { q: "What domains are available?", a: "AI, Web Development and App Development." },
  { q: "Can I do more than three tasks?", a: "Yes, you can complete more tasks if you want." },
  { q: "Is placement support provided?", a: "Yes, placement support is available." },
  { q: "Is this internship useful for resume?", a: "Yes, it adds real project experience." },
  { q: "Do I need prior experience?", a: "No prior experience is required." },
  { q: "Who can apply for this internship?", a: "Students and freshers interested in technology." },
  { q: "What happens if I complete only one task?", a: "One task is considered incomplete." }
];

function getAnswer(userQ) {
  userQ = userQ.toLowerCase();
  let bestScore = 0;
  let bestAnswer = "Sorry 😅 I am still learning. Please ask about CodeAlpha internship.";

  faqs.forEach(faq => {
    let score = 0;
    userQ.split(" ").forEach(word => {
      if (faq.q.toLowerCase().includes(word)) {
        score++;
      }
    });
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = faq.a;
    }
  });

  return bestAnswer;
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

const curses = [
  "but now you're legally married to a goose.",
  "but it only works when no one is watching.",
  "but every time you use it, you lose a toe.",
  "but it's in Latin and you can't read it.",
  "but you're now allergic to happiness.",
  "but your voice is replaced with goat bleats.",
  "but your pants vanish randomly.",
  "but it only works on Mondays during solar eclipses.",
  "but you have to sing everything you say now.",
  "but everyone thinks you're lying."
];

let musicStarted = false;

function grantWish() {
  const wish = document.getElementById("wishInput").value.trim();
  if (!wish) return;

  // Start background music on first interaction
  if (!musicStarted) {
    const music = document.getElementById("bg-music");
    music.play().catch(() => {});
    musicStarted = true;
  }

  const curse = curses[Math.floor(Math.random() * curses.length)];
  const response = `<p><strong>You wished:</strong> ${wish}</p>
                    <p><strong>Granted...</strong> ${curse}</p>`;
  const responseBox = document.getElementById("response");
  responseBox.innerHTML = response;
  responseBox.classList.remove("fade-in");
  void responseBox.offsetWidth; // restart animation
  responseBox.classList.add("fade-in");
}
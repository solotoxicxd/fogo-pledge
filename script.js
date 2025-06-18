const pledges = [
  "I pledge to bring the heat every day. I'm Fogolised.",
  "I vow to trade smart, burn bright. I'm Fogolised.",
  "I ride the flame, not the hype. I'm Fogolised.",
  "I stake my trust in Fogo. I'm Fogolised.",
  "I meme what I build. I'm Fogolised.",
  "I burn friction into flow. I'm Fogolised.",
  "I light fires that last. I'm Fogolised.",
  "I stay true, even when cold. I'm Fogolised.",
  "I walk with fire in every step. I'm Fogolised.",
  "I pledge firepower for good. I'm Fogolised.",
  // Add more as needed...
];

let currentPledge = "";

function getPledge() {
  const random = Math.floor(Math.random() * pledges.length);
  currentPledge = pledges[random];
  document.getElementById("pledge").innerText = currentPledge;
}

function postToX() {
  const handle = document.getElementById("xhandle").value.trim();
  if (!handle || !currentPledge) return alert("Enter X handle and get a pledge first!");
  const text = encodeURIComponent(`🔥 ${currentPledge} via @${handle} #Fogochain`);
  const url = `https://twitter.com/intent/tweet?text=${text}`;
  window.open(url, "_blank");
}

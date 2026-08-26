const lyrics = [
  { text: "I know I can treat you better", charDelay: 80, lineDelay: 1000 },
  { text: "than he can", charDelay: 90, lineDelay: 1500 },
  { text: "And any girl like you deserves", charDelay: 80, lineDelay: 1100 },
  { text: "a gentleman", charDelay: 90, lineDelay: 1000 },
  { text: "Tell me, why waste time on wasted crying?", charDelay: 50, lineDelay: 600 },
  { text: "when you should be with me instead", charDelay: 50, lineDelay: 400 },
  { text: "I know I can treat you better", charDelay: 80, lineDelay: 1000 },
  { text: "", charDelay: 800, lineDelay: 1100 },
  { text: "Better than he can", charDelay: 80, lineDelay: 1500 },
  { text: "", charDelay: 500, lineDelay: 1600 }
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function playLyrics() {
  console.clear();
  
  const color = "\x1b[36m";
  const reset = "\x1b[0m";

  for (const item of lyrics) {
    if (item.text === "") {
      console.log();
      await sleep(item.lineDelay);
      continue;
    }

    process.stdout.write(color);
    for (const char of item.text) {
      process.stdout.write(char);
      await sleep(item.charDelay);
    }
    
    process.stdout.write(reset + "\n");
    await sleep(item.lineDelay);
  }
}

playLyrics();

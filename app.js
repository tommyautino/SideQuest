// SideQuest Daily Quest Generator

const quests = [
  "Talk to a stranger and learn their name",
  "Do 50 pushups",
  "Visit a place in your city you've never been",
  "Buy a coffee for someone",
  "Watch the sunrise",
  "Give someone a genuine compliment",
  "Run a mile",
  "Try a new restaurant"
];

function generateQuest() {
  const randomIndex = Math.floor(Math.random() * quests.length);
  return quests[randomIndex];
}

const todaysQuest = generateQuest();

console.log("Your Side Quest for today:");
console.log(todaysQuest);
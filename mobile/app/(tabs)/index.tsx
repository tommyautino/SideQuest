import { Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function Index() {
  const quests = [
    "Talk to a stranger and learn their name",
    "Do 50 pushups",
    "Visit a new place",
    "Give someone a compliment",
    "Run a mile"
  ];

  const [quest, setQuest] = useState("Press the button to get a Side Quest");

  function generateQuest() {
    const randomIndex = Math.floor(Math.random() * quests.length);
    setQuest(quests[randomIndex]);
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 20, fontSize: 18, fontWeight: 'bold', textAlign: 'center', paddingHorizontal: 20 }}></Text>
      <Button title="Get Side Quest" onPress={generateQuest} />
    </View>
  );
}
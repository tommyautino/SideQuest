import { Text, View, Pressable } from 'react-native';
import { useState } from 'react';

export default function Index() {
  const quests = [
    "Talk to a stranger and learn their name",
    "Do 50 pushups",
    "Visit a new place",
    "Give someone a compliment",
    "Run a mile"
  ];

  const [quest, setQuest] = useState("Tap below to get your Side Quest");

  function generateQuest() {
    const randomIndex = Math.floor(Math.random() * quests.length);
    setQuest(quests[randomIndex]);
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#0f172a',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20
    }}>
      
      <Text style={{
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 30
      }}>
        SideQuest
      </Text>

      <Text style={{
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 40
      }}>
        {quest}
      </Text>

      <Pressable
        onPress={generateQuest}
        style={{
          backgroundColor: '#22c55e',
          paddingVertical: 15,
          paddingHorizontal: 30,
          borderRadius: 10
        }}
      >
        <Text style={{
          color: 'black',
          fontSize: 16,
          fontWeight: 'bold'
        }}>
          Get Side Quest
        </Text>
      </Pressable>

    </View>
  );
}
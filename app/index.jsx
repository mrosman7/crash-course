import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App({className}) {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl">Initializing project</Text>
      <StatusBar />
      <Link href="/profile" style={{ color: 'blue' }}>Go to Profile</Link>
    </View>
  );
}


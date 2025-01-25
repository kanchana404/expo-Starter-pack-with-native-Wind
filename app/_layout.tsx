import { Stack } from "expo-router";
import "./global.css"
import { useFonts } from "expo-font";

export default function RootLayout() {

  const [fontsLoaded] = useFonts(map:{
    
  })
  return <Stack />;
}

import { NavigationContainer } from "@react-navigation/native";
import StackScreenManager from "./src/components/StackScreenManager";

export default function App() {
  return (
    <NavigationContainer>
      <StackScreenManager />
    </NavigationContainer>
  );
}

import { StatusBar } from 'expo-status-bar';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import Navigation from "./navigation"

export default function App() {

  const isLoaded = useCachedResources();
  // const colorScheme = useColorScheme();

  if (isLoaded) {
    return (
      <>
        <Navigation />
        <StatusBar style="auto" />
      </>
      // <SafeAreaProvider>
      //   <Navigation colorScheme={colorScheme} />
      //   <StatusBar style="auto" />
      // </SafeAreaProvider>
    );
  } else {
    return null;
  }
}



// EAS Build - is a hosted service for building app binaries

// IOS Deployment
// https://medium.com/nerd-for-tech/your-guide-to-testing-your-expo-react-native-application-on-ios-abbde4086d08
// https://docs.expo.dev/classic/building-standalone-apps/?redirected
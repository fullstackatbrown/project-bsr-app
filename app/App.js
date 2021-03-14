import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
// import TrackPlayer from 'react-native-track-player';
import SoundPlayer from 'react-native-sound-player'


import LoadingScreen from './screens/loading/screen';
import RootDrawer from './routes/rootDrawer';
import { CustomThemeProvider } from "./ThemeContext";

const App = () => {
  const [displayLoading, setDisplayLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const MyTheme = {
    ...DefaultTheme, 
    colors: {
      ...DefaultTheme.colors, 
      background: "#F5ECD5"
    }
  };

  // replace with actual data fetching function
  function getData() {
    console.log("fetching data...");
    fetch(
            "https://spinitron.com/api/spins?access-token=994is4yYXo18_ku-t_pQCaci",
        )
        .then(response => {
            return response
        })

        .catch(function (error) {
            console.log(error);
        });
  }

  useEffect(() => {
    // consider adding a button in the loading screen component for error manual reloads
    // eg: pass setDisplayLoading in as a prop and set to false when "reload" button clicked
    if (displayLoading) {
      getData().then(() => {
        // setDisplayLoading(true);
        setDisplayLoading(false);
        setLoadingError(false);
      }).catch(() => {
        setLoadingError(true);
      });
    }
  }, []);

  return (
    <CustomThemeProvider>
      <NavigationContainer theme={MyTheme}>
        { (displayLoading) 
          ? <LoadingScreen loadingError={loadingError} />
          : <RootDrawer />
        }
      </NavigationContainer>
    </CustomThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

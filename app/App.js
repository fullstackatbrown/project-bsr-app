import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
// import TrackPlayer from 'react-native-track-player';
// import SoundPlayer from 'react-native-sound-player'


import LoadingScreen from './screens/loading/screen';
import RootDrawer from './routes/rootDrawer';
import { CustomThemeProvider } from "./ThemeContext";

import { ShowDataProvider } from "./src/ShowDataContext";

const App = () => {
  const [displayLoading, setDisplayLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const [showData, setShowData] = React.useState(null);
  
  const MyTheme = {
    ...DefaultTheme, 
    colors: {
      ...DefaultTheme.colors, 
      background: "#F5ECD5"
    }
  };

  const getShowData = () => {
    const data = fetch("https://spinitron.com/api/shows?access-token=994is4yYXo18_ku-t_pQCaci")
      .then(response => response.json())
    return data;
  }

  // replace with actual data fetching function
  const getData = () => {
    const data = fetch("https://spinitron.com/api/spins?access-token=994is4yYXo18_ku-t_pQCaci")
        .then(response => response.json())
    return data;
  }

  useEffect(() => {
    // consider adding a button in the loading screen component for error manual reloads
    // eg: pass setDisplayLoading in as a prop and set to false when "reload" button clicked
    if (displayLoading) {
      // getData().then(data => {
      getData().then(data => {
        // console.log(data);
        // setDisplayLoading(true);
        
        getShowData().then(_showData => {
          // console.log("show data in app.js: " + JSON.stringify(_showData, null, 2));
          setShowData(_showData);
          setDisplayLoading(false);
          setLoadingError(false);
        });

      }).catch((err) => {
        console.log(err);
        setLoadingError(true);
      });
    }
  }, []);

  return (
      <CustomThemeProvider>
        <NavigationContainer theme={MyTheme}>
          { (displayLoading && showData) 
            ? <LoadingScreen loadingError={loadingError} />
            : (<ShowDataProvider showData={showData}>
                <RootDrawer />
              </ShowDataProvider>)
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

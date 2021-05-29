import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
// import TrackPlayer from 'react-native-track-player';
// import SoundPlayer from 'react-native-sound-player'


import LoadingScreen from './screens/loading/screen';
import RootDrawer from './routes/rootDrawer';
import { CustomThemeProvider } from "./ThemeContext";

import { DataProvider } from "./src/DataContext";

const App = () => {
  const [displayLoading, setDisplayLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const [showData, setShowData] = React.useState(null);
  const [streamData, setStreamData] = React.useState([]);
  
  const MyTheme = {
    ...DefaultTheme, 
    colors: {
      ...DefaultTheme.colors, 
      background: "#F5ECD5"
    }
  };

  const getShowData = async (url) => {

    let showList = [];

    const response = await fetch(url);
    let data = await response.json();

    // console.log("data: ")
    // console.log(JSON.stringify(data, null, 2));
    showList = showList.concat(data.items);

    if (data.next) {
      let temp_showList = await getShowData(data.next.href);
      showList = showList.concat(temp_data);
    }

    // console.log(showList);
    // return showList;
    return showList;
  }

  // replace with actual data fetching function
  const getStreamData = () => {
    const data = fetch("https://spinitron.com/api/spins?access-token=994is4yYXo18_ku-t_pQCaci")
        .then(response => response.json())
    return data;
  }

  useEffect(() => {
    // consider adding a button in the loading screen component for error manual reloads
    // eg: pass setDisplayLoading in as a prop and set to false when "reload" button clicked
    if (displayLoading) {
      // getStreamData().then(data => {
      getStreamData().then(_streamData => {
        // console.log(_streamData);
        // setDisplayLoading(true);
        setStreamData(_streamData);
        
        const url = "https://spinitron.com/api/shows?access-token=994is4yYXo18_ku-t_pQCaci";
        getShowData(url).then(_showData => {
          console.log("show data in app.js: " + JSON.stringify(_showData, null, 2));
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
            : (<DataProvider showData={showData} streamData={streamData}>
                <RootDrawer />
              </DataProvider>)
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

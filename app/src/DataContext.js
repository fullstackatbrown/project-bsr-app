import React, { useEffect, useState } from "react";

export const DataContext = React.createContext();

export const useShowData = () => React.useContext(DataContext);

export const DataProvider = (props) => {
  const [showData, setShowData] = React.useState(props.showData);
  const [streamData, setStreamData] = React.useState(props.streamData);
  const [currentlyPlaying, setCurrentlyPlaying] = React.useState(props.currentlyPlaying);

  // const newShowData = (data) => {
  //   console.log("setting new show data from context")
  //   setShowData(data);
  // }

  useEffect(() => {
    // console.log("initilaize!!!!d ShowDataContext with: ");
    // console.log(props.showData);
    setShowData(props.showData);
    setStreamData(props.streamData);
    setStreamData(props.currentlyPlaying);
  }, []);

  return (
    <DataContext.Provider value={{ showData: showData, streamData: streamData, currentlyPlaying: currentlyPlaying}}>
      { props.children }
    </DataContext.Provider>
  );
};

export default DataProvider;

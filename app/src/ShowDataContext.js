import React, { useEffect, useState } from "react";

export const ShowDataContext = React.createContext();

export const useShowData = () => React.useContext(ShowDataContext);

export const ShowDataProvider = (props) => {
  // const [showData, setShowData] = React.useState(props.showData);
  const [showData, setShowData] = React.useState(props.showData);

  // const newShowData = (data) => {
  //   console.log("setting new show data from context")
  //   setShowData(data);
  // }

  useEffect(() => {
    // console.log("initilaize!!!!d ShowDataContext with: ");
    // console.log(props.showData);
    setShowData(props.showData);
  }, []);

  return (
    <ShowDataContext.Provider value={{ showData: showData }}>
      { props.children }
    </ShowDataContext.Provider>
  );
};

export default ShowDataProvider;

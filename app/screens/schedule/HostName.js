import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

export default function HostName(props) {
  const [hostNameString, setHostNameString] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(props.href);
      const data = await response.json();
      let aString = data.name;
      if (!props.last) {
        aString += ",";
      }
      setHostNameString(aString);
    })();
  }, [props.href])

  return (
    <Text> { hostNameString } </Text>
  );
}


import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  h1: {
    // fontFamily: "Courier",
    fontWeight: "bold",
    fontSize: 25,
    paddingBottom: "8%"
  },
  h2: {
    // fontFamily: "Courier",
    fontWeight: "bold",
    fontStyle: 'italic',
    fontSize: 22
  },
  headline: {
    // fontFamily: "Courier",
    fontWeight: "bold",
    fontSize: 14
  },
  body: {
    // fontFamily: "Courier",
    fontSize: 14
  },
  // color applies to both icons and text
  colorLight: {
    color: "#333333"
  },
  colorDark: {
    color: "#F5ECD5"
  },
  container: {
    backgroundColor: "#F5ECD5",
    flex: 1, // makes the container apply to full screen not just that line
		justifyContent: 'flex-start',
    // alignItems: 'center',
    paddingLeft: '5%'
  },
  containerLogo: {
    backgroundColor: "#F5ECD5",
    // flex: 1,
    width: "20%",
    height: "30%",
		// justifyContent: 'flex-start',
    // alignItems: 'center',
    paddingLeft: '100%'
  },
  containerTrackDetails: {
    backgroundColor: "#F5ECD5",
    // flex: 1,
		justifyContent: 'flex-start',
    // alignItems: 'center',
    paddingLeft: '25%',
    paddingTop: "10%",
    paddingBottom: "15%"
  },
  containerHostDetails: {
    backgroundColor: "#F5ECD5",
    flex: 1,
		justifyContent: 'flex-start',
    // alignItems: 'center',
    paddingLeft: '15%',
  }
  
  // background: {
  //   backgroundColor: "#FAF8F0",
  // }, 
  // container: {
  //   marginHorizontal: "8%",
  // }, 
});
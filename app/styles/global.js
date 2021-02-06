import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  background: {
    backgroundColor: "#FAF8F0",
  }, 
  screenContainer: {
    marginHorizontal: "8%",
  }, 
  dropdownContainer: {
    backgroundColor: "#68B39E", 
    width: "32%", 
    marginVertical: 26,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5, 
  }, 
  dropdownStyle: {
    fontSize: 14,
    paddingVertical: 4,
    paddingHorizontal: 8,
    color: "white", 
  }, 
  text: {
    fontSize: 14
  }, 
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
<<<<<<< HEAD
  
=======
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
  }, 
>>>>>>> e2d86f247c7a5d0081e051445fa040393e62bb39
  
  // background: {
  //   backgroundColor: "#FAF8F0",
  // }, 
  // container: {
  //   marginHorizontal: "8%",
  // }, 
  headingOneStyleLight: {
    fontSize: 25,
    fontFamily: "Courier",
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 19
  },
  headingOneStyleDark: {
    fontSize: 25,
    fontFamily: "Courier",
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 19,
    color: "#F5ECD5"
  },
  bodyStyleLight: {
    fontSize: 14,
    fontFamily: "Courier",
    fontWeight: "normal",
    marginVertical: 10
  },
  bodyStyleDark: {
    fontSize: 14,
    fontFamily: "Courier",
    fontWeight: "normal",
    marginVertical: 10,
    color: "#F5ECD5"
  },
  logoStyle: {
    margin: 19,
    alignSelf: "center"
  },
  viewStyleLight: {
    padding: 20,
    backgroundColor: '#F5ECD5'
  },
  viewStyleDark: {
    padding: 20,
    backgroundColor: '#FFFFFF'      
  }
});

export const headingOneStyleDark = StyleSheet.compose(globalStyles.headingOneStyleLight, { color: "#F5ECD5" } );
export const bodyStyleDark = StyleSheet.compose(globalStyles.bodyStyleLight, { color: "#F5ECD5" });
export const viewStyleDark = StyleSheet.compose(globalStyles.viewStyleLight, { backgroundColor: '#333333' });

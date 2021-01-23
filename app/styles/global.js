import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
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
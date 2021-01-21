import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  background: {
    backgroundColor: "#FAF8F0",
  }, 
  container: {
    marginHorizontal: "8%",
  }, 
  h1: {
    fontWeight: "bold",
    fontSize: 25
  }, 
  h2: {
    fontWeight: "bold",
    fontSize: 22
  }, 
  headline: {
    fontWeight: "bold",
    fontSize: 14
  }, 
  text: {
    fontSize: 14
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
  }
});

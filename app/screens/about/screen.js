import React from 'react';
import { globalStyles, viewStyleDark } from '../../styles/global.js';
// import { ViewModeContext } from '../screenContext.js';
import { Text, Image, ScrollView, View, Linking, StyleSheet } from 'react-native';

// TODO: add navbar and toggleable header
const About = () => {
  const paragraphs = [
    `“The Brown Network” began in 1936 as the first student-run radio station in the country. It was a carrier-current AM station broadcasting to Brown dorms. Eventually the station’s name was changed to “WBRU-AM.” In 1966, some of the station’s members secured a loan from the University and founded the radio station WBRU-FM (95.5), while others continued the student-oriented AM tradition. WBRU-FM became a commercial corporation, financially and legally separate from Brown University, while WBRU-AM continued to operate for the Brown community and surrounding areas in the college radio tradition. The AM signal in time became virtually inaudible....`,
    `During the mid-1990s, a few students worked to find a new, more audible outlet for those still broadcasting in the older, experimental, student tradition. In 1997, WBRU-AM became “Brown Student Radio” (BSR) and started broadcasting on WELH-FM (88.1). WELH-FM, owned by the Wheeler School, was sold to another organization in 2010, leaving BSR to broadcast solely on bsrlive.com...`,
    `In 2018, BSR obtained a low-power FM license. As WBRU-FM had sold their signal the year prior, BSR obtained the call signal WBRU-LP. BSR is now broadcasting on 101.1 FM, online, and through an upcoming mobile app.​​ Today, we are the only FM radio station on campus, staying true to our roots in traditional freeform college radio. Students, faculty, and community members all host cross-genre music shows, podcasts, and talk shows, allowing for a truly free creative outlet for the Providence community. We are officially partnered with PCR and AS220...`
  ];

  const instagramLink = <Text style={{textDecorationLine: 'underline'}}
    onPress={() => Linking.openURL('https://www.instagram.com/bsrlive')}>
      Instagram
    </Text>;
  const twitterLink = <Text style={{textDecorationLine: 'underline'}}
    onPress={() => Linking.openURL('https://twitter.com/bsrlive')}>
      Twitter
    </Text>;
  // TODO: find BSR YouTube link
  const youtubeLink = <Text style={{textDecorationLine: 'underline'}}
    onPress={() => Linking.openURL('https://youtube.com')}>
      YouTube
    </Text>;
  const facebookLink = <Text style={{textDecorationLine: 'underline'}}
    onPress={() => Linking.openURL('https://www.facebook.com/bsrlive/')}>
      Facebook
    </Text>;

  return(
    <ScrollView style={globalStyles.screenContainer}>
        <Text style={globalStyles.h1}>{'>'} ABOUT BSR</Text> 
        <Image style={globalStyles.containerLogo} source={require('../../assets/logo/Logo.png')}/>
        <View style={aboutStyles.aboutTextDetails}>
            <Text style={globalStyles.body}>{'>'} 
                {paragraphs[0]}
            </Text>
            <Text style={globalStyles.body}>{'>'} 
                {paragraphs[1]} 
            </Text>
            <Text style={globalStyles.body}>{'>'} 
                {paragraphs[2]} 
            </Text>
            <Text style={globalStyles.body}>{'>'} 
                Follow us on on {instagramLink}, {twitterLink}, {youtubeLink}, and {facebookLink}.
            </Text>
        </View>
    </ScrollView>
  );
};

const aboutStyles = StyleSheet.create({
    aboutTextDetails: {
        backgroundColor: "#F5ECD5",
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: "5%",
        paddingBottom: "5%"
    }
})
// const textParaStyle = StyleSheet.compose(globalStyles.body, { marginVertical: "20pt" });

export default About;
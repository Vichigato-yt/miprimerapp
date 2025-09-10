import WelcomeText from '@/components/WelcomeText'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#591E34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 150,
    height: 150,
  }
})

const index = () => {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/Team_Fortress_2_style_logo.svg.png')} style={styles.image}></Image>
      <WelcomeText></WelcomeText>
      <Image source={require('@/assets/images/tumblr_95b57103e517deb605fc49fe62cd39d7_2a3fa862_640.png')} style={styles.image}></Image>
      
    </View>
  )
}

export default index
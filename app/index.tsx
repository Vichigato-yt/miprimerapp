import { Image, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import WelcomeText from '@/components/WelcomeText'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#591E34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 250,
    height: 250,
  }
})

const index = () => {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/Team_Fortress_2_style_logo.svg.png')} style={styles.image}></Image>
      <WelcomeText></WelcomeText>
    </View>
  )
}

export default index
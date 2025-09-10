import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8C342B',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '15%',
    borderRadius: 20,
    
  },
  text:{
    fontSize: 30,
    color: '#F2A950',
  }
})

const WelcomeText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Holandas a Todos</Text>
    </View>
  )
}

export default WelcomeText
import React, {useRef, useState, useEffect} from 'react'
import { View, Text, Animated } from 'react-native'

const Box = ({ backgroundColor = '#3cae6f', scale = 1}) => (
  <Animated.View style={[
    {
      width: 100,
      height: 100,
      backgroundColor,
      transform: [{ scale }],
    }
  ]} />
)

const usePulse = () => {

    const scale = new Animated.Value(1)

    return scale;
}

const App = ({ count }) => {

  const scale = usePulse()

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{count}</Text>
      <Box scale={scale} />
    </View>
  )
}

export default App;
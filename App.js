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

const usePulse = (startDelay = 500) => {

    const scale = useRef(new Animated.Value(1)).current;

    const pulse = () => {
      Animated.sequence([
        Animated.timing(scale, { toValue: 1.2 }),
        Animated.timing(scale, { toValue: 0.8 }),
      ]).start(() => pulse())
    }

    useEffect(() =>{
      let interval = setTimeout(() => pulse(), startDelay)

      return () => clearInterval(interval)
    }, [])

    

    return scale;
}

const useCount = () => {
  const [count, setCount] = useState(1)

  useEffect(() => {
    let interval = setInterval(() => {
      setCount(count + 1)
    }, 500)

    return () => clearInterval(interval)
  })

  return count;
}

const App = () => {

  

  const scale = usePulse()
  const scale2 = usePulse(750)
  const count = useCount()


  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
      <Box scale={scale2} backgroundColor={'blue'} />
      <Text>{count}</Text>
      <Box scale={scale} />
    </View>
  )
}

export default App;
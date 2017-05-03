import React, { PropTypes } from 'react'
import { View,StyleSheet, TextInput } from 'react-native';


const Post = (props) => {
  const { children } = props
  console.log(children)
  return (
      <View
          style={{height: 150, width:200}}
          >
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            value={children}
          />
          </View>

      )
}

export default Post

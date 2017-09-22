import React, { PropTypes } from 'react'
import { View,StyleSheet, TextInput } from 'react-native';

const Post = (props) => {
    const { children } = props
    console.log(children)
    return (
      <View>
        <TextInput
          style={{height:88,borderWidth:1,width:100}}
          value={children}
        >
        </TextInput>
      </View>
    )
}



Post.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Post

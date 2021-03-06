import React, { PropTypes } from 'react'
import { View,StyleSheet, TextInput } from 'react-native';


const Edit = (props) => {
  const { deliverEditPost } = props

  return (
      <View
          style={{height: 150, width:200}}
          >
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => deliverEditPost(text)}
          />
      </View>
      )
}

Edit.propTypes = {
  deliverEditPost: PropTypes.func.isRequired,
}


export default Edit

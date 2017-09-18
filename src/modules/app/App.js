import React, { PropTypes } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { Edit, Post } from './../../components'
import * as actions from './actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const renderEdit = (editPost) => {
    return (
      <Edit
        key={"1"}
        deliverEditPost={(newPost) => editPost(newPost)}>
      </Edit>
    )
}
const renderPost = (recievePost) => {
    return (
      <Post
        key={"2"}>
        {recievePost}
      </Post>
    )
}

const App = (props) => {
  const {
    recievePost,
    editPost,
  } = props

  return (
    <View style={styles.container}>
        {renderEdit(editPost)}
        {renderPost(recievePost)}
    </View>
  )
}

App.displayName = 'App'

App.propTypes = {
  recievePost: PropTypes.string.isRequired,
  editPost: PropTypes.func.isRequired,
}

export default connect(
  (state) => ({
    recievePost: state.app.initialStatePost
  }),
  (dispatch) => ({
    editPost: (dispatchPost) => dispatch(actions.postActionName(dispatchPost)),
  })
)(App)

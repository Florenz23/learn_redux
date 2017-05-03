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
        goPost={(newPost) => editPost(newPost)}>
      </Edit>
    )
}
const renderPost = (deliverPost) => {
    return (
      <Post
        key={"2"}>
        {deliverPost}
      </Post>
    )
}

const App = (props) => {
  const {
    newPost,
    addNewCounter,
    deliverPost,
    editPost
  } = props

  return (
    <View style={styles.container}>
        {renderEdit(editPost)}
        {renderPost(deliverPost)}
    </View>
  )
}

App.displayName = 'App'

//it is a good practice to always indicate what type of props does your component
//receive. This is really good for documenting and prevent you from a lot of bug during
//development mode. Remember, all of these will be ignored once you set it to production.
App.propTypes = {
  addNewCounter: PropTypes.func.isRequired,
}

//Here's the most complex part of our app. connect is a function which selects,
//which part of our state tree you need to pass to your component. also, since
//my App component is pure function, i am injecting addNewCounter, increment and
//decrement functions wrapped with dispatch. I think this is the best and cleanest
//way to seperate your connect and your pure function.
export default connect(
  (state) => ({
    deliverPost: state.app.initialStatePost
  }),
  (dispatch) => ({
    editPost: (dispatchPost) => dispatch(actions.postActionName(dispatchPost)),
  })
)(App)

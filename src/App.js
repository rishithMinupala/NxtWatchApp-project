import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/Home'

import Trending from './components/Trending'

import Gaming from './components/Gaming'

import SavedVideos from './components/SavedVideos'

import LoginRoute from './components/LoginRoute'

import NotFound from './components/NotFound'

import ThemeContext from './Context/ThemeContext'

import VideoItemDetails from './components/VideoItemDetails'

import './App.css'

class App extends Component {
  state = {theme: true, savedVideosList: []}

  changeTheme = () => {
    this.setState(prevState => ({theme: !prevState.theme}))
  }

  saveVideos = videosList => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, videosList],
    }))
  }

  removeSavedVideos = id => {
    const {savedVideosList} = this.state
    const index = savedVideosList.findIndex(item => {
      if (item.id === id) {
        return true
      }
      return false
    })
    savedVideosList.splice(index, 1)
    this.setState({savedVideosList})
  }

  render() {
    const {theme, savedVideosList} = this.state
    console.log(savedVideosList)
    return (
      <ThemeContext.Provider
        value={{
          theme,
          savedVideosList,
          changeTheme: this.changeTheme,
          saveVideos: this.saveVideos,
          removeSavedVideos: this.removeSavedVideos,
        }}
      >
        <>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <Route exact path="/login" component={LoginRoute} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <Route component={NotFound} />
          </Switch>
        </>
      </ThemeContext.Provider>
    )
  }
}
export default App

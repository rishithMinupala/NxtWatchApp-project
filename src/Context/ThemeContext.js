import React from 'react'

const ThemeContext = React.createContext({
  theme: true,
  changeTheme: () => {},
  savedVideosList: [],
  saveVideos: () => {},
  removeSavedVideos: () => {},
})

export default ThemeContext

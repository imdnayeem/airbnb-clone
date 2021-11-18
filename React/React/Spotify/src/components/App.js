import React from 'react'
import { Global, css, jsx } from '@emotion/core'
import MusicPlayer from './index'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './firebase'
import Trend from './Trend'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Global styles={GlobalCSS} />
        <Switch>
          <Route exact path="/" component={MusicPlayer} />
        </Switch>
      </Router>
    </>
  )
}

const GlobalCSS = css`
  * {
    box-sizing: border-box;
    font-family: 'Signika', sans-serif;
  }

  html,
  body,
  .app {
    margin: 0;
    height: 100%;
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
`

export default App

import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import Title from './header/Title.js'
import List from './list/List.js'
import logo from './intuit-white-logo.png'

const styles = {
  PAGE_CONTENT: {
      marginTop: '80px',
      marginBottom: '30px'
  }
}
function App() {
  return (
    <div style={styles.PAGE_CONTENT}>
      <Title name={"Package Registry"}></Title>
      <List></List>
    </div>
  );
}

export default App;

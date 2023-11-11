import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme'
import { Routes } from './Routes'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
)

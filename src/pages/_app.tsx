import NextApp from 'next/app';
import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

let theme = {}

export default class App extends NextApp {
  componentDidMount(): void {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render(): ReactElement {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps}/>
      </ThemeProvider>
    )
  }
}
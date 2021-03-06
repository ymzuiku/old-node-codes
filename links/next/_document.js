// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import Header from './Header';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }
  render() {
    return (
      <html>
        <Header />
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

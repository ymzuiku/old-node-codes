import Head from 'next/head';
import '../stylesheets/main.scss';

let theSuffixTitle = undefined;
let theTitle = undefined;
let theColor = '#fff';
let Header = {
  title: undefined,
  suffixTitle: undefined,
  color: '#fff'
};

Header = ({ title, suffixTitle, color }) => {
  theSuffixTitle = suffixTitle || theSuffixTitle;
  theTitle = title || theTitle;
  theColor = color || theColor;
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0,viewport-fit=cover"
      />
      <meta name="theme-color" content={theColor} />
      <title>
        {theTitle}
        {theSuffixTitle ? '-' + theSuffixTitle : ''}
      </title>
      <link rel="stylesheet" href="_next/static/style.css" />
    </Head>
  );
};

Header.suffixTitle = theSuffixTitle;
Header.title = theTitle;
Header.color = theSuffixTitle;

export { Header as default, Header };

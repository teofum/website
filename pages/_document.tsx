import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang='en' className='no-transitions'>
      <Head>
        <meta name='description' content='My website :)' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
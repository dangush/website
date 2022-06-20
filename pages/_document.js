import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap" rel="stylesheet"/>
            {/* <link href="../public/fonts/ocr-aregular.ttf" rel="stylesheet"/> */}
            <link rel="icon" href="https://cdn.discordapp.com/attachments/364120933063065611/758916473186943006/411291026070700042.png">
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

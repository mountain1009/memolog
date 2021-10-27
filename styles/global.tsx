import React from 'react';

const GlobalStyle = () => (
    <style jsx global>
        {
            `
        body {
          font-family: 'Hiragino Kaku Gothic ProN', 'メイリオ', sans-serif;
          font-size: 16px;
          line-height: 1.2;
          margin: 0;
          display: block;
        }
        li{
          list-style-type: none;
        }
        p {
            display: block;
            margin-block-start: inherit;
            margin-block-end: inherit;
            margin-inline-start: inherit;
            margin-inline-end: inherit;
            color: white;
}
      `
        }
    </style>
);

export default GlobalStyle;

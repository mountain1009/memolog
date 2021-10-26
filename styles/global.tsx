import React from 'react';

const GlobalStyle = () => (
    <style jsx global>
        {
            `
        body {
          font-family: 'Hiragino Kaku Gothic ProN', 'メイリオ', sans-serif;
          font-size: 14px;
          line-height: 1.2;
          margin: 0;
          display: block;
        }
        li{
          list-style-type: none;
        }
      `
        }
    </style>
);

export default GlobalStyle;

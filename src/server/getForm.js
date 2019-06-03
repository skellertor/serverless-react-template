import React from 'react';
import {renderToString} from 'react-dom/server'
import serialize from 'serialize-javascript';
import App from '../shared/App';

export function main(event) {
  const initialData = {
    name: 'Bob'
  };
  const markup = renderToString(<App initialData={initialData}/>);
  const responseBody = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>SSR Iframe</title>
        <style>
            html {
              box-sizing: border-box;
            }
            *, *:before, *:after {
              box-sizing: inherit;
            }
        </style>
        <script src="/dev/bundle.js" defer></script>
        <script>window.__INITIAL_DATA__ = ${serialize(initialData, {isJSON: true})}</script>
      </head>

      <body>
        <div id="app">
            ${markup}
        </div>
      </body>
    </html>
  `;

  return Promise.resolve({
    statusCode: 200,
    headers: {
      'content-type': 'text/html'
    },
    body: responseBody
  });
}

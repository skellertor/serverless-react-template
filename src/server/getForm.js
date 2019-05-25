'use strict';
import React from 'react';
import { renderToString } from 'react-dom/server'
import serialize from 'serialize-javascript';
import App from '../shared/App';

export const main = async (event) => {
    const person = {
        name: 'Sam',
        age: 32
    };
    const markup = renderToString(<App person={person}/>);
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
            <script src="/bundle.js" defer></script>
            <script>window.__INITIAL_DATA__ = ${serialize(person, { isJSON: true })}</script>
          </head>
    
          <body>
            <div id="app">
                ${markup}
            </div>
          </body>
        </html>
    `;

    return {
        statusCode: 200,
        headers: {
            'content-type': 'text/html'
        },
        body: responseBody
    };
};

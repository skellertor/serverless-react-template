import fs from 'fs';

export function main() {
  return new Promise((resolve, reject) => {
    fs.readFile('./src/server/bundle.js', (err, data) => {
      if (!err) {
        const bundle = data.toString('utf8');
        return resolve(bundle)
      }
      reject('');
    });
  })
    .then((content) => {
      return {
        statusCode: 200,
        headers: {
          'content-type': 'application/javascript'
        },
        body: content
      }
    });
}
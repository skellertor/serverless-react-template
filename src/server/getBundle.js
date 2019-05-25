import fs from 'fs';

export const main = async () => {
    const content = await new Promise((resolve, reject) => {
        fs.readFile('./bundle.js', (err, data) => {
            if (!err) {
                const bundle = data.toString('utf8');
                return resolve(bundle)
            }
            reject('');
        });
    });

    return {
        statusCode: 200,
        headers: {
            'content-type': 'application/javascript'
        },
        body: content
    }
};
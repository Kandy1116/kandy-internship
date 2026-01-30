const https = require('https');

const url = 'https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=10147817';

https.get(url, (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    try {
      const parsed = JSON.parse(data);
    } catch (e) {
    }
  });
}).on("error", (err) => {
});

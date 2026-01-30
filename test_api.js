const https = require('https');

https.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers', (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
  });

}).on("error", (err) => {
});

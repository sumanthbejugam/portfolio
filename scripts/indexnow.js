import https from 'https';

// Retrieve values from environment or use defaults/placeholders
const host = 'sumanthbejugam.github.io';
const key = process.env.INDEXNOW_KEY || 'YOUR_BING_API_KEY';
const keyLocation = `https://${host}/portfolio/${key}.txt`;

const urlList = [
    `https://${host}/portfolio/`,
];

const data = JSON.stringify({
    host: host,
    key: key,
    keyLocation: keyLocation,
    urlList: urlList
});

const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/IndexNow',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': data.length
    }
};

const req = https.request(options, (res) => {
    console.log(`Status Check IndexNow: ${res.statusCode}`);
    res.on('data', d => {
        process.stdout.write(d);
    });
});

req.on('error', error => {
    console.error('Error sending IndexNow request:', error);
});

req.write(data);
req.end();

console.log('IndexNow ping sent for URLs:', urlList);

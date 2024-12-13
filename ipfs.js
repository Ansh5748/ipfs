const { create } = require('ipfs-http-client');

const ipfs = create({ url: 'https://ipfs.infura.io:5001/api/v0' });

async function uploadFile(fileBuffer) {
    try {
        const added = await ipfs.add(fileBuffer);
        console.log('File uploaded successfully! IPFS hash:', added.path);
        return added.path;
    } catch (error) {
        console.error('Error uploading file:', error);
    }
}

const fileContent = Buffer.from('This is a test file for IPFS upload.');
uploadFile(fileContent);

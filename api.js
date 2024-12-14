import PocketBase from 'pocketbase';

const url = 'https://websitedemo-o.pockethost.io/'
const pb = new PocketBase(url)

async function getAllPosts() {
    const records = await pb.collection('posts').getFullList();
    return records
}

export {
    getAllPosts
}
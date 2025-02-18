import { Client, Account, Databases } from 'appwrite';

export const client = new Client();

client
    // .setEndpoint(process.env.NEXT_ENDPOINT as string)
    // .setProject(process.env.NEXT_PROJECT_ID as string); 
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67b313220002dcd353ee');

const account = new Account(client);
const databases = new Databases(client);

export { ID } from 'appwrite';
export { account, databases };
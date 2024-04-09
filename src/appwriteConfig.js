import { Client, Account } from "appwrite";

const client = new Client();

export const API_ENDPOINT = "https://cloud.appwrite.io/v1";
export const PROJECT_ID = "6614ea4849fbb674eb68";

client.setEndpoint(API_ENDPOINT).setProject(PROJECT_ID);

export const account = new Account(client);

export default client;

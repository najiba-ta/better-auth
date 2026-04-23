import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.AUTH_DB_URI);
const db = client.db('better-auth-db');

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    trustedOrigins: [
        "http://localhost:3000", 
        "http://127.0.0.1:3000"
    ],
    database: mongodbAdapter(db, {
        client
    })
});
const firebaseAdmin = require("firebase-admin");
const dotenv = require("dotenv/config");
const credentials = JSON.parse(process.env.SERVICE_ACCOUNT_CREDENTIALS)
// const credentials = require("./service-account-credentials.json")

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(credentials),
    projectId: credentials.project_id
    // databaseURL: "https://push-notification-project-test"
});

const message = {
    notification: {
        title: "Push notification title",
        body: "Push notification body"
    },
    token: process.env.FIREBASE_REGISTRATION_TOKEN
}

function sendPushNotification(params) {
    firebaseAdmin.messaging().send(params)
        .then(response => {
            console.log("Successfully sent message: ", response);
        })
        .catch(error => {
            console.log("Error sending message: ", error);
        });
}

sendPushNotification(message)
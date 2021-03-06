const firebaseAdmin = require("firebase-admin");
const dotenv = require("dotenv/config");
const credentials = JSON.parse(process.env.SERVICE_ACCOUNT_CREDENTIALS)

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(credentials),
    projectId: credentials.project_id
});

const topic = 'vacation';

const message = {
    notification: {
        title: "Push notification title - Multiple",
        body: "Push notification body - Multiple"
    },
    topic: topic
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
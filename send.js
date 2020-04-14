
const admin = require("firebase-admin");

const serviceAccount = require("./plataforma-rkm-firebase-adminsdk-p2kmq-5dec730a9d.json");
const { userToken } = require("./token.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://plataforma-rkm.firebaseio.com"
});

const payload = {
   notification: {
      title: "Notification Title",
      body: "Notification Body"
    }
}
const options = {
   priority: "high",
   timeToLive: 60 * 60 * 24
}

admin.messaging().sendToDevice(userToken, payload, options)
.then(function(response) {
   console.log("Successfully sent message:", response);
})
.catch(function(error){
   console.log("Error sending message:", error)
})

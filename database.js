const admin = require("firebase-admin");

const serviceAccount = require("../toolshop-firebase-private-key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

function getDatabase() {
	return admin.firestore()
}

module.exports = getDatabase
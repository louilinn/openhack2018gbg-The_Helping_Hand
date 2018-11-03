const pubkey = "-----BEGIN PUBLIC KEY-----\n" +
"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDDcPIUgKfbslG9KvF6DqJCtSH8\n" +
"RnjrsNkhEZvjRL1dXVCo0R+1a03GRItJ3xT72yawbP1XqIHvD6za8HrMWoCCxnP8\n" +
"o5MduHUgG9yN3rETBOhEXxoBRRXDXmWR8JPkMdQ7jYjP6Gj3GoqJRmKirQaRVbGv\n" +
"np/2PghU/v/ey6QKKwIDAQAB\n" +
"-----END PUBLIC KEY-----";

//var SHA256 = require("crypto-js/sha256")

function encryptMsg(message) {

          // Encrypt with the public key...
          var encrypt = new JSEncrypt();
          encrypt.setPublicKey(pubkey);
          var encrypted = encrypt.encrypt(message);
	  return encrypted;
};

//verification(identifier) {
//	var verification = SHA256(identifier);
//	return verification;
//}



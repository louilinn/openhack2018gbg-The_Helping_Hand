const pubkey = 
"-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDDcPIUgKfbslG9KvF6DqJCtSH8
RnjrsNkhEZvjRL1dXVCo0R+1a03GRItJ3xT72yawbP1XqIHvD6za8HrMWoCCxnP8
o5MduHUgG9yN3rETBOhEXxoBRRXDXmWR8JPkMdQ7jYjP6Gj3GoqJRmKirQaRVbGv
np/2PghU/v/ey6QKKwIDAQAB
-----END PUBLIC KEY-----";

var SHA256 = require("crypto-js/sha256")

encryptTest(message) {

          // Encrypt with the public key...
          var encrypt = new JSEncrypt();
          encrypt.setPublicKey(pubkey);
          var encrypted = encrypt.encrypt(message);

          // Decrypt with the private key...
          var decrypt = new JSEncrypt();
          decrypt.setPrivateKey(privKey);
          var uncrypted = decrypt.decrypt(encrypted);

          // Now a simple check to see if the round-trip worked.
          if (uncrypted == message) {
            alert('It works!!!');
          }
          else {
            alert('Something went wrong....');
	  }
}

verification(identifier) {
	var verification = SHA256(identifier);
	return verification;
}



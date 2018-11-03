//crypto-js
//jsencrypt
var SHA256 = require("crypto-js/sha256")
verification(identifier) {
	var verification = SHA256(identifier);
	return verification;
}

encryptTest(message) {

          // Encrypt with the public key...
          var encrypt = new JSEncrypt();
          encrypt.setPublicKey($('#pubkey').val());
          var encrypted = encrypt.encrypt($('#input').val());

          // Decrypt with the private key...
          var decrypt = new JSEncrypt();
          decrypt.setPrivateKey($('#privkey').val());
          var uncrypted = decrypt.decrypt(encrypted);

          // Now a simple check to see if the round-trip worked.
          if (uncrypted == $('#input').val()) {
            alert('It works!!!');
          }
          else {
            alert('Something went wrong....');
	  }
}

encrypt(message) {

          // Encrypt with the public key...
	var encrypt = new JSEncrypt();
	encrypt.setPublicKey($('#pubkey').val());
	var encrypted = encrypt.encrypt($('#input').val());
	return encrypted; 
}

decrypt(encryptedMsg) {
	var decrypt = new JSEncrypt();
	decrypt.setPrivateKey($('#privkey').val());
	var unencrypted = decrypt.decrypt(encrypted);
	return unencrypted;
}

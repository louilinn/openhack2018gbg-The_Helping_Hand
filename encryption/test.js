//crypto-js
//jsencrypt
const pubkey = 
"-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDDcPIUgKfbslG9KvF6DqJCtSH8
RnjrsNkhEZvjRL1dXVCo0R+1a03GRItJ3xT72yawbP1XqIHvD6za8HrMWoCCxnP8
o5MduHUgG9yN3rETBOhEXxoBRRXDXmWR8JPkMdQ7jYjP6Gj3GoqJRmKirQaRVbGv
np/2PghU/v/ey6QKKwIDAQAB
-----END PUBLIC KEY-----";




const privKey = 
"-----BEGIN PRIVATE KEY-----
MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAMNw8hSAp9uyUb0q
8XoOokK1IfxGeOuw2SERm+NEvV1dUKjRH7VrTcZEi0nfFPvbJrBs/Veoge8PrNrw
esxagILGc/yjkx24dSAb3I3esRME6ERfGgFFFcNeZZHwk+Qx1DuNiM/oaPcaiolG
YqKtBpFVsa+en/Y+CFT+/97LpAorAgMBAAECgYEAkaa1spPjBPbStcCwL3+Ca2Zk
CodWjIfCeUOPQoMzAMaPWxBmqiRq1My2ZXosQDoljivbbh11n/y1nIDFc1ArHnsM
0SwLji8ODirHI/NrBu/d/qsyXSuI4n0UTgdRSYHnfpxP9VuC9F1Cfg/6c+4+Mmn+
9GTQMf+cpw8ROsbXTyECQQD8L/ZWAcEOxznehJoDbws6woKnsUjlk5I9JEGKD2Fb
ZgbjLWzVEUNGJZJXa67XoKPRJ6RgtsEj+f8y0Na+89ZRAkEAxmVcAJD/xRCbKUm5
K3P1hgjaLsi0sa86C76/bt70PIY9k7dJtaDSbwObeNrz700MV4tWJji3eX1iHIC/
SWZtuwJBAN3kVZrXcEbQhNqFUf4zdm39N3jVRI67ibDCdehEICWLYAQDs/7FcawG
4vyIgw63CWy+tKNkKgy9qw3LMyhQ5AECQAcTHDnE8en0EqRhRaIgC3RRIn6il5by
ea5rieYJO0phOxbmZVF9v6NHzKZ9oE87PyJsDJFmWlyRtQrxKGEUrvsCQERG+LfQ
xHtzH8LiSthEpcC/eTs9GjadSfM7Wg4x2eYtyLvD0BktIMHcR5EdGQp7K4fj51O2
Sjf2HPIu/22eMSM=
-----END PRIVATE KEY-----";

var SHA256 = require("crypto-js/sha256");
var JSEncrypt = require("jsencrypt");


verification(identifier) {
	var verification = SHA256(identifier);
	return verification;
}


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

encrypt(message) {
	// Encrypt with the public key...
	var encrypt = new JSEncrypt();
        encrypt.setPublicKey(pubkey);
        var encrypted = encrypt.encrypt(message);

}

decrypt(encryptedMsg) {
	// Decrypt with the private key...
	var decrypt = new JSEncrypt();
	decrypt.setPrivateKey(privKey);
	var uncrypted = decrypt.decrypt(encrypted);

}

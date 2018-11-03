const privKey = "-----BEGIN PRIVATE KEY-----\n" +
"MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAMNw8hSAp9uyUb0q\n" +
"8XoOokK1IfxGeOuw2SERm+NEvV1dUKjRH7VrTcZEi0nfFPvbJrBs/Veoge8PrNrw\n" +
"esxagILGc/yjkx24dSAb3I3esRME6ERfGgFFFcNeZZHwk+Qx1DuNiM/oaPcaiolG\n" +
"YqKtBpFVsa+en/Y+CFT+/97LpAorAgMBAAECgYEAkaa1spPjBPbStcCwL3+Ca2Zk\n" +
"CodWjIfCeUOPQoMzAMaPWxBmqiRq1My2ZXosQDoljivbbh11n/y1nIDFc1ArHnsM\n" +
"0SwLji8ODirHI/NrBu/d/qsyXSuI4n0UTgdRSYHnfpxP9VuC9F1Cfg/6c+4+Mmn+\n" +
"9GTQMf+cpw8ROsbXTyECQQD8L/ZWAcEOxznehJoDbws6woKnsUjlk5I9JEGKD2Fb\n" +
"ZgbjLWzVEUNGJZJXa67XoKPRJ6RgtsEj+f8y0Na+89ZRAkEAxmVcAJD/xRCbKUm5\n" +
"K3P1hgjaLsi0sa86C76/bt70PIY9k7dJtaDSbwObeNrz700MV4tWJji3eX1iHIC/\n" +
"SWZtuwJBAN3kVZrXcEbQhNqFUf4zdm39N3jVRI67ibDCdehEICWLYAQDs/7FcawG\n" +
"4vyIgw63CWy+tKNkKgy9qw3LMyhQ5AECQAcTHDnE8en0EqRhRaIgC3RRIn6il5by\n" +
"ea5rieYJO0phOxbmZVF9v6NHzKZ9oE87PyJsDJFmWlyRtQrxKGEUrvsCQERG+LfQ\n" +
"xHtzH8LiSthEpcC/eTs9GjadSfM7Wg4x2eYtyLvD0BktIMHcR5EdGQp7K4fj51O2\n" +
"Sjf2HPIu/22eMSM=\n" +
"-----END PRIVATE KEY-----"; 

function decryptMsg(encryptedMsg) {
	// Decrypt with the private key...
	var decrypt = new JSEncrypt();
	decrypt.setPrivateKey(privKey);
	var uncrypted = decrypt.decrypt(encryptedMsg);
	return uncrypted;
};
module.export.decryptMsg = decryptMsg;


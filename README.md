# openhack2018

## Chosen challenge
Civic space from the Swedish society for nature conservation (SSNC/Naturskyddsföreningen)


## Team
Felix Franzén
Louise Linné
Miriam Ahlberg
Roisatul Azizah
Axel Friberg
William Andersson


## Description


## How to add the helping hand to your site


## How to run locally
### Create database
Create mysql database and enter username, password to your mysql instance. Edit also the database and table name in dbserver.js if not identical to the example.

```
CREATE DATABASE helpinghand;
CREATE TABLE `Reports` (
	`ID` INT NOT NULL AUTO_INCREMENT,
	`encryptedReport` VARCHAR(255),
	PRIMARY KEY (`ID`)
);
```

### Start server
Make sure you have installed node.js.
Go to ~/server and run 'npm install'.
Then run 'node dbserver.js', to start local server on localhost:3000

### Endpoints
`/insert` POST for inserting reports in database

`/reports` GET get encrypted reports


#CivicSpace
#EnvironmentalDefenders

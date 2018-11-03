# openhack2018

## Team name
The Helping Hand

## Chosen challenge
Civic space from the Swedish society for nature conservation (SSNC/Naturskyddsföreningen)

## Description
Drop in widget for collecting report of threats and harassment on any website anonymously and securely

## License
MIT

## Technologies
MySQL, NodeJS, JSEncrypt

## Languages
HTML, CSS, JavaScript

## Team members
* Axel Friberg, 
* Felix Franzén, 
* Louise Linné, 
* Miriam Ahlberg, 
* Roisatul Azizah, 
* William Andersson

#CivicSpace
#EnvironmentalDefenders


## How to run locally
### Create database
Create mysql database and enter username, password to your mysql instance. Edit also the database and table name in dbserver.js if not identical to the example.

```sql
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

## How to add the helping hand to your site


#CivicSpace
#EnvironmentalDefenders

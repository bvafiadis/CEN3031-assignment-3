'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
	listingData = require('./listings.json');

/* Connect to your database */
mongoose.connect('mongodb://student:password@ds125994.mlab.com:25994/assignment3');

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
for (var i = 0; i < listingData.entries.length; i++) {		//iterates through all the indices in entries
	new Listing(listingData.entries[i]).save();		//creates a new listing for each index, and saves to database
}


/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */
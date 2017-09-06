/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

mongoose.connect('mongodb://student:password@ds125994.mlab.com:25994/assignment3');
/* information above is for queries.js to run without JSONtoMongo.js */


var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.find({ name: 'Library West' }, function(err, listing) {
	  if (err) throw err;

	  // print out listing information
	  console.log(listing);
	});
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   Listing.findOneAndRemove({ code: 'CABL' }, function(err) {
	  if (err) throw err;
	  
	  console.log('CABL successfully deleted!');
	});
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   Listing.findOneAndUpdate({ code: 'PHL' }, { address: 'New Address' }, function(err, listing) {
	  if (err) throw err;		//changes address of PHL (New Address is used because updated address was not given in assignment
	});
	
	Listing.find({ code: 'PHL' }, function(err, listing) {
	  if (err) throw err;

	  // print out new listing information
	  console.log(listing);
	});
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   Listing.find({}, function(err, listings) {
   if (err) throw err;

   // object of all the listings
   console.log(listings);
	});
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();

(function() {
'use strict';

/**
 * Map Service
 */
angular
  .module('starter.services')
  .service('runModel', model);

function model($rootScope){
	this.run = { drops: [{"info":"Home","fin_time":"","status":0,"start_time":"","sig":"","customer_details":{"ccid":"0","fname":"","mobile":"","phone":"","email":"no email","suburb":"","street_address":"","sname":"","url":"","cid":"nocid","cdl_id":0,"address":"no address","postcode":""},"drop_details":{"sig":"","distance":0,"status":0,"lat":"-27.374187","duration":0,"comments":"","lng":"153.059143","route_from_last_poly":[]},"run_order_items":[]}] }
    var drops = [2];
    this.drops = drops;
    this.selectedDrop = null;

    /* --  -- */
    this.setSelectedDrop = function(i) {
      this.selectedDrop = i;
    }

    this.getRun = function(run_id) {
      this.run = {};

    }

  }



})();
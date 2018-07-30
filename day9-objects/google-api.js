var result = {
    "destination_addresses" : [ "New York, NY, USA" ],
    "origin_addresses" : [ "Washington, DC, USA" ],
    "rows" : [
       {
          "elements" : [
             {
                "distance" : {
                   "text" : "362 kms",
                   "value" : 361715
                },
                "duration" : {
                   "text" : "3 hours 49 mins",
                   "value" : 13725
                },
                "status" : "OK"
             }
          ]
       }
    ],
    "status" : "OK"
 }

 console.log(result.destination_addresses);
 console.log(result.origin_addresses);
 console.log(result.rows[0]);
 console.log(result.rows[0].elements[0]);
 console.log(result.rows[0].elements[0].distance);
 console.log(result.rows[0].elements[0].distance.text);
 console.log(result.rows[0].elements[0].distance.value);
 console.log(result.rows[0].elements[0].duration);
 console.log(result.rows[0].elements[0].duration.text);
 console.log(result.rows[0].elements[0].duration.value);
 console.log(result.rows[0].elements[0].status);
 console.log(result.status);

 var destination = result.destination_addresses;
 var origin = result.origin_addresses;
 var distance = result.rows[0].elements[0].distance.text;
 var duration = result.rows[0].elements[0].duration.text;

 function distanceFormatter(result) {
    return (`The distance between ${origin} and ${destination} is ${distance} and the time taken is ${duration}`);
 }

 console.log(distanceFormatter(result));

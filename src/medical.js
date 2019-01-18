import { apiKey as ENV} from './.env';

export class Medical {
  constructor(concern) {
    this.concern = concern;
  }

  promise(){
    return new Promise(function(resolve, reject) => {
      let request = new XMLHttpRequest();
      const concernUrl = "https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=`${this.concern}`&location=or-portland&skip=0&limit=10&user_key=`${exports.apiKey}`";



      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          response = JSON.parse(this.responseText);
          getElements(response);resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }

      request.open("GET", concernUrl, true);
      request.send();

  }


//     promise.then(function(response) {
//      let body = JSON.parse(response);
//      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
//      $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
//    }, function(error) {
//      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
//    });
//  });
// });


}


}

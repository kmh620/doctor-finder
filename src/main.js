
import { Doctor } from './doctor';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



$(document).ready(function() {
    $("#search-submit").click(function() {
     let searchWord = $("#doctor-search-input").val();
     $("#doctor-search-input").val();
     console.log(searchWord);

       let newDoc = new Doctor();
       let docPromise = newDoc.searchForDoctor(searchWord);

       let response;
       docPromise.then(function (response) {
         let body = JSON.parse(response);
         console.log(body);
          $('.doctor-display').show();
          let i = 0;

          $("#next-submit").click(function() {
            i += 1;
           $('#doctor-name').text(body.data[i].profile.first_name + " " + body.data[i].profile.last_name);
           $("#doctor-patient-status").text(body.data[i].practices[i].accepts_new_patients);
           $("#doctor-specialty").text(body.data[i].specialties[i].uid);
           $("#doctor-address").text(body.data[i].practices[i].visit_address.street + " " + body.data[i].practices[i].visit_address.city + ", " + body.data[i].practices[i].visit_address.state );
           $("#doctor-phone").text(body.data[i].practices[i].phones[i].number);
           // $("#doctor-website").text(body.data[0].profile.);

          })


       }, function(error) {
          $('.showErrors').text(`There was an error processing your request: ${error.message}`);
        });

    });
});

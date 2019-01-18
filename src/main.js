
import { Doctor } from './doctor';
import { Medical } from './medical';

// import './styles.css';
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

           $('#doctor-name').text(body.data[0].profile.first_name, body.data[0].profile.last_name);
           //image_url
           $("#doctor-patient-status").text(body.data[0].practices[0].accepts_new_patients);
           $("#doctor-specialty").text(body.data[0].specialties);
           $("#doctor-address").text(body.data[0].practices[0].visit_address);
           $("#doctor-phone").text(body.data[0].practices[0].phones);
           // $("#doctor-website").text(body.data[0].profile.);
           console.log(body.data[0].profile.first_name, body.data[0].profile.last_name, body.data[0].practices[0].accepts_new_patients, body.data[0].specialties, body.data[0].practices[0].visit_address, body.data[0].practices[0].phones);
       }, function(error) {
          $('.showErrors').text(`There was an error processing your request: ${error.message}`);
        });

    });
});

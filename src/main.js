
import { Doctor } from './doctor';
import { Medical } from './medical';

// import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



$(document).ready(function() {
    $("#search-submit").click(function() {
     let doctorName = $("#doctor-search-input").val();
     $("#doctor-search-input").val();
     console.log(doctorName);

       let newDoc = new Doctor();
       let docPromise = newDoc.searchForDoctor(doctorName);

       let response;
       docPromise.then(function (response) {
         let body = JSON.parse(response);
         $('#doctor-name').text(`${response.data.profile.first_name}` , `${response.data.profile.last_name}`);
         console.log(body.data.name);
         $("#doctor-patient-status").text(body.data.accepts_new_patients);
         $("#doctor-address").text();
         $("#doctor-phone").text();
         $("#doctor-website").text();
       }, function(error) {
          $('.showErrors').text(`There was an error processing your request: ${error.message}`);
        });
    
    });
});

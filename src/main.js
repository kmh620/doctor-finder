
import { Doctor } from './doctor';
import { Medical } from './medical';

// import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



$(document).ready(function() {
   // event.preventDefault();

    $("#search-submit").click(function() {
     let doctorName = $("#doctor-search-input").val();
     console.log(doctorName);
     // $("#doctor-search-input").val("");
     let medicalSearchInput = $("#medical-search-input").val();
     console.log(medicalSearchInput);

       let newDoc = new Doctor();
       let docPromise = newDoc.searchForDoctor(doctorName);

       let doctorResult = [];
       let response;
       docPromise.then(function (response) {
         let body = JSON.parse(response);
         $('#doctor-name').text(`${body.response.name}`);
         console.log(body.data.name);
         $("#doctor-patient-status").text(body.data.accepts_new_patients);
         $("#doctor-address").text();
         $("#doctor-phone").text();
         $("#doctor-website").text();
          }, function(error) {
          $('.showErrors').text(`There was an error processing your request: ${error.message}`);


          const getElements = function(response) {
              $(".doctor-display").attr("src", response.data[0].images.original.url);
              console.log(response.data[0].images.original.url);
            }

    });

     //   let searchResults = response.results;
     //   let searchOutputHTML = "";
     //
     //   searchResults.forEach(function(element) {
     //     searchOutputHTML += `<li>${element.name}</li>`
     //   });
     //   $("#search-results").html(searchOutputHTML);
     // }

})
})

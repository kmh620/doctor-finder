
import { Doctor } from './doctor';
import { Medical } from './medical';

import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



$(document).ready(function() {

    $("#search-submit").click(function() {
     let doctorSearchInput = $("#doctor-search-input").val();
     // $("#doctor-search-input").val("");
     let medicalSearchInput = $("#medical-search-input").val();
     // $("#doctor-search-input").val("");

     const getElements = function(response) {
       // $("#doctor-image").attr("src", response.results[0].image);
       $("#doctor-name").text( response.results[0]);
       $("#doctor-patient-status").text( response.results[0]);
       $("#doctor-address").text( response.results[0]);
       $("#doctor-phone").text( response.results[0]);
       $("#doctor-website").text( response.results[0]);

       let searchResults = response.results;
       let searchOutputHTML = "";

       searchResults.forEach(function(element) {
         searchOutputHTML += `<li>${element.name}</li>`
       });
       $("#search-results").html(searchOutputHTML);
     }
    });
}

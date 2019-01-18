
export class Doctor {
  constructor(name, status, address, phone, website) {
    this.name = name;
    this.status;
    this.address;
    this.phone;
    this.website;

  }

  searchForDoctor(searchWord) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let nameUrl = `https://api.betterdoctor.com/2016-03-01/doctors?query=${searchWord}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

      request.onload = function () {
        if (this.status === 200){
          resolve(request.response);

        } else {
          reject(Error(request.statusText));
        }
      }

      request.open("GET", nameUrl, true);
      request.send();

    });
  }

}

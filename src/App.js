import logo from './logo.svg';
import './App.css';
import { div } from 'prelude-ls';
import React, { useState, useEffect,setState } from 'react';



function App() {
  return (
    <>
      <Moovie />
    </>
  );

}
function Moovie() {
  var xhttp = new XMLHttpRequest();
  var array = {
    title: [],
    about: [],
    year: [],
    urlPoster: [],
    urlVideo: []
  };
  xhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {
      let i;
      let xmlDoc = this.responseXML;
      let x = xmlDoc.getElementsByTagName("MOVIE");
      for (i = 0; i < x.length; i++) {

        array.title.push(x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue);
        array.about.push(x[i].getElementsByTagName("ABOUT")[0].childNodes[0].nodeValue);
        array.year.push(x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue);
        array.urlPoster.push(x[i].getElementsByTagName("URLPOSTER")[0].childNodes[0].nodeValue);


      }


    }
 

  };
  const [ar, setAr] = useState(array);
  xhttp.open("GET", "xml.xml", true);
  xhttp.send();
  return ar.urlPoster.map((choice, i) => (
    <div className="list-card" >
      <a href="https://mealex.me">
        <div className="list">

          <img src={choice} alt="" ></img>
        </div>
        <div className="list-names">
          <a href="vizioneaza.html" id="1" >{ar.title[i]}</a>
          <button value="bright burn">haide </button>
        </div>
      </a>
    </div >
  ));
}




export default App;

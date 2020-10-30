document.getElementById("getLoc").onclick = getPosition;
function getPosition() {
   navigator.geolocation.getCurrentPosition(showCoords, failureCallback,options)  
}
var options = {
    enableHighAccuracy: true,
    timeout: 50000,
    maximumAge: 100000
}
function showCoords(pos) {
  var div=document.getElementById('map');
    var lat= pos.coords.latitude
    var long= pos.coords.longitude
   // console.log(lat,long);
    var coords=new google.maps.LatLng(lat,long);
    //console.log(coords);
    var mapOption={
      zoom:7,
      center:coords,
      mapTypeId:google.maps.mapTypeId
    }
    var map=new google.maps.Map(div,mapOption);
    var marker=new google.maps.Marker({position:coords,map:map}) 
    //console.log(div);  
}

function failureCallback(error) {    
    switch (error.code) {
        case 0:
            document.getElementById("error").innerHTML = "unKnown error ";
            break;
        case 1:
            document.getElementById("error").innerHTML = "Permission Denied !!";
            break;
        case 2:
            document.getElementById("error").innerHTML = "Position Unavailable !!";
            break;
         case 3:
            document.getElementById("error").innerHTML = "Time Out  !!";
            break;

         default:
          document.getElementById("error").innerHTML = " Please Try again Later !!";

    }
       document.getElementById("error").innerHTML = error.message;
}


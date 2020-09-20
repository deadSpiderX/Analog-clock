// setInerval used to repeate the work
setInterval(()=>{
	
	// inbuild function in js to show date
  d = new Date();
  
  //initialize the hour minute and second
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  
 //initialize the math function to rotate
  hrotation = 30*htime + mtime/2;
  mrotation = 6*mtime;
  srotation = 6*stime;
  
  //calling the divs using their ID
  hour = document.getElementById("h");
  minute = document.getElementById("m");
  second = document.getElementById("s");
  
  //hour rotation
  hour.style.transform = 
  `rotate(${hrotation}deg)`
  
  //minute rotation
  minute.style.transform = 
  `rotate(${mrotation}deg)`
  
  //second rotation
   second.style.transform =
    `rotate(${srotation}deg)`
    
},1000);










const count = document.getElementById("count")

incrementvisitorscount();

function incrementvisitorscount() {
   let visits;

   if (!localStorage.getItem("visits")) localStorage.setItem("visits", 1);

   visits = + localStorage.getItem("visits");
   const incrementedcount = visits + 1;
  
   localStorage.setItem("visits", incrementedcount );

   count.innerText = localStorage.getItem("visits");
}
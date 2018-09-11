//Calculate Tip
function calculateTip() {
  var jmlGaji = document.getElementById("tagihan").value;
  var hslKerja = document.getElementById("kinerjaStaff").value;
  var jmlStaff = document.getElementById("karyawan").value;

  //validate input
  if (jmlGaji === "" || hslKerja == 0) {
    alert("Mohon Isi Dahulu");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (jmlStaff === "" || jmlStaff <= 1) {
    jmlStaff = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate tip
  var total = (jmlGaji * hslKerja) / jmlStaff;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();

};
window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img'); 
            img.src = URL.createObjectURL(this.files[0]); 
            img.onload = imageIsLoaded; 
        }
    });
  });

function addAppeal(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '.' + dd + '.' + yyyy;
    today_time = new Date();

    if( document.getElementById("appeal_text").value != ""){
        document.getElementById("appeals").innerHTML += 
        
        '<div class="row d-flex justify-content-center border border-dark border-top-1 border-bottom-0 border-left-0 border-right-0 mt-5 mb-5">\
        <div class="col-md-2 p-2 mt-4 d-flex-col align-items-center">\
            <p>Mr. Smith</p>\
            <p>'+today_time.getHours()+":"+today_time.getMinutes()+'</p>\
            <p>'+today+'</p>\
        </div>\
        <div class="col-md-8 p-2 mt-4 d-flex-col ">'
         + document.getElementById("appeal_text").value +
        '</div>\
         </div>';
         document.getElementById("appeal_text").value = "";
         }else{
             alert("ENTER SOME TEXT PLEASE!");
         }
} 
function addNew(){
    
    if( document.getElementById("new_title").value != "" && document.getElementById("new_text").value != ""){
         document.getElementById("new_title").value = "";
         document.getElementById("new_text").value ="";
         alert("NEW IS ADDED!");
         }else{
             alert("ENTER SOME TEXT PLEASE!");
         }
}

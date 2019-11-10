// localStorage.clear();
// localStorage.setItem("appeal_counter",0);
// localStorage.setItem("new_counter",0);
var new_image_url = '../images/NIN_news-card.png';
function appealsGeneration(){
    var appeal_counter = parseInt(localStorage.getItem("appeal_counter"));

    if(isOnline()){
        for(let i = 0;i < appeal_counter;i++){
            document.getElementById("appeals").innerHTML += localStorage.getItem('appeal'+i);
        }
    }else{
        alert("offline");
    }

}
function newsGeneration(){
    var new_counter = parseInt(localStorage.getItem("new_counter"));
      if(isOnline()){
        for(let i = 0;i < new_counter;i++){
            document.getElementById("news_container").innerHTML += localStorage.getItem('new_nin'+i);
        }
    }else{
        alert("offline");
    }
}
function adminFunctional(){

    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img  = document.querySelector('img'); 
            var reader = new FileReader();
            reader.onload = function(){
                img.src = reader.result;
                new_image_url= reader.result;
              
            }
          reader.readAsDataURL(this.files[0]);
           
        }
    });
}
function addAppeal(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    
    today = mm + '.' + dd + '.' + yyyy;
    today_time = new Date();
    var appeal_counter = parseInt(localStorage.getItem("appeal_counter"));

    if(isOnline()){
        if( document.getElementById("appeal_text").value.trim() != ""){
            document.getElementById("appeal_text").value = "";
            alert("SERVER ACCEPTED THE DATA");
         }else{
             alert("ENTER SOME TEXT PLEASE!");
         }
    }else{
        
        localStorage.setItem('appeal' + appeal_counter, '<div class="row d-flex justify-content-center border border-dark border-top-1 border-bottom-0 border-left-0 border-right-0 mt-5 mb-5">\
        <div class="col-md-2 p-2 mt-4 d-flex-col align-items-center">\
            <p>Mr. Smith</p>\
            <p>'+today_time.getHours()+":"+today_time.getMinutes()+'</p>\
            <p>'+today+'</p>\
        </div>\
        <div class="col-md-8 p-2 mt-4 d-flex-col ">'
        + document.getElementById("appeal_text").value +
        '</div>\
        </div>');

       localStorage.setItem("appeal_counter",++appeal_counter);
    }

} 
function addNew(){
    
    var new_counter = parseInt(localStorage.getItem("new_counter"));
    
    if(isOnline() == true){
        if( document.getElementById("new_title").value.trim() != "" || document.getElementById("new_text").value.trim() != ""  ){
            
            alert("FILL ALL FIELDS");
        }else{
            document.getElementById("new_text").value = "";
            document.getElementById("new_title").value = "";
            alert("SERVER ACCEPTED THE DATA");
        }
    }else{
        
        localStorage.setItem('new_nin' + new_counter, ' <div class=" p-5 col-md-4 col-sm-6">\
        <div class="card">\
            <img src='+ new_image_url+ ' class="img-fluid" alt="">\
            <div class="card-body">\
                <h5 class="card-title text-center">'+document.getElementById("new_title").value+'</h5>\
                <p class="card-text">'+  document.getElementById("new_text").value +' </p>\
            </div>\
        </div>\
    </div>');
   
        document.getElementById("new_text").value = "";
        document.getElementById("new_title").value = "";
        localStorage.setItem("new_counter",++new_counter);
 
    }

}
function isOnline() {   
    return window.navigator.onLine; 
}


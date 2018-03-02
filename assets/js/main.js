function myFunction(){

    $.ajax({
  url: 'http://acadprojects.com/py/explora/subject',
  type: 'GET',
  success: function(response){
    console.log(response);
    for(i in response.data){
       $("#select1").append($('<option>'+response.data[i].name+'</option>'));
      }
    }
  });


    $.ajax({
      url: 'http://acadprojects.com/py/explora/question?page=0&type=trending',
      type: 'GET',
      success: function(result){
        console.log(result);
     for(i in result.data){
         $("#tab1default").append($('<div class="row"> <div class="col-md-2 col-sm-2"> <section class="tabsLeftSection"> <img src="'+result.data[i].image_url+'"/> <h4>'+result.data[i].posted_by_name+'</h4> <h5>6 March, 2017</h5> </section> </div><div class="col-md-10 col-sm-10 "><section class="tabsRightSection"> <h2>'+result.data[i].question+'</h2> <p>'+result.data[i].posted_by_email+' </p><h4>Tags: '+result.data[i].tags+'</h4> <a href="index2.html"><button type="button" class="btn btn-default " > View Answers</button></a> </section></div></div>'));

 }
      }
    });

     $.ajax({
      url: 'http://acadprojects.com/py/explora/question?page=0&type=trending',
      type: 'GET',
      success: function(result){
        console.log(result);
     for(i in result.data){
         $("#tab2default").append($('<div class="row tabContent"> <div class="col-md-2 col-sm-2"> <section class="tabsLeftSection"> <img src="'+result.data[i].image_url+'"/> <h4>'+result.data[i].posted_by_name+'</h4> <h5>6 March, 2017</h5> </section> </div><div class="col-md-10 col-sm-10 "> <section class="tabsRightSection"> <h2>'+result.data[i].question+'</h2> <p>'+result.data[i].posted_by_email+' </p><h4>Tags: '+result.data[i].tags+'</h4> <a href="index2.html"><button type="button" class="btn btn-default " > View Answers</button></a> </section> </div></div>'));

 }
      }
    });


/*
<div class="row tabContent">
    <div class="col-md-2 col-sm-2">
        <section class="tabsLeftSection"> 
            <img src="'+result.data[i].image_url+'" />
            <h4>'+result.data[i].posted_by_name+'</h4>
            <h5>6 March, 2017</h5> 
        </section>
    </div>
    <div class="col-md-10 col-sm-10 ">
      <section class="tabsRightSection">
        <h2>'+result.data[i].question+'</h2>
        <p>'+result.data[i].posted_by_email+' </p>
        <h4>Tags: '+result.data[i].tags+'</h4>
        <a href="index2.html">
            <button type="button" class="btn btn-default "> View Answers</button>
        </a>
      </section>  
    </div>
</div>        */

      $.ajax({
      url: 'http://acadprojects.com/py/explora/question?page=0&type=trending',
      type: 'GET',
      success: function(result){
        console.log(result);
     for(i in result.data){
         $("#tab3default").append($('<div class="row"> <div class="col-md-2 col-sm-2"> <section class="tabsLeftSection"> <img src="'+result.data[i].image_url+'"/> <h4>'+result.data[i].posted_by_name+'</h4> <h5>6 March, 2017</h5> </section> </div><div class="col-md-10 col-sm-10 "><section class="tabsRightSection"> <h2>'+result.data[i].question+'</h2> <p>'+result.data[i].posted_by_email+' </p><h4>Tags: '+result.data[i].tags+'</h4> <a href="index2.html"><button type="button" class="btn btn-default " > View Answers</button></a></section> </div></div>'));

 }
      }
    });

};
    

      
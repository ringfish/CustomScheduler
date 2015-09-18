// This is a JavaScript file
var counter=0;
function rea() {
        
        var element = document.getElementById('url').value;
         var name=document.getElementById('name').value;
        if(element==""){
            alert("urlが入力されていません");
        }
        else if(name==""){
            alert("表示名が入力されていません");
        }
        
        // else   
      //  alert(""+ element +"が入力されました。"+name+"が入力されました");
        
        localStorage.setItem("urlkey"+counter,JSON.stringify(element));
        localStorage.setItem("namekey"+counter,JSON.stringify(name));
        
       
      // localStorage.setItem("numberkey",JSON.stringify(counter));
        
        
}
function tabfix(){
     var item=localStorage.getItem("numberkey");
    var number=JSON.parse(item);
    var urlarray = new Array();
    
    
   
     for(var x=0;x<counter;x++){
        var urlitem=localStorage.getItem("urlkey"+counter);
        var nameitem=localStorage.getItem("namekey"+counter);
        
    
        urlarray[0]=JSON.parse(urlitem);
        urlarray[1]=JSON.parse(nameitem);
        
        //$("#list").append("<ons-list-item  onclick=\" window.open("+urlarray[0]+", '_blank', 'location=yes')\">"+urlarray[1]+"</ons-list-item>");
     
        $("#list").append("<ons-list-item onclick=\"window.open(\'"+urlarray[0]+"\', '_blank', 'location=yes')\" class=\'list__item ons-list-item-inner\'>"+urlarray[1]+"</ons-list-item>");
        //  $("#list").append("<ons-list-item onclick=\" window.open("+urlarray[0]+", '_blank', 'location=yes')\"  class=\"list__item ons-list-item-inner\">"+urlarray[1]+"</ons-list-item>");
     }
    
}



function out() {
    //alert("out");
    var item=localStorage.getItem("numberkey");
    var number=JSON.parse(item);
    var urlarray = new Array();
    
    
   
     
        var urlitem=localStorage.getItem("urlkey"+counter);
        var nameitem=localStorage.getItem("namekey"+counter);
        
    
        urlarray[0]=JSON.parse(urlitem);
        urlarray[1]=JSON.parse(nameitem);
        
        //$("#list").append("<ons-list-item  onclick=\" window.open("+urlarray[0]+", '_blank', 'location=yes')\">"+urlarray[1]+"</ons-list-item>");
     
        $("#list").append("<ons-list-item onclick=\"window.open(\'"+urlarray[0]+"\', '_blank', 'location=yes')\" class=\'list__item ons-list-item-inner\'>"+urlarray[1]+"</ons-list-item>");
        //  $("#list").append("<ons-list-item onclick=\" window.open("+urlarray[0]+", '_blank', 'location=yes')\"  class=\"list__item ons-list-item-inner\">"+urlarray[1]+"</ons-list-item>");
        counter++;
}

function set_strage(){
    alert("set_strage");
    var title_ele=document.getElementById('title').value;
    var date_ele = document.getElementById('date').value;
    var start_ele=document.getElementById('time1').value;
    var end_ele = document.getElementById('time2').value;
    var memo_ele = document.getElementById('memo').value;
  
    
    localStorage.setItem('sch_title'+count,JSON.stringify(title_ele));
    var test=localStorage.getItem('sch_title'+count);
    var test2=JSON.parse(test);
    alert(test2);
    localStorage.setItem('sch_date'+count,JSON.stringify(date_ele));
    localStorage.setItem("sch_start"+count,JSON.stringify(start_ele));
    localStorage.setItem("sch_end"+count,JSON.stringify(end_ele));
    localStorage.setItem("sch_memo"+count,JSON.stringify(memo_ele));
    localStorage.setItem("sch_category"+count,JSON.stringify(category));
    localStorage.setItem("sch_count",JSON.stringify(count));
    
    count++;
}


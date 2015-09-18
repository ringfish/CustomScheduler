// This is a JavaScript file
var counter=0;
var id_copy;
var value;
var category="その他";
var count=0;
if(localStorage.getItem('sch_count')){
    count = JSON.parse(localStorage.getItem('sch_count'));
}
var id_detail;
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
     if(!(urlarray[0]==""||urlarray[1]=="")){
        $("#list").append("<ons-list-item onclick=\"window.open(\'"+urlarray[0]+"\', '_blank', 'location=yes')\" class=\'list__item ons-list-item-inner\'>"+urlarray[1]+"</ons-list-item>");
        //  $("#list").append("<ons-list-item onclick=\" window.open("+urlarray[0]+", '_blank', 'location=yes')\"  class=\"list__item ons-list-item-inner\">"+urlarray[1]+"</ons-list-item>");
        counter++;
     }
}

function id_read(id){
  //  alert("関数起動");
    id_copy=id;
    timetableNavigator.pushPage('timetable_set.html');
   // alert("id="+id_copy+"");
}
function timetable_read() {
      //  alert(""+id_copy+"");
        var sub = document.getElementById('sub_name').value;
        if(sub==""){
            alert("教科名が入力されていません");    
        }else{
            localStorage.setItem("value"+id_copy,JSON.stringify(sub));
          //  alert(sub);
        }
        var place =JSON.parse(document.getElementById('class').value);
        localStorage.setItem("class"+id_copy, JSON.stringify(plase));
}

function output() {
    var info = document.getElementById(id_copy);
   // alert(info);
　 if(JSON.parse(localStorage.getItem("value"+id_copy))!="")
　 document.getElementById(id_copy).innerHTML=JSON.parse(localStorage.getItem("value"+id_copy));
    
    
    
    
}

function school(){
   // alert("scholl");
    category="学校関係";
}
function baito(){
   // alert("baito");
    category="バイト";
}
function circle(){
    //alert("circle");
    category="サークル関係";
}
function private(){
    //alert("private");
    category="プライベート";
}
function etc(){
    //alert("etc");
    category="その他";
}
function set_strage(){
   // alert("set_strage");
    count = localStorage.getItem("sch_count");
    var title_ele=document.getElementById('title').value;
    var date_ele = document.getElementById('date').value;
    var start_ele=document.getElementById('time1').value;
    var end_ele = document.getElementById('time2').value;
    var memo_ele = document.getElementById('memo').value;
  
    
    localStorage.setItem('sch_title'+count,JSON.stringify(title_ele)); 
    localStorage.setItem('sch_date'+count,JSON.stringify(date_ele));
    localStorage.setItem("sch_start"+count,JSON.stringify(start_ele));
    localStorage.setItem("sch_end"+count,JSON.stringify(end_ele));
    localStorage.setItem("sch_memo"+count,JSON.stringify(memo_ele));
    localStorage.setItem("sch_category"+count,JSON.stringify(category));
    var test=localStorage.getItem("sch_category"+count);
    //var test2=JSON.parse(test);
   // alert(test2);
    
        count++;
    localStorage.removeItem("sch_count");
    localStorage.setItem("sch_count",JSON.stringify(count));
    

    calenderNavigator.popPage();
}




function print_detail(){
     //alert("関数が動いてるよ");
     
    var count_st=localStorage.getItem('sch_count');
    var detail_count=JSON.parse(count_st);
    //alert(detail_count);
    
   for(var i=0;i<detail_count;i++){
        var start_st=localStorage.getItem('sch_start'+i);
        var detail_start=JSON.parse(start_st);
        //alert(+i+detail_start);
      
        var end_st=localStorage.getItem('sch_end'+i);
        var detail_end=JSON.parse(end_st);
       // alert(+i+detail_end);
      
        var title_st=localStorage.getItem('sch_title'+i);
        var detail_title=JSON.parse(title_st);
       // alert(+i+title_st);
        
        
        var date_st=localStorage.getItem('sch_date'+i);
        var detail_date=JSON.parse(date_st);
       //alert(+i+detail_date);
       
        //var id_st=localStorage.getItem('sch_id'+i);
        //var detail_id=JSON.parse(id_st);
        //alert(+i+detail_id);
       
        //var test=localStorage.getItem("sch_category"+i);
        //var test2=JSON.parse(test);
         //alert(test2);
        if(detail_date){
            var date_cut = detail_date.substr( -2 );
        }
        //alert(date_cut);
        if(dayId==date_cut){
            $("#detail_list").append("<ons-list-item  class=\"plan ng-scope list__item ons-list-item-inner list__item--chevron\" onclick=\"showDetail2(id)\" id=\""+i+"\" modifier=\"chevron\"><ons-row class=\"row ons-row-inner\"><ons-col width=\"80px\" style=\"-webkit-box-flex: 0; flex: 0 0 80px; max-width: 80px;\" class=\"plan-left col ons-col-inner\"><div class=\"plan-time\">"+detail_start+"</div><div class=\"plan-time\">"+detail_end+"</div></ons-col><ons-col width=\"6px\" class=\"plan-centre col ons-col-inner\" style=\"-webkit-box-flex: 0; flex: 0 0 6px; max-width: 6px; background-color: rgb(204, 204, 204)\"></ons-col><ons-col class=\"plan-right col ons-col-inner\"><div class=\"plan-title\">"+detail_title+"</div></ons-col></ons-row> </ons-list-item>");
            //ons.compile($("#"+i)[0]);
            //console.log("compile");
        }
    }
}

function min_cal(){
    var sum=0;
    //alert("関数動いている");
    var kaisu=JSON.parse(localStorage.getItem('sch_count'));
    //alert(kaisu);
  
    for(var i=0;i<=kaisu;i++){
      if(JSON.parse(localStorage.getItem('sch_category'+i))=="バイト"){
            var start_time=JSON.parse(localStorage.getItem('sch_start'+i));
            var start_cut=start_time.split(":");
            //alert(start_cut[0]);
            //alert(start_cut[1]);
            
            var end_time=JSON.parse(localStorage.getItem('sch_end'+i));
            var end_cut=end_time.split(":");
            //alert(end_cut[0]);
            //alert(end_cut[1]);
            
            
            var v1= 60*parseInt(start_cut[0])+parseInt(start_cut[1]);
            var v2= 60*parseInt(end_cut[0])+parseInt(end_cut[1]);
            var sabun=Math.abs(v1-v2);
          //  alert(sabun);
            sum +=sabun;
      }
     
    }
    var hour=sum/60;
    var min=sum%60
//    alert(sum);
    var money=sum*1000/60;
//    alert(money);
    document.getElementById('print').innerHTML= "¥"+money;
     document.getElementById('time').innerHTML= hour+"時間"+min+"分";
    
    
}




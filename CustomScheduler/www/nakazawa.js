// This is a JavaScript file
var dayId;
var detailId;

/*$(document).on("ons-tabbar:init", "#tabbar", function(e){
    console.log("tab");
    calenderNavigator.on('postpush', function(event){
        makeCalender();
    });
});*/

function makeCalender() {
    //$("#calender").html("<div id='calender'>hello, world!</div>");
    //document.getElementById('calender').innerHTML = "<div id='calender'>hello</div>";
    //準備
        myDate = new Date();    // 今日の日付データ取得
        myWeekTbl = new Array("日","月","火","水","木","金","土");    // 曜日テーブル定義
        myMonthTbl= new Array(31,28,31,30,31,30,31,31,30,31,30,31);    // 月テーブル定義
        myYear = myDate.getFullYear();    // 年を取得
        if (((myYear%4)==0 && (myYear%100)!=0) || (myYear%400)==0){    // うるう年だったら...
            myMonthTbl[1] = 29;	// 　２月を２９日とする
        }	
        myMonth = myDate.getMonth();	// 月を取得(0月～11月)
        myToday = myDate.getDate();	// 今日の'日'を退避
        myDate.setDate(1);	// 日付を'１日'に変えて、
        myWeek = myDate.getDay();	// 　'１日'の曜日を取得
        //myTblLine = Math.ceil((myWeek+myMonthTbl[myMonth])/7);	// カレンダーの行数
        myTblLine = 6;
        myTable = new Array(7*myTblLine);	// 表のセル数分定義
    
        for(i=0; i<7*myTblLine; i++) myTable[i]="　";	// myTableを掃除する
        for(i=0; i<myMonthTbl[myMonth]; i++)myTable[i+myWeek]=i+1;	// 日付を埋め込む
        
        // ***********************	
        //      カレンダーの表示	
        // ***********************
        $("#calenderHeader").text(myYear + "年" + (myMonth+1) + "月");
        // 表の作成開始
        //$("#calender").append("<table>");
        //曜日
        $("#calender").html("<table id='hako'><tr id='youbi'>");
        
        for(i=0; i<7; i++){	// 一行(１週間)ループ
            //$("#youbi").append("<td align='center' ");
            var youbiTdName = "youbi" + i;
            if(i==0) { $("#youbi").append("<td id='" + youbiTdName + "' align='center' bgcolor='#DDD'>");}// 日曜のセルの色
            else {$("#youbi").append("<td id='" + youbiTdName + "' align='center' bgcolor='#DDD'>");}// 月～土のセルの色
            $("#" + youbiTdName).append("<strong>" + myWeekTbl[i] + "</strong>");	// '日'から'土'の表示
            $("#youbi").append("</td>");
        }	
        $("#youbi").append("</tr>");	
        
        //日付
        for(i=0; i<6; i++){	// 表の「行」のループ
            var trName = "tr" + i;
            $("#hako").append("<tr id='" + trName + "'>");	// 行の開始
            for(j=0; j<7; j++){	// 表の「列」のループ
                //$("#" + trName).append("<td class='hiduke' ");	// 列(セル)の作成
                myDat = myTable[j+(i*7)];	// 書きこむ内容の取得
                
                var idDat;
                if(myDat<10){
                    idDat = "0" + myDat;
                }else{idDat = myDat;}
                
                if(myDat=="　"){
                    if(j==0) $("#" + trName).append("<td class='cell' bgcolor='#ffe0e0'></td>");
                    else if(j==6) $("#" + trName).append("<td class='cell' bgcolor='#e0eeff'></td>");
                    else $("#" + trName).append("<td class='cell' bgcolor='#eeeeee'></td>");
                }
                else{
                    if (myDat==myToday)$("#" + trName).append("<td id='" + idDat + "' class='cell' bgcolor='#66aaff' onclick='showDetail(id)'>");	// 今日のセルの色
                    else if(j==0) $("#" + trName).append("<td id='" + idDat + "' class='cell' bgcolor='#ffe0e0' onclick='showDetail(id)'>");// 日曜のセルの色
                    //else if(j==0) $("#" + trName).append("<td id='" + idDat + "' class='cell' bgcolor='#ffdddd' onclick='showDetail(id)'>");
                    else if(j==6) $("#" + trName).append("<td id='" + idDat + "' class='cell' bgcolor='#e0eeff' onclick='showDetail(id)'>");//土曜
                    //else if(j==6) $("#" + trName).append("<td id='" + idDat + "' class='cell' bgcolor='#ddddff' onclick='showDetail(id)'>");//土曜発表用
                    else $("#" + trName).append("<td id='" + idDat + "' class='cell' bgcolor='#eeeeee' onclick='showDetail(id)'>");	// 平日のセルの色
                }
                $("#" + idDat).append(myDat);	// 日付セット
                //$("#" + myDat).append("</td>");	// 列(セル)の終わり
            }	
            //$("#" + trName).append("</tr>");	// 行の終わり
        }
        
        $("#calender").append("</table>");	// 表の終わり
        
}

//予定の追加画面を開く
function addEvent(){
    calenderNavigator.pushPage("schedule_set.html");
}
//予定の詳細画面を開く

function tab_fix(){
    var item=localStorage.getItem("numberkey");
    var number=JSON.parse(item);
    for(var i=0; i<counter; i++){
        var urlitem = localStorage.getItem("urlkey"+i);
        var nameitem = localStorage.getItem("namekey"+i);
        console.log(nameitem);
        var url = JSON.parse(urlitem);
        var name = JSON.parse(nameitem);
        $("#list").append("<ons-list-item onclick=\"window.open(\'"+ url 
            +"\', '_blank', 'location=yes')\" class=\'list__item ons-list-item-inner\'>"+ name +"</ons-list-item>");
    }
}

function setSchedule(){
    console.log("setting");
    var sch_count = JSON.parse(localStorage.getItem("sch_count"));
    //var sch_count = 2;
    //console.log(sch_count);
        var title = JSON.parse(localStorage.getItem("sch_title" + sch_count));
        var day = JSON.parse(localStorage.getItem("sch_date" + sch_count));
        //var start = JSON.parse(localStorage.getItem("sch_start"+i));
        //var end = JSON.parse(localStorage.getItem("sch_end"+i));
        //var memo = JSON.parse(localStorage.getItem("sch_memo"+i));
        //var category = JSON.parse(localStorage.getItem("sch_category"+i));
        day2 = day.substr(-2);
        $("#"+day2).append("<br />" + title);
}

function fixSchedule(){
    console.log("fixing");
    makeCalender();
    var sch_count = JSON.parse(localStorage.getItem("sch_count"));
    console.log("sch_count:" + sch_count);
    for (var i=0; i<sch_count; i++){
        var title = JSON.parse(localStorage.getItem("sch_title" + i));
        var day = JSON.parse(localStorage.getItem("sch_date" + i));
        //var start = JSON.parse(localStorage.getItem("sch_start"+i));
        //var end = JSON.parse(localStorage.getItem("sch_end"+i));
        //var memo = JSON.parse(localStorage.getItem("sch_memo"+i));
        //var category = JSON.parse(localStorage.getItem("sch_category"+i));
        if(day){
            day2 = day.substr(-2);
            var inner = document.getElementById(day2).innerHTML;
            if(inner < 32){
                if(title.length<5){
                    $("#"+day2).append("<br />" + title);
                }
                else{
                    $("#"+day2).append("<br />" + title.substr(0,3) + "…");
                }
                }else if(inner.substr(-3,1) !== "他") {
                    //console.log(document.getElementById(day2).innerHTML);
                    $("#"+day2).append("<br />他1件");
                }else{
                var newInt = Number(inner.substr(-2,1)) + 1;
                console.log(newInt);
                $("#"+day2).html(inner.substr(0,inner.length-2) + newInt + "件");
                }
            }
            else console.log("day is null");
        }
    }


function timetable_fix(){
    for(var i=1; i<7; i++){
        for(var j=1; j<6; j++){
            if(localStorage.getItem("value" + i + j)){
                var subjectName = JSON.parse(localStorage.getItem("value" + i + j));
                //console.log(subjectName);
                document.getElementById(i + "" + j).innerHTML = subjectName;
            }
            //debug
        }
    }
}

function showDetail(id){
    dayId="";
    dayId = id;
    calenderNavigator.pushPage("schedule_detail.html");
}

function showDetail2(id){
    //detailId = "";
    //idにはそのオブジェクトのsch_countが入るはず
    detailId = id;
    calenderNavigator.pushPage('detail2.html');
}

function printDetail2(){
    console.log("print detail2");
    var title = JSON.parse(localStorage.getItem("sch_title" + detailId));
    var date = JSON.parse(localStorage.getItem("sch_date" + detailId));
    var time1 = JSON.parse(localStorage.getItem("sch_start" + detailId));
    var time2 = JSON.parse(localStorage.getItem("sch_end" + detailId));
    //var memo = JSON.parse(localStorage.getItem("sch_memo" + detailId));
    var category = JSON.parse(localStorage.getItem("sch_category" + detailId));
        
    $("#title").append(title);
    $("#date").append(date);
    $("#time1").append(time1);
    $("#time2").append(time2);
    //$("#memo").append(memo);
    $("#category").append(category);
}


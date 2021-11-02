// index visual
$(document).ready(function(){
    $("#visual").addClass("on");
    $("#visual .num").addClass("on");
});

let isActive = false;
let num = 1;
let color = ["lightcoral", "lightskyblue", "lightsalmon"]

$(".next").on("click", function(e){
    e.preventDefault();

    if(!isActive){
        isActive = true;
        (num < 3) ? num++ : num=1;
        $(this).addClass("on");
        $("#visual .txt p").addClass("on");
        $("#visual .bg").css({background: color[num - 1]});
        $(".num h1").css({transitionDelay: "0s"});
        $(".num").css({transition: "0.4s 0s"}).removeClass("on");
        $("#visual .util li").each(function(index, data){
            $(this).css({transition: "0.4s "+ index*0.2 +"s"});
        }).addClass("on");
        $("#visual .frame .wrap").css({filter: "grayscale(70%) blur(2px)"});
        $("#visual .frame .wrap").animate({marginLeft: "-100%"}, 700, function(){
            $(".next").removeClass("on");
            $("#visual .txt p").removeClass("on");
            $(this).css({marginLeft: 0, filter: "grayscale(40%)"})
            $("#visual .frame .wrap").find("img").first().appendTo("#visual .frame .wrap");
            $(".num h1").text("0"+ num);
            $(".num").addClass("on");
            $("#visual .util li").removeClass("on");
            isActive = false;
        });
    }
});

$(".bg a").on("click", function(e){
    e.preventDefault();

    $(".bg a").removeClass("on");
    $(this).addClass("on");
});

//intro letter
const $tit1 = $("#intro h1");
const $tit2 = $("#intro h2");

letter($tit1, 0.1);
letter($tit2, 0.2);

function letter(item, delay){
    let txt = item.text();
    let num = 0;
    txt = txt.split("");
    item.empty();

    for(let el of txt){
        item.append(
            $("<span>").text(el).css({transitionDelay: num * delay + 0.4 +"s"})
        );
        num++;
    }
    let bg = item.find("span").css("color");
    item.append(
        $("<p>").css({background: bg})
    )
}


// calendar
const $calendar = $("#news .calendar");
const $day = $calendar.find(".day");
const $date = $calendar.find(".date");
const $month = $calendar.find(".month");
const $year = $calendar.find(".year");
const day = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
let date = new Date();

$day.text(day[date.getDay()]);
$date.text(date.getDate());
$month.text(date.getMonth() + 1);
$year.text(date.getFullYear());

// cookie popup
const $popup = $("#popup");
const $popup_close = $popup.find(".close");
let isCookie = document.cookie.indexOf("popup=done");

(isCookie == 0) ? $popup.hide() : $popup.show();

$popup_close.on("click", function(e){
    e.preventDefault();

    let isChecked = $popup.find("input[type=checkbox]").is(":checked");

    if(isChecked) setCookie(1);
    $popup.hide();
});

$("#popup label").on("click", function(){
    $(this).toggleClass("on");
});

function setCookie(time){
    let today = new Date();
    let date = today.getDate();
    
    today.setDate(date + time);

    let duedate = today.toGMTString();

    document.cookie = "popup=done; expires=" + duedate;
}

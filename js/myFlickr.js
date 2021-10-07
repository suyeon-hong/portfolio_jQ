/*
https://www.flickr.com/services/rest/?method=flickr.photos.search
https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg

21be590b77fb11bd12a7266f99a2f2d8
*/

$.ajax({
    url: "https://www.flickr.com/services/rest/?method=flickr.photos.search",
    datatype: "json",
    data: {
        api_key: "21be590b77fb11bd12a7266f99a2f2d8",
        per_page: 30,
        format: "json",
        nojsoncallback: 1,
        privacy_filter: 5,
        tags: "landscape"
    }
}).success(function(data){
    let items = data.photos.photo;

    console.log(items);
    $(items).each(function(index,data){
        $(".gallery ul").append(
            $("<li>").append(
                $("<a>").attr({
                    href: "https://live.staticflickr.com/"+ data.server +"/"+ data.id +"_"+ data.secret +"_b.jpg"
                }).append(
                    $("<img>").attr({
                        src: "https://live.staticflickr.com/"+ data.server +"/"+ data.id +"_"+ data.secret +"_m.jpg"
                    })
                ),
                $("<h2>").text(data.title),
                $("<div class='profile'>").append(
                    $("<p>").text(data.owner),
                    $("<img>").attr({
                        src: "https://www.flickr.com/buddyicons/"+ data.owner +".jpg"
                    })
                )
            )
        )
    });
}).error(function(err){
    console.error("데이터를 불러오지 못했습니다.");
})

$("body").on("click", ".gallery ul li", function(e){
    e.preventDefault();

    let imgSrc = $(this).children("a").attr("href");

    $(".pop").remove();
    $("body").append(
        $("<div class='pop'>").append(
            $("<img>").attr({src: imgSrc}),
            $("<span>").text("CLOSE")
        )
    )
})

$("body").on("click", ".pop span", function(){
    $(".pop").remove();
})
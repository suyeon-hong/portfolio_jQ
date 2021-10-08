$.ajax({
    url:"https://www.googleapis.com/youtube/v3/playlistItems",
    dataType: "jsonp",
    data: {
        part: "snippet",
        key: "AIzaSyDLlgfKVBsGJubow2HpPxjC1LJgGRtpBHA",
        maxResults: 10,
        playlistId: "PLbO44G2j_RJzPLODoK6qiJwJ39JK4JyCY"
    }
}).success(function(data){
    let items = data.items;

    $(items).each(function(index, data){
        let txt = data.snippet.description;
        let len = txt.length;
        let date = data.snippet.publishedAt.split("T");

        if (len > 50){
            txt = txt.substr(0, 50)+ "..";
        }

        $("#vidGallery").append(
            $("<article>").append(
                $("<a>").attr({href : data.snippet.resourceId.videoId}).append(
                    $("<img>").attr({src: data.snippet.thumbnails.high.url})
                ),
                $("<div class='con'>").append(
                    $("<h2>").text(data.snippet.title),
                    $("<p>").text(txt),
                    $("<span>").text(date[0])
                )
            )
        )
    });
}).error(function(err){
    console.error(err);
});

$("body").on("click", "#vidGallery article a", function(e){
    e.preventDefault();

    let vidId = $(this).attr("href");

    $("body").append(
        $("<div class='pop'>").append(
            $("<iframe>").attr({
                src: "https://www.youtube.com/embed/"+ vidId,
                width: "100%",
                height: "100%",
                frameborder: 0
            }),
            $("<span>").text("CLOSE")
        )
    )
});

$("body").on("click", ".pop", function(){
    $(".pop").remove();
})
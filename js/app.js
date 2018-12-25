$(document).ready(function() {
    $(".rslides").responsiveSlides({
        auto: true,
        pager: true,
        speed: 500,
        namespace: "callbacks"
    });

    $("#owl-demo").owlCarousel({
        items : 7,
        lazyLoad : true,
        autoPlay : true,
        pagination : true,
    });
});
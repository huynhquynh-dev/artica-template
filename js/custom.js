$(function () {
    var groupMenu = $('.group-menu-home').isotope({
        itemSelector: '.one-food',
        layoutMode: 'masonry'
    });
    // layout Isotope after each image loads
    groupMenu.imagesLoaded().progress(function () {
        groupMenu.isotope('layout');
    });
    $('ul.menu-title-list li').click(function (event) {
        event.preventDefault();
        const type = $(this).data('food');
        groupMenu.isotope({ filter: type });

        // Active class menu title 
        $('ul.menu-title-list li').removeClass('active');
        $(this).addClass('active');
    });
});

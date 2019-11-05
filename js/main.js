 
 (function () {
 // Offcanvas Menu 
 var OffcanvasMenu = function () {
    $('.mb-menu-nav-toggle').on('click', function (event) {
        event.preventDefault();
        var $this = $(this);
        if ($('body').hasClass('offcanvas')) {
            $this.removeClass('active');
            $('body').removeClass('offcanvas');
        }
        else {
            $this.addClass('active');
            $('body').addClass('offcanvas');
        }
    });
};
// Click outside of offcanvass
var outsideMenuClick = function () {
    $(document).click(function (e) {
        var container = $("#rm-aside, .mb-menu-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($('body').hasClass('offcanvas')) {
                $('body').removeClass('offcanvas');
                $('.mb-menu-nav-toggle').removeClass('active');
            }
        }
    });
    $(window).scroll(function () {
        if ($('body').hasClass('offcanvas')) {
            $('body').removeClass('offcanvas');
            $('.mb-menu-nav-toggle').removeClass('active');
        }
    });
};

// Document on load.
$(function () {
    OffcanvasMenu();
    outsideMenuClick();
});
}());
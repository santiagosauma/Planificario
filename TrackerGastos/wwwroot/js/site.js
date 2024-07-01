$(document).ready(function () {
    $('#sidebar-toggler').click(function () {
        $('#sidebar').toggleClass('show');
        if ($('#sidebar').hasClass('show')) {
            $('.main-content').addClass('sidebar-open').removeClass('sidebar-closed');
            $('nav.navbar').addClass('sidebar-open').removeClass('sidebar-closed');
            $('.overlay').addClass('show');
        } else {
            $('.main-content').addClass('sidebar-closed').removeClass('sidebar-open');
            $('nav.navbar').addClass('sidebar-closed').removeClass('sidebar-open');
            $('.overlay').removeClass('show');
        }
    });

    $('.overlay').click(function () {
        $('#sidebar').removeClass('show');
        $('.main-content').addClass('sidebar-closed').removeClass('sidebar-open');
        $('nav.navbar').addClass('sidebar-closed').removeClass('sidebar-open');
        $('.overlay').removeClass('show');
    });
});

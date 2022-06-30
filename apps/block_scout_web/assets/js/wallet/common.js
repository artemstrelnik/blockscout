$(document).ready(function() {

    $('.MainNavbar__searchBtn').click(function(){
        $(this).next().toggle()
    })

    $(document).mouseup(function (e) {
        if ($(e.target).closest(".searchInput.MainNavbar__search").length
                    === 0) {
            $(".searchInput.MainNavbar__search input").hide();
        }
    });

    $('.tab-menu li a').on('click', function(){
              var target = $(this).attr('data-rel');
              $('.tab-menu li a').removeClass('active');
              $(this).addClass('active');
              $("#"+target).fadeIn('slow').siblings(".tab-box").hide();
              return false;
    });


    var b = $('.tab-menu li:first-child a').text();
    $('.tab-menu').prepend('<li class="tableEl-pre-heading__title d-lg-none d-block"><span class="toggleTabDropdown active">'+b+'</span></li>');

    function tabsDropdown() {
         if($(window).width() < 992) {
            $(document).on('click', '.tab-menu-wrapper .toggleTabDropdown', function(){
              $(this).parent().parent().parent().toggleClass('tab-menu-wrapper__open');
            });

            $('.tab-menu li a').click(function(){
              var t = $(this).text();
              $(this).parent().parent().parent().removeClass('tab-menu-wrapper__open');
              $('.tab-menu li .toggleTabDropdown').text(t);
            });
         }
    }

    $(window).resize(function(){
     tabsDropdown();
    }); tabsDropdown();

    
     $(document).mouseup(function (e) {
         if ($(e.target).closest(".tab-menu-wrapper").length === 0) {
             $('.tab-menu-wrapper').removeClass('tab-menu-wrapper__open');
         }
     });


});

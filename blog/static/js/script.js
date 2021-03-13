function setCurrentToolbarClicked(el) {
    return;
}

function showUl() {
    $(this).addClass('hoverintent');
}

function hideUl() {
    $(this).removeClass('hoverintent');
}

function showUlPrimary() {
    $(this).addClass('hoverintent');
    if($(this).children('ul').children('.arrow').length == 0){
        $(this).children('ul').append("<div class='arrow'></div>");
        var arrow = $(this).children('ul').children('.arrow');
        arrow.css('left',$(this).position().left + $(this).width()/2 + 'px');
    }
}

function hideUlPrimary() {
    $(this).removeClass('hoverintent');
}

function showItemlistNoExt() {
    $(this).addClass('hoverintent');
}

function hideItemlistNoExt() {
    $(this).removeClass('hoverintent');
}

function showItemlistExt() {
    var actualElem = $(this);
    actualElem.addClass('hoverintent');
}
function hideItemlistExt() {
    var actualElem = $(this);
    actualElem.removeClass('hoverintent');
}

var config = {
    over: showUl,
    timeout: 200,
    out: hideUl
};


var configPrimary = {
    over: showUlPrimary,
    timeout: 200,
    out: hideUlPrimary
};

var configItemlist = {
    over: showItemlistExt,
    timeout: 200,
    out: hideItemlistExt
};

var configItemlistNoExt = {
    over: showItemlistNoExt,
    timeout: 200,
    out: hideItemlistNoExt
};

var variant_slider_array = new Array();

//config for Itemcard



var myPlayer;

function dc_checkVat(elem,value,allReverseChargeAllowedCountryCodes,currentCountryCode) {

    error = false;
    if (elem.is(':visible') && value != '' && allReverseChargeAllowedCountryCodes.length > 0
        && $.inArray(currentCountryCode, allReverseChargeAllowedCountryCodes) != -1) {
        var result = jsvat.checkVAT(value);
        if (!result.isValid) {
            elem.parent().addClass('has-danger');
            error = true;
        } else {
            elem.parent().removeClass('has-danger');
        }
    } else {
        if (elem.parent().hasClass('has-danger')) {
            elem.parent().removeClass('has-danger');
        }
    }
    return error;
}

$(document).ready(function () {
    $('.textcontent table').wrap('<div class=\"table_wrapper\"></div>');
    $('#primary_navigation li').each(function(e){
        if($(this).hasClass('active') || $(this).hasClass('active_tree')){
            $(this).parent('ul').addClass('sub_category_active');
        }
    })


    /*if($('.collection_wrapper.blog .collection_blog_list_wrapper').length > 0) {

        var groupFilter = $.urlParam('group_filter');
        var groupFilterInit = "*";

        if (groupFilter != null && groupFilter != 0) {
            groupFilterInit = '.collection_group_' + groupFilter;
        }

        var $grid = $('.collection_wrapper.blog .collection_blog_list_wrapper').isotope({
            itemSelector: '.collection_blog_list_entry',
            layoutMode: 'masonry',
            filter: groupFilterInit
        });

        $('.group_filter_area .collection_group_filter a').on('click', function (event) {
            event.preventDefault();
            var filterValue = $(this).attr('data-filter-id');
            if (filterValue != "*") {
                filterValue = "." + filterValue;
            }
            $grid.isotope({filter: filterValue});
            $(this).closest('.group_filter_area').find('.collection_group_filter ').removeClass('active');
            $(this).parent().addClass('active');
        });
    };*/


    $('.itemlist_order_button_link').on('click',function(e) {
        e.preventDefault();
        e.stopPropagation();

        if (!($(this).attr('data-disabled') == 'disabled')) {

            var parser = document.createElement('a');
            parser.href = window.location.href;

            var search = parser.search;
            search = search.replace('?action=shop_add_item_to_basket_list', '').replace('&action=shop_add_item_to_basket_list', '');

            var formAction = '?';
            if (search != '') {
                formAction = search + '&'
            }

            formAction += "action=shop_add_item_to_basket_list";
            $('<input>').attr({
                type: 'hidden',
                id: 'item_qty',
                name: 'item_qty',
                value: $(this).closest('form').find('.input_item_quantity_value').val()
            }).appendTo($(this).closest('form'));
            $('<input>').attr({
                type: 'hidden',
                id: 'item_id',
                name: 'item_id',
                value: $(this).closest('form').find('.input_item_id').val()
            }).appendTo($(this).closest('form'));
            $(this).closest('form').attr("action", formAction);
            $(this).closest('form').submit();
        }
    });

    /*$( "#input_vatid" ).blur(function() {
        if ($(this).val() != '' && $('#selectedReverseChargeAllowed').val() == 1) {
            var result = jsvat.checkVAT($(this).val());
            if (!result.isValid) {
                $(this).parent().addClass('has-danger');
            } else {
                $(this).parent().removeClass('has-danger');
            }
        } else {
            if ($(this).parent().hasClass('has-danger')) {
                $(this).parent().removeClass('has-danger');
            }
        }
    });

    $('.required').each(function(e) {
        var input = $(this).find('input');
        if (input.is(':visible')) {
            input.blur(function() {
                if (input.val() == '') {
                    input.parent().addClass('has-danger');
                } else {
                    input.parent().removeClass('has-danger');
                }
            })
        }
    });

    $('body').on('click',".validate_vat",function(e) {
        e.preventDefault();
        var error = false;
        if ($( "#input_vatid" ).val() != '' && $('#selectedReverseChargeAllowed').val() == 1) {
            var result = jsvat.checkVAT($( "#input_vatid" ).val());
            if (!result.isValid) {
                $(this).parent().addClass('has-danger');
                error = true;
            } else {
                $(this).parent().removeClass('has-danger');
            }
        } else {
            if ($(this).parent().hasClass('has-danger')) {
                $(this).parent().removeClass('has-danger');
            }
        }

        $('.required').each(function(e) {
            var input = $(this).find('input');
            if (input.is(':visible')) {
                if (input.val() == '') {
                    error = true;
                    input.parent().addClass('has-danger');
                }
            }
        });

        if (!error) {
            document.form_user_order.action='?shop_category=order&action=step2';
            document.form_user_order.submit();
        } else {
            $('#vat_check_requestbox').modal('show');
        }
        return false;
    }); */

    $('body').on('click', '.video-select', function (e) {
        e.preventDefault;
        videoPath = $(this).attr('data-videoPath');
        videoName = $(this).attr('data-videoName');
        videoId = $(this).attr('data-videoId');
        $('.mcs-item').each(function(e) {
            $(this).find('a').removeClass('mz-thumb-selected');
        });
        $('.item_video_container').removeClass('active');
        $('.item_video_container').find('.video_container').hide();
        $(this).addClass('mz-thumb-selected');
        $('#video_' + videoId).show();
        $('#video_' + videoId).parents('.item_video_container').addClass('active');
        return false;
    });
    $('body').on('click', '.mz-thumb', function (e) {
        e.preventDefault;
        if($(e.target).is('.video-select') || $(e.target).parent().is('.video-select')) {
            return;
        }
        $('.mcs-item').each(function(e) {
            $(this).find('a').removeClass('mz-thumb-selected');
        });
        $(this).addClass('mz-thumb-selected');
        $('.item_video_container').removeClass('active');
        $('.item_video_container').find('.video_container').hide();
    });


    $('#box,.user_account_link,#header_basket,.language_switch, #shop_by_category').hoverIntent(config);
    $('#primary_navigation li.level_1').hoverIntent(configPrimary);
/*
    $('#primary_navigation li.level_1 > a').click(function(event) {
        if(isTouchDevice()){
            event.preventDefault();
        }
    });*/


    $('.itemcard_list2 .itemlist__container').hoverIntent(configItemlist);

    var noOfImg = $('#menu_1 div.itemlist11>a>img').length,
        loadedImg = 0;

    $('#menu_1 div.itemlist11>a>img').on('load', function () {
        ++loadedImg;
        if (loadedImg == noOfImg) {
            $('#menu_1 div.itemlist11>a>img').each(function () {
                var pic = $(this),
                    picHeight = $(this).outerHeight(),
                    par = $(pic).parents('a'),
                    parHeight = $(par).height(),
                    margin = Math.ceil((parHeight - picHeight) / 2);
                console.log('picHeight:' + picHeight + ' parHeight:' + parHeight + ' margin:' + margin);
                $(pic).css('margin-top', margin + 'px');
            });
        }
    });

    var noOfImgItem = $('#itemcard_left div.item_images>a>img').length,
        loadedImgItem = 0;
    $('#itemcard_left div.item_images>a>img').on('load', function () {
        ++loadedImgItem;
        if (loadedImgItem == noOfImgItem) {
            $('#itemcard_left div.item_images>a>img').each(function () {
                var pic = $(this),
                    picHeight = $(this).outerHeight(),
                    par = $(pic).parents('a'),
                    parHeight = $(par).height(),
                    margin = Math.ceil((parHeight - picHeight) / 2);
                console.log('picHeight:' + picHeight + ' parHeight:' + parHeight + ' margin:' + margin);
                $(pic).css('margin-top', margin + 'px');
            });
        }
    });


    //MAB setze Span in ï¿½berschrift um Linien zu erzeugen
    $('.headline-lines').each(function () {
        var arr = ["h1", "h2", "h3", "h4", "h5", "h6"];
        var thisHeadline = $(this);

        jQuery.each(arr, function (i, val) {
            var text = thisHeadline.find(val).html();
            thisHeadline.find(val).html('<span>' + text + '</span>');
        });
    })

    //stickyHeader();

    $('#toggle_navigation, #primary_navigation_mobile .close_button_navigation_mobile, #overlay').click(function () {
        toggle_mobile_menu();
    });

    $('.filterbox-mobilebutton').click(function () {
        $(this).toggleClass('active');
        $('.filterbox').slideToggle('fast');
    })

    $('.filter > .filter_headline').click(function () {
        var active = $(this).hasClass('clicked');

        $('.filterbox .filter_headline').removeClass('clicked');
        //$('.filterbox .filter_toggle').slideUp('fast');

        if (active != false) {
            $(this).removeClass('clicked');
            $(this).next('.filter_toggle').slideUp('fast');
        } else {
            $(this).addClass('clicked');
            $(this).next('.filter_toggle').slideDown('fast');
        }
    })


    $('#primary_navigation_mobile ul li .arrow_mobile').click(function (event) {
        var nextUl = $(this).next('ul');
        if (nextUl.length > 0) {
            if (nextUl.is(':visible')) {
                nextUl.slideUp('slow');
                $(this).removeClass('active_tree');
                $(this).parent().removeClass('active_tree');
                nextUl.find('ul').slideUp('fast');
            } else {
                nextUl.slideDown('slow');
                $(this).addClass('active_tree');
                $(this).parent().addClass('active_tree');
            }
            event.preventDefault();
        } else {
            window.location = $(this).parent().find('a').attr('href');
        }
    });
    var freeItemCount = $('.free_items_wrapper .item').length;
    $('.special_items_wrapper .owl-carousel').owlCarousel({
        loop: false,
        items: 9,
        autoWidth: true,
        margin: 30,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplayHoverPause: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                center: false,
                nav: false
            },
            680: {
                items: 2,
                autoplay: true
            },
            1250: {
                autoplay: true,
                items: 3
            },
            1540: {
                autoplay: true,
                items: 10 - freeItemCount
            }
        }
    });
    $('.trustinfo_banner .owl-carousel').owlCarousel({
        loop: false,
        items: 7,
        autoWidth: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplayHoverPause: true,
        nav: true,
        responsive: {
            0: {
                autoWidth: false,
                items: 1,
                center: false,
                nav: false,
                autoplay: true
            },
            320: {
                autoWidth: false,
                items: 2,
                loop: true,
                autoplay: true
            },
            520: {
                autoWidth: false,
                items: 4,
                loop: true,
                autoplay: true
            },
            1250: {
                autoWidth: false,
                items: 7
            }
        }
    });
    $('.free_items_wrapper .owl-carousel').owlCarousel({
        loop: false,
        margin: 30,
        items: 3,
        autoWidth: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplayHoverPause: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                center: false,
                nav: false
            },
            680: {
                autoplay: true,
                items: 2
            },
            1250: {
                autoplay: true,
                items: 3
            },
            1540: {
                autoplay: true,
                items: 3
            }
        }
    });

    if ($('.shop_item_preview .owl-carousel').length > 0) {
        $('.shop_item_preview .owl-carousel').each(function(){
            if($(this).closest('.nopreviewslider').length > 0){
                $(this).removeClass('owl-carousel');
            }else{
                $(this).owlCarousel({
                    loop: true,
                    margin: 30,
                    items: 4,
                    autoplay: true,
                    autoHeight: true,
                    autoWidth: false,
                    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                    nav: false,
                    dots: false,
                    autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 1,
                            center: false,
                            nav: false
                        },
                        430: {
                            nav: false,
                            items: 2
                        },
                        1024: {
                            nav: true,
                            items: 3
                        },
                        1540: {
                            items: 4
                        }
                    }
                });
            }
        });
    }
    if ($('.itemcard_crossseller .owl-carousel').length > 0) {
        $('.itemcard_crossseller .owl-carousel').each(function(){
            if($(this).closest('.nopreviewslider').length > 0){
                $(this).removeClass('owl-carousel');
            }else{
                $(this).owlCarousel({
                    loop: false,
                    margin: 30,
                    items: 4,
                    autoplay: true,
                    autoHeight: true,
                    autoWidth:false,
                    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                    nav: true,
                    autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 1,
                            center: false,
                            nav: false
                        },
                        680: {
                            items: 3
                        },
                        1250: {
                            items: 4
                        },
                        1540: {
                            items: 5
                        }
                    }
                });
            }
        });
    }

    $('.itemlist_variants_wrapper').each(function (i) {
        var childrenCount = $(this).children('.variant_image').length;
        variant_slider_array[i] = $(this).bxSlider({
            mode: 'vertical',
            pager: false,
            autoReload: true,
            controls: false,
            slideMargin: 5,
            maxSlides: 3,
            minSlides: 3,
            adaptiveHeight: true
        });
        $(this).parents('.itemlist_variants').find('.variant-next').on('click', function(e) {
            e.preventDefault();
            variant_slider_array[i].goToNextSlide();
        });
        $(this).parents('.itemlist_variants').find('.variant-prev').on('click', function(e) {
            e.preventDefault();
            variant_slider_array[i].goToPrevSlide();
        });
        if (childrenCount < 4) {
            $(this).parents('.itemlist_variants').find('.variant-next').hide();
            $(this).parents('.itemlist_variants').find('.variant-prev').hide();
        }
    });

    $('.input_quantity_line').keydown(function (event) {
        if (event.keyCode == 13) {
            this.form.submit();
            return false;
        }
    });

    if($(window).width() < 768) {
        $('.textcontent table').wrap('<div class=\"table_wrapper\"></div>');
    }

    var mainImage;
    var mainActive;
    $( ".itemlist_variants_wrapper" ).on("mouseenter", ".variant_image",
        function(e) {
            variantImage = $(this);
            mainActive = variantImage.parent().find('.main_active');
            if (!variantImage.hasClass('active')) {
                mainImage = $(this).parents('.itemlist_container').find('.itemlist_item a .image img');
                /*mainImage.clearQueue().fadeTo(300,0.00, function() {
                    mainImage.attr("src",variantImage.find('img').data('big'));
                }).fadeTo(300,1);*/
                mainImage.attr("src",variantImage.find('img').data('big'));
                variantImage.parent().find('.variant_image').removeClass('active');
                variantImage.addClass('active');
            }
            return false;


            //mainImage.attr('src',$(this).find('img').data('big'));
        }
    );

    $( ".itemlist_variants_wrapper" ).on("mouseleave", function() {
        if (!mainActive.hasClass('active')) {
            /*mainImage.clearQueue().fadeTo(300,0.00, function() {
                mainImage.attr("src",mainImage.data('main'));
            }).fadeTo(300,1);*/
            mainImage.attr("src",mainImage.data('main'));
            $(this).find('.variant_image').removeClass('active');
            mainActive.addClass('active');
        }
        return false;
        //mainImage.attr('src',mainImage.data('main'));
    });

    if($('.collection_container .link-actions').length > 0) {
        $('.collection_container').each(function(){
            var linkcontainer = $(this).find('.link-actions');
           var link = linkcontainer.children('a');
           $(this).wrap('<a href=\"'+link.attr('href')+'\"></a>');
            linkcontainer.remove();
        });
    }

    initScrolltopbutton($('#scrolltop_button'));

    $(document).on("click",'.itemlist .favorite-button,.itemlist .itemlist_order_button_link ', function (event) {
        event.preventDefault();
    });
});

function initScrolltopbutton (scrolltop) {
    if($(window).scrollTop() > 0) {
        scrolltop.addClass('sticky');
        var scrolltopButtonBottom = scrolltop.offset().top + scrolltop.outerHeight();
        scrolltop.css('bottom','');
    }else{
        scrolltop.removeClass('sticky');
    }

    $(window).scroll(function () {
        if($(window).scrollTop() > 0) {
            scrolltop.addClass('sticky');
            var scrolltopButtonBottom = scrolltop.offset().top + scrolltop.outerHeight();
            scrolltop.css('bottom','');
        }else{
            scrolltop.removeClass('sticky');
        }
    });

    scrolltop.click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 800);
    })
}

function toggle_mobile_menu() {
    var widthNavigation = $('#primary_navigation_mobile').width();
    var widthContainer = $('#container').width();

    if (!$('#container').hasClass('open_menu')) {
        $('.modal').modal('hide');
        $('#primary_navigation_mobile').show();
        $('#container').addClass('open_menu');
        $('#container').width(widthContainer);
        $('#container').css('top', 0);
        $('#overlay').css('left', widthNavigation);
        $('#overlay').addClass('open_menu');
        $('#container').animate({
            left: widthNavigation
        }, 200, function () {
            $('#overlay').animate({
                opacity: 0.6
            }, 100);
        });
    } else {
        $('#overlay').animate({
            opacity: 0
        }, 100, function () {
            $('#container').animate({
                left: 0
            }, 200, function () {
                $('#container').removeClass('open_menu');
                $('#container').width('auto');
                $('#overlay').css('left', '120%');
                $('#overlay').removeClass('open_menu');
            });
            $('#primary_navigation_mobile').hide();
        });
        if ($('header').css('position') == "fixed") {
            $('header').animate({
                left: 0
            }, 200);
        }
    }
}

function stickyHeader() {
    var mn = $('#header');
    var header = $('#header');
    var mns = "sticky";
    var hdr = $('#header_account').outerHeight();

    checkSticky(mn, mns, hdr);

    $(window).scroll(function () {
        checkSticky(mn, mns, hdr);
    });
    $(window).resize(function () {
        var hdr = $('#header_account').outerHeight();
        checkSticky(mn, mns, hdr);
    });
}

function checkSticky(mn, mns, hdr) {
    if ($(window).scrollTop() > hdr) {
        var position = mn.css('position');
        mn.addClass(mns);
        if (position != "fixed" && mn.prev('.sticky-helper').length < 1) {
            mn.before('<div class="sticky-helper" style="height:' + (mn.outerHeight()) + 'px"></div>');
        }
    } else {
        mn.removeClass(mns);
        $('.sticky-helper').remove();
    }
}

$(document).ready(function () {
    $('#primary_navigation_mobile .language_switch_button').on('click', function(){
        $('#primary_navigation_mobile .list_language_switch').toggleClass('active');
    });
    $('#primary_navigation_mobile .currency_switch').on('click', function(){
        $('#primary_navigation_mobile .list_currency_switch').toggleClass('active');
    });
    var visibleInputs = $('input[type!=hidden]:visible'),
        inputForm,
        currInput,
        lastInputInForm;
    $(visibleInputs).each(function () {
        currInput = $(this);
        inputForm = currInput.parents('form');
        formID = $(inputForm).attr('id');
        if (formID !== 'form_itemcard') {
            lastInputInForm = $(inputForm).find('input[type!=hidden]:visible').last();
            lastTextInputInForm = $(inputForm).find('input[type!=checkbox]:visible').last();
            if ((currInput[0] == lastInputInForm[0]) || (currInput[0] == lastTextInputInForm[0])) {
                $(currInput).off('keyup').on('keyup', function (e) {
                    if (e.which === 13) {
						//e.preventDefault();
						//e.stopPropagation();
                        //$(this).parents('form').submit();
                        return false;
                    }
                });
            }
        }
    });
    //headline responsive before image on itemcard
    if($(window).width() < 1600){
        $('.itemcard_item_name').prependTo('#itemcard_left');
    }
    //Toggle variants
    $('.hasvar td:first-child').on('click', function () {
        var parentTr = $(this).parent('.hasvar'),
            itemNo = parentTr[0].dataset.itemno,
            varTrs,
            initStringEl = $(parentTr).find('.replace_price_string_toggle'),
            initString,
            replacementString,
            i = 0;

        if (typeof initStringEl !== 'undefined' && initStringEl.length > 0) {
            initString = $(initStringEl).data('initstring');
            replacementString = $(initStringEl).data('replacementstring');
        }

        if (typeof itemNo !== 'undefined' && itemNo.length > 0) {
            varTrs = $('.isvar_' + itemNo);
            varTrscol = $('.iscolorvar_' + itemNo);
            if (typeof varTrs !== 'undefined' && varTrs.length > 0) {
                i = 0;
                $(varTrs).each(function () {
                    if ($(this).is(':visible')) {
                        $(this).hide();
                        if (i == 0) {
                            $(parentTr).removeClass('varsopen').addClass('varsclosed');
                            if (initString.length > 0 && replacementString.length > 0) {
                                $(initStringEl).empty().html(initString);
                            }
                        }

                    } else {
                        $(this).show();
                        if (i == 0) {
                            $(parentTr).removeClass('varsclosed').addClass('varsopen');
                            if (initString.length > 0 && replacementString.length > 0) {
                                $(initStringEl).empty().html(replacementString);
                            }
                        }
                    }
                    i++;
                });
            }
            if (typeof varTrscol !== 'undefined' && varTrscol.length > 0) {
                $(varTrscol).each(function () {
                    if ($(this).is(':visible')) {
                        $(this).hide();
                    } else {
                        $(this).show();
                    }
                });
            }
        }
    });
});

function itemsearchSuggest(searchString) {
    var data = {},
        dataDiv = $('#search_data'),
        jsonData;

    data.company = $(dataDiv).data("company");
    data.shop_code = $(dataDiv).data("shop_code");
    data.language_code = $(dataDiv).data("language_code");
    data.site_language = $(dataDiv).data("site_language");
    data.item_source = $(dataDiv).data("item_source");
    data.site_code = $(dataDiv).data("site_code");
    data.sid = $(dataDiv).data("sid");
    data.image_config = $(dataDiv).data("image_config");
    data.default_img = $(dataDiv).data("default_img");
    data.input_search = searchString;
    data.customer_no = $(dataDiv).data("customer_no");
    jsonData = JSON.stringify(data);
    $.ajax({
        type: 'POST',
        url: '/module/dcshop/b2c/ajax_itemsearch.php',
        data: jsonData,
        dataType: "json",
        converters: {
            'text json': true
        },
        beforeSend: function () {
            $('#itemsearch_suggestion_wrapper').hide().empty();
        }
    }).done(function (data) {
        console.log(data);
        $('#itemsearch_suggestion_wrapper').html(data).show(0, function () {
            var searchSuggestions = $('.search_suggestion');
            $(document).on('keydown', function (e) {
                var evt = e || window.event;
                if (evt.keyCode == 38 || evt.keyCode == 40) {
                    e.preventDefault();
                    return false;
                }
            });
            $('#input_search').on('keyup', function (e) {
                var evt = e || window.event,
                    code = (e.keyCode ? e.keyCode : e.which);
                if (evt.keyCode === 40 && typeof searchSuggestions !== 'undefined' && searchSuggestions.length) { //Pfeil nach unten
                    $(searchSuggestions).first().addClass('hasfocus').focus();
                }
            });
            $('.search_suggestion').on('click', function () {
                var newHref = $(this).data('newhref');
                if (typeof newHref !== 'undefined' && newHref.length) {
                    window.location.href = newHref;
                }
            });
            $('.search_suggestion').on('keyup', function (e) {
                var newHref = $(this).data('newhref'),
                    evt = e || window.event,
                    code = (evt.keyCode ? evt.keyCode : evt.which),
                    currSuggestion = $(this),
                    currIndex = $(currSuggestion).data('suggestionindex'),
                    newIndex,
                    newSuggestion;
                if (evt.keyCode == 13 && typeof newHref !== 'undefined' && newHref.length) {
                    window.location.href = newHref;
                } else if (evt.keyCode === 40 && typeof searchSuggestions !== 'undefined' && searchSuggestions.length) { //Pfeil nach unten
                    newIndex = currIndex + 1;
                    newSuggestion = $('#item_search_suggestions').find("[data-suggestionIndex='" + newIndex + "']");
                    if (typeof newSuggestion !== 'undefined' && newSuggestion.length) {
                        $(newSuggestion).siblings().removeClass('hasfocus');
                        $(newSuggestion).addClass('hasfocus').focus();
                    }
                } else if (evt.keyCode === 38 && typeof searchSuggestions !== 'undefined' && searchSuggestions.length) { //Pfeil nach oben
                    newIndex = currIndex - 1;
                    newSuggestion = $('#item_search_suggestions').find("[data-suggestionIndex='" + newIndex + "']");
                    if (typeof newSuggestion !== 'undefined' && newSuggestion.length) {
                        $(newSuggestion).siblings().removeClass('hasfocus');
                        $(newSuggestion).addClass('hasfocus').focus();
                    } else {
                        $('.search_suggestion').removeClass('hasfocus');
                        $('#input_search').focus();
                    }
                }
            });
        });
    }).fail(function () {
        $('#itemsearch_suggestion_wrapper').hide().empty();
    });
}

$(document).ready(function () {
    // if ($('#search_data').length) {
    //     var queryDelay = 300,
    //         queryTimeout;
    //
    //     $('#input_search').on('keyup', function (e) {
    //         queryString = $('#input_search').val();
    //         if (queryTimeout) {
    //             window.clearTimeout(queryTimeout);
    //             queryTimeout = null;
    //         }
    //         if (e.keyCode != 13 && e.keyCode != 40 && e.keyCode != 38 && e.keyCode != 8 && queryString.length > 3) {
    //             queryTimeout = window.setTimeout(function () {
    //                 itemsearchSuggest(queryString);
    //             }, queryDelay);
    //         }
    //     });
    //
    //     $('html').on('click', function () {
    //         //hide elements if visible
    //         var searchSuggestWrapper = $('#itemsearch_suggestion_wrapper');
    //
    //         if (typeof searchSuggestWrapper !== 'undefined' && $(searchSuggestWrapper).is(':visible')) {
    //             $(searchSuggestWrapper).empty().hide();
    //         }
    //     });
    //
    //     $('#itemsearch_suggestion_wrapper,#form_search').on('click', function (event) {
    //         event.stopPropagation();
    //     });
    // }
});
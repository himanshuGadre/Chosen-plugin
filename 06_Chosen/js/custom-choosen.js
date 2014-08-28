$(document).ready(function(){
    /*custom select box*/
    $(".chosen-select").chosen({
        "disable_search": true
    });
    $(".chosen-select").on('change', function(evt, params) {
//        alert('clicked');
        var selectedVal = $(this).val();
        if(selectedVal == ""){
            $(this).siblings().removeClass('upArrow');
        }else{
            $(this).siblings().addClass('upArrow');
        }
    });
    /*select dropdown scroll down script*/
    $('.scrollDropDown .chosen-drop').append('<div class="scrollBtn">&nbsp;</div>')
    $('.scrollDropDown .chosen-drop').prepend('<div class="scrollBtnTop disabled">&nbsp;</div>')
    $('.scrollDropDown').on('mouseover', '.scrollBtn' , function(){
        var liCount = $(this).parents('.scrollDropDown').find('.chosen-results li').size();
        var scrollLenght = liCount * 25;
        $('.scrollDropDown .chosen-results').animate({
            scrollTop: scrollLenght
        }, 150*liCount);
        $(".scrollDropDown .chosen-results").scroll(function(){
            if($(this).scrollTop()>0){
                $(this).parents('.scrollDropDown').find(".scrollBtnTop").show();
            }else{
                $(".scrollBtnTop").hide();
            }
        });
    });
    $('.scrollDropDown').on('mouseover', '.scrollBtnTop' , function(){
        var liCount = $(this).parents('.scrollDropDown').find('.chosen-results li').size();
        var scrollLenght = liCount * 25;
        $('.scrollDropDown .chosen-results').animate({
            scrollTop: - scrollLenght
        }, 150*liCount);
    });
    $('.scrollDropDown').on('mouseout', '.scrollBtn, .scrollBtnTop' , function(){
        $('.scrollDropDown .chosen-results').animate().stop();
    });
});
$(window).load(function(){
    $(".chosen-single").click(function(){
        $(".chosen-results").each(function(){
            if($(this).children().length>14){
                $(this).next().show();
            }
        });
    });
    for(i=0;i<$(".chosen-select").length;i++){
        if($(".chosen-select").eq(i).children().length>14){
            $(".scrollBtn").eq(i).show();
            $(".scrollBtnTop").eq(i).hide();
        }else{
            $(".scrollBtn").eq(i).hide();
            $(".scrollBtnTop").eq(i).hide();
        }
    }
});

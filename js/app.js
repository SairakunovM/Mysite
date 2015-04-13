var main=function(){
    $('.btn').click(function(){
        var Калтыр = $('.status-box').val();
        $('<li>').text(Калтыр).prependTo('.posts');
        $('.status-box').val('');
        $('.counter').text('200');
        $('.btn').addClass('disabled');
    });
    $('.status-box').keyup(function() {
        var postLength = $(this).val().length;
        var charactersLeft = 200 - postLength;
        $('.counter').text(charactersLeft);

        if(charactersLeft < 0) {
            $('.btn').addClass('disabled');
        }
        else if(charactersLeft == 200 ) {
            $('.btn').addClass('disabled');
        }
        else {
            $('.btn').removeClass('disabled');
        }
    });

    $('.btn').addClass('disabled')
};
$(document).ready(main);/**
 * Created by MS on 11.03.2015.
 */

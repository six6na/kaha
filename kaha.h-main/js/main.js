// main.js

$(function(){

    $('.tab .news-btn').click(function(){
        // 텝 초기화
        $('.tab_contents').removeClass('on');
        // 표시
        $('#news').addClass('on');
        $('#noti').removeClass('on');
        $('.board-table').removeClass('on');
        $('.search').removeClass('noti');
        // 버튼
        $('.tab .container-n .tab-btn li:first-child').addClass('on');
        $('.tab .container-n .tab-btn li:last-child').removeClass('on');
        $('.tab .container-n .tab-btn .news-btn .tri').addClass('on');
        $('.tab .container-n .tab-btn .noti-btn .tri').removeClass('on');
    });
  
    $('.tab .noti-btn').click(function(){
        // 텝 초기화
        $('.tab_contents').removeClass('on');
        // 표시
        $('#noti').addClass('on');
        $('.board-table').addClass('on');
        // 버튼
        $('.tab .container-n .tab-btn li:last-child').addClass('on');
        $('.tab .container-n .tab-btn li:first-child').removeClass('on');
        $('.search').addClass('noti');
        $('.tab .container-n .tab-btn .news-btn .tri').removeClass('on');
        $('.tab .container-n .tab-btn .noti-btn .tri').addClass('on');
    });

    // $('.depth2-news .d2-gnb .news').click(function(){
    //     // 텝 초기화
    //     $('.noti').removeClass('on');
    //     $('.news').addClass('on');
    // });

    // $('.depth2-news .d2-gnb .noti').click(function(){
    //     // 텝 초기화
    //     $('.news').removeClass('on');
    //     $('.noti').addClass('on');
    // });
})



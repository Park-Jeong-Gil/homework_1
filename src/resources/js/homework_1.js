setTimeout(function() {
    $(document).ready(function() { 
      // smooth scrolling       
      $("#event_wrap").smoothWheel();

      // 로딩 직후 쏟아지는 동전 효과
      $('.sudden_coins').css('bottom','-500%');
      $('#coins').css('height','100%');
      $('.sparkle_effect').addClass('on_sparkle');

      // 스크롤 위치에 맞춰서 .sns_container 깜빡거림  
      $('#event_wrap').on('scroll', function() {
        if($('#event_wrap').scrollTop() > 720){
          $('.sns_container').addClass('sns_blink');
        }
      });

      //참여하기 버튼
      $('#main_button').click(function(){
        $('#active_wrap').addClass('page_active')
        $('#active_wrap').removeClass('close_page')

      setTimeout(function() {
        $('#active_main_button').addClass('button_slideUp')
      }, 1000);
      });

      //송금하기 페이지 닫기 버튼
      $('#close_button').click(function(){
        $('#active_wrap').addClass('close_page')

        setTimeout(function() {
        $('#active_wrap').removeClass('page_active')
        $('#active_main_button').removeClass('button_slideUp')
        },150);
      });
    });
  }, 2500);

  //전체 페이지가 로드되기 전에, 로딩 페이지 2초 지연 후 로딩 페이지 숨김.
  $(window).on('load', function() {
    $('.rolling_coin').css('margin-bottom','65%')
    setTimeout(function() {
    $('#page_loader').hide();
    },2000);
  });

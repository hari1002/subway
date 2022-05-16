$(function(){

  const $gnb = $('#wrap > header > .container > nav > .gnb');
  const $lnb = $gnb.find('.lnb');
  const $bg_lnb = $('.bg_lnb');

  const $indicator = $('section > .slides > .slides-pagination > li > a');
	const $container = $('section > .slides > .slides-container');

  const $mnuSilde = $('section > .slide > ol');

  const $btnPrev = $('.prev');
  const $btnNext = $('.next');

	 let intervalKey = null;
   let nowIdx = 0; 

  //함수 활성화
   function moveFn(){

    $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

     $container.stop().animate({
     left : -(100 * (nowIdx + 5)) + "%"
     });
  };
   
   $indicator.on('click', function(evt){
     evt.preventDefault();
        
 
     nowIdx = $indicator.index(this);
     moveFn();
   });


   //자동재생
   intervalKey = setInterval(function(){

    if(nowIdx<=3){
        nowIdx++;
    }else{
        nowIdx=0;
    }
    moveFn();
  },3000); 

  //이전버튼
  $btnPrev.on('click', function(evt){
    evt.preventDefault();

    $mnuSilde.stop().animate({
      left : '0'
    })

  });

//다음버튼
$btnNext.on('click', function(evt){
  evt.preventDefault();

  $mnuSilde.stop().animate({
    left : '-1200px'
  })
});

  

  
  //네비게이션 배경판
  $gnb.on('mouseenter', function(){
    $bg_lnb.stop().slideDown(200); 
    $lnb.stop().slideDown(200);
    
  });
  
  $gnb.on('mouseleave', function(){
    $bg_lnb.stop().slideUp(200); 
    $lnb.stop().slideUp(200);
    
  });
  
  $bg_lnb.on('mouseover', function(){
    $gnb.trigger('mouseover');
  });
  
  $bg_lnb.on('mouseout', function(){
    $gnb.trigger('mouseout');
  });


});
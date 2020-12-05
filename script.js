AOS.init();

hljs.initHighlightingOnLoad();
new VGNav().toggle();


  $('#ps').LineProgressbar({
    percentage: 90,
    fillBackgroundColor: 'transparent',
    backgroundColor: '#EEEEEE',
    radius: '0px',
    height: '10px',
    width: '100%'
  });

  $('#lr').LineProgressbar({
    percentage: 85,
    fillBackgroundColor: 'transparent',
    backgroundColor: '#EEEEEE',
    radius: '0px',
    height: '10px',
    width: '100%'
  });

  $('#ai').LineProgressbar({
    percentage: 95,
    fillBackgroundColor: 'transparent',
    backgroundColor: '#EEEEEE',
    radius: '0px',
    height: '10px',
    width: '100%'
  });

  $('#id').LineProgressbar({
    percentage: 95,
    fillBackgroundColor: 'transparent',
    backgroundColor: '#EEEEEE',
    radius: '0px',
    height: '10px',
    width: '100%'
  });

  $('#ae').LineProgressbar({
    percentage: 50,
    fillBackgroundColor: 'transparent',
    backgroundColor: '#EEEEEE',
    radius: '0px',
    height: '10px',
    width: '100%'
  });

  $('#pr').LineProgressbar({
    percentage: 60,
    fillBackgroundColor: 'transparent',
    backgroundColor: '#EEEEEE',
    radius: '0px',
    height: '10px',
    width: '100%'
  });

  $('#dw').LineProgressbar({
    percentage: 60,
    fillBackgroundColor: 'transparent',
    backgroundColor: '#EEEEEE',
    radius: '0px',
    height: '10px',
    width: '100%'
  });

  $('#cd').LineProgressbar({
    percentage: 70,
    fillBackgroundColor: 'transparent',
    backgroundColor: '#EEEEEE',
    radius: '0px',
    height: '10px',
    width: '100%'
  });






  $("#backtop").click(function(){
    $("body,html").animate({
      scrollTop:0
    },1600)
  });

  $(window).scroll(function(){
    if($(window).scrollTop() > 150){
      $("#backtop").css("visibility","visible")
    }
    else{
      $("#backtop").css("visibility","hidden")
    }
  })


  $(document).ready(function(){
    $(".slick-next").addClass("fa").addClass("fa-angle-right")
    $(".slick-next").css("background-color","transparent").css("opacity",1)
  })
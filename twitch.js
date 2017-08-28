//client id : h7mi4umaee14sdcojopxp2mq7jblzpz
$(document).ready(function(){
 var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

  

$.each(users, function( index, value ) {
  $.ajax({
  url:'https://api.twitch.tv/kraken/streams/'+ value+'?client_id=h7mi4umaee14sdcojopxp2mq7jblzpz',	
  type: 'GET', 
  dataType: 'jsonp',
  success: function(data) {
	if(data.status ===404){
	$('#twitch').append('<div class="channel offline row"><div class="twButton col-xs-1 col-sm-1 col-md-1"></div><div class="twLeft col-xs-4 col-sm-2 col-md-2"><img class="twlogo img-responsive" src="'+channelLogo+'"></div><div class="twRight col-xs-7 col-sm-9 col-md-9">Error channel no longer there </div></div>');	
	}else
		if(data.stream!==null){
     var twitchLogo = data.stream.channel.logo;
     var twitchName = data.stream.channel.display_name;
     var twitchGame = data.stream.channel.game;
     var twitchUrl = data.stream.channel.url;
     var twitchStatus = data.stream.channel.status;
     $('#twitch').append('<a href="'+twitchUrl+'"><div class="channel online row"><div class="twButton col-xs-1 col-sm-1 col-md-1"><div class="box"><span></span></div></div><div class="twLeft col-xs-4 col-sm-2 col-md-2"><img class="twlogo img-responsive" src="'+twitchLogo+'"></div><div class="twRight col-xs-3 col-sm-2 col-md-2">'+twitchName+'</div><div class="twLeft col-xs-4 col-sm-3 col-md-2">'+twitchGame+'</div><br/><div class="hidden-xs col-sm-9 col-md-9"> Streaming: '+twitchStatus+'</div></div></a>');
     
      console.log(twitchLogo);
     console.log(twitchName);
     console.log(twitchUrl);
   }// closing if statement
		
		
	  
	  
	  
   
   else{
     $.ajax({
    url:'https://api.twitch.tv/kraken/channels/'+ value+'?client_id=h7mi4umaee14sdcojopxp2mq7jblzpz',	
    type: 'GET', 
    dataType: 'jsonp',
    success: function(data){
    var channelLogo = data.logo;
    var channelName = data.display_name;
    var channelUrl = data.url;
     $('#twitch').append('<a href="'+channelUrl+'"><div class="channel offline row"><div class="twButton col-xs-1 col-sm-1 col-md-1"><div class="box"><span></span></div></div><div class="twLeft col-xs-4 col-sm-2 col-md-2"><img class="twlogo img-responsive" src="'+channelLogo+'"></div><div class="twRight col-xs-3 col-sm-2 col-md-2">'+channelName+'</div><div class="twLeft col-xs-4 col-sm-3 col-md-2">Offline</div></div></a>');
   console.log(channelLogo);
   console.log(channelName);
   console.log(channelUrl);
     
           }// closing success statement 
     }) // closing GET statement
   }  // closing else statement 
 } // closing success statement
})  // closing GET statement
}); // closing Each statement
}); // closing document ready statement


function onLine(){
  $(".channel").hide();
  $(".online").show();
}
function offLine(){
  $(".channel").hide();
  $(".offline").show('slow');
}
function allChannels(){
  $(".channel").hide();
  $(".channel").show('slow');
  };

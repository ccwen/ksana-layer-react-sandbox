var text="此證信序，又名通序，諸經通有故；亦名經後序，佛初說經，本無此序，至結集時始加入故；"
+"亦名遺教序，佛將涅槃，阿難尊者欽奉遺命，一切經首當置如是我聞，一時佛在某處，與某大眾若干人俱，等語故。"
+"命置如是云云者，證明是佛所說，以起信故。故曰證信序也。";

var links={
  a1:{s:1,l:2,type:"intertext", caption:"同義", className:"synonym" ,group:"a1"}
  ,a2:{s:7,l:1,type:"intertext", caption:"同義", className:"synonym",group:"a1"}
  ,a3:{s:18,l:2,type:"intertext", caption:"同義", className:"synonym",group:"a1"}
  ,a4:{s:43,l:2,type:"intertext", caption:"同義", className:"synonym",group:"a1"}

  ,a5:{s:10,l:5,type:"intertext", caption:"因", className:"cause",group:"a5"}
  ,a6:{s:7,l:2,type:"intertext", caption:"果", className:"effect",group:"a5"}


  ,a7:{s:22,l:18,type:"intertext", caption:"因", className:"cause",group:"a7"}
  ,a8:{s:18,l:3,type:"intertext", caption:"果", className:"effect",group:"a7"}

  //,a2:{s:3,l:3,type:"因"}
}

var tagStyles={ 

  synonym:{borderBottom:"2px solid green"}
  ,cause:{borderBottom:"2px solid blue"}
  ,effect:{borderBottom:"2px dotted blue"}
  //,test:{color:"blue"}  can overwrite setting in css
}
var selections=[
]
module.exports={text:text,links:links,tagStyles:tagStyles,selections:selections};
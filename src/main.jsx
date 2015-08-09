var React=require("react");
var KsanaLayerReact=require("ksana-layer-react");
var FlattenView=KsanaLayerReact.FlattenView;
var SelectableView=KsanaLayerReact.SelectableView;
var InterlineView=KsanaLayerReact.InterlineView;

var intertextdata=require("./intertextdata");
var text="道可道非常道。名可名非常名。"; //need extra space for revision at 12


var tags=[
  {s:2,l:4,className:"test" }
  ,{s:4,l:5,className:"test2" }
];
var tags2=[
  {s:2,l:4,className:"test",before:(<button key="1">1</button>),after:(<button key="2">2</button>) }
  ,{s:4,l:5,className:"test2",before:(<a href='#' key="1">1</a>),after:(<a href='#' key="2">2</a>) }
];

var tagStyles={ 
  test2:{backgroundColor:"yellow"}
  //,test:{color:"blue"}  can overwrite setting in css
}

var Selector=React.createClass({
  onChange:function(e) {
    this.props.action("setselectable",e.target.value);
  }
  ,render:function() {
    return <select onChange={this.onChange}><option value="no">No</option>
    <option value="single">Single</option>
    <option value="multiple">Multiple</option></select>
  }
});
/*


      */
var markups={ //overlap
  a1:{s:4,l:1,type:"rev",t:"恆",note:"馬王堆3",author:"y3"}
  ,a2:{s:4,l:1,type:"rev",t:"𢛢",note:"馬王堆2",author:"y2"}
  ,a3:{s:4,l:1,type:"rev",t:"恒",note:"馬王堆",author:"y1"}
  ,a4:{s:11,l:1,type:"rev",t:"恒",note:"馬王堆3",author:"y1"}
  ,a5:{s:13,l:0,type:"rev",t:"！",note:"馬王堆3",author:"y1"}
};
//markups={};


var maincomponent = React.createClass({
  action:function(act,p1) {
    if (act==="setselectable") {
      this.setState({selectable:p1});
    }
  }
  ,getInitialState:function() {
    return {selectable:"no",editing:null};
  }
  ,onSelectText:function(start,len,t) {
    this.start=start;
    this.seltext=t;
  }
  ,newMarkup:function() {
    var mid='m'+Math.random().toString().substr(3,6);
    markups[mid]= {s:this.start,l:this.seltext.length,type:"rev",t:"",author:"y1"};
    this.setState({editing:mid});
  }
  ,onClickTag:function(mid) {
    console.log("click",mid);
  }
  ,onDoneEdit:function(mid) {
    console.log("doneedit",mid);
    var m=markups[mid];
    if (m.t==="" && m.l===0) {
      delete markups[mid];
    }
    this.setState({editing:null});
  }
  ,onKeyPress:function(e) {
    if (e.key==" ") {
      if (!this.start) return;
      this.newMarkup();
    }
    e.preventDefault();
  }
  ,onHover:function(mid,previous) {
    console.log(mid,previous);
  }
  ,render: function() {
    return <div style={{fontSize:"200%"}}>

    <div>MultiLinkView</div>
    <InterlineView selections={intertextdata.selections}
      onClickTag={this.onClickTag}
      onHover={this.onHover}
       text={intertextdata.text} markups={intertextdata.links} styles={intertextdata.tagStyles}/>
      

    <div>InterlineView</div>
      <InterlineView user="y1" onSelectText={this.onSelectText} selectable="single"
        onDoneEdit={this.onDoneEdit}
        allowKeys={[" "]} onKeyPress={this.onKeyPress} editing={this.state.editing}
        text={text} markups={markups} styles={tagStyles} />
     </div>;
  }
});
module.exports=maincomponent;
/*
    <div>FlattenView<br/>
      <FlattenView text={text} tags={tags} styles={tagStyles} />
    </div>

   <div>SelectableView<Selector action={this.action}/></div>
      <SelectableView text={text} selectable="multiple" styles={tagStyles} />
      <SelectableView text={text} selectable={this.state.selectable} tags={tags2} styles={tagStyles} />



*/


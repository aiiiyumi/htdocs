(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"5_atlas_", frames: [[0,0,380,280]]},
		{name:"5_atlas_2", frames: [[0,0,380,280]]},
		{name:"5_atlas_3", frames: [[0,0,380,280]]},
		{name:"5_atlas_4", frames: [[0,0,380,280]]}
];


// symbols:



(lib._0 = function() {
	this.initialize(ss["5_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1300,100);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1300,100);


(lib._3 = function() {
	this.initialize(ss["5_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.initialize(ss["5_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._5_1 = function() {
	this.initialize(ss["5_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib._4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-190,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._4_1, new cjs.Rectangle(-190,-140,380,280), null);


(lib._3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-190,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._3_1, new cjs.Rectangle(-190,-140,380,280), null);


(lib._2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-650,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._2_1, new cjs.Rectangle(-650,-50,1300,100), null);


(lib._1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-650,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._1_1, new cjs.Rectangle(-650,-50,1300,100), null);


// stage content:
(lib._5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_6
	this.instance = new lib._5_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

	// レイヤー_5
	this.instance_1 = new lib._4_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(65,263,1,1,0,0,0,-125,123);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0,x:190,y:140},0).wait(8).to({rotation:-6.4285,x:172.9425,y:124.2779},0).wait(1).to({rotation:-12.857,x:154.4962,y:110.2689},0).wait(1).to({rotation:-19.2855,x:132.3616,y:98.1177},0).wait(1).to({rotation:-25.7141,x:109.2541,y:87.9456},0).wait(1).to({rotation:-32.1426,x:65.4014,y:72.3491},0).wait(1).to({rotation:-38.5711,x:21.0407,y:58.8986},0).wait(1).to({rotation:-44.9996,x:-23.5846,y:42.6375},0).wait(1).to({x:-48.5846,y:27.6375},0).wait(32));

	// レイヤー_4
	this.instance_2 = new lib._3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(127,261,1,1,0,0,0,-63,121);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0,regY:0,x:190,y:140},0).wait(7).to({rotation:-5.6249,x:172.8367,y:131.9076},0).wait(1).to({rotation:-11.2499,x:155.1838,y:125.0344},0).wait(1).to({rotation:-16.8748,x:137.1631,y:116.9224},0).wait(1).to({rotation:-22.4998,x:118.9002,y:110.1016},0).wait(1).to({rotation:-28.1247,x:75.5226,y:104.5895},0).wait(1).to({rotation:-33.7497,x:32.1593,y:100.3912},0).wait(1).to({rotation:-39.3746,x:-16.0611,y:92.4988},0).wait(1).to({rotation:-44.9996,x:-64.0113,y:85.8921},0).wait(33));

	// レイヤー_3
	this.instance_3 = new lib._2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(650,253);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:610.3065},0).wait(1).to({x:570.613},0).wait(1).to({x:530.9196},0).wait(1).to({x:491.2261},0).wait(1).to({x:451.5326},0).wait(1).to({x:411.8391},0).wait(1).to({x:372.1457},0).wait(1).to({x:332.4522},0).wait(1).to({x:292.7587},0).wait(1).to({x:253.0652},0).wait(1).to({x:213.3717},0).wait(1).to({x:173.6783},0).wait(1).to({x:133.9848},0).wait(1).to({x:94.2913},0).wait(1).to({x:54.5978},0).wait(1).to({x:14.9043},0).wait(1).to({x:-24.7891},0).wait(1).to({x:-64.4826},0).wait(1).to({x:-104.1761},0).wait(1).to({x:-143.8696},0).wait(1).to({x:-183.563},0).wait(1).to({x:-223.2565},0).wait(1).to({x:-262.95},0).wait(1).to({scaleY:1.0833,x:-254.6167,y:252.6667},0).wait(1).to({scaleY:1.1667,x:-246.2833,y:252.3333},0).wait(1).to({scaleY:1.25,x:-237.95,y:252},0).wait(1).to({scaleY:1.3333,x:-229.6167,y:251.6667},0).wait(1).to({scaleY:1.4167,x:-221.2833,y:251.3333},0).wait(1).to({scaleY:1.5,x:-212.95,y:251},0).wait(1).to({scaleY:1.4167,x:-221.2833,y:251.3333},0).wait(1).to({scaleY:1.3333,x:-229.6167,y:251.6667},0).wait(1).to({scaleY:1.25,x:-237.95,y:252},0).wait(1).to({scaleY:1.1667,x:-246.2833,y:252.3333},0).wait(1).to({scaleY:1.0833,x:-254.6167,y:252.6667},0).wait(1).to({scaleY:1,x:-262.95,y:253},0).wait(1).to({scaleY:1.0857,x:-254.6167},0).wait(1).to({scaleY:1.1713,x:-246.2833},0).wait(1).to({scaleY:1.257,x:-237.95},0).wait(1).to({scaleY:1.3426,x:-229.6167},0).wait(1).to({scaleY:1.4283,x:-221.2833},0).wait(1).to({scaleY:1.5139,x:-212.95},0).wait(1).to({scaleY:1.4283,x:-221.2833},0).wait(1).to({scaleY:1.3426,x:-229.6167},0).wait(1).to({scaleY:1.257,x:-237.95},0).wait(1).to({scaleY:1.1713,x:-246.2833},0).wait(1).to({scaleY:1.0857,x:-254.6167},0).wait(1).to({scaleY:1,x:-262.95},0).wait(1));

	// レイヤー_2
	this.instance_4 = new lib._1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(650,253);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:610.3065},0).wait(1).to({x:570.613},0).wait(1).to({x:530.9196},0).wait(1).to({x:491.2261},0).wait(1).to({x:451.5326},0).wait(1).to({x:411.8391},0).wait(1).to({x:372.1457},0).wait(1).to({x:332.4522},0).wait(1).to({x:292.7587},0).wait(1).to({x:253.0652},0).wait(1).to({x:213.3717},0).wait(1).to({x:173.6783},0).wait(1).to({x:133.9848},0).wait(1).to({x:94.2913},0).wait(1).to({x:54.5978},0).wait(1).to({x:14.9043},0).wait(1).to({x:-24.7891},0).wait(1).to({x:-64.4826},0).wait(1).to({x:-104.1761},0).wait(1).to({x:-143.8696},0).wait(1).to({x:-183.563},0).wait(1).to({x:-223.2565},0).wait(1).to({x:-262.95},0).wait(1).to({x:-254.6167},0).wait(1).to({x:-246.2833},0).wait(1).to({x:-237.95},0).wait(1).to({x:-229.6167},0).wait(1).to({x:-221.2833},0).wait(1).to({x:-212.95},0).wait(1).to({x:-221.2833},0).wait(1).to({x:-229.6167},0).wait(1).to({x:-237.95},0).wait(1).to({x:-246.2833},0).wait(1).to({x:-254.6167},0).wait(1).to({x:-262.95},0).wait(1).to({x:-254.6167},0).wait(1).to({x:-246.2833},0).wait(1).to({x:-237.95},0).wait(1).to({x:-229.6167},0).wait(1).to({x:-221.2833},0).wait(1).to({x:-212.95},0).wait(1).to({x:-221.2833},0).wait(1).to({x:-229.6167},0).wait(1).to({x:-237.95},0).wait(1).to({x:-246.2833},0).wait(1).to({x:-254.6167},0).wait(1).to({x:-262.95},0).wait(1));

	// レイヤー_1
	this.instance_5 = new lib._0();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-722.9,-65,2022.9,393.7);
// library properties:
lib.properties = {
	id: '4A28D4291691A043B6268A0031AC11B2',
	width: 380,
	height: 280,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_1.png", id:"_1"},
		{src:"images/_2.png", id:"_2"},
		{src:"images/5_atlas_.png", id:"5_atlas_"},
		{src:"images/5_atlas_2.png", id:"5_atlas_2"},
		{src:"images/5_atlas_3.png", id:"5_atlas_3"},
		{src:"images/5_atlas_4.png", id:"5_atlas_4"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4A28D4291691A043B6268A0031AC11B2'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
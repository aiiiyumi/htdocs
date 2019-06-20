(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"1_atlas_", frames: [[0,0,380,280]]},
		{name:"1_atlas_2", frames: [[0,0,380,280]]},
		{name:"1_atlas_3", frames: [[0,0,380,280]]},
		{name:"1_atlas_4", frames: [[0,0,380,280]]}
];


// symbols:



(lib._0 = function() {
	this.initialize(ss["1_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1_1 = function() {
	this.initialize(ss["1_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.initialize(ss["1_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.initialize(ss["1_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dship = function() {
	this.initialize(img.dship);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);// helper functions:

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


(lib.dship_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.dship();
	this.instance.parent = this;
	this.instance.setTransform(-190,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dship_1, new cjs.Rectangle(-190,-140,500,500), null);


(lib._2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-190,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._2_1, new cjs.Rectangle(-190,-140,380,280), null);


(lib._1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib._1_1();
	this.instance.parent = this;
	this.instance.setTransform(-190,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._1_2, new cjs.Rectangle(-190,-140,380,280), null);


// stage content:
(lib._1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_5
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	// レイヤー_4
	this.instance_1 = new lib.dship_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(483,-234);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:60,regY:110,x:536.3,y:-120.4},0).wait(1).to({x:529.65,y:-116.85},0).wait(1).to({x:522.95,y:-113.3},0).wait(1).to({x:516.3,y:-109.75},0).wait(1).to({x:509.6,y:-106.2},0).wait(1).to({x:502.95,y:-102.65},0).wait(1).to({x:496.25,y:-99.1},0).wait(1).to({x:489.6,y:-95.55},0).wait(1).to({x:482.9,y:-92},0).wait(1).to({x:476.25,y:-88.45},0).wait(1).to({x:469.6,y:-84.9},0).wait(1).to({x:462.9,y:-81.3},0).wait(1).to({x:456.25,y:-77.75},0).wait(1).to({x:449.55,y:-74.2},0).wait(1).to({x:442.9,y:-70.65},0).wait(1).to({x:436.2,y:-67.1},0).wait(1).to({x:429.55,y:-63.55},0).wait(1).to({x:422.85,y:-60},0).wait(1).to({x:416.2,y:-56.45},0).wait(1).to({x:409.55,y:-52.9},0).wait(1).to({x:402.85,y:-49.35},0).wait(1).to({x:396.2,y:-45.8},0).wait(1).to({x:389.5,y:-42.25},0).wait(1).to({x:382.85,y:-38.65},0).wait(1).to({x:376.15,y:-35.1},0).wait(1).to({x:369.5,y:-31.55},0).wait(1).to({x:362.8,y:-28},0).wait(1).to({x:356.15,y:-24.45},0).wait(1).to({x:349.5,y:-20.9},0).wait(1).to({x:342.8,y:-17.35},0).wait(1).to({x:336.15,y:-13.8},0).wait(1).to({x:329.45,y:-10.25},0).wait(1).to({x:322.8,y:-6.7},0).wait(1).to({x:316.1,y:-3.15},0).wait(1).to({x:309.45,y:0.4},0).wait(1).to({x:302.75,y:4},0).wait(1).to({x:296.1,y:7.55},0).wait(1).to({x:289.45,y:11.1},0).wait(1).to({x:282.75,y:14.65},0).wait(1).to({x:276.1,y:18.2},0).wait(1).to({x:269.4,y:21.75},0).wait(1).to({x:262.75,y:25.3},0).wait(1).to({x:256.05,y:28.85},0).wait(1).to({x:249.4,y:32.4},0).wait(1).to({x:242.7,y:35.95},0).wait(1).to({x:236.05,y:39.5},0).wait(1).to({x:229.4,y:43.05},0).wait(1).to({x:222.7,y:46.65},0).wait(1).to({x:216.05,y:50.2},0).wait(1).to({x:209.35,y:53.75},0).wait(1).to({x:202.7,y:57.3},0).wait(1).to({x:196,y:60.85},0).wait(1).to({x:189.35,y:64.4},0).wait(1).to({x:182.65,y:67.95},0).wait(1).to({x:176,y:71.5},0).wait(1).to({x:169.35,y:75.05},0).wait(1).to({x:162.65,y:78.6},0).wait(1).to({x:156,y:82.15},0).wait(1).to({x:149.3,y:85.7},0).wait(1).to({x:142.65,y:89.3},0).wait(1).to({x:135.95,y:92.85},0).wait(1).to({x:129.3,y:96.4},0).wait(1).to({x:122.6,y:99.95},0).wait(1).to({x:115.95,y:103.5},0).wait(1).to({x:109.3,y:107.05},0).wait(1).to({x:102.6,y:110.55},0).wait(1).to({x:95.95,y:114.1},0).wait(1).to({x:89.25,y:117.65},0).wait(1).to({x:82.6,y:121.2},0).wait(1).to({x:75.9,y:124.75},0).wait(1).to({x:69.25,y:128.3},0).wait(1).to({x:62.55,y:131.9},0).wait(1).to({x:55.95,y:135.45},0).wait(1).to({x:49.3,y:139},0).wait(1).to({x:42.6,y:142.55},0).wait(1).to({x:35.95,y:146.1},0).wait(1).to({x:29.25,y:149.65},0).wait(1).to({x:22.6,y:153.2},0).wait(1).to({x:15.9,y:156.75},0).wait(1).to({x:9.25,y:160.3},0).wait(1).to({x:2.55,y:163.85},0).wait(1).to({x:-4.1,y:167.4},0).wait(1).to({x:-10.75,y:170.95},0).wait(1).to({x:-17.45,y:174.55},0).wait(1).to({x:-24.1,y:178.1},0).wait(1).to({x:-30.8,y:181.65},0).wait(1).to({x:-37.45,y:185.2},0).wait(1).to({x:-44.15,y:188.75},0).wait(1).to({x:-50.8,y:192.3},0).wait(1).to({x:-57.5,y:195.85},0).wait(1).to({x:-64.15,y:199.4},0).wait(1).to({x:-70.8,y:202.95},0).wait(1).to({x:-77.5,y:206.5},0).wait(1).to({x:-84.15,y:210.05},0).wait(1).to({x:-90.85,y:213.6},0).wait(1).to({x:-97.5,y:217.2},0).wait(1).to({x:-104.2,y:220.75},0).wait(1).to({x:-110.85,y:224.3},0).wait(1).to({x:-117.55,y:227.85},0).wait(1).to({x:-124.2,y:231.4},0).wait(1).to({x:-130.85,y:234.95},0).wait(1).to({x:-137.55,y:238.5},0).wait(1).to({x:-144.2,y:242.05},0).wait(1).to({x:-150.9,y:245.6},0).wait(1).to({x:-157.55,y:249.15},0).wait(1).to({x:-164.25,y:252.7},0).wait(1).to({x:-170.9,y:256.25},0).wait(1).to({x:-177.6,y:259.85},0).wait(1).to({x:-184.25,y:263.4},0).wait(1).to({x:-190.9,y:266.95},0).wait(1).to({x:-197.6,y:270.5},0).wait(1).to({x:-204.25,y:274.05},0).wait(1).to({x:-210.95,y:277.6},0).wait(1).to({x:-217.6,y:281.15},0).wait(1).to({x:-224.3,y:284.7},0).wait(1).to({x:-230.95,y:288.25},0).wait(1).to({x:-237.65,y:291.8},0).wait(1).to({x:-244.3,y:295.35},0).wait(1).to({x:-251,y:298.95},0).wait(1));

	// レイヤー_3
	this.instance_2 = new lib._2_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(190,141);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({alpha:1},0).wait(12).to({alpha:0},0).wait(12).to({alpha:1},0).wait(12).to({alpha:0},0).wait(12).to({alpha:1},0).wait(12).to({alpha:0},0).wait(12).to({alpha:1},0).wait(12).to({alpha:0},0).wait(12).to({alpha:1},0).wait(12));

	// レイヤー_2
	this.instance_3 = new lib._1_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(190,141);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({alpha:0},0).wait(12).to({alpha:1},0).wait(12).to({alpha:0},0).wait(12).to({alpha:1},0).wait(12).to({alpha:0},0).wait(12).to({alpha:1},0).wait(12).to({alpha:0},0).wait(12).to({alpha:1},0).wait(12).to({alpha:0},0).wait(12));

	// レイヤー_1
	this.instance_4 = new lib._0();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311,-234,1104,783);
// library properties:
lib.properties = {
	id: '4A28D4291691A043B6268A0031AC11B2',
	width: 380,
	height: 280,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dship.png", id:"dship"},
		{src:"images/1_atlas_.png", id:"1_atlas_"},
		{src:"images/1_atlas_2.png", id:"1_atlas_2"},
		{src:"images/1_atlas_3.png", id:"1_atlas_3"},
		{src:"images/1_atlas_4.png", id:"1_atlas_4"}
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
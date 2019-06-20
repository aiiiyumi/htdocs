(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"2_atlas_", frames: [[0,0,380,280]]},
		{name:"2_atlas_2", frames: [[0,0,380,280]]},
		{name:"2_atlas_3", frames: [[0,0,380,280]]},
		{name:"2_atlas_4", frames: [[0,0,380,280]]}
];


// symbols:



(lib._0 = function() {
	this.initialize(ss["2_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.initialize(ss["2_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2_1 = function() {
	this.initialize(ss["2_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.initialize(ss["2_atlas_2"]);
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


(lib._2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib._2_1();
	this.instance.parent = this;
	this.instance.setTransform(-190,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._2_2, new cjs.Rectangle(-190,-140,380,280), null);


(lib._1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-190,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._1_1, new cjs.Rectangle(-190,-140,380,280), null);


// stage content:
(lib._2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_4
	this.instance = new lib._3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

	// レイヤー_3
	this.instance_1 = new lib._2_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(190,140);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({x:198.3333,y:142.5},0).wait(1).to({x:206.6667,y:145},0).wait(1).to({x:215,y:147.5},0).wait(1).to({x:223.3333,y:150},0).wait(1).to({x:231.6667,y:152.5},0).wait(1).to({x:240,y:155},0).wait(1).to({x:231.6667,y:146.6667},0).wait(1).to({x:223.3333,y:138.3333},0).wait(1).to({x:215,y:130},0).wait(1).to({x:206.6667,y:121.6667},0).wait(1).to({x:198.3333,y:113.3333},0).wait(1).to({x:190,y:105},0).wait(1).to({y:110.8333},0).wait(1).to({y:116.6667},0).wait(1).to({y:122.5},0).wait(1).to({y:128.3333},0).wait(1).to({y:134.1667},0).wait(1).to({y:140},0).wait(1));

	// レイヤー_2
	this.instance_2 = new lib._1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(175.5,174.7,1,1,0,0,0,-14.5,34.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0,regY:0,rotation:5.0001,x:192.9692,y:141.3958},0).wait(1).to({rotation:10.0002,x:195.8054,y:143.0451},0).wait(1).to({rotation:6.6668,x:193.9305,y:141.918},0).wait(1).to({rotation:3.3335,x:191.9932,y:140.9019},0).wait(1).to({rotation:0.0001,x:190.0001,y:140},0).wait(1).to({rotation:-3.462,x:187.8782,y:139.1877},0).wait(1).to({rotation:-6.924,x:185.7111,y:138.5051},0).wait(1).to({rotation:-10.3861,x:183.5067,y:137.9545},0).wait(1).to({rotation:-6.924,x:185.7111,y:138.5051},0).wait(1).to({rotation:-3.462,x:187.8782,y:139.1877},0).wait(1).to({rotation:0.0001,x:190.0001,y:140},0).wait(1).to({rotation:0.0001},0).wait(6).to({x:198.3334,y:142.5},0).wait(1).to({x:206.6667,y:145},0).wait(1).to({x:215.0001,y:147.5},0).wait(1).to({x:223.3334,y:150},0).wait(1).to({x:231.6667,y:152.5},0).wait(1).to({x:240.0001,y:155},0).wait(1).to({x:231.6667,y:146.6667},0).wait(1).to({x:223.3334,y:138.3334},0).wait(1).to({x:215.0001,y:130},0).wait(1).to({x:206.6667,y:121.6667},0).wait(1).to({x:198.3334,y:113.3334},0).wait(1).to({x:190.0001,y:105},0).wait(1).to({y:110.8334},0).wait(1).to({y:116.6667},0).wait(1).to({y:122.5},0).wait(1).to({y:128.3334},0).wait(1).to({y:134.1667},0).wait(1).to({y:140},0).wait(1));

	// レイヤー_1
	this.instance_3 = new lib._0();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(161.8,105,268.2,209);
// library properties:
lib.properties = {
	id: '4A28D4291691A043B6268A0031AC11B2',
	width: 380,
	height: 280,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/2_atlas_.png", id:"2_atlas_"},
		{src:"images/2_atlas_2.png", id:"2_atlas_2"},
		{src:"images/2_atlas_3.png", id:"2_atlas_3"},
		{src:"images/2_atlas_4.png", id:"2_atlas_4"}
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
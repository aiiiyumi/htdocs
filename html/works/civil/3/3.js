(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"3_atlas_", frames: [[0,0,380,280]]},
		{name:"3_atlas_2", frames: [[0,0,380,280]]},
		{name:"3_atlas_3", frames: [[0,0,380,280]]},
		{name:"3_atlas_4", frames: [[0,0,380,280]]}
];


// symbols:



(lib._0 = function() {
	this.initialize(ss["3_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.initialize(ss["3_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.initialize(ss["3_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3_1 = function() {
	this.initialize(ss["3_atlas_2"]);
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


(lib._2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-190,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._2_1, new cjs.Rectangle(-190,-140,380,280), null);


(lib._1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-190,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._1_1, new cjs.Rectangle(-190,-140,380,280), null);


// stage content:
(lib._3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_4
	this.instance = new lib._3_1();
	this.instance.parent = this;
	this.instance.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

	// レイヤー_3
	this.instance_1 = new lib._2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(190,141);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({rotation:0.6653,x:190.25,y:141.5833},0).wait(1).to({rotation:1.3305,x:190.5,y:142.1667},0).wait(1).to({rotation:1.9958,x:190.75,y:142.75},0).wait(1).to({rotation:2.661,x:191,y:143.3333},0).wait(1).to({rotation:3.3263,x:191.25,y:143.9167},0).wait(1).to({rotation:3.9916,x:191.5,y:144.5},0).wait(1).to({rotation:3.3263,x:191.25,y:143.9167},0).wait(1).to({rotation:2.661,x:191,y:143.3333},0).wait(1).to({rotation:1.9958,x:190.75,y:142.75},0).wait(1).to({rotation:1.3305,x:190.5,y:142.1667},0).wait(1).to({rotation:0.6653,x:190.25,y:141.5833},0).wait(1).to({rotation:0,x:190,y:141},0).wait(1));

	// レイヤー_2
	this.instance_2 = new lib._1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(190,141);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:-2.7999,x:190.7,y:142.2},0).wait(1).to({rotation:-5.5998,x:191.4,y:143.4},0).wait(1).to({rotation:-8.3998,x:192.1,y:144.6},0).wait(1).to({rotation:-11.1997,x:192.8,y:145.8},0).wait(1).to({rotation:-13.9996,x:193.5,y:147},0).wait(1).to({rotation:-11.6663,x:192.9167,y:146},0).wait(1).to({rotation:-9.3329,x:192.3333,y:145},0).wait(1).to({rotation:-6.9996,x:191.75,y:144},0).wait(1).to({rotation:-4.6663,x:191.1667,y:143},0).wait(1).to({rotation:-2.3329,x:190.5833,y:142},0).wait(1).to({rotation:0.0004,x:190,y:141},0).wait(1).to({rotation:-2.3329,x:190.5833,y:142},0).wait(1).to({rotation:-4.6663,x:191.1667,y:143},0).wait(1).to({rotation:-6.9996,x:191.75,y:144},0).wait(1).to({rotation:-9.3329,x:192.3333,y:145},0).wait(1).to({rotation:-11.6663,x:192.9167,y:146},0).wait(1).to({rotation:-13.9996,x:193.5,y:147},0).wait(1).to({rotation:-11.6663,x:192.9167,y:146},0).wait(1).to({rotation:-9.3329,x:192.3333,y:145},0).wait(1).to({rotation:-6.9996,x:191.75,y:144},0).wait(1).to({rotation:-4.6663,x:191.1667,y:143},0).wait(1).to({rotation:-2.3329,x:190.5833,y:142},0).wait(1).to({rotation:0.0004,x:190,y:141},0).wait(1).to({rotation:0.0004},0).wait(12));

	// レイヤー_1
	this.instance_3 = new lib._0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(165.8,105.8,245.5,222.39999999999998);
// library properties:
lib.properties = {
	id: '4A28D4291691A043B6268A0031AC11B2',
	width: 380,
	height: 280,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/3_atlas_.png", id:"3_atlas_"},
		{src:"images/3_atlas_2.png", id:"3_atlas_2"},
		{src:"images/3_atlas_3.png", id:"3_atlas_3"},
		{src:"images/3_atlas_4.png", id:"3_atlas_4"}
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
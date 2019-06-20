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
	this.initialize(ss["2_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.initialize(ss["2_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2_1 = function() {
	this.initialize(ss["2_atlas_4"]);
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// レイヤー_3
	this.instance_1 = new lib._2_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(190,140);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:180,y:134},0).wait(1).to({x:170,y:128},0).wait(1).to({x:160,y:122},0).wait(1).to({x:150,y:116},0).wait(1).to({x:140,y:110},0).wait(1).to({x:144.1667,y:112.5,alpha:0.0833},0).wait(1).to({x:148.3333,y:115,alpha:0.1667},0).wait(1).to({x:152.5,y:117.5,alpha:0.25},0).wait(1).to({x:156.6667,y:120,alpha:0.3333},0).wait(1).to({x:160.8333,y:122.5,alpha:0.4167},0).wait(1).to({x:165,y:125,alpha:0.5},0).wait(1).to({x:169.1667,y:127.5,alpha:0.5833},0).wait(1).to({x:173.3333,y:130,alpha:0.6667},0).wait(1).to({x:177.5,y:132.5,alpha:0.75},0).wait(1).to({x:181.6667,y:135,alpha:0.8333},0).wait(1).to({x:185.8333,y:137.5,alpha:0.9167},0).wait(1).to({x:190,y:140,alpha:1},0).wait(13));

	// レイヤー_2
	this.instance_2 = new lib._1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(190,140);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:180,y:146},0).wait(1).to({x:170,y:152},0).wait(1).to({x:160,y:158},0).wait(1).to({x:150,y:164},0).wait(1).to({x:140,y:170},0).wait(1).to({x:144.1667,y:167.5,alpha:0.0833},0).wait(1).to({x:148.3333,y:165,alpha:0.1667},0).wait(1).to({x:152.5,y:162.5,alpha:0.25},0).wait(1).to({x:156.6667,y:160,alpha:0.3333},0).wait(1).to({x:160.8333,y:157.5,alpha:0.4167},0).wait(1).to({x:165,y:155,alpha:0.5},0).wait(1).to({x:169.1667,y:152.5,alpha:0.5833},0).wait(1).to({x:173.3333,y:150,alpha:0.6667},0).wait(1).to({x:177.5,y:147.5,alpha:0.75},0).wait(1).to({x:181.6667,y:145,alpha:0.8333},0).wait(1).to({x:185.8333,y:142.5,alpha:0.9167},0).wait(1).to({x:190,y:140,alpha:1},0).wait(13));

	// レイヤー_1
	this.instance_3 = new lib._0();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(140,110,240,200);
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
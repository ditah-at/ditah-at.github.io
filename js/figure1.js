(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"figure1_atlas_1", frames: [[1209,0,500,179],[1209,181,400,55],[1209,311,100,55],[0,0,1207,1191],[1209,238,100,71],[0,1193,1565,575]]},
		{name:"figure1_atlas_2", frames: [[0,0,2000,1811]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3840,2160);


(lib._3v4r_msi = function() {
	this.initialize(ss["figure1_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.KiFol3v4r_rgb = function() {
	this.initialize(img.KiFol3v4r_rgb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2400,1639);


(lib.material = function() {
	this.initialize(ss["figure1_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.msilabel = function() {
	this.initialize(ss["figure1_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.rftirlabelpngcopy = function() {
	this.initialize(ss["figure1_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.rftir = function() {
	this.initialize(ss["figure1_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.xrflabel = function() {
	this.initialize(ss["figure1_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.xrf = function() {
	this.initialize(ss["figure1_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.msi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.msilabel();
	this.instance.setTransform(28,1266);

	this.instance_1 = new lib._3v4r_msi();
	this.instance_1.setTransform(0,0,0.7121,0.7121);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.msi, new cjs.Rectangle(0,0,1424.2,1321), null);


(lib.material_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.material();

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFF6").ss(3,1,1).p("EgjQgKpMBGhAAAQDGAAAADGIAAPHQAADHjGAAMhGhAAAQjGAAAAjHIAAvHQAAjGDGAAg");
	this.shape.setTransform(250.8,70.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(75,219,211,0.749)").s().p("EgjQAKrQjGAAAAjHIAAvHQAAjGDGAAMBGhAAAQDGAAAADGIAAPHQAADHjGAAg");
	this.shape_1.setTransform(250.8,70.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.material_1, new cjs.Rectangle(0,0,500,179), null);


(lib.lines = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFF6").ss(3,1,1).p("EhmYgEZMAAAgtwEhGWg55MBHdAAAEAERAkpMBiIAVRMglhhLt");
	this.shape.setTransform(655.325,370.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lines, new cjs.Rectangle(-1.5,-1.5,1313.7,744.1), null);


(lib.iconmsi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFF6").ss(3).p("EgyPgjEMBkfAAAQDIAAAADIMAAAA/5QAADIjIAAMhkfAAAQjIAAAAjIMAAAg/5QAAjIDIAAg");
	this.shape.setTransform(341.575,224.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(75,219,211,0.447)").s().p("EgyPAjFQjIAAAAjIMAAAg/5QAAjIDIAAMBkfAAAQDIAAAADIMAAAA/5QAADIjIAAg");
	this.shape_1.setTransform(341.575,224.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iconmsi, new cjs.Rectangle(-1.5,-1.5,686.2,452), null);


(lib.iconhead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFF6").ss(3).p("ACuEmIlbAAQgyAAgjgjQgjgkAAgxIAAlbQAAgxAjgjQAjgkAyAAIFbAAQAxAAAkAkQAjAjAAAxIAAFbQAAAxgjAkQgkAjgxAAg");
	this.shape.setTransform(45.1,24.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(75,219,211,0.447)").s().p("AitEmQgxAAgkgjQgjgkAAgxIAAlbQAAgxAjgjQAkgkAxAAIFbAAQAxAAAkAkQAjAjAAAxIAAFbQAAAxgjAkQgkAjgxAAg");
	this.shape_1.setTransform(45.1,24.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iconhead, new cjs.Rectangle(14.2,-5.9,61.8,61.699999999999996), null);


(lib.ftir = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rftirlabelpngcopy();
	this.instance.setTransform(652.45,795.25);

	this.instance_1 = new lib.rftir();
	this.instance_1.setTransform(32.45,26.25,0.6248,0.6248);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg77A/YQhuAAhOg/QhPhAAAhYMAAAh4BQAAhYBPg/QBOhABuAAMB33AAAQBuAABPBAQBOA/AABYMAAAB4BQAABYhOBAQhPA/huAAg");
	this.shape.setTransform(410.275,405.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ftir, new cjs.Rectangle(0,0,820.6,850.3), null);


(lib.baldhead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.xrflabel();
	this.instance.setTransform(320,362);

	this.instance_1 = new lib.xrf();
	this.instance_1.setTransform(-676,-64,0.741,0.741);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhcEAmJQipAAh3glQh5gnAAg1MAAAhIPQAAg1B5gmQB3gmCpAAMC4JAAAQCoAAB6AmQB3AmAAA1MAAABIPQAAA1h3AnQh6AlioAAg");
	this.shape.setTransform(-95.975,152.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.baldhead, new cjs.Rectangle(-726.2,-91.5,1260.5,524.5), null);


(lib.xrf_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.xrf = new lib.baldhead();
	this.xrf.name = "xrf";
	this.xrf.setTransform(910.7,319.25,1,1,0,0,0,184.5,227.7);

	this.timeline.addTween(cjs.Tween.get(this.xrf).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.xrf_1, new cjs.Rectangle(0,0,1260.5,524.6), null);


// stage content:
(lib.figure1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		/*
		Mousing over the specified symbol instance executes a function.
		'3' is the number of the times event should be triggered.
		*/
		stage.enableMouseOver(3);
		_this.xrf.visible = false;
		_this.ftir.visible = false;
		_this.material.visible = false;
		_this.lines.visible = false;
		_this.msi.visible = false;
		
		_this.iconspectra.on('mouseover', function(){
		_this.xrf.visible = true;
		_this.ftir.visible = true;
		_this.material.visible = true;
		_this.lines.visible = true;
		});
		_this.iconspectra.on('mouseout', function(){
		_this.xrf.visible = false;
		_this.ftir.visible = false;
		_this.material.visible = false;
		_this.lines.visible = false;
		});
		
		_this.iconmsi.on('mouseover', function(){
		_this.msi.visible = true;
		});
		_this.iconmsi.on('mouseout', function(){
		_this.msi.visible = false;
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// popups
	this.ftir = new lib.ftir();
	this.ftir.name = "ftir";
	this.ftir.setTransform(1889.25,532.45,1,1,0,0,0,410.2,425.1);

	this.lines = new lib.lines();
	this.lines.name = "lines";
	this.lines.setTransform(1472.15,1027.9,1,1,0,0,0,655.3,370.6);

	this.material = new lib.material_1();
	this.material.name = "material";
	this.material.setTransform(771.85,657.3,1,1,0,0,0,250,89.5);

	this.msi = new lib.msi();
	this.msi.name = "msi";
	this.msi.setTransform(1570.4,753.6,1,1,0,0,0,712.1,644.8);

	this.xrf = new lib.xrf_1();
	this.xrf.name = "xrf";
	this.xrf.setTransform(868.7,1262.3,1,1,0,0,0,630.2,262.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.xrf},{t:this.msi},{t:this.material},{t:this.lines},{t:this.ftir}]}).wait(1));

	// icons
	this.iconmsi = new lib.iconmsi();
	this.iconmsi.name = "iconmsi";
	this.iconmsi.setTransform(477.7,1304.5,1,1,0,0,0,341.6,224.5);

	this.iconspectra = new lib.iconhead();
	this.iconspectra.name = "iconspectra";
	this.iconspectra.setTransform(2152.05,1445.05,1,1,0,0,0,40.8,42.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.iconspectra},{t:this.iconmsi}]}).wait(1));

	// bg
	this.instance = new lib.KiFol3v4r_rgb();

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1200,819.5,1200,819.5);
// library properties:
lib.properties = {
	id: '19AC42603FA732438C3752E6D631C35D',
	width: 2400,
	height: 1639,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_1.png", id:"CachedBmp_1"},
		{src:"images/KiFol3v4r_rgb.jpg", id:"KiFol3v4r_rgb"},
		{src:"images/figure1_atlas_1.png", id:"figure1_atlas_1"},
		{src:"images/figure1_atlas_2.png", id:"figure1_atlas_2"}
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
an.compositions['19AC42603FA732438C3752E6D631C35D'] = {
	getStage: function() { return exportRoot.stage; },
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
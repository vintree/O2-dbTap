/*
	未完成
	http://www.jb51.net/article/50663.htm
 */ 
function swipe(element, callback) {
	var isTouchMove, startTx, startTy;
	element.addEventListener( 'touchstart', function( e ){
	  	var touches = e.touches[0];
	  	startTx = touches.clientX;
	  	startTy = touches.clientY;
	  	isTouchMove = false;
	}, false );
	element.addEventListener( 'touchmove', function( e ){
	  	isTouchMove = true;
	  	e.preventDefault();
	}, false );
	element.addEventListener( 'touchend', function( e ){
	  	if( !isTouchMove ){
	    	return;
	  	}
	  	var touches = e.changedTouches[0],
	    	endTx = touches.clientX,
	    	endTy = touches.clientY,
	    	distanceX = startTx - endTx
	    	distanceY = startTy - endTy,
	    	isSwipe = false;
	  if( Math.abs(distanceX) >= Math.abs(distanceY) ){
	    if( distanceX > 20 ){
	      	console.log( 'fire swipe left event' );
	      	isSwipe = true;
	    }
	    else if( distanceX < -20 ){
	      	console.log( 'fire swipe right event' );    
	      	isSwipe = true;
	    }
	  }
	  else{
	    if( distanceY > 20 ){
	      	console.log( 'fire swipe up event' );        
	      	isSwipe = true;
	    }
	    else if( distanceY < -20 ){
	      	console.log( 'fire swipe down event' );         
	      	isSwipe = true;
	    }
	  }
	  if( isSwipe ){
	    	console.log( 'fire swipe event' );
	  }
	}, false );
}
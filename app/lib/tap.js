function tap(element, callback) {
	var startTx, startTy;
	element.addEventListener( 'touchstart', function( e ){
	  var touches = e.touches[0];
	  startTx = touches.clientX;
	  startTy = touches.clientY;
	}, false );
	element.addEventListener( 'touchend', function( e ){
	  var touches = e.changedTouches[0],
	    endTx = touches.clientX,
	    endTy = touches.clientY;
	  // 在部分设备上 touch 事件比较灵敏，导致按下和松开手指时的事件坐标会出现一点点变化
	  if( Math.abs(startTx - endTx) < 6 && Math.abs(startTy - endTy) < 6 ){
	    // console.log( 'fire tap event' );
	    callback(e);
	  }
	}, false );
}
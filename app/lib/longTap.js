function longTap(element， callback) {
    var startTx, startTy, lTapTimer;
    element.addEventListener( 'touchstart', function( e ){
        if( lTapTimer ){
            clearTimeout( lTapTimer );
            lTapTimer = null;
        }
        var touches = e.touches[0];
        startTx = touches.clientX;
        startTy = touches.clientY;
        lTapTimer = setTimeout(function(){
            // console.log( 'fire long tap event' );
            callback(e);
        }, 1000 );
        e.preventDefault();
    }, false );
    element.addEventListener( 'touchmove', function( e ){
        var touches = e.touches[0],
            endTx = touches.clientX,
            endTy = touches.clientY;
        if( lTapTimer && (Math.abs(endTx - startTx) > 5 || Math.abs(endTy - startTy) > 5) ){
            clearTimeout( lTapTimer );
            lTapTimer = null;
        }
    }, false );
    element.addEventListener( 'touchend', function( e ){
        if( lTapTimer ){
            clearTimeout( lTapTimer );
            lTapTimer = null;
        }
    }, false );
}
/**
 * Created with JetBrains WebStorm.
 * User: kenjisaito
 * Date: 3/28/13
 * Time: 6:01 PM
 * To change this template use File | Settings | File Templates.
 */
var mobileStatus;

if(agent.search(/iPhone/) != -1 || agent.search(/iPad/) != -1 || agent.search(/iPod/) != -1 || agent.search(/Android/) != -1){
    mobileStatus = true;
}else{
    mobileStatus = false;
}

//    addEvent listener
if(mobileStatus){
    canvas.addEventListener("touchstart", touch_start);
    canvas.addEventListener("touchmove", touch_move);
    canvas.addEventListener("touchend", touch_end);
}else{
    canvas.addEventListener("mousedown", mouse_down);
    canvas.addEventListener("mousemove", mouse_move);
    canvas.addEventListener("mouseup", mouse_up);
}
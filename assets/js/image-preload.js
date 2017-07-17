//Exelent little functions to use any time when class modification is needed
function hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}

//onload function
window.onload = function onload() 
{
	var load = document.getElementsByClassName('image')[0];
    if (!hasClass(load, "preload")) 
    {
     addClass(load, "preload");
    } 
    else 
    {
        removeClass(load, "preload");
    }

    var load1 = document.getElementsByClassName('small-image')[0];
    if (!hasClass(load1, "preload")) 
    {
        addClass(load1, "preload");
    } 
    else 
    {
        removeClass(load1, "preload");
    }
}



setTimeout(function() {
	document.getElementsByClassName('image')[0];
}, 1000)

setTimeout(function() {
	document.getElementsByClassName('featured-image')[0];
}, 1000)
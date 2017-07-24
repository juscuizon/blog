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
function postImages()
{

	var load2 = document.getElementsByClassName('image')[0];
    if (!hasClass(load2, "preload")) 
    {
     addClass(load2, "preload");
    } 
    else 
    {
        removeClass(load2, "preload");
    }

    var load3 = document.getElementsByClassName('small-image')[0];
    if (!hasClass(load3, "preload")) 
    {
        addClass(load3, "preload");
    } 
    else 
    {
        removeClass(load3, "preload");
    }

}

window.onload = postImages;
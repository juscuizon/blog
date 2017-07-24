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
function blogImages() 
{
    var load = document.getElementsByClassName('featured-image');
    for (var i = 0; i < load.length; i++)
    {
        if (!hasClass(load[i], "preload")) { addClass(load[i], "preload"); } 
        else { removeClass(load[i], "preload"); }
    }

    var load1 = document.getElementsByClassName('featured-image-small');
    for (var i = 0; i < load1.length; i++)
    {
        if (!hasClass(load1[i], "preload")) { addClass(load1[i], "preload"); } 
        else { removeClass(load1[i], "preload"); }
    }
}

window.onload = blogImages;
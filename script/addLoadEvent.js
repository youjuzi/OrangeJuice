function addLoadEvent(func) {
	var oldonload = window.onload;
	if(!window.onload) {
		window.onload = func;
	} else {
		window.onload = function () {
			oldonload();
			func();
		}
	}
}
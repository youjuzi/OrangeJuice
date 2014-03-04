function moveElement (elementID, final_x, final_y, interval) {
	if(!document.getElementById) return false;
	if(!document.getElementById(elementID)) return false;
	var elment = document.getElementById(elementID),
		xpos = parseInt(elment.style.left),
		ypos = parseInt(elment.style.top);
	if(xpos < final_x) {
		xpos++;
	}
	if(xpos > final_x) {
		xpos--;
	}
	if(ypos < final_y) {
		ypos++;
	}
	if(ypos > final_y) {
		ypos--;
	}
	elment.style.left = xpos + 'px';
	elment.style.top = ypos + 'px';
	movement = setTimeout(moveElement, 10);
}

addLoadEvent(moveElement);
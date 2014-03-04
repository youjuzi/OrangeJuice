function previewEvent () {
	if(document.getElementsByTag) return false;
	var list = document.getElementsByTag('a');
	if(list[0]){
		list[0].onmouseover
	}
}
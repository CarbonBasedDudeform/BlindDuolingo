document.addEventListener("DOMNodeInserted", function (ev) {
	try {
		var original_text = document.getElementById("original-text");
		if (original_text.getAttribute("class") == null) { //only change css if it's not an english-to-target language question, if it's an english-to-target lang q then this won't be null
		  	original_text.style.display = "none";
		  }
  } catch(err) {
  	//do nothing as this is expected most of the time -- should find a fix for this later maybe but it'll do for now
  }

  try {
  	var lang = document.getElementById("text-input").getAttribute("lang");
  	if (lang != "en") return; //if tranlating into any language other than english then will want to see the text, this would need to be changed dynamically for native speakers of other languages.

  	var ttt = document.getElementsByClassName("text-to-translate")[0]; //ttt = text-to-translate
  	ttt.style.color = "#FFFFFF"; //assume it is always the first one we want as there usually is only one (and by usually I mean there's never ever ever ever ever ever been any more)
  								 //changes the colour of the text to the colour of the background so it cannot be seen (unless you select/highlight it, in which case you can)
  } catch (e) {
  	//same as above
  }

	try {
  	var bdis = document.getElementsByTagName("bdi");
		bdis[0].style.color = "#FFFFFF";
  } catch (e) {
  	//same as above
  }
}, false);

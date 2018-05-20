function nanpa(inp, parameters) {
	var num = Number(inp);
	var param = {};
	if (parameters !== undefined) {
		param = parameters
	}

	var ali = 0;
	var lef = num;
	if (param.useali !== false) {
		ali = Math.floor(num / 100);
		lef = num % 100;
	}

	var mute = 0;
	if (param.usemute !== false) {
		mute = Math.floor(lef / 20);
		lef = lef % 20;
	}

	var luka = 0;
	if (param.useluka !== false) {
		luka = Math.floor(lef / 5);
		lef = lef % 5;
	}

	var tu = Math.floor(lef / 2);
	lef = lef % 2;

	var ala = 0;
	if (num == 0) {
		ala = 1;
	}
	
	if (param.useale === true) {
		var arr = Array(ali).fill("ale");
	} else {
		var arr = Array(ali).fill("ali");
	}
	return arr.concat(Array(mute).fill("mute")).concat(Array(luka).fill("luka")).concat(Array(tu).fill("tu")).concat(Array(lef).fill("wan")).concat(Array(ala).fill("ala")).join(" ");

}

function go() {
	document.getElementById("output").innerHTML = nanpa(
		document.getElementById("input").value,
		{
			useali: document.getElementById("useali").checked,
			usemute: document.getElementById("usemute").checked,
			useluka: document.getElementById("useluka").checked,
			useale: document.getElementById("useale").checked,
		}
	)
}

$("body select").msDropDown({visibleRows:10,roundedCorner:false});
var itemValue = {
		"max": "0",
		"martyr": "0",
		"mushroom": "0",
		"belial": "0",
		"steven": "0",
		"pentagram": "0",
		"hormones": "0",
		"mark": "0",
		"pact": "0",
		"nail": "0",
		"rock": "0",
		"halo": "0",
		"money": "0",
		"thin": "0",
		"thick": "0",
		"whore": "0",
		"razor": "0",
		"coal": "0",
		"stigmata": "0",
		"tech2": "0",
		"poly": "0",
		"sacred": "0",
		"smb": "0",
		"meat": "0",
		"jesus": "0",
		
		"onion": "0",
		"triple": "0",
		"numberone": "0",
		"hanger": "0",
		"wiggle": "0",
		"chocolate": "0",
		"quad": "0",
		"squeezy": "0",
		
		"curved": "0",
		"cancer": "0",
		"empress": "0",
		"devil": "0",

		
		"fetus": "0",
		"tech": "0",
		"knife": "0",
		"brim": "0",
		"ipecac": "0",
		"epic": "0"
}
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
function updateTotal(img, bool) 
{
	if (bool == true)
	{
		var property = document.getElementById(img);
		var dark = document.getElementById('ht');
		if (hasClass(dark, 'dark')) {
			if (window.getComputedStyle(property).backgroundColor !== 'rgb(52, 52, 52)') 
			{
				property.style.backgroundColor = "rgb(52, 52, 52)";
			}
			else 
			{
				property.style.backgroundColor = "rgb(50, 200, 50)";
			}
		} else {
			if (window.getComputedStyle(property).backgroundColor !== 'rgb(204, 204, 204)') 
			{
				property.style.backgroundColor = "rgb(204, 204, 204)";
			}	
			else 
			{
				property.style.backgroundColor = "rgb(50, 200, 50)";
			}
		}
	}

	var items = itemValue;
	
	if (items[img] == 0)
	{
		items[img] = 1;
	}
	else
	{
		items[img] = 0;
	}

	var v2 = 0;
	var infoText = "";
	var coins = document.getElementById('totalCoins').value;
	var razor = document.getElementById('totalRazor').value;
	var coal = document.getElementById('totalCoal').value;
	
	if (items['belial'] == 1)
	{
		v2 += 2;
	}
	else if (items['devil'] == 1) 
	{
		v2 += 2;
	}
	
	if (items['martyr'] == 1) v2++;
	if (items['rock'] == 1) v2++;
	
	
	if (items['money'] == 1)
	{
		v2 += Math.min(coins,99) * 0.04; 
		$("#option1").css({"opacity": "1"}); 
	}
	else
	{
		$("#option1").css({"opacity": "0.2"}); 
	}
	
	if (items['empress'] == 1)
	{
		v2 += 3.375;
	}
	else if (items['whore'] == 1) 
	{
		v2 += 1.5;
	}
	
	if (items['steven'] == 1) v2++;
	if (items['pentagram'] == 1) v2++;
	if (items['hormones'] == 1) v2++;
	if (items['mark'] == 1) v2++;
	
	if (items['pact'] == 1) v2 += 0.5;
	if (items['max'] == 1) v2 += 0.5;
	if (items['jesus'] == 1) v2 += 0.5;
	
	if (items['mushroom'] == 1)  v2 += 0.3;
	if (items['halo'] == 1) v2 += 0.3;
	if (items['thick'] == 1) v2 += 0.3;
	if (items['stigmata'] == 1) v2 += 0.3;
	if (items['smb'] == 1) v2 += 0.3;
	if (items['meat'] == 1) v2 += 0.3;
	
	if (items['thin'] == 1)
	{
		v2 *= 0.9;
        v2 -= 0.4;
	}
	
	if (items['nail'] == 1) v2 += 0.7;
	
	
	if (items['razor'] == 1)
	{
		v2 += (razor * 2) * 0.6;
		$("#option2").css({"opacity": "1"}); 
	}
	else
	{
		$("#option2").css({"opacity": "0.2"}); 
	}
	
	v2 = 3.5 * Math.sqrt(1 + v2 * 1.2);
	
	if (items['poly'] == 1)
	{
		if (items['quad'] == 1 || items['triple'] == 1)
		{
			v2 += 5;
		} else {
			v2 += 4;
			v2 *= 2;
		}
	}
	
	var v3 = 0;
	if ($("#combo1").val() == "cain") v3 = 0.2;
	if ($("#combo1").val() == "judas") v3 = 0.35;
	if ($("#combo1").val() == "dead_baby") v3 = 0.05;
	if ($("#combo1").val() == "eve") v3 = -0.25;
	
	v2 *= 1 + v3;
	
	if (items['curved'] == 1) v2 += 2;
	
	if (items['sacred'] == 1)
	{
		v2 *= 2.3;
        v2++;
	}
	
	
	if (items['tech2'] == 1) {
		v2 *= 0.65;
		if (items['brim'] == 1 && items['knife'] == 1 && items['ipecac'] == 1 && items['tech'] == 1)
		//make this less shit
		v2 *= 0.2;
	}
	
	if (items['knife'] == 1) {
		v2 *= 6;	
		$('#infotext').removeClass('fade');
	}
	
	if (items['max'] == 1 || 
	    items['belial'] == 1 && items['martyr'] == 1 || 
		items['devil'] == 1 && items['martyr'] == 1 ||
		items['mushroom'] == 1) {
		if (items['tech'] == 0 || (items['tech'] == 1 && items['fetus'] == 1 )) {
			if (items['knife'] == 0 && items['brim'] == 0) {
				v2 *= 1.5;
			}
		}
	}
		
	if (items['coal'] == 1 && items['knife'] == 0 && items['brim'] == 0 && items['tech'] == 0 && items['fetus'] == 0) 
	{
		v2 += Math.min(coal,150) * 0.14;
		$("#option3").css({"opacity": "1"}); 
	}
	else
	{
		$("#option3").css({"opacity": "0.2"});  
	}	
	
	if (items['brim'] == 1 && items['knife'] == 0) {
		v2 *= 3;
		$('#infotext').removeClass('fade');
		if (items['poly'] == 1 || items['triple'] == 1 || items['quad'] == 1 || items['ipecac'] == 1) {
			v2 *= 3;
		}
	}
	
	if (items['ipecac'] == 1 && items['knife'] == 0 && items['brim'] == 0 && items['fetus'] == 0 && items['tech'] == 0) {
		v2 += 50;
		$('#infotext').removeClass('fade');
	}
	
	if (items['fetus'] == 1 && items['knife'] == 0 && items['brim'] == 0) {
		v2 *= 3;
		v2 += 50;
		$('#infotext').removeClass('fade');
	}
	
	if (items['tech'] == 1 && items['brim'] == 0 && items['knife'] == 0 && items['fetus'] == 0)
	{
		if (items['poly'] == 1 || items['ipecac'] == 1 || items['triple'] == 1 || items['quad'] == 1 )
		{
			v2 *= 3;	
		}
	}
	
	if (items['tech'] == 1 && items['brim'] == 0 && items['knife'] == 0 && items['fetus'] == 0 && items['coal'] == 1) {
		v2 += 2;	
	}
	if (items['brim'] == 1 && items['knife'] == 0 && items['coal'] == 1) {
		v2 += 6;
	}
	
	if (items['epic'] == 1) {
		v2 = 80;
		$('#infotext').removeClass('fade');
	}
	
	
	if (items['knife'] == 0 && items['brim'] == 0 && items['ipecac'] == 0 && items['epic'] == 0 && items['fetus'] == 0) {
		$('#infotext').addClass('fade');
		infoText = "Nothing special to say about these items so far!";
	} 
	
	var temp = v2.toFixed(2);
	var knifedmg = v2 / 3;
	knifedmg = knifedmg.toFixed(2);
	
	if (items['epic'] == 1) {
		infoText = "Epic Fetus always does 80 damage.";
	}
	if (items['knife'] == 1 && items['epic'] == 0) {
		infoText = "The above damage value only applies when the knife is charged and is moving forwards. If the knife is not moving or is travelling backtowards Isaac, it will do " + knifedmg + " damage instead.";
	}
	if (items['brim'] == 1 && items['knife'] == 0 && items['epic'] == 0) {
		infoText = "A normal brimstone laser does two ticks of damage per charge, meaning one charge of brimstone will deal " + temp + " damage twice. Please note that brimsnapping will cause Brimstone to tick more than twice, so the damage output will be much more.";
	}
	if (items['fetus'] == 1 && items['knife'] == 0 && items['brim'] == 0 && items['epic'] == 0) {
		infoText = "To calculate fetus damage, take your final damage, multiply by 3 and then add 50 (100 if you have Mr. Mega). Thanks aggromidget for this info!";	
	}
	if (items['ipecac'] == 1 && items['knife'] == 0 && items['brim'] == 0 && items['epic'] == 0 && items['fetus'] == 0) {
		var newDmg = v2 - 50;
		newDmg = newDmg.toFixed(2);
		infoText = "An Ipecac explosion does normal tear damage (" + newDmg + ") + 50 to any enemies in the explosion radius. It will also do another tear's worth of damage if it directly hits an enemy and also does a single tick of 7 poison damage afterwards.";
	}

	
	v2 = v2.toFixed(2);
	document.getElementById('dmg-val').innerHTML = v2;
	document.getElementById('infotext').innerHTML = infoText;
	
	var delayMod = 0;
	
	//temporarily hide DPS and tears for fetus/tech/knife/brim/ipecac
	if (items['fetus'] == 1 || items['tech'] == 1 || items['knife'] == 1 || items['brim'] == 1 || items['ipecac'] == 1 || items['tech2'] == 1) {
		$('.tps').slideUp("fast");
		$('.dps').slideUp("fast");
	} else {
		$('.tps').slideDown("fast");
		$('.dps').slideDown("fast");
	}
	
		
	if (items['numberone'] === 1) delayMod += 1.5;	
	if(items['hanger'] === 1) delayMod += 0.7;
	if(items['pact'] === 1) delayMod += 0.7;
	if(items['onion'] === 1) delayMod += 0.7;
	if(items['thin'] === 1) delayMod += 1.7;
	if(items['squeezy'] === 1) delayMod += 0.4;
	if(items['wiggle'] === 1) delayMod += 0.4;
	if(items['sacred'] === 1) delayMod -= 0.4;
	if(items['halo'] === 1) delayMod += 0.2;
	if(items['rock'] === 1) delayMod += 0.2;
	if(items['smb'] === 1) delayMod += 0.2;
	if($("#combo1").val() == "samson") delayMod -= 0.25;
	
	delayMod += document.getElementById("pillsUp").value * 0.7 * 0.5;
	delayMod -= document.getElementById("pillsDown").value * 0.7 * 0.4;
	
	var f1 = Math.sqrt(Math.max(0, 1 + delayMod * 1.3));
    var delay = Math.max(5, 16 - f1 * 6 - Math.min(delayMod, 0) * 6);
	
	if(items['chocolate'] === 1) delay *= 0.8;
	if(items['triple'] === 1 ||
	   items['quad'] === 1 ||
	   items['poly'] === 1 || 
	   items['ipecac'] === 1 ) delay = delay * 2.1 + 3;
	if(items['cancer'] === 1) delay -= 2;
	
	document.getElementById('delay-val').innerHTML = delay.toFixed(2);
	
	if (delay % 1 == 0) {
		delay += 1;
	}
	var effectiveDelay = Math.ceil(delay);
	
	document.getElementById('effective-val').innerHTML = effectiveDelay.toFixed(2);
	
	
	var rof = 30 / effectiveDelay;	
	if(items['tech2'] === 1) rof = 10;
	
	var dps = rof * v2;
	if(items['quad'] === 1) {
	   dps *= 4;
	   rof *= 4;
	}
	else if (items['triple'] === 1) {
	   dps *= 3;
	   rof *= 3;
	}
	   
	if (items['epic'] == 1) {
		delay = 10;
		rof = 0.77;
		dps = rof * v2;
		$('#infotext').removeClass('fade');
	}
	
	document.getElementById('tps-val').innerHTML = rof.toFixed(2);
	document.getElementById('dps-val').innerHTML = dps.toFixed(2);
	
		
}
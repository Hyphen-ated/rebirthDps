oldDps = 9.55
$("body select").msDropDown({visibleRows:10,roundedCorner:false});
var character = 'isaac';
toggleColor(character)
var itemValue = {
		"max": "0",
		"martyr": "0",
		"mushroom": "0",
		"belial": "0",
		"steven": "0",
		"pentagram": "0",
		"hormones": "0",
        "synthoil": "0",
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
		//"coal": "0",
		"stigmata": "0",
		"tech2": "0",
		"poly": "0",
		"sacred": "0",
		"smb": "0",
		"meat": "0",
		"jesus": "0",
        "scythes": "0",
        "abaddon": "0",
        "ninetails": "0",
        "champbelt": "0",
        "sinrobes": "0",
        "darkmatter": "0",
        "ironbar": "0",
        "guppy": "0",
        "mulligan": "0",
        "hivemind": "0",
        "chempeel": "0",
        "bloodclot": "0",
        "2020": "0",
        "toothpicks": "0",
        "tornphoto": "0",
        "bluemush": "0",
        "screw": "0",
        "antigrav":"0",
        "guillotine":"0",
        "cricketbody":"0",
        "perfume":"0",
        "capricorn":"0",
        "pisces":"0",
		
		"onion": "0",
		"triple": "0",
		"numberone": "0",
		"hanger": "0",
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
function updateCharacter(name) {
    if(name === character) return;
    toggleColor(name);
    toggleColor(character);
    character = name;
}


function toggleColor(img) {
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

function updateTotal(img, isItem) 
{
	

	var items = itemValue;
    
    if (isItem == false)
	{
        toggleColor(character);
        toggleColor(img);
        character = img;
	} else {
        toggleColor(img)
        if (items[img] == 0)
        {
            items[img] = 1;
        }
        else
        {
            items[img] = 0;
        }
    }
	
	

	var v2 = 0;
	var infoText = "";
	var coins = document.getElementById('totalCoins').value;
	var razor = document.getElementById('totalRazor').value;
	//var coal = document.getElementById('totalCoal').value;
	
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
		v2 += 1.5;
	}
	else if (items['whore'] == 1) 
	{
		v2 += 1.5;
	}
	if (items['scythes'] == 1) v2+= 1.5;
    if (items['abaddon'] == 1) v2+= 1.5;
	if (items['steven'] == 1) v2++;
	if (items['pentagram'] == 1) v2++;
	if (items['hormones'] == 1) v2++;
    if (items['synthoil'] == 1) v2++;
	if (items['mark'] == 1) v2++;
    if (items['ninetails'] == 1) v2++;
    if (items['champbelt'] == 1) v2++;
    if (items['sinrobes'] == 1) v2++;
    if (items['darkmatter'] == 1) v2++;
    if (items['guillotine'] == 1) v2++;
	
	if (items['pact'] == 1) v2 += 0.5;
	if (items['max'] == 1) v2 += 0.5;
	if (items['jesus'] == 1) v2 += 0.5;
    if (items['capricorn'] == 1) v2 += 0.5;
	
	if (items['mushroom'] == 1)  v2 += 0.3;
	if (items['halo'] == 1) v2 += 0.3;
	if (items['thick'] == 1) v2 += 0.3;
	if (items['stigmata'] == 1) v2 += 0.3;
	if (items['smb'] == 1) v2 += 0.3;
	if (items['meat'] == 1) v2 += 0.3;
    if (items['ironbar'] == 1) v2 += 0.3;
        
	
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
    
    document.getElementById('dmg-stat-val').innerHTML = v2.toFixed(2);
	
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
	if (character == "cain") v3 = 0.2;
	if (character == "judas") v3 = 0.35;
	if (character == "bluebaby") v3 = 0.05;
	if (character == "eve") v3 = -0.25;
    if (character == "shadow") v3 = 1.0;
	
	v2 *= 1 + v3;
	
	if (items['curved'] == 1) v2 += 2;    
    if (items['sacred'] == 1)
	{
		v2 *= 2.3;
        v2++;
	}
    if (items['tech2'] == 1) {
		v2 *= 0.65;
	}
    
    if (items['max'] == 1 || 
	    items['belial'] == 1 && items['martyr'] == 1 || 
		items['devil'] == 1 && items['martyr'] == 1 ||
		items['mushroom'] == 1) {
		if (items['tech'] == 0 || (items['tech'] == 1 && items['fetus'] == 1 )) {
			if (items['knife'] == 0) {
				v2 *= 1.5;
			}
		}
	}
    
    var flyDamage = v2 * 2;
    if(items['brim'] !== 1) {
        if (items['chempeel'] == 1) v2 += 1;
        if (items['bloodclot'] == 1) v2 += 0.5;	
    }
	
	if (items['knife'] == 1) {
		v2 *= 6;	
		$('#infotext').removeClass('fade');
	}
	
	
		
	/*
    if (items['coal'] == 1 && items['knife'] == 0 && items['brim'] == 0 && items['tech'] == 0 && items['fetus'] == 0) 
	{
		v2 += Math.min(coal,150) * 0.14;
		$("#option3").css({"opacity": "1"}); 
	}    
	else
    */
	{
		$("#option3").css({"opacity": "0.2"});  
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
		
	if (items['epic'] == 1) {
		v2 = 80;
		$('#infotext').removeClass('fade');
	}
	
	
	if (items['knife'] == 0 && items['brim'] == 0 && items['ipecac'] == 0 && items['epic'] == 0 && items['fetus'] == 0 && items['chocolate'] == 0) {
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

	if (items['fetus'] == 1 && items['knife'] == 0 && items['brim'] == 0 && items['epic'] == 0) {
		infoText = "To calculate fetus damage, take your final damage, multiply by 3 and then add 50 (100 if you have Mr. Mega). Thanks aggromidget for this info!";	
	}
	if (items['ipecac'] == 1 && items['knife'] == 0 && items['brim'] == 0 && items['epic'] == 0 && items['fetus'] == 0) {
		var newDmg = v2 - 50;
		newDmg = newDmg.toFixed(2);
		infoText = "An Ipecac explosion does normal tear damage (" + newDmg + ") + 50 to any enemies in the explosion radius. It will also do another tear's worth of damage if it directly hits an enemy and also does a single tick of 7 poison damage afterwards.";
	}
    
    if (items['chocolate'] == 1) {
        infoText += " Warning: Chocolate Milk's interactions with other multipliers aren't properly tested."
    }

	
	v2 = v2.toFixed(2);
	document.getElementById('dmg-val').innerHTML = v2;
	document.getElementById('infotext').innerHTML = infoText;
	
	var delayMod = 0;
	
	//temporarily hide DPS and tears for fetus/tech/knife/brim/ipecac
	if (items['fetus'] == 1 || items['tech'] == 1 || items['knife'] == 1 || items['ipecac'] == 1 || items['tech2'] == 1) {
		$('.tps').slideUp("fast");
		$('.dps').slideUp("fast");
	} else {
		$('.tps').slideDown("fast");
		$('.dps').slideDown("fast");
	}
	
		
	if(items['numberone'] === 1) delayMod += 1.5;	
	if(items['hanger'] === 1) delayMod += 0.7;
	if(items['pact'] === 1) delayMod += 0.7;
	if(items['onion'] === 1) delayMod += 0.7;
    if(items['toothpicks'] === 1) delayMod += 0.7;
    if(items['tornphoto'] === 1) delayMod += 0.7;
    if(items['bluemush'] === 1) delayMod += 0.7;
	if(items['thin'] === 1) delayMod += 1.7;
	if(items['squeezy'] === 1) delayMod += 0.4;
	if(items['sacred'] === 1) delayMod -= 0.4;
	if(items['halo'] === 1) delayMod += 0.2;
	if(items['rock'] === 1) delayMod += 0.2;
	if(items['smb'] === 1) delayMod += 0.2;
    if(items['screw'] === 1) delayMod += 0.5;
    if(items['scythes'] === 1) delayMod -= 0.3;
	if(character == "samson") delayMod -= 0.25;
	
	delayMod += document.getElementById("pillsUp").value * 0.7 * 0.5;
	delayMod -= document.getElementById("pillsDown").value * 0.7 * 0.4;
	
    document.getElementById('tears-stat-val').innerHTML = delayMod.toFixed(2);
    
	var f1 = Math.sqrt(Math.max(0, 1 + delayMod * 1.3));
    var delay = 16 - f1 * 6 - Math.min(delayMod, 0) * 6;
	delay = Math.max(delay, 5.0)
    
	if(items['triple'] === 1 ||
	   items['quad'] === 1 ||
	   items['poly'] === 1 || 
	   items['ipecac'] === 1 ) {       
       delay = delay * 2.1 + 3;
    }
	if(items['cancer'] === 1) {
        delay -= 2; 
    }
    if(items['brim'] === 1) {
        delay *= 3;
	}
    if(items['antigrav'] === 1) delay -= 2;
    if(items['guillotine'] === 1) delay -= 1;
    if(items['cricketbody'] === 1) delay -= 1;
    if(items['perfume'] === 1) delay -= 1;
    if(items['capricorn'] === 1) delay -= 1;
    if(items['pisces'] === 1) delay -= 1;
	
    if(items['chocolate'] === 1) delay *= 2.5;
	
	delay += 1;
	delay = Math.floor(delay);
	delay = Math.max(delay, 2.0);
	document.getElementById('delay-val').innerHTML = delay.toFixed(2);
	
	if(items['brim'] === 1){
        if(items['antigrav'] !== 1)
            delay += 25; //it takes about 25 frames to shoot off the brim
        var rof = 30 / (delay); 
        rof *= 12.5; //sometimes it hits 12 times, sometimes 13 times, i'm assuming 50% chance        
        if(items['quad'] === 1) {
           rof *= 4;
        }
        else if (items['triple'] === 1) {
           rof *= 3;
        } 
        var dps = rof * v2;
    } else {
        var rof = 30 / delay;	
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
        else if (items['2020'] === 1) {
            dps *= 2;
            rof *= 2;
        }
           
        if (items['epic'] == 1) {
            delay = 10;
            rof = 0.77;
            dps = rof * v2;
            $('#infotext').removeClass('fade');
        }
    }
    
    if(items['guppy'] == 1) {
        if(items['hivemind'] === 1) dps += 2 * flyDamage * rof;
        else dps += flyDamage * rof;
    } 
    else if (items['mulligan'] == 1) {
        if(items['hivemind'] === 1) dps += 2 * flyDamage * rof / 6;
        else dps += flyDamage * rof / 6;;
    }
	
	document.getElementById('tps-val').innerHTML = rof.toFixed(2);    
	document.getElementById('dps-val').innerHTML = dps.toFixed(2);
    change = ((dps - oldDps) / oldDps) * 100;
    document.getElementById('dps-change').innerHTML = change.toFixed(2) + "%";
    oldDps = dps;
	
		
}
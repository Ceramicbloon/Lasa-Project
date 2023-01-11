var mainthing
let aladd = aleff * al * altier * altier
let alyadd = alyvps * al * altier * altier


var eperclick = 1
var variable = 0
var yvar = 0


var alprice = 15
var al = 0
var aleff = 1
var aleffcost = 1000
var aleffamount = 0
var alycost = 5000
var alyamount = 0
var alyvps = 0.1
var almcost = 1000
var alnetprice = 15
var almamount = 0
var altier = 0
var altiercost = 50000

var scprice = 15
var sc = 0
var sceff = 1
var sceffcost = 1000
var sceffamount = 0
var scycost = 5000
var scyamount = 0
var scyvps = 0.1
var scmcost = 1000
var scnetprice = 15
var scmamount = 0
var sctier = 0
var sctiercost = 50000

var soprice = 15
var so = 0
var soeff = 1
var soeffcost = 1000
var soeffamount = 0
var soycost = 5000
var soyamount = 0
var soyvps = 0.1
var somcost = 1000
var sonetprice = 15
var somamount = 0
var sotier = 0
var sotiercost = 50000

var elprice = 15
var el = 0
var eleff = 1
var eleffcost = 1000
var eleffamount = 0
var elycost = 5000
var elyamount = 0
var elyvps = 0.1
var elmcost = 1000
var elnetprice = 15
var elmamount = 0
var eltier = 0
var eltiercost = 50000

var peprice = 15
var pe = 0
var peeff = 1
var peeffcost = 1000
var peeffamount = 0
var peycost = 5000
var peyamount = 0
var peyvps = 0.1
var pemcost = 1000
var penetprice = 15
var pemamount = 0
var petier = 0
var petiercost = 50000

var clickprice = 500
var click = 0
var clicknetprice = 500

var studentprice = 10000
var student = 0
var studentnetprice = 10000

var teacherprice = 125000
var teacher = 0
var teachernetprice = 125000
var state = 0


var schoolprice = 2500000
var school = 0
var schoolnetprice = 2500000

var degprice = 1000000000
var deg = 0
var degnetprice = 1000000000

var smth = "<br>"
var a = false
var b = false
var c = false
var d = false
var e = false

var auto = false

function setup() {

  createCanvas(windowWidth, windowHeight);

}

function add() {
  variable += eperclick
}
function getvps(number, eff, tier) {
  return number * eff * Math.pow((tier + 1), 4)

}
function geteff(eff, tier) {
  return parseFloat(eff * Math.pow((tier + 1), 4)).toFixed(2)
}
function getPrice(base, percent, exp) {
  return Math.round(base * Math.pow(percent, exp))
}

window.setInterval(
  function () {
    let aladd = getvps(al, aleff, altier)

    let alyadd = getvps(al, alyvps, altier)

    let scadd = getvps(sc, sceff, sctier)

    let scyadd = getvps(sc, scyvps, sctier)

    let soadd = getvps(so, soeff, sotier)

    let soyadd = getvps(so, soyvps, sotier)

    let eladd = getvps(el, eleff, eltier)

    let elyadd = getvps(el, elyvps, eltier)



    let vps = ((aladd / 10) + (scadd / 10) + (soadd / 10) + (eladd / 10)) * (Math.pow(1.1, student)) * (Math.pow(1.5, teacher)) * (Math.pow(2, school))

    let yvps = ((alyadd / 10) + (scyadd / 10) + (soyadd / 10) + (elyadd / 10)) * (Math.pow(1.1, student)) * (Math.pow(1.5, teacher)) * (Math.pow(2, school))
    variable += vps
    yvar += yvps

    document.getElementById("variables").innerHTML = parseFloat(variable).toFixed(2) + "𝒢"
    document.getElementById("yvariables").innerHTML = parseFloat(yvar).toFixed(2) + "𝑘"
    document.getElementById("xvps").innerHTML = "𝒢-ps: " + parseFloat(vps * 10).toFixed(2)
    document.getElementById("yvps").innerHTML = "𝑘-ps: " + parseFloat(yvps * 10).toFixed(2)

  }, 100

)

window.setInterval(
  function () {
    if (auto == true) {
      variable += eperclick
    }
  }, 25

)



//
// // Data load
variable = JSON.parse(localStorage.getItem('variable'))
yvar = JSON.parse(localStorage.getItem('yvar'))
eperclick = JSON.parse(localStorage.getItem('eperclick'))
click = JSON.parse(localStorage.getItem('click'))
clicknetprice = JSON.parse(localStorage.getItem('clicknetprice'))
clickprice = JSON.parse(localStorage.getItem('clickprice'))
//
alprice = JSON.parse(localStorage.getItem('alprice'))
al = JSON.parse(localStorage.getItem('al'))
aleff = JSON.parse(localStorage.getItem('aleff'))
aleffcost = JSON.parse(localStorage.getItem('aleffcost'))
aleffamount = JSON.parse(localStorage.getItem('aleffamount'))

alycost = JSON.parse(localStorage.getItem('alycost'))
alyamount = JSON.parse(localStorage.getItem('alyamount'))
alyvps = JSON.parse(localStorage.getItem('alyvps'))

almcost = JSON.parse(localStorage.getItem('almcost'))
almamount = JSON.parse(localStorage.getItem('almamount'))
alnetprice = JSON.parse(localStorage.getItem('alnetprice'))

altier = JSON.parse(localStorage.getItem('altier'))
altiercost = JSON.parse(localStorage.getItem('altiercost'))

scprice = JSON.parse(localStorage.getItem('scprice'))
sc = JSON.parse(localStorage.getItem('sc'))
sceff = JSON.parse(localStorage.getItem('sceff'))
sceffcost = JSON.parse(localStorage.getItem('sceffcost'))
sceffamount = JSON.parse(localStorage.getItem('sceffamount'))

scycost = JSON.parse(localStorage.getItem('scycost'))
scyamount = JSON.parse(localStorage.getItem('scyamount'))
scyvps = JSON.parse(localStorage.getItem('scyvps'))

scmcost = JSON.parse(localStorage.getItem('scmcost'))
scmamount = JSON.parse(localStorage.getItem('scmamount'))
scnetprice = JSON.parse(localStorage.getItem('scnetprice'))

sctier = JSON.parse(localStorage.getItem('sctier'))
sctiercost = JSON.parse(localStorage.getItem('sctiercost'))
//
soprice = JSON.parse(localStorage.getItem('soprice'))
so = JSON.parse(localStorage.getItem('so'))
soeff = JSON.parse(localStorage.getItem('soeff'))
soeffcost = JSON.parse(localStorage.getItem('soeffcost'))
soeffamount = JSON.parse(localStorage.getItem('soeffamount'))

soycost = JSON.parse(localStorage.getItem('soycost'))
soyamount = JSON.parse(localStorage.getItem('soyamount'))
soyvps = JSON.parse(localStorage.getItem('soyvps'))

somcost = JSON.parse(localStorage.getItem('somcost'))
somamount = JSON.parse(localStorage.getItem('somamount'))
sonetprice = JSON.parse(localStorage.getItem('sonetprice'))

sotier = JSON.parse(localStorage.getItem('sotier'))
sotiercost = JSON.parse(localStorage.getItem('sotiercost'))


//
elprice = JSON.parse(localStorage.getItem('elprice'))
el = JSON.parse(localStorage.getItem('el'))
eleff = JSON.parse(localStorage.getItem('eleff'))
eleffcost = JSON.parse(localStorage.getItem('eleffcost'))
eleffamount = JSON.parse(localStorage.getItem('eleffamount'))

elycost = JSON.parse(localStorage.getItem('elycost'))
elyamount = JSON.parse(localStorage.getItem('elyamount'))
elyvps = JSON.parse(localStorage.getItem('elyvps'))

elmcost = JSON.parse(localStorage.getItem('elmcost'))
elmamount = JSON.parse(localStorage.getItem('elmamount'))
elnetprice = JSON.parse(localStorage.getItem('elnetprice'))

eltier = JSON.parse(localStorage.getItem('eltier'))
eltiercost = JSON.parse(localStorage.getItem('eltiercost'))


peprice = JSON.parse(localStorage.getItem('peprice'))
pe = JSON.parse(localStorage.getItem('pe'))
peeff = JSON.parse(localStorage.getItem('peeff'))
peeffcost = JSON.parse(localStorage.getItem('peeffcost'))
peeffamount = JSON.parse(localStorage.getItem('peeffamount'))

peycost = JSON.parse(localStorage.getItem('peycost'))
peyamount = JSON.parse(localStorage.getItem('peyamount'))
peyvps = JSON.parse(localStorage.getItem('peyvps'))

pemcost = JSON.parse(localStorage.getItem('pemcost'))
pemamount = JSON.parse(localStorage.getItem('pemamount'))
penetprice = JSON.parse(localStorage.getItem('penetprice'))

petier = JSON.parse(localStorage.getItem('petier'))
petiercost = JSON.parse(localStorage.getItem('petiercost'))

peprice = JSON.parse(localStorage.getItem('peprice'))
pe = JSON.parse(localStorage.getItem('pe'))
peeff = JSON.parse(localStorage.getItem('peeff'))
peeffcost = JSON.parse(localStorage.getItem('peeffcost'))
peeffamount = JSON.parse(localStorage.getItem('peeffamount'))

peycost = JSON.parse(localStorage.getItem('peycost'))
peyamount = JSON.parse(localStorage.getItem('peyamount'))
peyvps = JSON.parse(localStorage.getItem('peyvps'))

pemcost = JSON.parse(localStorage.getItem('pemcost'))
pemamount = JSON.parse(localStorage.getItem('pemamount'))
penetprice = JSON.parse(localStorage.getItem('penetprice'))

petier = JSON.parse(localStorage.getItem('petier'))
petiercost = JSON.parse(localStorage.getItem('petiercost'))

clickprice = JSON.parse(localStorage.getItem('clickprice'))
click = JSON.parse(localStorage.getItem('click'))
clicknetprice = JSON.parse(localStorage.getItem('clicknetprice'))

studentprice = JSON.parse(localStorage.getItem('studentprice'))
student = JSON.parse(localStorage.getItem('student'))
studentnetprice = JSON.parse(localStorage.getItem('studentnetprice'))

teacherprice = JSON.parse(localStorage.getItem('teacherprice'))
teacher = JSON.parse(localStorage.getItem('teacher'))
teachernetprice = JSON.parse(localStorage.getItem('teachernetprice'))

schoolprice = JSON.parse(localStorage.getItem('schoolprice'))
school = JSON.parse(localStorage.getItem('school'))
schoolnetprice = JSON.parse(localStorage.getItem('schoolnetprice'))


function draw() {
  console.log(auto)
  // // Data save
  localStorage.setItem("click", JSON.stringify(click))
  localStorage.setItem("clicknetprice", JSON.stringify(clicknetprice))
  localStorage.setItem("clickprice", JSON.stringify(clickprice))
  localStorage.setItem("variable", JSON.stringify(variable))
  localStorage.setItem("yvar", JSON.stringify(yvar))
  localStorage.setItem("eperclick", JSON.stringify(eperclick))
  localStorage.setItem("alprice", JSON.stringify(alprice))
  localStorage.setItem("al", JSON.stringify(al))
  localStorage.setItem("aleff", JSON.stringify(aleff))
  localStorage.setItem("aleffcost", JSON.stringify(aleffcost))
  localStorage.setItem("aleffamount", JSON.stringify(aleffamount))

  localStorage.setItem("alycost", JSON.stringify(alycost))
  localStorage.setItem("alyamount", JSON.stringify(alyamount))
  localStorage.setItem("alyvps", JSON.stringify(alyvps))

  localStorage.setItem("almcost", JSON.stringify(almcost))
  localStorage.setItem("almamount", JSON.stringify(almamount))
  localStorage.setItem("alnetprice", JSON.stringify(alnetprice))

  localStorage.setItem("altier", JSON.stringify(altier))
  localStorage.setItem("altiercost", JSON.stringify(altiercost))
  //
  localStorage.setItem("scprice", JSON.stringify(scprice))
  localStorage.setItem("sc", JSON.stringify(sc))
  localStorage.setItem("sceff", JSON.stringify(sceff))
  localStorage.setItem("sceffcost", JSON.stringify(sceffcost))
  localStorage.setItem("sceffamount", JSON.stringify(sceffamount))

  localStorage.setItem("scycost", JSON.stringify(scycost))
  localStorage.setItem("scyamount", JSON.stringify(scyamount))
  localStorage.setItem("scyvps", JSON.stringify(scyvps))

  localStorage.setItem("scmcost", JSON.stringify(scmcost))
  localStorage.setItem("scmamount", JSON.stringify(scmamount))
  localStorage.setItem("scnetprice", JSON.stringify(scnetprice))

  localStorage.setItem("sctier", JSON.stringify(sctier))
  localStorage.setItem("sctiercost", JSON.stringify(sctiercost))
  //
  localStorage.setItem("soprice", JSON.stringify(soprice))
  localStorage.setItem("so", JSON.stringify(so))
  localStorage.setItem("soeff", JSON.stringify(soeff))
  localStorage.setItem("soeffcost", JSON.stringify(soeffcost))
  localStorage.setItem("soeffamount", JSON.stringify(soeffamount))

  localStorage.setItem("soycost", JSON.stringify(soycost))
  localStorage.setItem("soyamount", JSON.stringify(soyamount))
  localStorage.setItem("soyvps", JSON.stringify(soyvps))

  localStorage.setItem("somcost", JSON.stringify(somcost))
  localStorage.setItem("somamount", JSON.stringify(somamount))
  localStorage.setItem("sonetprice", JSON.stringify(sonetprice))

  localStorage.setItem("sotier", JSON.stringify(sotier))
  localStorage.setItem("sotiercost", JSON.stringify(sotiercost))
  //
  localStorage.setItem("elprice", JSON.stringify(elprice))
  localStorage.setItem("el", JSON.stringify(el))
  localStorage.setItem("eleff", JSON.stringify(eleff))
  localStorage.setItem("eleffcost", JSON.stringify(eleffcost))
  localStorage.setItem("eleffamount", JSON.stringify(eleffamount))

  localStorage.setItem("elycost", JSON.stringify(elycost))
  localStorage.setItem("elyamount", JSON.stringify(elyamount))
  localStorage.setItem("elyvps", JSON.stringify(elyvps))

  localStorage.setItem("elmcost", JSON.stringify(elmcost))
  localStorage.setItem("elmamount", JSON.stringify(elmamount))
  localStorage.setItem("elnetprice", JSON.stringify(elnetprice))

  localStorage.setItem("eltier", JSON.stringify(eltier))
  localStorage.setItem("eltiercost", JSON.stringify(eltiercost))

  localStorage.setItem("peprice", JSON.stringify(peprice))
  localStorage.setItem("pe", JSON.stringify(pe))
  localStorage.setItem("peeff", JSON.stringify(peeff))
  localStorage.setItem("peeffcost", JSON.stringify(peeffcost))
  localStorage.setItem("peeffamount", JSON.stringify(peeffamount))

  localStorage.setItem("peycost", JSON.stringify(peycost))
  localStorage.setItem("peyamount", JSON.stringify(peyamount))
  localStorage.setItem("peyvps", JSON.stringify(peyvps))

  localStorage.setItem("pemcost", JSON.stringify(pemcost))
  localStorage.setItem("pemamount", JSON.stringify(pemamount))
  localStorage.setItem("penetprice", JSON.stringify(penetprice))

  localStorage.setItem("petier", JSON.stringify(petier))
  localStorage.setItem("petiercost", JSON.stringify(petiercost))


  localStorage.setItem("clickprice", JSON.stringify(clickprice))
  localStorage.setItem("click", JSON.stringify(click))
  localStorage.setItem("clicknetprice", JSON.stringify(clicknetprice))

  localStorage.setItem("studentprice", JSON.stringify(studentprice))
  localStorage.setItem("student", JSON.stringify(student))
  localStorage.setItem("studentnetprice", JSON.stringify(studentnetprice))

  localStorage.setItem("teacherprice", JSON.stringify(teacherprice))
  localStorage.setItem("teacher", JSON.stringify(teacher))
  localStorage.setItem("teachernetprice", JSON.stringify(teachernetprice))

  localStorage.setItem("schoolprice", JSON.stringify(schoolprice))
  localStorage.setItem("school", JSON.stringify(school))
  localStorage.setItem("schoolnetprice", JSON.stringify(schoolnetprice))




  gettitle(altier, 'math', 'Algebra Ⅰ', 'Geometry', 'Algebra ⅠⅠ', 'Calculus')
  document.getElementById('albuy').innerHTML = (alprice * (Math.pow(0.9, almamount) / (altier + 1))).toFixed(2) + "𝒢"
  document.getElementById('alowned').innerHTML = "Owned:" + al
  document.getElementById('alvps').innerHTML = "Efficiency-" + ":𝒢" + geteff(aleff, altier) + "; 𝑘:" + geteff(alyvps, altier)
  gettitle(altier, 'mathex', '3𝑥+2=4', "sin α".sup().italics() + "⁄".italics() + "A ".sub().italics() + "=" + " sin β".sup().italics() + "⁄".italics() + "B ".sub().italics() + "=" + " sin 𝛾".sup().italics() + "⁄".italics() + "C".sub().italics(),
    "log" + " 𝒵".sub() + "(𝑥 ∙ 𝑦) = log" + " 𝒵".sub() + "(𝑥) + log" + " 𝒵".sub() + "(𝑦)",
    "∫".italics() + "𝑒" + "-2x".sup() + "𝑑𝑥")
  gettitle(altier, 'mathdesc', "An easy course for mediocre knowledge generation.",
    "A more challenging course for improved knowledge generation.",
    "You know it gets real when entire words are added to math. Knowledge generation improved even further",
    "At this point, you can practically feel the knowledge through your veins. Entire libraries of greek and roman alphabet added for maximum knowledge"
  )

  gettitle(sctier, 'sc', 'Biology', 'Chemistry', 'Physics', 'Astronomy')
  document.getElementById('scbuy').innerHTML = (scprice * (Math.pow(0.9, scmamount) / (sctier + 1))).toFixed(2) + "𝒢"
  document.getElementById('scowned').innerHTML = "Owned:" + sc
  document.getElementById('scvps').innerHTML = "Efficiency-" + ":𝒢" + geteff(sceff, sctier) + "; 𝑘:" + geteff(scyvps, sctier)
  gettitle(sctier, 'scex', "6CO" + "2".sub() + " + " + "6H" + "2".sub() + "O → C" + "6".sub() + "H" + "12".sub() + "O" + "6".sub() + " + s" + "6O" + "2".sub(),
    "𝐸" + "𝑘".sub() + "=" + "1".sup() + "/" + "2".sub() + "𝑚𝑣" + "2".sup(), "𝑑𝑆=" + "𝛿𝑄".sup() + "/" + "𝑇".sub(), "𝐸=𝑚𝑐" + "2".sup())
  gettitle(sctier, 'scidesc', "Gain knowledge from dissecting small, helpless animals. Fun!",
    "Secure more knowledge from mixing quantites of toxic acid",
    "Acquire large quantities of knowledge through calculating the velocity, force, and acceleration of the apple that fell on Newton's head.",
    "By measuring the exact distance between Proxima Centari and Betelgeuse, we can get entire truckloads of knowledge."
  )

  gettitle(sotier, 'so', 'Geography', 'History', 'Government', 'Economy')
  document.getElementById('sobuy').innerHTML = (soprice * (Math.pow(0.9, somamount) / (sotier + 1))).toFixed(2) + "𝒢"
  document.getElementById('soowned').innerHTML = "Owned:" + so
  document.getElementById('sovps').innerHTML = "Efficiency-" + ":𝒢" + geteff(soeff, sotier) + "; 𝑘:" + geteff(soyvps, sotier)
  gettitle(sotier, 'soidesc',
    "Extract knowledge from the Earth itself.",
    "Merge past knowledge with future knowledge, creating more knowledge in the process.",
    "Obtain great knowledge through studying Democrats and Republics.",
    "Thorough understanding of economic trends and investments are key to acquire mass amounts of knowledge."
  )

  gettitle(eltier, 'el', 'English Ⅰ', "English ⅠⅠ", "English ⅠⅠⅠ", "English ⅠⅤ")
  document.getElementById('elbuy').innerHTML = (elprice * (Math.pow(0.9, elmamount) / (eltier + 1))).toFixed(2) + "𝒢"
  document.getElementById('elowned').innerHTML = "Owned:" + el
  document.getElementById('elvps').innerHTML = "Efficiency-" + ":𝒢" + geteff(eleff, eltier) + "; 𝑘:" + geteff(elyvps, eltier)
  gettitle(eltier, 'elidesc',
    "Gain knowledge from reading and analyzing texts.",
    "Gain even more knowledge from also writing literature.",
    "Expanding vocabulary contributes to increased knowledge gain.",
    "Amass extreme amounts of knowledge through writing and analying 𝑛 pieces of literature."
  )

  gettitle(petier, 'pe', "Junior Varsity", "Varsity", "State Championship", "Division Ⅰ")
  document.getElementById('pebuy').innerHTML = (peprice * (Math.pow(0.9, pemamount) / (petier + 1))).toFixed(2) + "𝒢"
  document.getElementById('peowned').innerHTML = "Owned:" + pe
  document.getElementById('pevps').innerHTML = "Efficiency-" + ":𝒢" + geteff(peeff, petier) + "; 𝑘:" + geteff(peyvps, petier)
  gettitle(petier, 'peidesc',
    "Acheve knowledge through learning a new sport.",
    "Capture more knowledge through positional and game analysis as you asend the ranks.",
    "Gather bonus knowledge through preperation and examination of tactics.",
    "Build up lots of knowledge from game experience."
  )





  document.getElementById('clickbuy').innerHTML = (clickprice).toFixed(2) + "𝒢"
  document.getElementById('clickowned').innerHTML = "Owned:" + click
  document.getElementById('clickvps').innerHTML = "Click efficiency:" + parseFloat(eperclick).toFixed(2)


  document.getElementById('studentbuy').innerHTML = (studentnetprice).toFixed(2) + "𝑘"
  document.getElementById('studentowned').innerHTML = "Owned:" + student

  document.getElementById('teacherbuy').innerHTML = (teachernetprice).toFixed(2) + "𝑘"
  document.getElementById('teacherowned').innerHTML = "Owned:" + teacher

  document.getElementById('schoolbuy').innerHTML = (schoolnetprice).toFixed(2) + "𝑘"
  document.getElementById('schoolowned').innerHTML = "Owned:" + school

  document.getElementById('degbuy').innerHTML = (degnetprice).toFixed(2) + "𝑘"




  rectMode(CENTER)



  rectMode(CENTER)
  if (altier == 0) {
    document.getElementById("alb").style.borderColor = "black"
    document.getElementById("albuy").style.borderColor = "black"

  }
  if (altier == 1) {
    document.getElementById("alb").style.borderColor = "#71706e "
    document.getElementById("albuy").style.borderColor = "#71706e"
  }
  if (altier == 2) {
    document.getElementById("alb").style.borderColor = "gold"
    document.getElementById("albuy").style.borderColor = "gold"

  }
  if (altier == 3) {
    document.getElementById("alb").style.borderColor = "#50C878"
    document.getElementById("albuy").style.borderColor = "#50C878"
    a = true

  }
  if (sctier == 0) {
    document.getElementById("scb").style.borderColor = "black"
    document.getElementById("scbuy").style.borderColor = "black"

  }
  if (sctier == 1) {
    document.getElementById("scb").style.borderColor = "#71706e "
    document.getElementById("scbuy").style.borderColor = "#71706e"
  }
  if (sctier == 2) {
    document.getElementById("scb").style.borderColor = "gold"
    document.getElementById("scbuy").style.borderColor = "gold"

  }
  if (sctier == 3) {
    document.getElementById("scb").style.borderColor = "#50C878"
    document.getElementById("scbuy").style.borderColor = "#50C878"
    b = true

  }
  if (sotier == 0) {
    document.getElementById("sob").style.borderColor = "black"
    document.getElementById("sobuy").style.borderColor = "black"

  }
  if (sotier == 1) {
    document.getElementById("sob").style.borderColor = "#71706e "
    document.getElementById("sobuy").style.borderColor = "#71706e"
  }
  if (sotier == 2) {
    document.getElementById("sob").style.borderColor = "gold"
    document.getElementById("sobuy").style.borderColor = "gold"

  }
  if (sotier == 3) {
    document.getElementById("sob").style.borderColor = "#50C878"
    document.getElementById("sobuy").style.borderColor = "#50C878"
    c = true

  }
  if (eltier == 0) {
    document.getElementById("elb").style.borderColor = "black"
    document.getElementById("elbuy").style.borderColor = "black"

  }
  if (eltier == 1) {
    document.getElementById("elb").style.borderColor = "#71706e "
    document.getElementById("elbuy").style.borderColor = "#71706e"
  }
  if (eltier == 2) {
    document.getElementById("elb").style.borderColor = "gold"
    document.getElementById("elbuy").style.borderColor = "gold"

  }
  if (eltier == 3) {
    document.getElementById("elb").style.borderColor = "#50C878"
    document.getElementById("elbuy").style.borderColor = "#50C878"
    d = true

  }

  if (petier == 0) {
    document.getElementById("peb").style.borderColor = "black"
    document.getElementById("pebuy").style.borderColor = "black"

  }
  if (petier == 1) {
    document.getElementById("peb").style.borderColor = "#71706e "
    document.getElementById("pebuy").style.borderColor = "#71706e"
  }
  if (petier == 2) {
    document.getElementById("peb").style.borderColor = "gold"
    document.getElementById("pebuy").style.borderColor = "gold"

  }
  if (petier == 3) {
    document.getElementById("peb").style.borderColor = "#50C878"
    document.getElementById("pebuy").style.borderColor = "#50C878"
    e = true

  }


}

function gettitle(x, thing, title1, title2, title3, title4) {
  if (x == 0) {

    return document.getElementById(thing).innerHTML = title1

  }
  if (x == 1) {
    return document.getElementById(thing).innerHTML = title2

  }
  if (x == 2) {
    return document.getElementById(thing).innerHTML = title3

  }
  if (x == 3) {
    return document.getElementById(thing).innerHTML = title4

  }

}



function alrevert() {
  document.getElementById("aldesc").innerHTML = smth
  document.getElementById("aldesc2").innerHTML = smth

}


function albuy() {
  if (variable >= alnetprice) {

    variable -= alnetprice
    al += 1
    console.log(al)
    alprice = getPrice(15, 1.2, al)
    alnetprice = (alprice * (Math.pow(0.9, almamount) / (altier + 1))).toFixed(2)

  }
}


function aleffC() {
  document.getElementById('aldesc').innerHTML = "Cost:" + aleffcost + "𝒢"
  document.getElementById("aldesc2").innerHTML = "Increases 𝒢 production by 10%"

}


function aleffU() {
  if (variable >= aleffcost) {
    aleff *= 1.1
    variable -= aleffcost
    aleffamount += 1
    console.log(aleff)
    aleffcost = getPrice(1000, 1.1, aleffamount)


  }
}

function alyC() {
  document.getElementById('aldesc').innerHTML = "Cost:" + alycost + "𝒢"
  document.getElementById("aldesc2").innerHTML = "Increases 𝑘 production by 10%"

}

function alyU() {
  if (variable >= alycost) {
    variable -= alycost
    alyamount += 1
    alyvps *= 1.1
    alycost = getPrice(5000, 1.1, alyamount)
  }

}
function alMC() {
  document.getElementById('aldesc').innerHTML = "Cost:" + almcost + "𝒢"
  document.getElementById("aldesc2").innerHTML = "Decreases price by 10%"

}

function alMU() {
  if (variable >= almcost) {


    variable -= almcost
    almamount += 1
    alnetprice = (alprice * (Math.pow(0.9, almamount) / (altier + 1))).toFixed(2)
    almcost = getPrice(1000, 1.1, almamount)
  }

}
function alMC() {
  document.getElementById('aldesc').innerHTML = "Cost:" + almcost + "𝒢"
  document.getElementById("aldesc2").innerHTML = "Decreases price by 10%"

}

function alTC() {
  if (altier < 3) {
    document.getElementById('aldesc').innerHTML = "Cost:" + altiercost + "𝒢"
    document.getElementById("aldesc2").innerHTML = "Upgrades tier"
  }
  if (altier == 3) {
    document.getElementById('aldesc').innerHTML = "Max tier reached!"

  }

}

function alTU() {
  if (variable >= altiercost) {
    if (altier < 3) {
      variable -= altiercost
      altier += 1
      altiercost = getPrice(50000, 3, altier)
      console.log(altier)

    }

  }
}

function screvert() {
  document.getElementById("scdesc").innerHTML = smth
  document.getElementById("scdesc2").innerHTML = smth

}


function scbuy() {
  if (variable >= scnetprice) {

    variable -= scnetprice
    sc += 1
    console.log(sc)
    scprice = getPrice(15, 1.2, sc)
    scnetprice = (scprice * (Math.pow(0.9, scmamount) / (sctier + 1))).toFixed(2)

  }
}


function sceffC() {
  document.getElementById('scdesc').innerHTML = "Cost:" + sceffcost + "𝒢"
  document.getElementById("scdesc2").innerHTML = "Increases 𝒢 production by 10%"

}


function sceffU() {
  if (variable >= sceffcost) {
    sceff *= 1.1
    variable -= sceffcost
    sceffamount += 1
    console.log(sceff)
    sceffcost = getPrice(1000, 1.1, sceffamount)


  }
}

function scyC() {
  document.getElementById('scdesc').innerHTML = "Cost:" + scycost + "𝒢"
  document.getElementById("scdesc2").innerHTML = "Increases 𝑘 production by 10%"

}

function scyU() {
  if (variable >= scycost) {
    variable -= scycost
    scyamount += 1
    scyvps *= 1.1
    scycost = getPrice(5000, 1.1, scyamount)
  }

}
function scMC() {
  document.getElementById('scdesc').innerHTML = "Cost:" + scmcost + "𝒢"
  document.getElementById("scdesc2").innerHTML = "Decreases price by 10%"

}

function scMU() {
  if (variable >= scmcost) {


    variable -= scmcost
    scmamount += 1
    scnetprice = (scprice * (Math.pow(0.9, scmamount) / (sctier + 1))).toFixed(2)
    scmcost = getPrice(1000, 1.1, scmamount)
  }

}
function scMC() {
  document.getElementById('scdesc').innerHTML = "Cost:" + scmcost + "𝒢"
  document.getElementById("scdesc2").innerHTML = "Decreases price by 10%"

}

function scTC() {
  if (sctier < 3) {
    document.getElementById('scdesc').innerHTML = "Cost:" + sctiercost + "𝒢"
    document.getElementById("scdesc2").innerHTML = "Upgrades tier"
  }
  if (sctier == 3) {
    document.getElementById('scdesc').innerHTML = "Max tier reached!"

  }

}

function scTU() {
  if (variable >= sctiercost) {
    if (sctier < 3) {
      variable -= sctiercost
      sctier += 1
      sctiercost = getPrice(50000, 3, sctier)

    }

  }
}




function sorevert() {
  document.getElementById("sodesc").innerHTML = smth
  document.getElementById("sodesc2").innerHTML = smth

}


function sobuy() {
  if (variable >= sonetprice) {

    variable -= sonetprice
    so += 1
    console.log(so)
    soprice = getPrice(15, 1.2, so)
    sonetprice = (soprice * (Math.pow(0.9, somamount) / (sotier + 1))).toFixed(2)

  }
}


function soeffC() {
  document.getElementById('sodesc').innerHTML = "Cost:" + soeffcost + "𝒢"
  document.getElementById("sodesc2").innerHTML = "Increases 𝒢 production by 10%"

}


function soeffU() {
  if (variable >= soeffcost) {
    soeff *= 1.1
    variable -= soeffcost
    soeffamount += 1
    console.log(soeff)
    soeffcost = getPrice(1000, 1.1, soeffamount)


  }
}

function soyC() {
  document.getElementById('sodesc').innerHTML = "Cost:" + soycost + "𝒢"
  document.getElementById("sodesc2").innerHTML = "Increases 𝑘 production by 10%"

}

function soyU() {
  if (variable >= soycost) {
    variable -= soycost
    soyamount += 1
    soyvps *= 1.1
    soycost = getPrice(5000, 1.1, soyamount)
  }

}
function soMC() {
  document.getElementById('sodesc').innerHTML = "Cost:" + somcost + "𝒢"
  document.getElementById("sodesc2").innerHTML = "Decreases price by 10%"

}

function soMU() {
  if (variable >= somcost) {


    variable -= somcost
    somamount += 1
    sonetprice = (soprice * (Math.pow(0.9, somamount) / (sotier + 1))).toFixed(2)
    somcost = getPrice(1000, 1.1, somamount)
  }

}
function soMC() {
  document.getElementById('sodesc').innerHTML = "Cost:" + somcost + "𝒢"
  document.getElementById("sodesc2").innerHTML = "Decreases price by 10%"

}

function soTC() {
  if (sotier < 3) {
    document.getElementById('sodesc').innerHTML = "Cost:" + sotiercost + "𝒢"
    document.getElementById("sodesc2").innerHTML = "Upgrades tier"
  }
  if (sotier == 3) {
    document.getElementById('sodesc').innerHTML = "Max tier reached!"

  }

}

function soTU() {
  if (variable >= sotiercost) {
    if (sotier < 3) {
      variable -= sotiercost
      sotier += 1
      sotiercost = getPrice(50000, 3, sotier)

    }

  }
}


function elrevert() {
  document.getElementById("eldesc").innerHTML = smth
  document.getElementById("eldesc2").innerHTML = smth

}


function elbuy() {
  if (variable >= elnetprice) {

    variable -= elnetprice
    el += 1
    elprice = getPrice(15, 1.2, el)
    elnetprice = (elprice * (Math.pow(0.9, elmamount) / (eltier + 1))).toFixed(2)

  }
}


function eleffC() {
  document.getElementById('eldesc').innerHTML = "Cost:" + eleffcost + "𝒢"
  document.getElementById("eldesc2").innerHTML = "Increases 𝒢 production by 10%"

}


function eleffU() {
  if (variable >= eleffcost) {
    eleff *= 1.1
    variable -= eleffcost
    eleffamount += 1
    eleffcost = getPrice(1000, 1.1, eleffamount)


  }
}

function elyC() {
  document.getElementById('eldesc').innerHTML = "Cost:" + elycost + "𝒢"
  document.getElementById("eldesc2").innerHTML = "Increases 𝑘 production by 10%"

}

function elyU() {
  if (variable >= elycost) {
    variable -= elycost
    elyamount += 1
    elyvps *= 1.1
    elycost = getPrice(5000, 1.1, elyamount)
  }

}
function elMC() {
  document.getElementById('eldesc').innerHTML = "Cost:" + elmcost + "𝒢"
  document.getElementById("eldesc2").innerHTML = "Decreases price by 10%"

}

function elMU() {
  if (variable >= elmcost) {


    variable -= elmcost
    elmamount += 1
    elnetprice = (elprice * (Math.pow(0.9, elmamount) / (eltier + 1))).toFixed(2)
    elmcost = getPrice(1000, 1.1, elmamount)
  }

}
function elMC() {
  document.getElementById('eldesc').innerHTML = "Cost:" + elmcost + "𝒢"
  document.getElementById("eldesc2").innerHTML = "Decreases price by 10%"

}

function elTC() {
  if (eltier < 3) {
    document.getElementById('eldesc').innerHTML = "Cost:" + eltiercost + "𝒢"
    document.getElementById("eldesc2").innerHTML = "Upgrades tier"
  }
  if (eltier == 3) {
    document.getElementById('eldesc').innerHTML = "Max tier reached!"

  }

}

function elTU() {
  if (variable >= eltiercost) {
    if (eltier < 3) {
      variable -= eltiercost
      eltier += 1
      eltiercost = getPrice(50000, 3, eltier)

    }

  }
}


function perevert() {
  document.getElementById("pedesc").innerHTML = smth
  document.getElementById("pedesc2").innerHTML = smth

}


function pebuy() {
  if (variable >= penetprice) {

    variable -= penetprice
    pe += 1
    peprice = getPrice(15, 1.2, pe)
    penetprice = (peprice * (Math.pow(0.9, pemamount) / (petier + 1))).toFixed(2)

  }
}


function peeffC() {
  document.getElementById('pedesc').innerHTML = "Cost:" + peeffcost + "𝒢"
  document.getElementById("pedesc2").innerHTML = "Increases 𝒢 production by 10%"

}


function peeffU() {
  if (variable >= peeffcost) {
    peeff *= 1.1
    variable -= peeffcost
    peeffamount += 1
    peeffcost = getPrice(1000, 1.1, peeffamount)


  }
}

function peyC() {
  document.getElementById('pedesc').innerHTML = "Cost:" + peycost + "𝒢"
  document.getElementById("pedesc2").innerHTML = "Increases 𝑘 production by 10%"

}

function peyU() {
  if (variable >= peycost) {
    variable -= peycost
    peyamount += 1
    peyvps *= 1.1
    peycost = getPrice(5000, 1.1, peyamount)
  }

}
function peMC() {
  document.getElementById('pedesc').innerHTML = "Cost:" + pemcost + "𝒢"
  document.getElementById("pedesc2").innerHTML = "Decreases price by 10%"

}

function peMU() {
  if (variable >= pemcost) {


    variable -= pemcost
    pemamount += 1
    penetprice = (peprice * (Math.pow(0.9, pemamount) / (petier + 1))).toFixed(2)
    pemcost = getPrice(1000, 1.1, pemamount)
  }

}
function peMC() {
  document.getElementById('pedesc').innerHTML = "Cost:" + pemcost + "𝒢"
  document.getElementById("pedesc2").innerHTML = "Decreases price by 10%"

}

function peTC() {
  if (petier < 3) {
    document.getElementById('pedesc').innerHTML = "Cost:" + petiercost + "𝒢"
    document.getElementById("pedesc2").innerHTML = "Upgrades tier"
  }
  if (petier == 3) {
    document.getElementById('pedesc').innerHTML = "Max tier reached!"

  }

}

function peTU() {
  if (variable >= petiercost) {
    if (petier < 3) {
      variable -= petiercost
      petier += 1
      petiercost = getPrice(50000, 3, petier)

    }

  }
}




function clickbuy() {
  if (variable >= clicknetprice) {

    variable -= clicknetprice
    click += 1
    eperclick *= 2
    if (eperclick <= 2000) {
      clickprice = getPrice(500, 1.5, click)
    } else {
      clickprice = getPrice(500, 2.5, click)

    }
    clicknetprice = (clickprice).toFixed(2)

  }
}


function studentbuy() {
  if (yvar >= studentnetprice) {
    yvar -= studentnetprice
    student += 1
    studentnetprice = getPrice(10000, 1.3, student)
  }
}

function teacherbuy() {
  if (yvar >= teachernetprice) {
    yvar -= teachernetprice
    teacher += 1
    teachernetprice = getPrice(125000, 1.3, teacher)
  }
}

function schoolbuy() {
  if (yvar >= schoolnetprice) {
    yvar -= schoolnetprice
    school += 1
    schoolnetprice = getPrice(2500000, 1.3, school)
  }
}

function degbuy() {
  if (yvar >= degnetprice && a == true && b == true && c == true && d == true && e == true) {

    yvar -= degnetprice
    deg += 1
    document.getElementById('popup').style.visibility = "visible"
  }
}

function toggle() {
  if (auto == false) {
    auto = true
    document.getElementById('autoplay').innerHTML = 'Current Status: on'
  } else if (auto == true) {
    auto = false
    document.getElementById('autoplay').innerHTML = 'Current Status: off'
  }

}

//Benadryl
    var button = document.getElementById("benadryl");
benadryl.addEventListener('click', function() {
    var dogWeight = prompt("For Benadryl dose, enter how much cat/dog weighs in lbs");
    var weight = dogWeight/50;
    var round = Math.round(weight *100) / 100;
alert(round + " mls");
});
//Bolus canine
    var button = document.getElementById("bolusDog");
bolusDog.addEventListener('click', function() {
    var dogWeight = prompt("For canine bolus dose, enter how much dog weighs in lbs");
    var weight = Math.round((dogWeight/2.2)*90);
    var round = Math.round(weight *100) / 100;
alert(round + " mls");
});
// Bolus feline
    var button = document.getElementById("bolusCat");
bolusCat.addEventListener('click', function() {
    var dogWeight = prompt("For feline bolus dose, enter how much cat weighs lbs");
    var weight = Math.round((dogWeight/2.2)*60);
    var round = Math.round(weight *100) / 100;
alert(round + " mls");
});
//Buprenorphine
    var button = document.getElementById("buprenorphine");
buprenorphine.addEventListener('click', function() {
    var dogWeight = prompt("For Buprenorphine dose, enter how much dog/cat weighs in lbs");
    var weight = ((dogWeight/2.2)*0.01/0.3);
    var round = Math.round(weight *100) / 100;
     var weight2 = (dogWeight/2.2)*0.02/0.3
    var round2 = Math.round(weight2 *100) / 100;
alert(round + "mls  to  " + round2 + "mls");
});
//torb
    var button = document.getElementById("butorphanol");
butorphanol.addEventListener('click', function() {
    var dogWeight = prompt("For Butorphanol dose, enter how much dog weighs in lbs");
    var weight = (dogWeight/2.2)*.4/10;
    var round = Math.round(weight *100) / 100;
alert(round + "mls");
});
//Carprofen
    var button = document.getElementById("carprofen");
carprofen.addEventListener('click', function() {
    var dogWeight = prompt("For Carprofen dose, enter how much dog weighs in lbs");
    var weightSID = (dogWeight/2.2)*4.4;
    var weightBID = (dogWeight/2.2)*2.2;
alert(weightSID + " mg SID\n" + weightBID +" mg BID \nAvalible mgs: 100mg, 75mg, and 25mg");
});
//Cefazolin
 var button = document.getElementById("cefazolin");
cefazolin.addEventListener('click', function() {
    var dogWeight = prompt("For Cefazolin dose, enter how much dog/cat weighs in lbs");
    var weight = dogWeight*0.1;
    var round = Math.round(weight *100) / 100;
alert(round + " ml ");
});
//cefpodoxime
 var button = document.getElementById("cefopodoxime");
cefpodoxime.addEventListener('click', function() {
    var dogWeight = prompt("For Cefpodoxime dose, enter how much dog weighs in lbs");
    var weight = Math.round((dogWeight/2.2)*10);
alert(weight + " mg      \nAvalible mgs: 100mg and 200mg");
});
//Cerenia
    var button = document.getElementById("cerenia");
cerenia.addEventListener('click', function() {
    var dogWeight = prompt("For Cerenia dose, enter how much dog/cat weighs in lbs");
    var weight = dogWeight*0.045;
    var round = Math.round(weight *100) / 100;
alert(round + " mls");
});
//Convenia
    var button = document.getElementById("convenia");
convenia.addEventListener('click', function() {
    var dogWeight = prompt("For Convenia dose, enter how much dog/cat weighs in lbs");
    var weight = dogWeight*0.045;
    var round = Math.round(weight *100) / 100;
alert(round + " mls");
});
//Cosyntropin
    var button = document.getElementById("cosyntropin");
cosyntropin.addEventListener('click', function() {
    var dogWeight = prompt("For Cosyntropin dose to University of Tennessee, enter how much dog/cat weighs in lbs");
    var weight = (dogWeight/2.2)*0.005/0.25;
    var round = Math.round(weight *100) / 100;
alert(round + " mls");
});


//Dexamethasone
 var button = document.getElementById("dexamethasone");
dexamethasone.addEventListener('click', function() {
    var dogWeight = prompt("For Dexamethasone dose, enter how does dog weighs in lbs");
    var weight = (dogWeight/2.2)*0.5/2;
    var round = Math.round(weight *100) / 100;
alert(round + " ml");
});


//Diroban
 var button = document.getElementById("diroban");
diroban.addEventListener('click', function() {
    var dogWeight = prompt("For Diroban dose, enter how much dog weighs in lbs");
    var weight = (dogWeight/2.2)*0.1;
    var round = Math.round(weight *100) / 100;
alert(round + " mls");
});

//Dex SP
 var button = document.getElementById("dexSP");
dexSP.addEventListener('click', function() {
    var dogWeight = prompt("For Dex SP dose, enter how much does cat/dog weighs in lbs");
    var weight = (dogWeight/2.2)*0.5/4;
    var round = Math.round(weight *100) / 100;
alert(round + " mls");
});
//Doxycycline
 var button = document.getElementById("doxycycline");
doxycycline.addEventListener('click', function() {
    var dogWeight = prompt("For Doxycycline dose, enter how much does cat/dog weighs in lbs");
    var weight = Math.round((dogWeight/2.2)*10);
alert(weight + " mg \nAvalible mgs: 50mg and 100mg");
});
//Gabapentin
 var button = document.getElementById("gabapentin");
gabapentin.addEventListener('click', function() {
    var dogWeight = prompt("For Gabapentin dose, enter how much does cat/dog weighs in lbs");
    var weight = Math.round((dogWeight/2.2)*10);
alert(weight + " mg \nAvalible mgs: 100mg and 300mg");
});
//Gabapentin 50mg/ml
 var button = document.getElementById("gabapentinLiquid");
gabapentinLiquid.addEventListener('click', function() {
    var dogWeight = prompt("For liquid Gabapentin dose, enter how much cat/dog weighs in lbs");
    var weight = Math.round((dogWeight/2.2)*10/50);
    var round = Math.round(weight *100) / 100;
alert(round + " mls");
});
//Ketamine
 var button = document.getElementById("ketamine");
ketamine.addEventListener('click', function() {
    var dogWeight = prompt("For Ketamine dose, enter how much does cat weighs in lbs");
    var weight = (dogWeight/2.2)*0.01/0.3;
    var round = Math.round(weight *100) / 100;
alert(round + " mls");
});
//Librela
 var button = document.getElementById("librela");
librela.addEventListener('click', function() {
    var dogWeight = prompt("For Librela dose for dogs under 11lbs, enter how much dog weighs in lbs");
    var weight = dogWeight*0.045;
    var round = Math.round(weight *100) / 100;
alert(round + " mls");
});

//Metacam
 var button = document.getElementById("metacam");
metacam.addEventListener('click', function() {
    var dogWeight = prompt("For Metacam dose, enter how much does dog weigh");
    var weight = (dogWeight/2.2)*0.1/5;
    var round = Math.round(weight *100) / 100;
    var weight2 = (dogWeight/2.2)*0.2/5;
    var round2 = Math.round(weight2 *100) / 100;
alert(round + "mls to " + round2 + "mls ");
});

//Metronidzole
 var button = document.getElementById("metronidazole");
metronidazole.addEventListener('click', function() {
    var dogWeight = prompt("For Metronidazole dose, enter how does dog weighs in lbs");
    var weight = Math.round((dogWeight/2.2)*15);
alert(weight + " mg");
});
//Onsior
 var button = document.getElementById("onsior");
onsior.addEventListener('click', function() {
    var dogWeight = prompt("For Onsior dose, enter how much does cat weighs in lbs");
    var weight = dogWeight*0.045;
    var round = Math.round(weight *100) / 100;
alert(round + " mls");
});
/*Oxytocin
 var button = document.getElementById("oxytocin");
oxytocin.addEventListener('click', function() {
    var dogWeight = prompt("For Oxytocin dose, enter how much cat/dog weighs in lbs");
    //var weight = (dogWeight/2.2)*0.5;
alert(weight + " ml");
});
*/

//Prednisone
 var button = document.getElementById("prednisone");
prednisone.addEventListener('click', function() {
    var dogWeight = prompt("For Prednisone dose, enter how much cat/dog weighs in lbs");
    var weight = Math.round((dogWeight/2.2)*0.5);
alert(weight + " mg \n Avalible mg: 1mg, 5mg and 20mg");
});
//Proheart
 var button = document.getElementById("proheart");
proheart.addEventListener('click', function() {
    var dogWeight = prompt("For Proheart6 and Proheart 12 dose, enter how much dog weighs in lbs");
    var weight = (dogWeight/2.2)*0.05;
    var round = Math.round(weight *100) / 100;
alert(round + " mls");
});
//propofol
 var button = document.getElementById("propofol");
propofol.addEventListener('click', function() {
    var dogWeight = prompt("For Propofol dose, enter how much cat/dog weighs in lbs");
    var weight = (dogWeight/2.2)*4/10;
    var round = Math.round(weight *100) / 100;
alert(round + " mls");
});

//rimadyl
 var button = document.getElementById("rimadyl");
rimadyl.addEventListener('click', function() {
    var dogWeight = prompt("For Rimadyl dose, enter how much cat/dog weighs in lbs");
    var weight = (dogWeight/2.2)*4.4/50;
    var round = Math.round(weight *100) / 100;
alert(round + " mls");
});

//Strongid
 var button = document.getElementById("strongid");
strongid.addEventListener('click', function() {
    var dogWeight = prompt("For Strongid dose, enter how much cat/dog weighs in lbs");
    var weight = (1/6)*dogWeight;
    var round = Math.round(weight *100) / 100;
alert(round + " mls");
});

//MER
 var button = document.getElementById("MER");
MER.addEventListener('click', function() {
     var dogWeight = prompt("For MER, enter how much cat/dog weighs in lbs");
     var weight = dogWeight / 2.2;
     var exp = Math.pow(weight, 0.75);
     var mul = 70 * exp * 0.8;
     var round = Math.round(mul *100) / 100;
alert(round + " kcal/day");
});







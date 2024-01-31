const baslik = document.getElementById("baslik");
const söz1 = document.getElementById("sözler1");
const söz2 =  document.getElementById("sözler2");
const söz3 =  document.getElementById("sözler3");
const söz4 =  document.getElementById("sözler4");
const söz5 =  document.getElementById("sözler5");
const söz6 =  document.getElementById("sözler6");
const söz7 =  document.getElementById("sözler7");
const söz8 =  document.getElementById("sözler8");
const söz9 =  document.getElementById("sözler9");
const söz10 = document.getElementById("sözler10");
const söz11 = document.getElementById("sözler11");
const söz12 = document.getElementById("sözler12");
const söz13 = document.getElementById("sözler13");
const söz14 = document.getElementById("sözler14");
const söz15 = document.getElementById("sözler15");
const söz16 = document.getElementById("sözler16");
const söz17 = document.getElementById("sözler17");
const söz18 = document.getElementById("sözler18");
const pElement = document.getElementById("pEtiket");
const rastgelebtn = document.getElementById("buton");


function random(){
  let num = Math.round(Math.random()*19+1);
  if(num==1){
    pElement.innerText ="Alavere dalavere kim ala da kim vere rap rap Köşeleri möşeleri dön baba dönelim rap rap raptiye rap rap";
  }
  else if(num==2){
    pElement.innerText ="Sende başını gitme ne olur ne olur tut ellerimi. Hayatta hiçbir şeyim az olmadi senin kadar";
  }
  else if(num==3){
    pElement.innerText = "Şeker ezdim sana Bal süzdüm, bal süzdüm Yüreğimden mısra çektim Şiir düzdüm, şiir düzdüm Bir fısıltıya hapsettim İçimin tüm çığlıklarını";
  }
  else if(num==4){
    pElement.innerText = "Ben bir ceviz ağacıyım gülhane parkında ne sen bunun farkındasın ne de polis farkında";
  }
  else if(num==5){
    pElement.innerText = "Kalbimde kalbine yok bile kinim Bence artık sen de herkes gibisin";
  }
  else if(num==6){
    pElement.innerText = "Düştüm mapus damlarına öğüt veren bol olur Toplasam o öğütleri burdan köye yol olur.";
  }
  else if(num==7){
    pElement.innerText = "Durdu zaman durdu dünya girdi içeri kapıdan Öylece bakakaldım gözümü ayırmadan";
  }
  else if(num==8){
    pElement.innerText = "Bindik bir alamete gideyoz kıyamete Amanieyynn";
  }
  else if(num==9){
    pElement.innerText = "Gecenin nemi mi düşmüş gözlerine? Ne olur ıslak ıslak, bakma öyle.";
  }
  else if(num==10){
    pElement.innerText = "Yağmurlar ekerim, göğün göğsüne Güneşte demlerim, senin çayını Yüreğimden süzer, öyle veririm.";
  }
  else if(num==11){
    pElement.innerText = "At bizim avrat bizim silah bizim şan bizim Namus belasına Gardaş yatarız zindan bizim.";
  }
  else if(num==12){
    pElement.innerText = "Yağmurlar ekerim, göğün göğsüne Güneşte demlerim, senin çayını Yüreğimden süzer, öyle veririm.";
  }
  else if(num==13){
    pElement.innerText = "Ben feleğin şu çarkına, çomak sokarım.";
  }
  else if(num==14){
    pElement.innerText = "Ne yalnızlık ne de yalan üzmesin seni doğarken ağladı insan bu son olsun bu son";
  }
  else if(num==15){
    pElement.innerText = "Çok yorgunum, beni bekleme kaptan.Seyir defterini başkası yazsın.";
  }
  else if(num==16){
    pElement.innerText = "Benim de bu cihana gelişim bir güzelden ötürü";
  }
  else if(num==17){
    pElement.innerText = "Ele geniş olan şu yalan dünya bilmem ki yar neden dar bana bana bize hücum etti cahil sürüsü artık kesseler de beni kar bana bana ";
  }
  else if(num==18){
    pElement.innerText = "Bütün ömür bir rüyaysa, uyanıp kalkmamalı mı?";
  }
  else if(num==19){
    pElement.innerText = "İşte geldik gidiyoruz bilinmez bir diyara eskiden karpuz idik şimdi döndük biz hıyara";
  }
  else if(num==20){
    pElement.innerText = "Hem kıbledir hem kabedir yâr bana Bana bana Yar bana bana";
  }
  return num;
}

rastgelebtn.onclick = random;





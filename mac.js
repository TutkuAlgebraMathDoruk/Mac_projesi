const macOzeti=(evSahibiTakim,deplasmanTakimi)=>{
let a=[];
let evsahibiskor=0;
let deplasmanskor=0;
  
for(let i=0;i<4;i++){
  let yeniskor_ev=Math.floor(Math.random() * (26-12 + 1)) + 12;
  let yeniskor_dep=Math.floor(Math.random() * (26-12 + 1)) + 12;
  let metin=`${i+1} .Periyot ${evSahibiTakim} ${yeniskor_ev}-${deplasmanTakimi} ${yeniskor_dep}`;
  a.push(metin);
  evsahibiskor=evsahibiskor+yeniskor_ev;
  deplasmanskor=deplasmanskor+yeniskor_dep;
};
  
if(evsahibiskor>deplasmanskor){
  a.push(`Maç Sonucu: evSahibiTakim ${evsahibiskor} - ${deplasmanskor} kazandı`);
}
else if(evsahibiskor<deplasmanskor){
  a.push(`Maç Sonucu: ${evSahibiTakim} ${evsahibiskor} - ${deplasmanskor} kaybetti`);
}
  else{
    a.push(`Maç ${evsahibiskor} - ${deplasmanskor} ile uzatmalara gitti `);
  };
  return a;
};


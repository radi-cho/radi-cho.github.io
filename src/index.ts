interface Cho {
  claps: number;
  subs: number;
}

class RadiCho implements Cho {
  claps: number = 125;
  subs: number = 70;
}

var RadiChoHere = new RadiCho();
console.log(RadiChoHere.subs);

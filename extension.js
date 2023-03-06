console.clear();

const clas = (c) => {
    return document.getElementsByClassName(c);
  },
  TM = 'pdp-spi__brand f-size--heading-2 f-style--heading-2',
  Name = 'pdp-spi__title',
  Type = 'pdp-spi__product-line',
  idNum = () => {
    let url = location.href,
      urlLen = url.length,
      distruction = url.substring((urlLen - 7), urlLen);
    return distruction;
  },
  Table = 'pdp-prod-desc__details',
  BlackList = ['egnevezés', 'erméknév', 'iegészítők', 'tvétel', 'endelés'],
  loopTable = (t) => {
    let len = t.children.length,
      arr = [];
    for (let a = 1; a < len - 1; a++) {
      arr.push(t.children[a].children[0].innerText);
      arr.push(t.children[a].children[1].innerText);
    }
    for (let b = 0; b < arr.length; b++) {
      for (let c = 0; c < BlackList.length; c++) {
        if (arr[b].includes(BlackList[c])) {
          arr.splice(b, 2);
        }
      }
    }
    return arr;
  };

let id = idNum(),
  dataFromTable = loopTable(clas(Table)[0]);

let getAll = () => {
  let s = '';
  s += clas(TM)[0].innerText + "*" + clas(Name)[0].innerText + "*" + clas(Type)[0].innerText + "*" + id + "*";
  for (let y = 0; y < dataFromTable.length; y++) {
    s += dataFromTable[y] + "*";
    if (y == dataFromTable.length - 1) {
      let patch = s.substring(0, s.length - 1);
      s = patch;
    }
  }
  //s += "]";
  console.log(s);
  //  document.write(s);
  document.write('<p style="user-select:none !important; font-size:32px; color:green;">Katt a szövegre másoláshoz!</p><p id="copyTrue" onclick="navigator.clipboard.writeText(this.innerHTML)" style="font-size:32px;">' + s + '</p>');
}
getAll();

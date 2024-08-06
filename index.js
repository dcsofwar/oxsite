function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  // Rastgele bir renk oluştur
  const r = getRandomInt(0, 255);
  const g = getRandomInt(0, 255);
  const b = getRandomInt(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function changeBoxShadow() {
  const box = document.querySelector('.kart');  // .box yerine .kart
  const hOffset = getRandomInt(-10, 10);  // Yatay gölge
  const vOffset = getRandomInt(-10, 10);  // Dikey gölge
  const blur = getRandomInt(0, 50);       // Bulanıklık
  const spread = getRandomInt(0, 10);     // Yayılma
  const color = getRandomColor();         // Rastgele renk

  box.style.boxShadow = `${hOffset}px ${vOffset}px ${blur}px ${spread}px ${color}`;
}

setInterval(changeBoxShadow, 1000);  // Her saniyede bir gölgeyi değiştir

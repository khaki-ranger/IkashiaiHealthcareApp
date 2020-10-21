const data = new Map();
const now = new Date();

for (let i=0; i<=30; i++) {
  let date = new Date();
  date = new Date(date.setDate(now.getDate() - 15 + i));
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());
  const key = Number(year + month + day);

  const weight = Math.random() >= 0.9 ?
    '' : 
    60 + (Math.floor(Math.random() * Math.floor(50)) / 10)

  const temperature = Math.random() >= 0.8 ?
    '' : 
    36 + (Math.floor(Math.random() * Math.floor(10)) / 10)

  const defecation = Math.random() >= 0.8 ?
    '' : 
    Math.random() >= 0.4

  const value = { weight, temperature, defecation };

  data.set(key, value);
}

export default data;

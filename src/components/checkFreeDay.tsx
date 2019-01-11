import * as moment from 'moment';

export const checkFreeDay = (datestamp: number) => {
  let isFree = false;
  const date = new Date(datestamp * 1000);
  const year = date.getFullYear();
  const FORMAT = "D-M-Y";
  isFree = (Number(moment.unix(datestamp).format('d')) === 6 || // weekend
    Number(moment.unix(datestamp).format('d')) === 0) || // weekend
    // święta ruchome
    moment.unix(datestamp).format(FORMAT)===moment(easter(year)).format(FORMAT) || // wielkanoc
    moment.unix(datestamp).format(FORMAT)===moment(easter(year)).add(1, 'd').format(FORMAT) || // poniedzialek wielkanocny
    moment.unix(datestamp).format(FORMAT)===moment(easter(year)).add(49, 'd').format(FORMAT) || // zesłanie ducha św
    moment.unix(datestamp).format(FORMAT)===moment(easter(year)).add(60, 'd').format(FORMAT) || // boze cialo
    // święta stałe
    moment.unix(datestamp).format(FORMAT)===moment(`01-01-${year}`, FORMAT).format(FORMAT) ||
    moment.unix(datestamp).format(FORMAT)===moment(`06-01-${year}`, FORMAT).format(FORMAT) ||
    moment.unix(datestamp).format(FORMAT)===moment(`01-05-${year}`, FORMAT).format(FORMAT) ||
    moment.unix(datestamp).format(FORMAT)===moment(`03-05-${year}`, FORMAT).format(FORMAT) ||
    moment.unix(datestamp).format(FORMAT)===moment(`08-15-${year}`, FORMAT).format(FORMAT) ||
    moment.unix(datestamp).format(FORMAT)===moment(`01-11-${year}`, FORMAT).format(FORMAT) ||
    moment.unix(datestamp).format(FORMAT)===moment(`11-11-${year}`, FORMAT).format(FORMAT) ||
    moment.unix(datestamp).format(FORMAT)===moment(`25-12-${year}`, FORMAT).format(FORMAT) ||
    moment.unix(datestamp).format(FORMAT)===moment(`26-12-${year}`, FORMAT).format(FORMAT)
  ;

  return moment.unix(datestamp).format("D-M-Y dd")+ ` ${isFree}`;
};

const easter = (year: number) => {
  let a;
  let b;
  let c;
  let d;
  let e;
  let f;
  let g;
  let h;
  let i;
  let k;
  let l;
  let m;
  let p;

  a = year % 19;
  b = Math.floor(year / 100);
  c = year % 100;
  d = Math.floor(b / 4);
  e = b % 4;
  f = Math.floor((b + 8) / 25);
  g = Math.floor((b - f + 1) / 3);
  h = (19 * a + b - d - g + 15) % 30;
  i = Math.floor(c / 4);
  k = c % 4;
  l = (32 + 2 * e + 2 * i - h - k) % 7;
  m = Math.floor((a + 11 * h + 22 * l) / 451);
  p = (h + l - 7 * m + 114) % 31;

  const day = p + 1;
  const month = Math.floor((h + l - 7 * m + 114) / 31);

  return year+"-"+month+"-"+day;
};
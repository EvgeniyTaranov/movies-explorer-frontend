export function Converter(mins) {
  let hours = Math.floor(mins / 60);
  let minutes = mins % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return `${hours}ч ${minutes}м`;
}

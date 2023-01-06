export const capitalize = (string) => {
  return string
    .split('-')
    .map(n => n.replace(n[0], n[0].toUpperCase()))
    .join(' ')
}

 export default function formatUnixTime(unixTime) {
  const date = new Date(unixTime * 1000);
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };
  
  return date.toLocaleString('uk-UA', options);
}
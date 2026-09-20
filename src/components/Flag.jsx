export default function Flag({ id, name }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${id}.png`}
      srcSet={`https://flagcdn.com/w80/${id}.png 2x`}
      width="24" height="18" alt={`Bandera de ${name}`}
      className="inline-block align-middle rounded-sm"
    />
  );
}

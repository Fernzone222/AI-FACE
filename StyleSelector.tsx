export default function StyleSelector() {
  const styles = ['business', 'anime', 'cyberpunk', 'gamer', 'luxury'];
  return (
    <div className="grid grid-cols-3 gap-4">
      {styles.map(style => (
        <button key={style} className="p-4 border rounded">{style}</button>
      ))}
    </div>
  );
}

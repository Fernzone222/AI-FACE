import StyleSelector from "../components/StyleSelector";

export default function Choose() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Välj din stil</h1>
      <StyleSelector />
    </div>
  );
}

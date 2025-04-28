import UploadBox from "../components/UploadBox";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Ladda upp dina selfies</h1>
      <UploadBox />
    </div>
  );
}

import Dropzone from "./components/dropzone/dropzone";

function App() {
  return (
    <main className="bg-gray-800 w-screen h-screen">
      <h1 className="text-3xl font-bold text-white text-center">ezCoA</h1>
      <h2 className="text-xl font-bold text-white text-center">
        img to ck3 coat of arms
      </h2>
      <Dropzone />
    </main>
  );
}

export default App;

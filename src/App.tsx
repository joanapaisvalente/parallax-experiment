import Card from "./card";
import Info from "./info";
import MultiLayerParallax from "./multi-layler-parallax";
import Wave from "./wave";

function App() {
  return(
    <>
    <MultiLayerParallax />
    <div className="w-full bg-zinc-800">
      <div className="max-w-lg space-y-4 mx-auto text-slate-50 pt-8 pb-4">
        <Info />
        <Info />
        <Info />
        <Info />
      </div>
    </div>
    <Wave />
    <div className="w-full bg-emerald-600 flex items-center py-12 flex-col">
        <Card />
        <Card />
        <Card />
    </div>
    </>
  );
}

export default App

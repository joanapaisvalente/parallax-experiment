import Card from "./card";
import Info from "./info";
import MountainLayers from "./mountain-layers";
import MultiLayerParallax from "./multi-layler-parallax";
import Question from "./question";
import Wave from "./wave";

function App() {
  return(
    <>
    <MultiLayerParallax />
    <div className="w-full bg-[#1D2124]">
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
    <MountainLayers />
    <div className="w-full bg-[#1A3644] pb-16 h-screen flex justify-center items-center">
      <div className="max-w-lg space-y-4 mx-auto text-slate-50 pt-8 pb-4">
        <Info text="Estás a dormir?" />
      </div>
    </div>
    <Wave backgroundColor="#1A3644" waveColor="#B0BCBA"/>
    <div className="w-full bg-[#B0BCBA] pb-16 h-screen flex justify-center items-center">
      <div className="max-w-lg space-y-4 mx-auto text-slate-50 pt-8 pb-4">
        <Info text="Estás a dormir?" />
      </div>
    </div>
    <Question />
    <div className="w-full bg-[#B0BCBA] pb-16 h-screen flex justify-center items-center">
      <div className="max-w-lg space-y-4 mx-auto text-slate-50 pt-8 pb-4">
        <Info text="Bruno SAI!" />
      </div>
    </div>
    </>
  );
}

export default App

import { useContext } from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import { MyContext } from "./components/ContextData";
import BottomContent from "./components/BottomContent";

const App = () => {
  return (
    <div className=" w-[80%] bg-zinc-950 rounded-xl p-5">
      <Navbar />
      <Content />
      <BottomContent />
    </div>
  );
};

export default App;

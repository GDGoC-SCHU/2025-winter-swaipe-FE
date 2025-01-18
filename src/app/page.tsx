import Image from "next/image";
import TestBox from "./components/TestBox"

export default function Home() {
  let a = 1
  let b = 2

  return (
    <div className="text-xl flex justify-between p-10">
      {a+b}
      <TestBox num="1"/>
      <TestBox num={b}/>
      <TestBox num={a+b}/>

    </div>  
  );
}

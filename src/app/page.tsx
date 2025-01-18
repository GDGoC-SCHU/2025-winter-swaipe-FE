import TestBox from "./components/TestBox"

export default function Home() {
  const a = 1
  const b = 2

  return (
    <div className="text-xl flex justify-between p-10">
      {a+b}
      <TestBox num="1"/>
      <TestBox num={b}/>
      <TestBox num={a+b}/>

    </div>  
  );
}

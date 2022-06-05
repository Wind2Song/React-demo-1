import React, {useState, useEffect} from "react";

function App2() {
  const [n, setN] = useState(0)
//   const time = useRef(null)
  const onClick = ()=>{
    setN(i=>i+1) 
    // time.current = performance.now()
  }
  useEffect(()=>{
      console.log('useEffect 执行了')
    //   setN(n=>n+1)
  },[])
//   useLayoutEffect(()=>{ // 改成 useEffect 试试
//     if(time.current){
//       console.log(performance.now() - time.current)
//     }
//   })
  console.log('App2 渲染了')
  return (
    <div className="App">
      <h1>n: {n}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default App2;
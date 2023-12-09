import { useState } from 'react';
import List from './components/List';
import data from "./helper/data";



function App() {
  const [index, setIndex] = useState(0);
  
  const prev = () => {
  const newIndex = index - 5;
  let atlamaIndex;
  if(newIndex<0){
    atlamaIndex = data.length - 5;
  }else{
      atlamaIndex=newIndex;
  }
    setIndex(atlamaIndex);
    };
  
  const next = () => {
    
    if(index<15){
      setIndex(index+5)
    }else{
      setIndex(0)
    }
  };

  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees {index + 1} to {index + 5})
        </h5>
        {/* 0-5 arası datayı kopyalıyoruz index değerine göre değişecek*/}
        <List data={data.slice(index, index + 5)} /> 
        <div className='btns'>
          <button onClick={prev}>Prev</button>
          <button onClick={next}>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
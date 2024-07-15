import Accordian from "./Accordian.js";
import {accordianData} from "./utils/conent.js";


const App = () => {
  return (
    <div>
      <div className="accordion">
        {accordianData.map(({title, content}) => {
          return <Accordian title={title} content={content} key={Math.random() * 100}/>
        })}
      </div>
    </div>
  )
}
export default App;
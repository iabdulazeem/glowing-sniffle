import 'bootstrap/dist/css/bootstrap.min.css';
import {NavSection} from './containers/NavSection';
import {Slider} from './containers/Slider';
import {Categories} from './containers/Categories';

function App() {
  return (
    <div>
      <NavSection/>
      <Slider/>
      <Categories/>
    </div>
  );
}

export default App;

import './App.css';
import HelloWorld from './app/hello-world/hello-world';
// importing the component from the library
import { Products } from 'products';
import { Orders } from 'orders';

function App() {
  return (
    <>
      <Orders />
    </>
  );
}

export default App;
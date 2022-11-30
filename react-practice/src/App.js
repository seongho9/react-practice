import Counter from './Counter.js';
import MyComponent from './MyComponent';
import Say from './Say.js';

const App = () => {
  return (
    <div>
      <MyComponent name="string" number={3} >
        <button type='button'>hi</button>
      </MyComponent>

      <Counter />
      <br />
      <Say />
    </div>

  );
};

export default App;
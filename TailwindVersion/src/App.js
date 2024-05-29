import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header p-8 flex justify-evenly items-center
                          text-white">
        <h2>
          Home
        </h2>
        <h1 className="text-white text-center py-4 
                        border-solid border-2 border-sky-500 rounded-3xl
                        w-2/5">
          This is my Tailwind CSS Test
        </h1>
        <h2>
          Contact
        </h2>
      </header>
      <div className="App-header p-8 flex items-center text-white mx-96">
        <div className="tailwindlogo min-w-60 min-h-60 px-8">
        </div>
        <div className="px-8">
          This is Tailwind CSS. Tailwind css is a framework technique used for styling difficult styles with simple and ready to use predefined styling.
        </div>

      </div>

      <div className="App-header p-8 flex items-center text-white mx-96">

        <div className="px-8">
          This is JSS. JSS is a simpler styling technique based around the normal css syntax, but changed to be way more similar to the standard JavaScript syntax.
        </div>

        <div className="jsslogo min-w-60 min-h-60 px-8">
        </div>

      </div>

      <div className="flex items-center text-white mx-96 py-20 text-center">
        <p>This site does not have too much going on for it, since it is more of a dummy site to test Tailwinds functionalities and how it works compared to JSS in the long run.</p>
      </div>
    </div>
  );
}

export default App;

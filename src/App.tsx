import "./App.css";

function App() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 h-screen bg-red-400">
        <div className="flex flex-col">
          <div className="hover:cursor-pointer">Search</div>
          <div className="hover:cursor-pointer">Home</div>
          <div className="hover:cursor-pointer">Inbox</div>

          <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />

          <div>
            <h1>workspace</h1>

            <div>
              Here goes your different workspaces
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-9 h-screen bg-blue-400">
        This is where the content goes
      </div>
    </div>
  );
}

export default App;

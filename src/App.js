import './App.css';

function App() {
  return (
   <div>
  {/*Head Section*/}
  <section>
    <div className="justify-center text-white items-center">
      <h1 className="justify-center text-center font-bold pt-5 font-serif text-[40px]">Welcome to Doings!</h1>
      <p className="justify-center text-center font-bold font-serif text-[15px]">Doings will help you stay organized and perform all your task</p>
    </div></section>
  {/*Todolist*/}
  <section className="mt-10">
    <div className="container text-white flex flex-col gap-10">
      <div className="flex justify-center items-center">
        <form id="form">
          <input id="input" name="post" type="text" className="px-20 py-2 border rounded flex justify-center items-center  text-black" placeholder="What do you want to do today?" />
          <br /> <br />
          <div id="msg" />
          <div className="flex justify-center items-center ml-5"> 
            <button type="submit" className=" border border-white bg-white text-black py-2 px-4 rounded">Add Task</button>
          </div>
        </form>
      </div>
      <main className="px-5 mt-2 max-w-lg mx-auto">
        <section>
          <section className="flex justify-between items-center">
            <div id="posts">
              <h1 className="font-semibold text-xl" />
              <h3 className="text-xl" />
              <div>
                <p />
                <span className="options">
                </span>
              </div>
            </div>
          </section>
        </section>
      </main>                   
    </div></section>
  <section className="mt-36 flex justify-center mb-5 text-white">
    <a href="/preview.html" className="mx-auto  text-white border border-white rounded-full py-2 px-2.5 inline-flex  align-middle">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<style dangerouslySetInnerHTML={{__html: "svg{fill:#f3f6fb}" }} /><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
      <span className="text-xs flex justify-center text-center">View all todos</span>
    </a>
  </section></div>

  );
}

export default App;

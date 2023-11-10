import './App.css';

function App() {
  return (
   <div>
   <header className='px-5 py-4 max-w-lg mx-auto'>
     <h1 className='text-4xl text-slate-700 font-meduim'>Todoist</h1>
   </header>
    <main className='px-5 mt-5 max-w-lg mx-auto'>
       <form className='flex flex-col items-center sm:flex-row gap-2'>
        <input placeholder='What are you doing today?' className='p-2 rounded-lg border border-slate-100 w-full' id='todo-input'></input>
        <button className='bg-blue-500 rounded-lg px-2.5 py-2 text-sm text-white w-[100px]' type='button'>
          Add todo
        </button>
        <button className='hidden bg-yellow-500 rounded-lg px-2.5 py-2 text-sm text-white w-[100px]'  type='button'>
          Update
        </button>
       </form>
       <span className='hidden' id='form-message'/>
       <section className='mt-5' id='todo-lists-container'/>
    </main>

   </div>
  );
}

export default App;

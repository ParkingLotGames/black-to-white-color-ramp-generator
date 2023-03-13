import CreateImage from './components/CreateImage'

function App() {
  return (
    <div className='min-h-screen justify-center w-screen flex flex-col items-center'>
        <h1 className='text-5xl font-bold my-2'>Black to White Color Ramp Generator</h1>
        <p className='text-center my-2'>Get a 256x1px Black to White ramp generated with code to ensure there is no values missing!</p>
        <CreateImage />
      </div>
  )
}

export default App

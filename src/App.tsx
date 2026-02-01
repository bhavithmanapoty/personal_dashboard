import backgroundImage from './assets/background.png'

function App() {

  return (
    <div 
      style={{
        width: '100%',
        height: '100%',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <h1 className="text-3xl font-bold underline text-red-500">Hello world!</h1>
    </div>
  )
}

export default App

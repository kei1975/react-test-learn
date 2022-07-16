import Counter from './Counter'

function App() {
  console.log("Render App")
  return (
    <Counter initialCount={2} />
  )
}

export default App;

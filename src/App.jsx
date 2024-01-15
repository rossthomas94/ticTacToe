import Player from "./components/Player."
function App() {
  

  return (
    <main>
      <div id='game-container'>
      <ol id ='players'>
<Player  defaultName='Player 1' synbol='x' />
<Player defaultName='Player 2' synbol='o' />

      </ol>
      </div>
GAME BOARD
    </main>
  )
}

export default App

export default  function GameOver ({winner, restart}) {

    return (
        <div id="game-over" >
            {winner && <h2> {winner} won</h2>}
            {!winner && <h2> DRAW</h2>}

            <button onClick={restart}> play again? </button>
        </div>
    )

}
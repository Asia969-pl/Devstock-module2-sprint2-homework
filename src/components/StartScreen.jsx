function StartScreen({handleStart}) {
    return(
        <>
        <h1>Javascript Quiz</h1>
        <button className="startingButton" onClick={handleStart}>Rozpocznij Quiz</button>
        </>
    )
}
export default StartScreen
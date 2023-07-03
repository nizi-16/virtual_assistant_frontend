import './App.css'
import { MicrophoneIcon } from '@heroicons/react/24/solid'

function App() {
    const handleTalkback = () => {
        console.log('make api call')
    }

    return (
        <div className="App">
            <div className="headingBar">
                <h3>Virtual Assistant</h3>
            </div>
            <div className="app">
                <MicrophoneIcon
                    onClick={handleTalkback}
                    className="microphoneIcon"
                />

                <input
                    type="text"
                    placeholder="Command"
                    className="inputField"
                />
            </div>
        </div>
    )
}

export default App

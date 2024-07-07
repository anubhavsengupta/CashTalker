import { useEffect, useState, useRef } from "react"
import axios from "axios"
import 'regenerator-runtime' 
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'


function VoiceRecognizer(props) {
    const input = useRef('');

    useEffect(() => {
        input.current = transcript;
    })


    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }


  return (
    <div class="Recognizer">
        <div>
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <button onClick={SpeechRecognition.startListening}>Start</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
            <button onClick={() => {props.setInput(transcript); resetTranscript()}}>Submit</button>
            <p>{transcript}</p>
        </div>
        <h3>{props.voiceText}</h3>
    </div>
  )
}

export default VoiceRecognizer
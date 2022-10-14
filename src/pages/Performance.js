import React from "react"
import { useState, useEffect } from "react"



const prompts = [
    {
        "id": "prompt-1",
        "domEvent": "keydown",
        "amount": 3,
        "keyCode": "KeyB",
        "text": "Lightly tap the B key 15 times."
    },
    {
        "id": "prompt-2",
        "domEvent": "keydown",
        "amount": 4,
        "keyCode": "KeyS",
        "text": "Hit the S key 4 times."
    },
    {
        "id": "prompt-3",
        "domEvent": "click",
        "amount": 1,
        "text": "Left click once."
    },
    {
        "id": "prompt-4",
        "domEvent": "keydown",
        "amount": 20,
        "keyCode": "Digit1" || "Numpad1",
        "text": "Hit the 1 key 20 times."
    },
    {
        "id": "prompt-5",
        "domEvent": "keyhold",
        "duration": 4000,
        "keyCode": "Space",
        "text": "Press and hold the spacebar for at least 4 seconds, then lift."
    },
    {
        "id": "prompt-6",
        "domEvent": "click",
        "amount": 2,
        "text": "Left click twice."
    },
    {
        "id": "prompt-7",
        "domEvent": "keyhold",
        "duration": 2000,
        "keyCode": "KeyG",
        "text": "Press and hold the G key for 2 seconds, then lift."
    },
    {
        "id": "prompt-8",
        "domEvent": "click",
        "amount": 1,
        "text": "Left click once."
    },
    {
        "id": "prompt-9",
        "domEvent": "keyhold",
        "duration": 8000,
        "keyCode": "Digit6" || "Numpad6",
        "text": "Press and hold the 6 key for 8 seconds, then lift."
    },
    {
        "id": "prompt-10",
        "domEvent": "keydown",
        "amount": 42,
        "keyCode": "ArrowUp",
        "text": "Tap the up arrow 42 times."
    },
    {
        "id": "prompt-11",
        "domEvent": "keydown",
        "amount": 8,
        "keyCode": "Space",
        "text": "Hit the spacebar 8 times."
    },
    {
        "id": "prompt-12",
        "domEvent": "click",
        "amount": 1,
        "text": "Left click once."
    },
    {
        "id": "prompt-13",
        "domEvent": "keydown",
        "amount": 4,
        "keyCode": "Space",
        "text": "Hit the spacebar 4 times."
    },
    {
        "id": "prompt-14",
        "domEvent": "click",
        "amount": 2,
        "text": "Left click twice."
    },
    {
        "id": "prompt-15",
        "domEvent": "keydown",
        "amount": 2,
        "keyCode": "Space",
        "text": "Hit the spacebar twice."
    },
    {
        "id": "prompt-16",
        "domEvent": "click",
        "amount": 2,
        "text": "Left click twice."
    },
    {
        "id": "prompt-17",
        "domEvent": "keydown",
        "amount": 1,
        "keyCode": "KeyL",
        "text": "Tap the L key once."
    },
    {
        "id": "prompt-18",
        "domEvent": "keydown",
        "amount": 1,
        "keyCode": "KeyH",
        "text": "Tap the H key once."
    },
    {
        "id": "prompt-19",
        "domEvent": "keyhold",
        "duration": 2000,
        "keyCode": "KeyO",
        "text": "Hold down the O key for 2 seconds."
    },
    {
        "id": "prompt-20",
        "domEvent": "keydown",
        "amount": 1,
        "keyCode": "KeyQ",
        "text": "Tap the Q key once."
    },
    {
        "id": "prompt-21",
        "domEvent": "keyhold",
        "duration": 30000,
        "keyCode": "Digit3" || "Numpad3",
        "text": "Press and hold the 3 key for 30 seconds."
    },
    {
        "id": "prompt-22",
        "text": "Keep on listening."
    }
]

export default function Performance() {
    const [promptIndex, setPromptIndex] = useState(0)
    const [numberOfKeyDowns, setNumberOfKeyDowns] = useState(0)

    // handler functions that are called by event listeners
    const keyDownHandler = (KeyboardEvent) => {
        console.log("The keyboard event code is: ", KeyboardEvent.code)
        const currentPrompt = prompts[promptIndex];
        if (currentPrompt["domEvent"] === "keydown" && currentPrompt["keyCode"] === KeyboardEvent.code) {
            countKeyDowns()
        }
    }

    // add and remove event listeners
    useEffect(() => {
        // add event listeners and attach them to handler functions
        window.document.addEventListener("keydown", keyDownHandler)

        // when component unmounts, remove event listeners
        return () => {
            window.document.removeEventListener("keydown", keyDownHandler)
        }
    }, [keyDownHandler]);

    // helper functions that are called by handler functions
    const countKeyDowns = () => {
        const newNumberOfKeyDowns = numberOfKeyDowns + 1
        if (newNumberOfKeyDowns === prompts[promptIndex]["amount"]) {
            setNumberOfKeyDowns(0)
            updatePrompt();
        } else {
            setNumberOfKeyDowns(newNumberOfKeyDowns)
        }
    }

    const updatePrompt = () => {
        const newPromptIndex = promptIndex + 1
        if (newPromptIndex < prompts.length) {
            setPromptIndex(newPromptIndex)
        }
    }

    return (
        <>
            <div>Performance</div>
            <div>{prompts[promptIndex]["text"]}</div>
        </>
    )
}
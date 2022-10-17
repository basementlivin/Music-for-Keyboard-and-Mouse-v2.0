import React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"



const prompts = [
    {
        "id": "prompt-1",
        "domEvent": "keydown",
        "amount": 15,
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
        "amount": 10,
        "keyCode": "Digit1" || "Numpad1",
        "text": "Hit the 1 key 10 times."
    },
    {
        "id": "prompt-6",
        "domEvent": "click",
        "amount": 2,
        "text": "Left click twice."
    },
    {
        "id": "prompt-10",
        "domEvent": "keydown",
        "amount": 22,
        "keyCode": "ArrowUp",
        "text": "Tap the up arrow 22 times."
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
        "id": "prompt-20",
        "domEvent": "keydown",
        "amount": 1,
        "keyCode": "KeyQ",
        "text": "Tap the Q key once."
    },
    {
        "id": "prompt-22",
        "domEvent": "keydown",
        "amount": 7,
        "keyCode": "KeyA",
        "text": "Tap the A key seven times."
    }
]

export default function Performance() {
    const [promptIndex, setPromptIndex] = useState(0)
    const [numberOfClicks, setNumberOfClicks] = useState(0)
    const [numberOfKeyDowns, setNumberOfKeyDowns] = useState(0)
    const navigate = useNavigate()

    const clickHandler = (MouseEvent) => {
        const currentPrompt = prompts[promptIndex];
        if (currentPrompt["domEvent"] === "click") {
            countClicks();
        }
    }

    const keyDownHandler = (KeyboardEvent) => {
        const currentPrompt = prompts[promptIndex];
        if (currentPrompt["domEvent"] === "keydown" && currentPrompt["keyCode"] === KeyboardEvent.code) {
            countKeyDowns()
        }
    }

    useEffect(() => {
        window.document.addEventListener("click", clickHandler)
        return () => {
            window.document.removeEventListener("click", clickHandler)
        }
    }, [clickHandler]);

    useEffect(() => {
        window.document.addEventListener("keydown", keyDownHandler)
        return () => {
            window.document.removeEventListener("keydown", keyDownHandler)
        }
    }, [keyDownHandler]);

    const countClicks = () => {
        const newNumberOfClicks = numberOfClicks + 1
        if (newNumberOfClicks === prompts[promptIndex]["amount"]) {
            setNumberOfClicks(0)
            updatePrompt();
        } else {
            setNumberOfClicks(newNumberOfClicks)
        }
    }

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
        else {
            navigate("/log")
        }
    }

    return (
        <>

            <h1 className="performance-prompts">{prompts[promptIndex]["text"]}</h1>
        </>
    )
}
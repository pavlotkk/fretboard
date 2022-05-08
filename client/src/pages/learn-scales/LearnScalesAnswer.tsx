import React from "react"
import classNames from "classnames"
import parseNoteInput from "../../services/note-input"
import {NOTES_COUNT} from "../../shared/constants"
import FormattedAnswer from "./LearnScaleFormattedAnswer"

function notesInputControl(input: string): string {
    const formattedAnswer = parseNoteInput(input, NOTES_COUNT, false)
        .filter((n) => n.length > 0)
        .join(" ")
    const lastCharIsWhitespace = input.length > 0 && input[input.length - 1] === " "
    const tooManyTrims = input.length - formattedAnswer.length > 1

    if (lastCharIsWhitespace || tooManyTrims) {
        return formattedAnswer + " "
    } else {
        return formattedAnswer
    }
}

interface LearnScalesAnswerParams {
    scale: {
        id: string | null
        name: string | null
        notes: string[]
    }
    loading: boolean
    answer: string
    onSubmit: () => void
    onSkip: () => void
    onAnswerChanged: (value: string) => void
}

function LearnScalesAnswer({scale, answer, loading, onSubmit, onSkip, onAnswerChanged}: LearnScalesAnswerParams) {
    const userInput = React.useRef<HTMLInputElement>(null)

    React.useEffect(() => {
        if (userInput.current != null && !loading) {
            userInput.current.focus()
        }
    }, [scale, answer, loading])

    const formClasses = classNames({
        "bg-light": true,
        "p-5": true,
        "justify-content-center": true,
        hide: scale.id == null,
    })

    let answerNotes = parseNoteInput(answer || "", NOTES_COUNT)
    let nextAvailable: boolean
    if (answerNotes.length !== NOTES_COUNT) {
        nextAvailable = false
    } else {
        nextAvailable = answerNotes.every((v, i) => v === scale.notes[i])
    }

    return (
        <div className={formClasses} style={{marginTop: "10px"}}>
            <h1 style={{textAlign: "center"}}>{scale.name}</h1>

            <div className={"d-flex justify-content-center"}>
                <FormattedAnswer actual_notes={answerNotes} expected_notes={scale.notes} />
            </div>

            <form
                className={"row g-3"}
                onSubmit={(e: React.SyntheticEvent) => {
                    e.preventDefault()
                    onSubmit()
                }}>
                <div className="col-md-12">
                    <input
                        ref={userInput}
                        type="text"
                        className="form-control form-control-lg"
                        placeholder={"Type scale notes here.."}
                        onChange={(e) => onAnswerChanged(notesInputControl(e.target.value))}
                        value={answer}
                        disabled={loading || scale.id === null}
                    />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary" disabled={loading || !nextAvailable}>
                        Next
                    </button>
                    <button
                        type="button"
                        className="btn btn-link"
                        disabled={loading}
                        onClick={() => {
                            onSkip()
                        }}>
                        Skip
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LearnScalesAnswer

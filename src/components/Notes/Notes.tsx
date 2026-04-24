import "./Notes.scss"
import formatDate from "../../helpers/FormatDate"
import type { Conversation, Note } from "../../types/types"
import { useState } from "react"

type Props = {
  notes: Note[]
  selectedId: string | null
  setConversations: React.Dispatch<React.SetStateAction<Conversation[]>>
}

export default function Notes({ notes, selectedId, setConversations }: Props) {
  const [input, setInput] = useState("")
  const [error, setError] = useState("")

  const handleAddNote = () => {
    if (!input.trim()) {
      setError("Note cannot be empty")
      return
    }

    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === selectedId
          ? {
              ...conv,
              updatedAt: new Date().toISOString(),
              notes: [
                ...conv.notes,
                {
                  id: Date.now().toString(),
                  text: input,
                  createdAt: new Date().toISOString(),
                },
              ],
            }
          : conv,
      ),
    )

    setInput("")
    setError("")
  }

  return (
    <section className="add-note-container">
      <div className="notes-container">
        <h3>Notes</h3>
        {notes.length === 0 ? (
          <div className="empty">
            <p>Nothing here yet</p>
          </div>
        ) : (
          <ul className="notes">
            {notes.map((note) => (
              <li key={note.id} className="note">
                <p className="text">{note.text}</p>
                <p className="date">{formatDate(note.createdAt)}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleAddNote()
        }}>
        <div className="add-note">
          <input
            className={`${error ? "error" : ""}`}
            type="text"
            placeholder="Enter the note..."
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              setError("")
            }}
          />
          <button type="submit">Save</button>
        </div>
        {error && <p className="error">{error}</p>}
      </form>
    </section>
  )
}

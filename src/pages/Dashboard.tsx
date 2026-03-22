import "./Dashboard.scss"
import { useEffect, useState } from "react"
import { mockConversations } from "../services/mockApi"
import Sidebar from "../components/Sidebar/Sidebar"
import ConversationView from "../components/Conversation/Conversation"
import WeatherWidget from "../components/WeatherWidget/WeatherWidget"
import Notes from "../components/Notes/Notes"
import ReviewActions from "../components/ReviewActions/ReviewActions"
import type { Conversation } from "../types/types"

export default function Dashboard() {
  const [conversations, setConversations] = useState(() => {
    const saved = localStorage.getItem("conversations")
    return saved ? JSON.parse(saved) : mockConversations
  })
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const [msgLoading, setMsgLoading] = useState(false)

  const [filter, setFilter] = useState<
    "all" | "pending" | "approved" | "needs_fix"
  >("all")

  const filteredConversations =
    filter === "all"
      ? conversations
      : conversations.filter((conv: Conversation) => conv.status === filter)

  useEffect(() => {
    if (selectedId) {
      setMsgLoading(true)

      setTimeout(() => {
        setMsgLoading(false)
      }, 500)
    }
  }, [selectedId])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  })

  useEffect(() => {
    localStorage.setItem("conversations", JSON.stringify(conversations))
  }, [conversations])

  const selectedConversation = conversations.find(
    (c: Conversation) => c.id === selectedId,
  )

  return (
    <main className="dashboard">
      <Sidebar
        conversations={filteredConversations}
        selectedId={selectedId}
        onSelect={setSelectedId}
        loading={loading}
        filter={filter}
        setFilter={setFilter}
      />

      {selectedConversation ? (
        <>
          <section className="main">
            <ConversationView
              conversation={selectedConversation}
              loading={msgLoading}
            />
          </section>
          <aside className="widgets">
            <WeatherWidget city={selectedConversation.city} />
            <Notes
              selectedId={selectedId}
              notes={selectedConversation.notes}
              setConversations={setConversations}
            />
            <ReviewActions
              status={selectedConversation.status}
              selectedConversation={selectedConversation}
              setConversations={setConversations}
            />
          </aside>
        </>
      ) : (
        <section className="not-selected">
          <p>Amerito AI helps you</p>
          <h2 className="review">Review</h2>
          <p>and</p>
          <h2 className="refine">Refine</h2>
          <h2 className="conversations">
            <span className="ai">AI </span>Conversations
          </h2>
          <p>Select a conversation to get started</p>
        </section>
      )}
    </main>
  )
}

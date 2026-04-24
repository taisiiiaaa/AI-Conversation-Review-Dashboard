import "./Dashboard.scss"
import { useEffect, useState } from "react"
import { mockConversations } from "../services/mockApi"
import Sidebar from "../components/Sidebar/Sidebar"
import ConversationView from "../components/Conversation/Conversation"
import WeatherWidget from "../components/WeatherWidget/WeatherWidget"
import Notes from "../components/Notes/Notes"
import ReviewActions from "../components/ReviewActions/ReviewActions"
import type { Conversation } from "../types/types"
import MobileHeader from "../components/MobileHeader/MobileHeader"

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const [conversations, setConversations] = useState(() => {
    const saved = localStorage.getItem("conversations")
    return saved ? JSON.parse(saved) : mockConversations
  })
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const [msgLoading, setMsgLoading] = useState(false)

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

  // search
  const [search, setSearch] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string | "all">("all")

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search)
    }, 300)

    return () => clearTimeout(timer)
  }, [search])

  const filteredConversations = conversations.filter((conv: Conversation) => {
    const matchesSearch = conv.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase())

    const matchesCategory =
      categoryFilter === "all" ? true : conv.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  const totalCount = conversations.length
  const resultCount = filteredConversations.length
  const isFiltered = debouncedSearch.length > 0 || categoryFilter !== "all"

  const categories = Array.from(
    new Set(conversations.map((c: Conversation) => c.category)),
  ) as string[]

  return (
    <>
      <MobileHeader
        isOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
      />
      <main className="dashboard">
        <Sidebar
          isOpen={isSidebarOpen}
          onCloseSidebar={() => setIsSidebarOpen(false)}
          conversations={filteredConversations}
          selectedId={selectedId}
          onSelect={setSelectedId}
          loading={loading}
          search={search}
          setSearch={setSearch}
          totalCount={totalCount}
          resultCount={resultCount}
          isSearching={isFiltered}
          categories={categories}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          isCollapsed={isCollapsed}
          onToggleCollapse={() => setIsCollapsed((prev) => !prev)}
        />

        {selectedConversation ? (
          <>
            <ConversationView
              conversation={selectedConversation}
              loading={msgLoading}
            />
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
          <section className="welcome-section">
            <div className="container">
              <p className="tiny-text amerito">Amerito AI helps you</p>
              <p className="large-text accent review">Review</p>
              <p className="tiny-text and">and</p>
              <p className="large-text refine">Refine</p>
              <h1 className="medium-text">
                AI <span className="accent">Conversations</span>
              </h1>
              <p className="get-started">
                Select a conversation from the sidebar to get started
              </p>
            </div>
          </section>
        )}
      </main>
    </>
  )
}

import "./Sidebar.scss"
import ConversationItem from "./ConversationItem"
import type { Conversation } from "../../types/types"
import { Skeleton } from "antd"
import LogoLink from "../LogoLink/LogoLink"

type Props = {
  isOpen: boolean
  onCloseSidebar: () => void
  conversations: Conversation[]
  selectedId: string | null
  onSelect: (id: string) => void
  loading: boolean

  search: string
  setSearch: (value: string) => void

  totalCount: number
  resultCount: number
  isSearching: boolean

  categories: string[]
  categoryFilter: string | "all"
  setCategoryFilter: (value: string | "all") => void

  isCollapsed: boolean
  onToggleCollapse: () => void
}

export default function Sidebar({
  isOpen,
  onCloseSidebar,
  conversations,
  selectedId,
  onSelect,
  loading,
  search,
  setSearch,
  totalCount,
  resultCount,
  isSearching,
  categories,
  categoryFilter,
  setCategoryFilter,
  isCollapsed,
  onToggleCollapse,
}: Props) {
  return (
    <aside
      className={`sidebar ${isOpen ? "active" : ""} ${isCollapsed ? "collapsed" : ""}`}>
      <div className="container">
        <div className="sidebar-header">
          <div className="logo-expand">
            <LogoLink />
            <button
              className="collapse-sidebar"
              type="button"
              onClick={onToggleCollapse}>
              <svg className="tablet-icon" width="24" height="24">
                <use href="./icons.svg#ic-expand"></use>
              </svg>
            </button>
          </div>

          <hr className="tablet-divider" />

          <div className="input-wrapper">
            <svg className="icon" width="12" height="12">
              <use href="./icons.svg#ic-search"></use>
            </svg>
            <input
              type="text"
              name="search"
              placeholder="Search conversations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="categories">
            <button
              className={categoryFilter === "all" ? "active" : ""}
              onClick={() => setCategoryFilter("all")}>
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={categoryFilter === cat ? "active" : ""}
                onClick={() => setCategoryFilter(cat)}>
                {cat}
              </button>
            ))}
          </div>

          <hr />

          <div className="conversation-count">
            <h2 className="conversation">Conversations</h2>
            <p className="count">
              {isSearching ? `${resultCount}` : `${totalCount}`}
            </p>
          </div>
        </div>

        <ul className="conversations">
          {loading
            ? Array.from({ length: conversations.length }).map((_, i) => (
                <li key={i} className="conversation-skeleton">
                  <Skeleton
                    active
                    title={{ width: "100%" }}
                    paragraph={{ rows: 1, width: "30%" }}
                  />
                </li>
              ))
            : conversations.map((conv) => (
                <ConversationItem
                  key={conv.id}
                  title={conv.title}
                  status={conv.status}
                  category={conv.category}
                  updatedAt={conv.updatedAt}
                  isSelected={conv.id === selectedId}
                  onClick={() => {
                    onSelect(conv.id)

                    if (window.innerWidth <= 744) {
                      onCloseSidebar()
                    }
                  }}
                />
              ))}
        </ul>
      </div>
    </aside>
  )
}

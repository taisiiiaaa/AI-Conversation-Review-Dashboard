import "./Sidebar.scss"
import ConversationItem from "./ConversationItem"
import type { Conversation } from "../../types/types"
import logo from "../../assets/logo.svg"
import { Select, Skeleton } from "antd"

type Props = {
  conversations: Conversation[]
  selectedId: string | null
  onSelect: (id: string) => void
  loading: boolean
  filter: "all" | "pending" | "approved" | "needs_fix"
  setFilter: (value: "all" | "pending" | "approved" | "needs_fix") => void
}

export default function Sidebar({
  conversations,
  selectedId,
  onSelect,
  loading,
  filter,
  setFilter,
}: Props) {
  return (
    <aside className="sidebar">
      <header className="logo">
        <img src={logo} alt="page logo" width={32} height={32} />
        <p>Amerito AI</p>
      </header>

      <div className="filters">
        <p>Filter conversations by status</p>
        <Select
          value={filter}
          onChange={(value) =>
            setFilter(value as "all" | "pending" | "approved" | "needs_fix")
          }
          style={{ width: 120 }}
          options={[
            { value: "all", label: "All" },
            { value: "pending", label: "Pending" },
            { value: "approved", label: "Approved" },
            { value: "needs_fix", label: "Needs fix" },
          ]}
        />
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
                updatedAt={conv.updatedAt}
                isSelected={conv.id === selectedId}
                onClick={() => onSelect(conv.id)}
              />
            ))}
      </ul>
    </aside>
  )
}

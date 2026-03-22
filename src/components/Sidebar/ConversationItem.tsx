import "./ConversationItem.scss"
import formatDate from "../../helpers/FormatDate"

type Props = {
  title: string
  status: "pending" | "approved" | "needs_fix"
  updatedAt: string
  isSelected: boolean
  onClick: () => void
}

export default function ConversationItem({
  title,
  status,
  updatedAt,
  isSelected,
  onClick,
}: Props) {
  return (
    <li
      className={`conversation-item ${isSelected ? "active" : ""}`}
      onClick={onClick}>
      <div className="title-status">
        <h4 className="title">{title}</h4>
        <p className="status">
          {status === "needs_fix" ? "needs fix" : status}
        </p>
      </div>
      <time className="updated-at">{formatDate(updatedAt)}</time>
    </li>
  )
}

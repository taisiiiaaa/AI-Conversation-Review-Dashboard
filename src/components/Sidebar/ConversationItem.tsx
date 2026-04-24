import "./ConversationItem.scss"
import formatDate from "../../helpers/FormatDate"

type Props = {
  title: string
  status: "pending" | "approved" | "needs_fix"
  category: string
  updatedAt: string
  isSelected: boolean
  onClick: () => void
}

export default function ConversationItem({
  title,
  status,
  category,
  updatedAt,
  isSelected,
  onClick,
}: Props) {
  return (
    <li
      className={`conversation-item ${isSelected ? "active" : ""}`}
      onClick={onClick}>
      <div className="item-top">
        <p className="title">{title}</p>
        <p className={`status ${status}`}>
          {status === "needs_fix" ? "needs fix" : status}
        </p>
      </div>
      <div className="item-bottom">
        <p className="category">{category}</p>
        <time className="updated-at">{formatDate(updatedAt)}</time>
      </div>
    </li>
  )
}

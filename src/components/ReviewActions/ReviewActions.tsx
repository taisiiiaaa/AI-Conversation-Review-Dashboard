import "./ReviewActions.scss"
import type { Conversation } from "../../types/types"

type Props = {
  status: "pending" | "approved" | "needs_fix"
  selectedConversation: Conversation
  setConversations: React.Dispatch<React.SetStateAction<Conversation[]>>
}

export default function ReviewActions({
  status,
  selectedConversation,
  setConversations,
}: Props) {
  const changeStatus = (newStatus: "approved" | "needs_fix") => {
    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === selectedConversation.id
          ? {
              ...conv,
              updatedAt: new Date().toISOString(),
              status: conv.status === newStatus ? "pending" : newStatus,
            }
          : conv,
      ),
    )
  }

  return (
    <section className="review-actions">
      <h3>Review Desicion - {status === "needs_fix" ? "needs fix" : status}</h3>
      <div className="change-status">
        <button
          className={`${status === "approved" ? "chosen" : ""}`}
          onClick={() => changeStatus("approved")}
          type="button">
          Approve
        </button>
        <button
          className={`${status === "needs_fix" ? "chosen" : ""}`}
          onClick={() => changeStatus("needs_fix")}
          type="button">
          Needs fix
        </button>
      </div>
    </section>
  )
}

import "./Conversation.scss"
import type { Conversation } from "../../types/types"
import formatDate from "../../helpers/FormatDate"
import { Skeleton } from "antd"

type Props = { conversation: Conversation; loading: boolean }

export default function Conversation({ conversation, loading }: Props) {
  return (
    <section className="conversation-view">
      <header className="conversation-header">
        <h1>{conversation.title}</h1>
        <div className="details">
          <p className="last-updated">
            Last Updated: {formatDate(conversation.updatedAt)}
          </p>
          <div className="category-status">
            <p className="category">{conversation.category}</p>
            <p className="status">
              {conversation.status === "needs_fix"
                ? "needs fix"
                : conversation.status}
            </p>
          </div>
        </div>
      </header>
      <section className="messages">
        {loading
          ? Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="message-skeleton">
                <Skeleton.Input active style={{ width: "60%" }} />
              </div>
            ))
          : conversation.messages.map((msg) => (
              <article
                key={msg.id}
                className={`message ${msg.role === "customer" ? "customer" : "assistant"}`}>
                <p className="text">{msg.text}</p>
                <time className="time">
                  {new Date(msg.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </time>
              </article>
            ))}
      </section>
    </section>
  )
}

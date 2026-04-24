import "./Conversation.scss"
import type { Conversation } from "../../types/types"
import formatDate from "../../helpers/FormatDate"
import { Skeleton } from "antd"
import { useEffect, useRef } from "react"
import MobileMenu from "../MobileMenu/MobileMenu"

type Props = { conversation: Conversation; loading: boolean }

export default function Conversation({ conversation, loading }: Props) {
  useEffect(() => {
    if (!loading) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [conversation.messages, loading])
  const bottomRef = useRef<HTMLDivElement | null>(null)
  return (
    <section
      className={`conversation-view ${
        conversation.messages.length === 0 ? "empty" : ""
      }`}>
      <div className="conversation-header">
        <div className="container">
          <div className="category-status">
            <p className="category">{conversation.category}</p>
            <p className={`status ${conversation.status}`}>
              {conversation.status === "needs_fix"
                ? "needs fix"
                : conversation.status}
            </p>
          </div>
          <h4>{conversation.title}</h4>
          <p className="last-updated">
            Last Updated: {formatDate(conversation.updatedAt)}
          </p>
          <hr />
        </div>
      </div>
      <div className="messages">
        <div className="container">
          {conversation.messages.length === 0 ? (
            <div className="empty-state">
              <div className="icon-wrapper">
                <svg className="icon" viewBox="0 0 26 26">
                  <use href="./icons.svg#ic-message"></use>
                </svg>
              </div>
              <p className="empty-heading">No messages in this conversation</p>
              <p className="empty-body-text">
                Conversation details will appear here
              </p>
            </div>
          ) : loading ? (
            Array.from({ length: conversation.messages.length }).map((_, i) => (
              <div key={i} className="message-skeleton">
                <Skeleton.Input active style={{ width: "60%" }} />
              </div>
            ))
          ) : (
            conversation.messages.map((msg) => (
              <>
                <article
                  key={msg.id}
                  className={`message ${msg.role === "customer" ? "customer" : "assistant"}`}>
                  {msg.role === "assistant" && (
                    <div className="avatar assistant">
                      <svg className="icon">
                        <use href="./icons.svg#ic-ai-avatar"></use>
                      </svg>
                      <p className="text">{msg.text}</p>
                    </div>
                  )}

                  {msg.role === "customer" && (
                    <div className="avatar customer">
                      <svg className="icon">
                        <use href="./icons.svg#ic-user-avatar"></use>
                      </svg>
                      <p className="text">{msg.text}</p>
                    </div>
                  )}

                  <time className="time">
                    {new Date(msg.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </time>
                </article>
                <div ref={bottomRef} />
              </>
            ))
          )}
        </div>
      </div>
      <MobileMenu />
    </section>
  )
}

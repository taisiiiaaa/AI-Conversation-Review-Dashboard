export type Conversation = {
  id: string
  title: string
  status: "pending" | "approved" | "needs_fix"
  category: string
  updatedAt: string
  city: string
  messages: Message[]
  notes: Note[]
}

export type Message = {
  id: string
  role: "customer" | "assistant"
  text: string
  timestamp: string
}

export type Note = { id: string; text: string; createdAt: string }

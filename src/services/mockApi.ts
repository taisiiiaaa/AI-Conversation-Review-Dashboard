import type { Conversation } from "../types/types"

export const mockConversations: Conversation[] = [
  {
    id: "1",
    title: "Refund for damaged headphones",
    status: "pending",
    category: "Billing",
    city: "Warsaw",
    updatedAt: "2026-03-19T10:15:00Z",

    messages: [
      {
        id: "m1",
        role: "customer",
        text: "Hey, I received my headphones today but they’re already damaged 😕",
        timestamp: "2026-03-19T10:00:00Z",
      },
      {
        id: "m2",
        role: "assistant",
        text: "I'm really sorry to hear that. Could you tell me what exactly is wrong with them?",
        timestamp: "2026-03-19T10:01:00Z",
      },
      {
        id: "m3",
        role: "customer",
        text: "The left side isn’t working at all.",
        timestamp: "2026-03-19T10:02:00Z",
      },
      {
        id: "m4",
        role: "assistant",
        text: "Thanks for letting me know. I can help you with a replacement or a refund. Which would you prefer?",
        timestamp: "2026-03-19T10:03:00Z",
      },
      {
        id: "m5",
        role: "customer",
        text: "I’d prefer a refund honestly.",
        timestamp: "2026-03-19T10:04:00Z",
      },
      {
        id: "m6",
        role: "assistant",
        text: "Got it. I’ll start the refund process for you. You’ll receive further instructions via email.",
        timestamp: "2026-03-19T10:05:00Z",
      },
    ],

    notes: [
      {
        id: "n1",
        text: "Good empathy and clear options provided.",
        createdAt: "2026-03-19T10:10:00Z",
      },
    ],
  },

  {
    id: "2",
    title: "Where is my package?",
    status: "needs_fix",
    category: "Shipping",
    city: "Berlin",
    updatedAt: "2026-03-18T15:30:00Z",

    messages: [],

    notes: [
      {
        id: "n1",
        text: "AI failed to assist properly.",
        createdAt: "2026-03-18T15:10:00Z",
      },
      {
        id: "n2",
        text: "Should provide tracking link or escalate.",
        createdAt: "2026-03-18T15:12:00Z",
      },
    ],
  },

  {
    id: "3",
    title: "Resetting my password",
    status: "approved",
    category: "Support",
    city: "Paris",
    updatedAt: "2026-03-17T09:20:00Z",

    messages: [
      {
        id: "m1",
        role: "customer",
        text: "Hey, I can’t log into my account anymore.",
        timestamp: "2026-03-17T09:00:00Z",
      },
      {
        id: "m2",
        role: "assistant",
        text: "No worries, that happens. Do you remember your password?",
        timestamp: "2026-03-17T09:01:00Z",
      },
      {
        id: "m3",
        role: "customer",
        text: "Nope, totally forgot it 😅",
        timestamp: "2026-03-17T09:02:00Z",
      },
      {
        id: "m4",
        role: "assistant",
        text: "You can reset it by clicking 'Forgot Password' on the login page. I can guide you if needed.",
        timestamp: "2026-03-17T09:03:00Z",
      },
    ],

    notes: [],
  },

  {
    id: "4",
    title: "Cancel my subscription please",
    status: "pending",
    category: "Account",
    city: "Madrid",
    updatedAt: "2026-03-16T12:45:00Z",

    messages: [
      {
        id: "m1",
        role: "customer",
        text: "Hi, I want to cancel my subscription but I can’t find the option.",
        timestamp: "2026-03-16T12:30:00Z",
      },
      {
        id: "m2",
        role: "assistant",
        text: "I can help with that. Are you using the mobile app or desktop?",
        timestamp: "2026-03-16T12:31:00Z",
      },
      {
        id: "m3",
        role: "customer",
        text: "Desktop.",
        timestamp: "2026-03-16T12:32:00Z",
      },
      {
        id: "m4",
        role: "assistant",
        text: "Go to Settings → Subscription → Cancel Plan. Let me know if you don’t see it.",
        timestamp: "2026-03-16T12:33:00Z",
      },
    ],

    notes: [],
  },

  {
    id: "5",
    title: "Received wrong item",
    status: "needs_fix",
    category: "Orders",
    city: "Rome",
    updatedAt: "2026-03-15T18:10:00Z",

    messages: [
      {
        id: "m1",
        role: "customer",
        text: "Hi, I ordered a black jacket but got a blue one instead.",
        timestamp: "2026-03-15T18:00:00Z",
      },
      {
        id: "m2",
        role: "assistant",
        text: "Please contact support.",
        timestamp: "2026-03-15T18:01:00Z",
      },
      {
        id: "m3",
        role: "customer",
        text: "…you *are* support, aren’t you?",
        timestamp: "2026-03-15T18:02:00Z",
      },
    ],

    notes: [
      {
        id: "n1",
        text: "Bad UX, AI deflects responsibility.",
        createdAt: "2026-03-15T18:05:00Z",
      },
    ],
  },

  {
    id: "6",
    title: "Payment charged twice",
    status: "pending",
    category: "Billing",
    city: "Amsterdam",
    updatedAt: "2026-03-14T14:10:00Z",

    messages: [
      {
        id: "m1",
        role: "customer",
        text: "Hi, I think I was charged twice for my order.",
        timestamp: "2026-03-14T14:00:00Z",
      },
      {
        id: "m2",
        role: "assistant",
        text: "That shouldn’t happen. Let me check that for you.",
        timestamp: "2026-03-14T14:01:00Z",
      },
      {
        id: "m3",
        role: "assistant",
        text: "It looks like one charge is pending and should disappear within a few days.",
        timestamp: "2026-03-14T14:02:00Z",
      },
      {
        id: "m4",
        role: "customer",
        text: "Okay, I’ll wait then. Thanks.",
        timestamp: "2026-03-14T14:03:00Z",
      },
    ],

    notes: [],
  },
  {
    id: "7",
    title: "How to get a US visa?",
    status: "approved",
    category: "General",
    city: "New York",
    updatedAt: "2026-03-13T11:00:00Z",

    messages: [
      {
        id: "m1",
        role: "customer",
        text: "Hi, how can I get a visa to the USA?",
        timestamp: "2026-03-13T10:00:00Z",
      },
      {
        id: "m2",
        role: "assistant",
        text: "It depends on the type of visa. Are you traveling for tourism, work, or study?",
        timestamp: "2026-03-13T10:01:00Z",
      },
      {
        id: "m3",
        role: "customer",
        text: "Tourism.",
        timestamp: "2026-03-13T10:02:00Z",
      },
      {
        id: "m4",
        role: "assistant",
        text: "You would typically apply for a B-2 tourist visa. You'll need to complete form DS-160.",
        timestamp: "2026-03-13T10:03:00Z",
      },
      {
        id: "m5",
        role: "customer",
        text: "Is it hard to get approved?",
        timestamp: "2026-03-13T10:04:00Z",
      },
      {
        id: "m6",
        role: "assistant",
        text: "It depends on your situation. Strong ties to your home country improve your chances.",
        timestamp: "2026-03-13T10:05:00Z",
      },
    ],
    notes: [],
  },

  {
    id: "8",
    title: "How to learn English faster",
    status: "approved",
    category: "Education",
    city: "London",
    updatedAt: "2026-03-12T09:00:00Z",

    messages: [
      {
        id: "m1",
        role: "customer",
        text: "How can I learn English faster?",
        timestamp: "2026-03-12T08:00:00Z",
      },
      {
        id: "m2",
        role: "assistant",
        text: "Practice daily, even for short periods. Consistency is key.",
        timestamp: "2026-03-12T08:01:00Z",
      },
      {
        id: "m3",
        role: "customer",
        text: "What should I focus on?",
        timestamp: "2026-03-12T08:02:00Z",
      },
      {
        id: "m4",
        role: "assistant",
        text: "Start with speaking and listening. Use apps, watch videos, and talk to native speakers.",
        timestamp: "2026-03-12T08:03:00Z",
      },
      {
        id: "m5",
        role: "customer",
        text: "Any tips to stay motivated?",
        timestamp: "2026-03-12T08:04:00Z",
      },
      {
        id: "m6",
        role: "assistant",
        text: "Set small goals and track your progress.",
        timestamp: "2026-03-12T08:05:00Z",
      },
    ],
    notes: [],
  },

  {
    id: "9",
    title: "Workout plan for beginners",
    status: "pending",
    category: "Health",
    city: "Los Angeles",
    updatedAt: "2026-03-11T18:00:00Z",

    messages: [
      {
        id: "m1",
        role: "customer",
        text: "Can you create a beginner workout plan?",
        timestamp: "2026-03-11T17:00:00Z",
      },
      {
        id: "m2",
        role: "assistant",
        text: "Sure! How many days per week can you train?",
        timestamp: "2026-03-11T17:01:00Z",
      },
      {
        id: "m3",
        role: "customer",
        text: "3 days.",
        timestamp: "2026-03-11T17:02:00Z",
      },
      {
        id: "m4",
        role: "assistant",
        text: "Great. Day 1: full body strength, Day 2: rest or cardio, Day 3: strength again.",
        timestamp: "2026-03-11T17:03:00Z",
      },
      {
        id: "m5",
        role: "customer",
        text: "What exercises?",
        timestamp: "2026-03-11T17:04:00Z",
      },
      {
        id: "m6",
        role: "assistant",
        text: "Squats, push-ups, rows, and planks are a great start.",
        timestamp: "2026-03-11T17:05:00Z",
      },
    ],
    notes: [],
  },

  {
    id: "10",
    title: "Life hacks for productivity",
    status: "approved",
    category: "Lifestyle",
    city: "Toronto",
    updatedAt: "2026-03-10T12:00:00Z",

    messages: [
      {
        id: "m1",
        role: "customer",
        text: "Any life hacks to be more productive?",
        timestamp: "2026-03-10T11:00:00Z",
      },
      {
        id: "m2",
        role: "assistant",
        text: "Try the Pomodoro technique: 25 minutes work, 5 minutes break.",
        timestamp: "2026-03-10T11:01:00Z",
      },
      {
        id: "m3",
        role: "customer",
        text: "Anything else?",
        timestamp: "2026-03-10T11:02:00Z",
      },
      {
        id: "m4",
        role: "assistant",
        text: "Prioritize tasks using the Eisenhower Matrix.",
        timestamp: "2026-03-10T11:03:00Z",
      },
    ],
    notes: [],
  },

  {
    id: "11",
    title: "How to start freelancing",
    status: "needs_fix",
    category: "Career",
    city: "Dublin",
    updatedAt: "2026-03-09T14:00:00Z",

    messages: [
      {
        id: "m1",
        role: "customer",
        text: "I want to start freelancing. Any advice?",
        timestamp: "2026-03-09T13:00:00Z",
      },
      {
        id: "m2",
        role: "assistant",
        text: "Just sign up on platforms like Upwork.",
        timestamp: "2026-03-09T13:01:00Z",
      },
      {
        id: "m3",
        role: "customer",
        text: "That’s it?",
        timestamp: "2026-03-09T13:02:00Z",
      },
      {
        id: "m4",
        role: "assistant",
        text: "Yes.",
        timestamp: "2026-03-09T13:03:00Z",
      },
    ],
    notes: [
      {
        id: "n1",
        text: "Too shallow, lacks guidance.",
        createdAt: "2026-03-09T13:10:00Z",
      },
    ],
  },

  {
    id: "12",
    title: "Create a daily routine",
    status: "pending",
    category: "Lifestyle",
    city: "Sydney",
    updatedAt: "2026-03-08T08:00:00Z",

    messages: [
      {
        id: "m1",
        role: "customer",
        text: "Help me build a daily routine.",
        timestamp: "2026-03-08T07:00:00Z",
      },
      {
        id: "m2",
        role: "assistant",
        text: "Start by defining your priorities.",
        timestamp: "2026-03-08T07:01:00Z",
      },
      {
        id: "m3",
        role: "customer",
        text: "I want to be more productive.",
        timestamp: "2026-03-08T07:02:00Z",
      },
      {
        id: "m4",
        role: "assistant",
        text: "Include focused work blocks and regular breaks.",
        timestamp: "2026-03-08T07:03:00Z",
      },
    ],
    notes: [],
  },

  {
    id: "13",
    title: "Plan a trip to Japan",
    status: "approved",
    category: "Travel",
    city: "Tokyo",
    updatedAt: "2026-03-07T20:00:00Z",

    messages: [
      {
        id: "m1",
        role: "customer",
        text: "I want to travel to Japan. Where should I start?",
        timestamp: "2026-03-07T19:00:00Z",
      },
      {
        id: "m2",
        role: "assistant",
        text: "Start by deciding your travel dates and budget.",
        timestamp: "2026-03-07T19:01:00Z",
      },
      {
        id: "m3",
        role: "customer",
        text: "I’m thinking April.",
        timestamp: "2026-03-07T19:02:00Z",
      },
      {
        id: "m4",
        role: "assistant",
        text: "Great choice! Cherry blossom season is beautiful.",
        timestamp: "2026-03-07T19:03:00Z",
      },
      {
        id: "m5",
        role: "customer",
        text: "Which cities should I visit?",
        timestamp: "2026-03-07T19:04:00Z",
      },
      {
        id: "m6",
        role: "assistant",
        text: "Tokyo, Kyoto, and Osaka are top picks.",
        timestamp: "2026-03-07T19:05:00Z",
      },
      {
        id: "m7",
        role: "customer",
        text: "How long should I stay?",
        timestamp: "2026-03-07T19:06:00Z",
      },
      {
        id: "m8",
        role: "assistant",
        text: "Around 10–14 days is ideal.",
        timestamp: "2026-03-07T19:07:00Z",
      },
      {
        id: "m9",
        role: "customer",
        text: "Is it expensive?",
        timestamp: "2026-03-07T19:08:00Z",
      },
      {
        id: "m10",
        role: "assistant",
        text: "It can be, but you can manage costs with budget hotels and transport passes.",
        timestamp: "2026-03-07T19:09:00Z",
      },
      {
        id: "m11",
        role: "customer",
        text: "What about food?",
        timestamp: "2026-03-07T19:10:00Z",
      },
      {
        id: "m12",
        role: "assistant",
        text: "Food is amazing and can be affordable if you eat at local spots.",
        timestamp: "2026-03-07T19:11:00Z",
      },
    ],
    notes: [],
  },
]

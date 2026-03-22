# AI Conversation Review Dashboard

## Overview

This project is a single-page React application built to review AI-generated customer conversations.

The goal is to provide a clean interface for:

- reviewing conversations
- updating their status
- adding reviewer notes
- viewing weather data

## Features

### Conversation List

- Sidebar with list of conversations
- Displays title, status, and last updated time
- Filter conversations by status (Pending / Approved / Needs Fix)

### Conversation Details

- Chat-like interface for messages
- Displays category, status, and timestamps

### Review Actions

- Approve or mark conversation as "Needs Fix"
- Visual representation for selected status

### Reviewer Notes

- Add internal notes
- Input validation
- Notes displayed in chronological order

### Weather Integration

- Displays current weather for the conversation’s city
- Uses OpenWeather API
- Includes loading and error states

### UX Enhancements

- Skeleton loaders for async states
- Empty states handling

## Tech Stack

- React
- TypeScript
- SCSS
- Ant Design (UI components)

## Installation

1. Clone the repository:

```bash
git clone repository-link
```

2. Navigate into the project folder:

```bash
cd repository-nane
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

## Approach

The application is structured using a component-based architecture:

- `Dashboard` manages global state
- `Sidebar` displays and filters conversations
- `ConversationView` renders messages
- `WeatherWidget` integrates external API data
- `Notes` handles note creation and validation
- `ReviewActions` updates conversation status

State is managed by React hooks, and persistence is handled using `localStorage`.

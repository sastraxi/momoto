# Momoto

A monorepo workspace powered by Bun, containing a full-stack application with a TypeScript backend, React Native mobile app, and shared utilities.

## Project Structure

```
packages/
├── api/        # Elysia backend server
├── mobile/     # React Native mobile app (Expo)
└── shared/     # Shared types and utilities
```

## Prerequisites

- [Bun](https://bun.sh) (v1.0.0 or higher)
- [Node.js](https://nodejs.org) (v18 or higher)
- For mobile development:
  - [Expo Go](https://expo.dev/client) app on your mobile device
  - iOS development requires macOS
  - Android development requires Android Studio

## Getting Started

1. Install dependencies:
```bash
bun install
```

2. Start the backend server:
```bash
bun run dev
```

3. Start the mobile app:
```bash
bun run mobile
```

## Workspace Structure

- `@momoto/api`: Backend server built with Elysia
- `@momoto/mobile`: React Native mobile app using Expo
- `@momoto/shared`: Shared TypeScript types and utilities used across packages

## Development

Each package can be developed independently or in conjunction with others. The workspace configuration ensures that changes in shared packages are immediately available to dependent packages.
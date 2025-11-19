# DentWise AI

DentWise AI is a modern, AI-powered dental practice management application designed to streamline patient interactions and administrative tasks. It features a comprehensive patient dashboard, appointment management system, and an advanced AI voice assistant powered by Vapi AI for natural language interactions.

## Features

- **Patient Dashboard**: A centralized hub for patients to view their appointments, history, and profile.
- **Appointment Management**: Easy scheduling and management of dental appointments.
- **Admin Portal**: Dedicated interface for practice administrators to manage the system.
- **AI Voice Assistant**: Integrated voice assistant (Vapi AI) that allows patients to interact with the system using natural language for advice and guidance.
- **Secure Authentication**: Robust user authentication and management using Clerk.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS and Shadcn UI components.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Database**: [Neon](https://neon.com/) (via [Prisma ORM](https://www.prisma.io/))
- **Authentication**: [Clerk](https://clerk.com/)
- **AI & Voice**: [Vapi AI](https://vapi.ai/)
- **Email**: [Resend](https://resend.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) / [Shadcn UI](https://ui.shadcn.com/)

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or later)
- npm, yarn, pnpm, or bun

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd dentwise-ai-dental
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root directory and add the following variables. You will need to obtain API keys from the respective services.

    ```env
    # Database
    DATABASE_URL="postgresql://..."

    # Clerk Authentication
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
    CLERK_SECRET_KEY="sk_test_..."

    # Vapi AI
    NEXT_PUBLIC_VAPI_API_KEY="your-vapi-public-key"
    NEXT_PUBLIC_VAPI_ASSISTANT_ID="your-vapi-assistant-id"

    # Resend Email
    RESEND_API_KEY="re_..."
    ```

4.  **Setup the database:**

    Generate the Prisma client and push the schema to your database.

    ```bash
    npx prisma generate
    npx prisma db push
    ```

5.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Vapi Documentation](https://docs.vapi.ai/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

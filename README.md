# iInfynite - IT Solutions & Digital Agency

Welcome to the official repository for **iInfynite**, a premium IT solutions and digital agency based in Pune. 
We craft digital experiences that drive growth, from stunning websites to powerful apps and scalable backends.

## 🚀 Technologies Used
- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Styling:** Vanilla CSS & Tailwind CSS for Utility
- **Database ORM:** [Prisma](https://www.prisma.io/) (PostgreSQL via Vercel Postgres)
- **Icons:** Lucide React
- **Authentication/Security:** bcryptjs, jose
- **Animations:** Framer Motion

## 🛠️ Getting Started

First, install the dependencies:
```bash
npm install
```

Set up your environment variables by creating a `.env.local` file:
```bash
DATABASE_URL="postgresql://..."
TELEGRAM_BOT_TOKEN="your_token_here"
TELEGRAM_CHAT_ID="your_chat_id_here"
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure
- `/src/app`: Contains the Next.js App Router pages and API routes.
- `/src/components`: Reusable UI components (buttons, cards, layout, navbar, footer).
- `/src/lib`: Core utility functions (database connection, telegram bot integration, etc.).
- `/prisma`: Database schemas and migrations.

## 🌐 Deployment
The easiest way to deploy this application is using [Vercel](https://vercel.com/).
The `package.json` build script automatically runs `prisma generate` and `prisma db push` to keep your database schema in sync upon every deployment.

---
*Developed by the iInfynite Team.*

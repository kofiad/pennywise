# PennyWise Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [API Routes](#api-routes)
5. [Styling](#styling)
6. [Utilities](#utilities)
7. [Database Schema](#database-schema)
8. [Configuration](#configuration)
9. [Contributing](#contributing)
10. [License](#license)

## Introduction
PennyWise is a financial management application built with Next.js. It helps users manage their income, expenses, budgets, and savings. This documentation serves as a guide for future contributors to understand the structure and setup of the project.

## Getting Started
To get started with the development server, run the following commands:

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

## Project Structure
The project follows a standard Next.js structure with some additional directories for organization:

```
.
├── app
│   ├── api
│   │   ├── income
│   │   │   └── route.js
│   │   ├── savings
│   │   │   └── route.js
│   ├── layout.js
│   └── page.js
├── components
│   ├── Dashboard
│   │   └── Sidebar.jsx
├── lib
│   └── utils.js
├── prisma
│   └── schema.prisma
├── public
├── styles
│   └── main.scss
├── [tailwind.config.js]
├── [package.json]
└── [README.md]
```

### Key Directories and Files
- **app/**: Contains the main application files, including API routes and layout components.
- **components/**: Contains reusable React components.
- **lib/**: Contains utility functions.
- **prisma/**: Contains the Prisma schema for database models.
- **styles/**: Contains global stylesheets.
- **tailwind.config.js**: Configuration file for Tailwind CSS.
- **package.json**: Contains project dependencies and scripts.

## API Routes
The API routes are located in the api directory. Each route handles CRUD operations for different resources.

### Income Route
File:`app/api/income/route.js`
Handles the creation of new income entries.

```js
export async function POST(request) {
  try {
    const { amount, source, category, description } = await request.json();
    const income = await db.income.create({
      data: { amount: parseFloat(amount), source, category, description },
    });
    return NextResponse.json(income, { status: 201 });
  } catch (error) {
    console.error("Error creating income:", error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create an income",
      },
      { status: 500 }
    );
  }
}
```

### Savings Route
File: `app/api/savings/route.js`
Handles the creation of new savings entries.

```js
export async function POST(request) {
  try {
    const { amount, source, category, description } = await request.json();
    const savings = await db.savings.create({
      data: { amount: parseFloat(amount), source, category, description },
    });
    return NextResponse.json(savings, { status: 201 });
  } catch (error) {
    console.error("Error creating savings:", error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a savings",
      },
      { status: 500 }
    );
  }
}
```

## Styling
The project uses Tailwind CSS for styling. The configuration is located in `tailwind.config.js`.


### Tailwind Configuration
File: `tailwind.config.js`

```js
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // Additional color configurations...
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/forms'),
  ],
};
```

## Utilities
Utility functions are located in the utils.js file.

### Utility Functions
File: `lib/utils.js`

```js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

## Database Schema
The database schema is defined using Prisma and is located in `prisma/schema.prisma`
.

### Prisma Schema
File: `prisma/schema.prisma`


```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model Income {
  id        String    @id @default(auto()) @map("_id") @db.ObjectId
  amount    Float
  source    String
  category  String
  description String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Expense {
  id        String    @id @default(auto()) @map("_id") @db.ObjectId
  amount    Float
  source    String
  category  String
  description String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Budget {
  id        String    @id @default(auto()) @map("_id") @db.ObjectId
  amount    Float
  source    String
  category  String
  description String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Savings {
  id        String    @id @default(auto()) @map("_id") @db.ObjectId
  amount    Float
  source    String
  category  String
  description String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Configuration
### Environment Variables
Ensure you have a `.env` file with the following variables:

```
DATABASE_URL=<your-database-url-generated-from-mongodb>
```

### Tailwind CSS
Tailwind CSS is configured in `tailwind.config.js`. Ensure you have the necessary plugins installed.

## Contributing
We welcome contributions from the community. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

### Coding Standards
- Follow the existing code style.
- Write clear and concise commit messages.
- Ensure your code passes linting and tests.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

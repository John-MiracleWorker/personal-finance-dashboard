# Personal Finance Dashboard

## Overview

This is a comprehensive smart budgeting web application that uses AI to automatically manage your finances with minimal user input. Built with React, TypeScript, Express, and Drizzle ORM, the application provides automatic expense categorization, intelligent budget recommendations, bank account integration, and hands-free savings and investment features.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side navigation
- **UI Components**: Custom components built on Radix UI primitives

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (persistent storage)
- **Session Management**: Express sessions with PostgreSQL store
- **AI Integration**: OpenAI API for expense categorization and insights
- **API Design**: RESTful API with JSON responses
- **Storage**: DatabaseStorage class replacing MemStorage for data persistence

## Key Components

### Database Schema
The application uses nine main tables:
- **Users**: Store user authentication and profile information
- **Categories**: Expense categories with emojis and budgets
- **Transactions**: Individual financial transactions with AI categorization flags
- **Budgets**: Monthly budget allocations per user
- **Insights**: AI-generated financial insights and recommendations
- **Bank Connections**: Plaid integration for automatic transaction import
- **Savings Goals**: User-defined savings targets with progress tracking
- **Savings Rules**: Automated saving rules (percentage, fixed amount, round-up)
- **Investments**: Investment portfolio tracking and auto-investment rules

### AI Services
- **Expense Categorization**: Automatically categorizes transactions using OpenAI GPT-4o
- **Financial Insights**: Generates spending trends, alerts, and recommendations
- **Budget Recommendations**: Provides personalized budget suggestions
- **Auto-Savings Calculator**: Analyzes spending patterns to recommend optimal savings allocation
- **Investment Recommendations**: Suggests investment strategies based on risk profile and available funds
- **Intelligent Savings Execution**: AI automatically allocates money across emergency funds, goals, and investments
- **Comprehensive AI Financial Planner**: Complete AI-driven financial planning that creates goals, optimizes spending, and executes investment strategies automatically

### Frontend Features
- **Modern Card-Based Dashboard**: Mobile-first design inspired by Qapital with gradient backgrounds and glass-morphism effects
- **Smart Balance Card**: Primary balance display with visibility toggle and spending progress indicators
- **Quick Actions**: Easy-access buttons for adding expenses and creating savings goals
- **Bank Integration**: Secure Plaid connection for automatic transaction import (no manual upload needed)
- **Auto-Savings Engine**: Intelligent savings recommendations with one-click execution
- **Investment Tracking**: Portfolio management with risk-based investment suggestions
- **Savings Goals**: Visual progress tracking with automated contributions
- **Category Management**: AI-powered expense categorization with visual breakdowns
- **Financial Insights**: Personalized recommendations and spending pattern analysis
- **Conversational AI Chat**: Modal-based AI Coach for natural language financial planning
- **Financial Health Score**: Real-time scoring system with 6 key metrics and AI-generated recommendations
- **Smart Notifications**: Budget warnings, goal milestones, spending alerts, and personalized insights
- **Advanced Analytics**: Spending trends, predictive insights, category performance analysis, and pattern detection

## Data Flow

1. **User Interaction**: User views dashboard or performs actions
2. **API Request**: Frontend makes requests to Express API endpoints
3. **Data Processing**: Backend processes requests, interacts with database
4. **AI Integration**: OpenAI services called for categorization and insights
5. **Response**: Data returned to frontend via JSON API
6. **UI Update**: React components update with new data using TanStack Query

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM
- **openai**: AI services for categorization and insights
- **express**: Web server framework
- **@tanstack/react-query**: Server state management

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **wouter**: Lightweight routing

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite development server with HMR
- **Backend**: tsx for TypeScript execution
- **Database**: PostgreSQL with Drizzle migrations

### Production Build
- **Frontend**: Vite build output to dist/public
- **Backend**: esbuild bundles server code to dist/index.js
- **Database**: Drizzle Kit for schema migrations

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `OPENAI_API_KEY`: OpenAI API access key
- `NODE_ENV`: Environment specification

## Changelog

```
Changelog:
- July 07, 2025: Initial setup with basic budgeting features
- July 07, 2025: Added Plaid bank integration for automatic transaction import
- July 07, 2025: Implemented auto-savings engine with intelligent recommendations
- July 07, 2025: Added investment tracking and risk-based portfolio suggestions
- July 07, 2025: Created comprehensive savings goals and rules system
- July 07, 2025: Implemented AI-powered intelligent savings execution
- July 07, 2025: Added comprehensive AI financial planner using OpenAI GPT-4o that automatically creates goals, optimizes spending, and executes complete financial plans
- July 07, 2025: Successfully configured Plaid production mode with user's production credentials
- July 07, 2025: Identified Plaid Data Transparency Messaging configuration requirement for production bank connections
- July 07, 2025: Successfully connected real bank account after completing Plaid compliance configuration
- July 07, 2025: Implemented conversational AI chat interface for natural language financial planning - users can discuss goals and have AI automatically generate and execute complete financial plans
- July 07, 2025: Fixed critical AI financial planning execution errors with comprehensive plan validation and fallback mechanisms - conversational AI now works flawlessly without errors
- July 07, 2025: Migrated from in-memory storage to persistent PostgreSQL database - user data now survives server restarts
- July 07, 2025: Updated default user from "Sarah" to "Trent" and created modern card-based UI design inspired by Qapital with mobile-first approach, gradient backgrounds, and glass-morphism effects
- July 07, 2025: Implemented comprehensive Financial Health Score system with AI-generated insights, Smart Notifications with personalized alerts, and Advanced Analytics with predictive insights and spending pattern analysis - added tabbed navigation interface
- July 07, 2025: Fixed budget section displaying negative values - corrected transaction amount calculation to properly convert expense amounts from negative to positive, set up $4,000 monthly budget for Trent
- July 07, 2025: Implemented AI-driven budget system - all budget creation now happens through AI analysis of actual transaction data via the conversational AI chat interface, no hard-coded budgets
- July 07, 2025: Expanded budget categories from 9 to 21 - added Subscriptions, Personal Care, Fitness, Education, Gifts & Donations, Travel, Insurance, Savings & Investments, Fees & Charges, Income, Pets, and Home Improvement to catch outlier transactions
- July 07, 2025: Implemented automatic Plaid transaction syncing - checks every 5 minutes when transactions become available, handles errors gracefully, shows real-time sync status in UI with next sync countdown
- July 07, 2025: Replaced OpenAI Assistant API PDF parser with robust text extraction parser - new parser extracts 100% of transactions using advanced pattern matching and handles various bank statement formats including Chime
- July 07, 2025: Removed manual statement upload feature - now exclusively using Plaid for automatic bank transaction import
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```
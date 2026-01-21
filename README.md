# Real Estate Dashboard

A modern, responsive real estate management dashboard built with React, TypeScript, and Tailwind CSS. This is for the Expert listing frontend developer assessment Features comprehensive sales analytics, property listings overview, and interactive data visualizations.

## 🎯 Project Overview

This dashboard provides real estate professionals with a comprehensive view of their business metrics, including sales performance, property listings, user management, and financial insights. The interface is designed with a focus on usability, accessibility, and responsive design.

## ✨ Features

### 📊 Analytics & Visualization

- **Sales Overview Chart**: Interactive multi-series bar chart showing product performance over time
- **Cashflow Summary**: Real-time financial metrics with trend indicators

### 🎨 UI Components

- **Responsive Navbar**: Two-tier navigation with mobile hamburger menu
- **Modal System**: Accessible modals with backdrop blur and ESC key support
- **Drawer Component**: Slide-in side panels for additional content
- **Custom Buttons**: Multiple variants (primary, secondary, outline, ghost, dark)
- **Tab Navigation**: Clean tab interface for filtering data
- **Image Gallery**: Responsive grid with overlay text and indicators

### 📱 Responsive Design

- Mobile-first approach
- Breakpoints: mobile (< 640px), tablet (640px - 1024px), desktop (> 1024px)
- Touch-friendly interface
- Adaptive layouts for all screen sizes

### 🎭 Interactions

- Smooth hover effects and transitions
- Tooltips on icon buttons

## 🛠️ Tech Stack

- **React 18+** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Recharts** - Data visualization
- **Vite** - Build tool and dev server
- **React DOM** - Portal support for modals/drawers

## 📦 Installation

### Prerequisites

- Node.js 16+ and npm/yarn
- Git

### Setup

1. **Clone the repository**

```bash
git clone <repository-url>
cd real-estate-dashboard
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Add custom fonts**
   Place your Euclid Circular B font files in:

```
src/assets/fonts/
  ├── EuclidCircularB-Regular.woff2
  ├── EuclidCircularB-Medium.woff2
  ├── EuclidCircularB-Semibold.woff2
  └── EuclidCircularB-Bold.woff2
```

4. **Start development server**

```bash
npm run dev
# or
yarn dev
```

5. **Build for production**

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
src/
├── assets/
│   ├── fonts/           # Custom font files
│   ├── icons/           # SVG icons
│   └── images/          # Property images
├── components/
│   ├── Button.tsx       # Reusable button component
│   ├── Tabs.tsx         # Tab navigation component
│   ├── Modal.tsx        # Modal dialog component
│   └── Drawer.tsx       # Side drawer component
├── pages/
│   ├── Dashboard/
│   │   ├── Dashboard.tsx
│   │   └── components/
│   │       ├── Navbar/
│   │       │   ├── Navbar.tsx
│   │       │   └── Budgeting.tsx
│   │       ├── salesOverview/
│   │       │   ├── SalesOverview.tsx
│   │       │   ├── SalesOverviewChart.tsx
│   │       │   ├── CashflowSummary.tsx
│   │       │   └── OverviewCard.tsx
│   │       └── imageGrid/
│   │           └── ImageGrid.tsx
├── data/
│   └── salesData.ts     # Sample data and types
├── index.css            # Global styles and Tailwind config
└── main.tsx             # App entry point
```

## 🎨 Design System

### Color Palette

The dashboard uses a custom brand color scale:

```css
--color-brand-50: #f0faf7 /* Lightest tint */ --color-brand-500: #176d58
  /* Primary brand color */ --color-brand-600: #105b48;
```

### Typography

- **Font Family**: Euclid Circular B
- **Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

### Responsive Breakpoints

```javascript
sm: 640px   // Tablet portrait
md: 768px   // Tablet landscape
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
```

## 🧩 Key Components

### Button Component

```typescript
<Button variant="primary" size="lg">
  Click Me
</Button>
```

**Props:**

- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark'
- `size`: 'sm' | 'md' | 'lg'
- `loading`: boolean
- `disabled`: boolean

### Modal Component

```typescript
<Modal open={isOpen} onClose={() => setIsOpen(false)}>
  <YourContent />
</Modal>
```

**Features:**

- Portal-based rendering
- Backdrop blur effect
- ESC key to close
- Click outside to close

### Tabs Component

```typescript
<Tabs
  options={["Option 1", "Option 2", "Option 3"]}
  activeTab={selected}
  onTabChange={setSelected}
/>
```

### SalesBarChart Component

```typescript
<SalesBarChart
  data={salesData}
  height={450}
/>
```

**Features:**

- Multi-series bar chart
- Responsive container
- Custom tooltips
- Formatted Y-axis (millions)

### OverviewCard Component

```typescript
<OverviewCard
  icon={iconPath}
  title="Listings Overview"
  stats={[
    { label: "Total", value: "1.8k" },
    { label: "Active", value: "1.2k" }
  ]}
  onViewAll={() => handleViewAll()}
/>
```

## 🎯 Usage Examples

### Creating a New Dashboard Section

```typescript
import { useState } from "react";
import SalesBarChart from "./components/SalesBarChart";

const MySection = () => {
  const [period, setPeriod] = useState("1 Year");

  return (
    <div className="border border-gray-200 rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-4">My Section</h2>
      <SalesBarChart data={myData} />
    </div>
  );
};
```

### Adding a New Nav Item

```typescript
const navItems = [
  { id: "dashboard", label: "Dashboard", icon: homeIcon },
  { id: "mynew", label: "My New Page", icon: myIcon },
];
```

## 🔧 Customization

### Changing Brand Colors

Edit `src/index.css`:

```css
@theme {
  --color-brand-500: #your-color;
  --color-brand-600: #your-darker-color;
}
```

### Adding New Chart Types

1. Install additional Recharts components if needed
2. Create new chart component in `components/`
3. Follow existing chart pattern for responsiveness

### Modifying Responsive Behavior

Adjust Tailwind breakpoint classes:

```typescript
// Change from md to lg for later breakpoint
className = "flex-col md:flex-row";
// becomes
className = "flex-col lg:flex-row";
```

## 📊 Data Structure

### Sales Data Format

```typescript
interface SalesData {
  month: string;
  productA: number;
  productB: number;
  productC: number;
}

const salesData: SalesData[] = [
  { month: "Jan", productA: 12500000, productB: 18200000, productC: 8300000 },
  // ...
];
```

## 🚀 Performance Optimization

## Installation and setup

```bash
# Clone the repo
git clone https://github.com/MezieNwagbo/expert-listing-dashboard.git
cd <your-repo-name>

# install dependencies
npm install

# run locally
npm run dev
```

The app will be available at http://localhost:5173

## 📧 Contact

For questions or support, please contact chimezienwagbo@gmail.com

---

**Built with React, TypeScript, and Tailwind CSS**

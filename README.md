# Skyline Global - Strategic Financial Logistics Portal

A professional financial logistics and freight forwarding portal with real-time tracking, trade finance services, and comprehensive client management tools.

## Features

### Core Pages
- **Home (Overview)** - Cinematic hero with value propositions and service overview
- **Get Quote** - Interactive quote request form with detailed shipment information
- **Client Portal** - Secure login for authorized users with document management
- **Operations Console** - Real-time shipment tracking and dashboard with document downloads
- **Resource Center** - Currency converter, glossary, and downloadable templates

### Key Capabilities
- **Real-Time Shipment Tracking** - Enter Container #, HAWB, or Transit ID for live status updates
- **Multi-Modal Freight Solutions** - Air, Sea, and Land transportation with global partner network
- **Trade Finance & Escrow** - Letters of credit, supply chain financing, and secure escrow services
- **Customs Brokerage & Compliance** - VAT/Duty optimization, tariff classifications, regulatory expertise
- **Cargo Insurance & Risk Management** - All-Risk coverage and comprehensive claims management
- **Global Ticker** - Live 24/7 display of operational status across 40+ countries
- **Client Dashboard** - Shipment list, document downloads, and invoice management
- **Currency Converter** - Real-time conversion between USD, EUR, GBP, CNY, JPY
- **Logistics Glossary** - Explanation of industry terms (Incoterms, BOL, FCL/LCL, HAWB, etc.)
- **Downloadable Resources** - Proforma Invoices, SLI templates, Commercial Invoices, Packing Lists
- **Compliance Badges** - AEO Certified, IATA Approved, ISO 9001:2015, SSL Secure
- **Network Map** - Interactive visualization of global trade hubs and routes

## Project Structure
```
skyline_site/
├── index.html         # Complete HTML with all sections
├── script.js          # Page routing, ticker, tracking, converter
├── style.css          # Professional responsive styling
├── package.json       # Project metadata
├── bg-video.mp4       # Cinematic background video
├── logo.png           # Brand logo (referenced)
└── README.md          # This file
```

## Quick Start
```bash
# Start development server on port 8000
npm run start

# Navigate to http://localhost:8000
```

## Site Sections

### 1. Home Page (Overview)
- **Hero Section**: Headline, sub-headline, and dual CTA buttons
- **Live Tracking Bar**: Quick access to shipment tracking
- **Specialized Services**: 4-card grid showcasing service offerings
- **Value Proposition**: 3 key differentiators (Transparency, Cost Optimization, Global Reach)
- **Global Network Map**: Visual representation of trade infrastructure
- **Compliance Section**: Trust badges and certifications

### 2. Quote Request Form
Comprehensive form collecting:
- Shipment type (FCL, LCL, Air, Road)
- Incoterms (FOB, EXW, CIF, DDP, DAP)
- Commodity type (General, Hazardous, Perishable, Oversized, Temperature-Controlled)
- Financial services required (Customs, Insurance, Trade Finance, Escrow)
- Origin & destination locations
- Weight/dimensions
- Contact information

### 3. Client Portal
Professional login interface for authorized users with secure authentication.

### 4. Operations Console
Dashboard featuring:
- **Quick Stats**: Active shipments, in-transit, delivered, system status
- **Shipment Table**: Real-time list with status, ETA, and action buttons
- **Document Management**: Download Commercial Invoices, Packing Lists, Bills of Lading
- **Invoice Management**: View and pay freight invoices

### 5. Resource Center
- **Currency Converter**: Live USD, EUR, GBP, CNY, JPY conversion
- **Glossary**: Key logistics terms and definitions
- **Document Templates**: Downloadable Proforma Invoices, SLI, etc.

## Technologies
- HTML5 / CSS3 / JavaScript (Vanilla)
- Font Awesome Icons
- Google Fonts (Montserrat, Orbitron)
- Responsive Design
- Professional UI/UX

## Color Palette
- **Gold**: `#c5a059` (Primary accent - trust, premium)
- **Obsidian**: `#080d14` (Dark background)
- **Slate**: `#1e293b` (Secondary background)
- **Cyan**: `#0ea5e9` (Status/secondary accent)

## Key Features by Section

### Professional Tone
All content follows industry best practices:
- Uses terminology like "supply chain liquidity," "regulatory precision," "tax-efficient logistics"
- Avoids marketing fluff, focuses on quantifiable benefits
- Emphasizes security, compliance, and transparency

### Navigation
Clean top navigation with:
- Logo (clickable to home)
- OVERVIEW, GET QUOTE, RESOURCES, CLIENT PORTAL menu items
- Fixed ticker bar with 40+ country operational status

### Tracking Integration
Real-time tracking allows clients to:
- Enter Container numbers, HAWBs, or Transit IDs
- Get immediate shipment status and location
- View financial documentation

### Compliance & Security
Displays authoritative certifications:
- AEO (Authorized Economic Operator)
- IATA (International Air Transport Association)
- ISO 9001:2015
- SSL Secure payment badges

## Configuration

### Required Assets
- `logo.png` - Company logo (referenced in nav and footer)
- `bg-video.mp4` - Background video for hero section

### Optional Enhancements
- API integration for live currency rates
- Backend tracking API for shipment status
- Payment gateway for invoice management
- Email notification system
- Client authentication backend

## Notes
- Video plays automatically, muted, looping
- Ticker animates continuously (180s cycle)
- Form submissions currently show alert (integrate backend for production)
- Currency converter uses static rates (connect to live API for production)
- All styles are mobile-responsive with CSS Grid and Flexbox

# The Park Playground - Booking Dashboard

Een webapplicatie voor het beheren van boekingen en hosts, ontwikkeld voor manager Kevin Berghman van The Park Playground.

## 📋 Wat doet deze applicatie?

- Synchroniseert boekingen automatisch vanuit Google Sheets
- Wijst hosts toe aan boekingen
- Toont een overzicht van alle boekingen (vandaag, deze week, kalender)
- Voorkomt dubbele boekingen door conflictdetectie

## 🛠 Gebruikte Technologieën

- **Next.js** - React framework voor de website
- **TypeScript** - Programmeertaal
- **Tailwind CSS** - Voor styling
- **Prisma** - Database beheer
- **PostgreSQL** - Database
- **Google Sheets API** - Voor het ophalen van boekingen

## 🚀 Het Project Opstarten

### Vereisten

- [Node.js](https://nodejs.org/) (versie 18 of hoger)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) (of een andere code editor)

### Installatie

1. **Open een terminal** en ga naar de gewenste map:

```bash
cd Documents
```

2. **Download het project** (vraag de repository URL aan het team):

```bash
git clone [REPOSITORY_URL]
cd atwork3-codeluja-lukasvervaet-jarnedemeyer
```

3. **Installeer alle benodigdheden**:

```bash
npm install
```

4. **Maak een `.env` bestand** in de hoofdmap met de juiste gegevens (vraag deze aan het ontwikkelteam).

5. **Start de ontwikkelserver**:

```bash
npm run dev
```

6. **Open je browser** en ga naar: [http://localhost:3000](http://localhost:3000)

## ✏️ Code Aanpassen

### Project Openen

1. Open **Visual Studio Code**
2. Klik op **File** → **Open Folder**
3. Selecteer de projectmap

### Belangrijke Bestanden

```
src/
├── app/
│   ├── page.tsx              # Hoofdpagina (dashboard)
│   ├── hosts/page.tsx        # Hosts overzicht
│   ├── bookings/page.tsx     # Boekingen overzicht
│   └── layout.tsx            # Algemene layout (navigatie, favicon)
├── components/               # Herbruikbare onderdelen (knoppen, modals, etc.)
└── app/globals.css          # Algemene styling
```

### Veelgebruikte Aanpassingen

#### 1. Teksten Wijzigen

Open `src/app/page.tsx` en zoek naar de tekst die je wilt aanpassen:

```tsx
<h1 className="...">Dashboard</h1>
// Wijzig "Dashboard" naar je gewenste tekst
```

#### 2. Kleuren Aanpassen

Kleuren worden aangepast met Tailwind CSS classes:

```tsx
bg - blue - 500; // Blauwe achtergrond
text - red - 600; // Rode tekst
border - green - 400; // Groene rand
```

Beschikbare kleuren: `gray`, `blue`, `green`, `red`, `orange`, `purple`, `yellow`, `pink`

Getallen van 50 tot 900 bepalen de intensiteit (50 = licht, 900 = donker)

#### 3. Logo/Favicon Wijzigen

- Vervang `public/favicon.ico` met je eigen logo
- Of plaats een SVG in `public/` en pas `src/app/layout.tsx` aan:

```tsx
<link rel="icon" href="/jouw-logo.svg" type="image/svg+xml" />
```

## 🗄 Database Bekijken

Om de data in de database te bekijken:

```bash
npx prisma studio
```

Dit opent een visuele interface op [http://localhost:5555](http://localhost:5555)

## 🔄 Boekingen Synchroniseren

- **Automatisch**: Elke nacht om 3u worden boekingen gesynchroniseerd
- **Handmatig**: Klik op de "Refresh Bookings" knop in het dashboard

Het systeem bewaart alleen boekingen van **2 weken geleden** tot **2 weken in de toekomst**.

## 🐛 Problemen Oplossen

### De website start niet

```bash
# Stop de server (Ctrl+C) en probeer opnieuw:
npm run dev
```

### "Port 3000 is already in use"

```bash
# Gebruik een andere poort:
PORT=3001 npm run dev
```

### Wijzigingen zijn niet zichtbaar

- Ververs je browser (Ctrl+R / Cmd+R)
- Of doe een harde refresh (Ctrl+Shift+R / Cmd+Shift+R)

### Database problemen

```bash
# Genereer de Prisma Client opnieuw:
npx prisma generate
```

## 📱 Live Website (Productie)

De website is live op Vercel. Elke wijziging die je naar de `main` branch pusht, wordt automatisch online gezet.

**Let op**: Test altijd eerst lokaal voordat je naar productie pusht!

## 👥 Contact

**Ontwikkeld door**: Lukas Vervaet en Jarne De Meyer  
**Opdrachtgever**: Kevin Berghman (The Park Playground)  
**School**: Artevelde Hogeschool

Voor vragen of ondersteuning, neem contact op met het ontwikkelteam.

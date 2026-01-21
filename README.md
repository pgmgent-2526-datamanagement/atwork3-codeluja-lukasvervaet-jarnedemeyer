# The Park Playground - Booking Dashboard

Een eenvoudige webapplicatie voor het beheren van boekingen en hosts bij The Park Playground. Ontwikkeld voor manager Kevin Berghman (Artevelde Hogeschool).

## 📋 Wat doet deze applicatie?

- Synchroniseert boekingen automatisch vanuit Google Sheets (elke nacht) of handmatig via een knop
- Beheer en toewijzing van hosts aan boekingen
- Overzicht van boekingen: vandaag, deze week, volledige kalender
- Voorkomt dubbele boekingen door conflictdetectie
- Beheer van gebruikers (inloggen met e-mail/wachtwoord of code, admin kan codes en wachtwoorden resetten)
- Gebruiksvriendelijke interface voor managers en personeel

## 🛠 Gebruikte Technologieën

- **Next.js** (React framework)
- **TypeScript**
- **Tailwind CSS**
- **Prisma** (ORM)
- **PostgreSQL** (database)
- **Google Sheets API** (boekingen ophalen)
- **NextAuth** (authenticatie)

## 🚀 Snel starten

### Vereisten

- Node.js 18+
- Git
- Visual Studio Code (of andere editor)

### Installatie

1. Clone deze repository en ga naar de map:
   ```bash
   git clone [REPOSITORY_URL]
   cd atwork3-codeluja-lukasvervaet-jarnedemeyer
   ```
2. Installeer dependencies:
   ```bash
   npm install
   ```
3. Maak een `.env` bestand aan op basis van `.env.example` en vul de juiste waarden in.
4. Start de ontwikkelserver:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in je browser.

## ✏️ Belangrijkste Bestanden & Structuur

```
src/
├── app/                # Pagina's en routes
│   ├── page.tsx        # Dashboard
│   ├── hosts/          # Hosts overzicht
│   ├── bookings/       # Boekingen overzicht
│   └── layout.tsx      # Layout en navigatie
├── components/         # Herbruikbare componenten (modals, forms, loaders, etc.)
├── utils/              # Hulpfuncties (auth, bookings, hosts, etc.)
├── types/              # TypeScript types
├── lib/                # Integraties (Google Sheets, Prisma client)
└── app/globals.css     # Algemene styling
```

## 🔑 Authenticatie & Gebruikers

- Inloggen met e-mail/wachtwoord of unieke code
- Admin kan codes en wachtwoorden resetten
- Uitloggen via navigatie

## 🔄 Boekingen Synchroniseren

- Automatisch: elke nacht om 3u
- Handmatig: via "Refresh Bookings" knop
- Alleen boekingen van 2 weken terug tot 2 weken vooruit worden bewaard

## 🗄 Database Bekijken

- Start Prisma Studio:
  ```bash
  npx prisma studio
  ```
- Bekijk en bewerk data via een visuele interface

## 🐛 Problemen oplossen

- Zie foutmeldingen in de terminal of browserconsole
- Herstart de server bij problemen: `npm run dev`
- Controleer `.env` en database connectie

## 📱 Productie

- Deployments via Vercel (push naar `main` branch = live)
- Test altijd lokaal voor je pusht

## 👥 Team & Contact

- **Ontwikkelaars**: Lukas Vervaet & Jarne De Meyer
- **Opdrachtgever**: Kevin Berghman (The Park Playground)
- **School**: Artevelde Hogeschool

Vragen? Neem contact op met het ontwikkelteam.

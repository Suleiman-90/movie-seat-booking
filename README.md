🎬 Filmstolsbokning – JavaScript
📖 Projektöversikt
Detta projekt är en filmstolsbokningsapplikation byggd med HTML, CSS och JavaScript. Applikationen låter användaren välja en film, välja platser i en biosalong och se hur antalet valda platser samt totalpriset uppdateras dynamiskt.
Syftet med projektet är inte att skapa avancerad UI-design, utan att demonstrera:
ren och strukturerad JavaScript-arkitektur


modulär kodstruktur


arbete med DOM-interaktion


användning av REST API via JSON Server


korrekt Git-arbetsflöde


publicering via GitHub Pages


Projektet utvecklades fas för fas för att säkerställa tydlighet, underhållbarhet och möjlighet att förklara lösningen, enligt professionella utvecklingsprinciper.

🧰 Teknisk Stack
Följande teknologier och verktyg har använts i projektet:
HTML & CSS – Tillhandahållna startfiler för layout och UI


JavaScript (ES-moduler) – Applikationens kärnlogik


JSON Server – Lokalt REST API för filmdata


ESLint – Kodkvalitet och linting


Git & GitHub – Versionshantering och samarbete


GitHub Pages – Statisk publicering



📁 Slutlig Projektstruktur
movie-seat-booking-js/
│
├── index.html
├── style.css
│
├── js/
│   ├── main.js
│   ├── seatManager.js
│   ├── movie.js
│   ├── movieService.js
│   └── ui.js
│
├── db.json
├── .eslintrc.json
├── README.md
├── package.json
└── package-lock.json


🧩 Fasindelad Utvecklingssammanfattning
Projektet genomfördes i strukturerade faser. Varje fas fokuserade på ett tydligt ansvar och committades separat till GitHub.

🔹 Fas 0 – Miljö- och Repositorieuppsättning
I Fas 0 förbereddes projektets grund. Git initialiserades, ett personligt GitHub-repositorium skapades, ESLint installerades och konfigurerades, ES-moduler aktiverades och projektet gjordes redo för modulär JavaScript-utveckling. Ingen applikationslogik skrevs i denna fas.

🔹 Fas 1 – Modulär Struktur (Ingen Logik)
Fas 1 fokuserade på att strukturera JavaScript-koden i separata moduler. Filer skapades för platslogik, filmdata, UI-uppdateringar och API-hantering. Ansvarsområden definierades tydligt, men ingen funktionalitet implementerades ännu.

🔹 Fas 2 – Platsval (Seat Selection)
I Fas 2 implementerades funktionaliteten för platsval. Användaren kan välja och avvälja platser, medan platser markerade som upptagna inte kan klickas. Event delegation användes för effektivitet, och all platslogik isolerades i en egen modul.

🔹 Fas 3 – Filmklass (OOP)
Fas 3 introducerade objektorienterad programmering genom att skapa en Movie-klass med egenskaperna name och price. Detta säkerställde att filmdata är strukturerad och konsekvent i hela applikationen.

🔹 Fas 4 – JSON Server & Filminläsning
I Fas 4 flyttades filmdata bort från frontend och laddades istället från en lokal JSON Server via ett REST API. Rå JSON-data konverterades till Movie-objekt. Denna fas uppfyllde kravet att ladda filmer från en extern datakälla.

🔹 Fas 5 – Ta Bort Hårdkodade Priser
Fas 5 tog bort alla hårdkodade priser från HTML-koden. Filmlistan (dropdown) fylldes dynamiskt med JavaScript, vilket säkerställde att all affärsdata hanteras i JavaScript istället för i markup.

🔹 Fas 6 – Dynamisk Uppdatering av Platser & Pris
I Fas 6 kopplades användarinteraktioner till UI-uppdateringar. När platser väljs eller filmen ändras uppdateras antalet valda platser och totalpriset automatiskt. UI-logiken isolerades i en separat modul.

🔹 Fas 7 – Fallback-hantering för GitHub Pages
Fas 7 hanterade begränsningen att JSON Server inte kan köras på GitHub Pages. En fallback-lista med filmer implementerades så att applikationen fortsätter fungera korrekt även utan backend vid publicering.

🔹 Fas 8 – Dokumentation & Publicering
I den sista fasen färdigställdes README-filen, en daglig loggbok lades till, GitHub Pages aktiverades och projektet verifierades från start till slut. Ingen ny logik introducerades i denna fas.

📘 Daglig Loggbok
Dag 1
 Projektuppsättning, skapande av repositorium, ESLint-konfiguration och förberedelse för ES-moduler.
Dag 2
 Modulär JavaScript-struktur och implementation av platsval.
Dag 3
 Skapande av Movie-klass och integration av JSON Server för filminläsning.
Dag 4
 Dynamisk filmdropdown, borttagning av hårdkodade priser samt UI-uppdateringar för platsantal och totalpris.
Dag 5
 Fallback-hantering för GitHub Pages, sluttestning, färdigställande av dokumentation och publicering.

🌍 Publicering (GitHub Pages)
Applikationen är publicerad med GitHub Pages. Eftersom GitHub Pages inte stödjer backend-tjänster används fallback-filmdata när JSON Server inte är tillgänglig.

🔗 Inlämningslänkar
GitHub-repositorium:
 👉 https://github.com/Suleiman-90/movie-seat-booking.git
GitHub Pages (Live-version):
 👉 https://suleiman-90.github.io/movie-seat-booking

🧠 Hur man Kör Projektet Lokalt
Öppna index.html direkt i en webbläsare


(Valfritt) Starta JSON Server lokalt för att ladda filmdata från API


Platsval, filmval och prisberäkning fungerar automatiskt


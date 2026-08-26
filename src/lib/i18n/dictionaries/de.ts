// Draft translation, pending native review before external citation.
//
// Factual rule for this file: every figure, package price, payment split,
// support window and performance statement must match the English source
// exactly. The 90+ Lighthouse figure is a lab acceptance target checked before
// handover. It is never to be described as "garantiert" or as a guarantee of a
// score, a ranking or a revenue outcome.

import type { Dictionary } from "./types";
import { reviewQuote } from "@/data/reviews";

const de: Dictionary = {
  nav: {
    home: "Startseite",
    services: "Leistungen",
    pricing: "Preise",
    contact: "Kontakt",
    about: "Über uns",
    blog: "Blog",
  },
  common: {
    ctaPrimary: "Migrationsplan anfordern",
    ctaSecondary: "Beispiel-Leistungsumfänge ansehen",
    faqHeading: "Häufige Fragen",
    languageLabel: "Sprache",
    englishSourceNote:
      "Die englischen Seiten bleiben die Referenzfassung dieser Website und enthalten sämtliche Inhalte, einschließlich des Blogs.",
    englishSourceLinkLabel: "Diese Seite auf Englisch ansehen",
    skipToContent: "Zum Hauptinhalt springen",
  },

  home: {
    meta: {
      title: "Website-Migration ohne SEO-Verluste planen | PandaCodeGen",
      description:
        "Migrationen von WordPress, Wix, Squarespace, Webflow und GoHighLevel auf eine individuelle Next.js-Website, die Ihnen vollständig gehört. Pakete ab 1.500 $.",
    },
    hero: {
      eyebrow: "Migration und Web-Engineering",
      title: "WordPress oder Wix zu klein geworden?",
      titleAccent: "Wechseln Sie zu einer Website, die darauf ausgelegt ist, wie KI ihre Antworten auswählt.",
      lead:
        "Wir holen Sie von WordPress, Wix, Squarespace, Webflow oder GoHighLevel auf ein individuelles Next.js, das Ihnen vollständig gehört, ohne den Traffic zu verlieren, den Sie bereits haben. Ihre Seiten laden schnell und stellen eine klare Antwort genau dort bereit, wo ChatGPT, Claude, Perplexity und Google AI sie finden und Sie zitieren können.",
    },
    summary:
      "PandaCodeGen ist ein Studio für individuelle Next.js-Webentwicklung und baut langsame WordPress-, Shopify-, Webflow-, Wix- und Squarespace-Websites in individuellen Code um, der dem Kunden vollständig gehört. Projekte beginnen bei 1.500 $ zum Festpreis für den schriftlich vereinbarten Leistungsumfang, tragen einen Lighthouse-Zielwert von 90+ bei der Übergabe auf Mobilgeräten und Desktop, geprüft über drei aufgezeichnete Durchläufe, und verursachen keine monatlichen Plattformgebühren. Die Seiten kommen als fertiges HTML, mit klaren und direkten Antworten, die Suchmaschinen und KI-Assistenten wie ChatGPT, Claude und Perplexity zitieren können.",
    sections: [
      {
        title: "Wochen statt Monate",
        body:
          "Wir verbinden KI-gestützte Entwicklungswerkzeuge mit erfahrenen Ingenieuren und liefern Websites in Produktionsqualität nach dem Zeitplan, der in den angenommenen Projektbedingungen festgehalten ist. KI beschleunigt Bau und Tests; Architekturentscheidungen, QA und Umschaltung bleiben bei den beiden Mitgründern.",
        bullets: [
          "Claude AI für die Architekturarbeit",
          "Cursor für die Entwicklung",
          "Automatisierte Testketten vor jedem Prüfpunkt",
        ],
      },
      {
        title: "Eine dokumentierte Migration vor dem Livegang",
        body:
          "Kein Dienstleister kontrolliert Suchmaschinen-Rankings. Was vermeidbares Risiko senkt, ist ein dokumentierter Ablauf: vollständige URL-Inventur, eine 1:1-Weiterleitungskarte mit 301-Redirects, Übernahme von Schema-Markup und Metadaten, Neuerzeugung der Sitemap, konsistente Canonicals, ein stufenweiser DNS-Wechsel und Überwachung in der Search Console nach dem Livegang.",
        bullets: [
          "Ihre bisherige Website bleibt online, bis die neue verifiziert ist.",
          "Ein Rückfallweg wird vor dem Umschalten dokumentiert.",
          "Verantwortlichkeiten für Livegang, Messung und Rückfall sind schriftlich festgehalten, nicht stillschweigend vorausgesetzt.",
        ],
      },
      {
        title: "Performance-Ziel bei der Übergabe",
        body:
          "Jedes Projekt trägt einen Lighthouse-Zielwert von 90+ auf Mobilgeräten und Desktop, für die im schriftlichen Leistungsumfang benannten repräsentativen Seiten, geprüft über drei aufgezeichnete Durchläufe vor der Übergabe. Das ist ein im Labor gemessenes Abnahmeziel: keine Zusicherung eines Scores, eines Rankings, eines Umsatzes oder von Core Web Vitals aus Felddaten, nachdem Skripte Dritter ergänzt wurden.",
      },
      {
        title: "Eigentum und Kosten",
        body:
          "Sie erhalten das Code-Repository, die Umgebungen und die Zugänge. Eigentums- und Lizenzbedingungen stehen im Angebot, und bekannte Kosten Dritter werden vor der Freigabe dokumentiert, damit keine Abhängigkeit erst nach dem Livegang auffällt.",
      },
    ],
    faq: [
      {
        q: "Was kostet eine Migration von WordPress zu Next.js?",
        a: "Eine Migration von WordPress zu Next.js beginnt bei 1.500 $ für eine Unternehmenswebsite mit 5 bis 7 Seiten (Starter), 3.500 $ für eine Website mit 10 bis 20 Seiten inklusive Blog-Migration und 301-Weiterleitungen (Growth) sowie 5.000 $ bis 10.000 $ für Headless-Commerce mit mehr als 30 Seiten und individuellen Integrationen (Scale). Der Preis ist fest für den Leistungsumfang, der in den angenommenen Projektbedingungen festgehalten ist.",
      },
      {
        q: "Verliere ich bei der Migration meine Rankings?",
        a: "Kein Dienstleister kontrolliert Suchmaschinen-Rankings, deshalb kann niemand seriös zusichern, dass sie erhalten bleiben. Vermeidbares Risiko senkt ein dokumentierter Ablauf: URL-Inventur, 301-Weiterleitungskarte, Übernahme von Schema-Markup und Metadaten, Neuerzeugung der Sitemap, konsistente Canonicals, stufenweiser DNS-Wechsel und Überwachung nach dem Livegang.",
      },
      {
        q: "Arbeiten Sie mit Shopify-Shops?",
        a: "Ja. Wir bauen individuelle Shopify-Storefronts in Headless-Architektur: Ihre Kundschaft sieht ein schnelles, individuelles Frontend, während Sie Produkte und Bestellungen weiterhin in Shopify verwalten. Der Geschwindigkeitsgewinn hängt vom Shop ab, deshalb messen wir Ihren Ausgangswert vor dem Angebot.",
      },
      {
        q: "Warum nicht einfach schnelleres WordPress-Hosting oder ein Caching-Plugin?",
        a: "Schnelleres Hosting und Caching helfen, ändern aber das zugrunde liegende Modell nicht: WordPress setzt jede Seite bei Aufruf neu zusammen, fragt die Datenbank ab, lädt Plugins und rendert das Theme. Ein statisch erzeugter oder serverseitig gerenderter individueller Build entfernt diesen Zusammenbau, statt ihn zu verdecken.",
      },
    ],

    continuity: {
      eyebrow: "Der Migrationsstandard",
      title: "Der Neubau ist neu.",
      titleAccent: "Die kritischen Pfade bleiben nachgehalten.",
      lead:
        "Vor dem Umschalten dokumentieren wir, was den Umzug überstehen muss und wie jeder Punkt geprüft wird. Genau das meinen wir mit „Migration ohne SEO-Verluste“: Risikokontrollen, kein Ranking-Versprechen.",
      ledgerTitle: "Migrations-Kontinuitätsregister",
      ledgerNote: "Die Übergabesicht für Systeme, die während eines Neubaus nicht ausfallen dürfen.",
      badge: "Vor dem Livegang definiert",
      columns: {
        area: "Kontinuität",
        control: "Kontrollfläche",
        evidence: "Für Kunden lesbarer Nachweis",
      },
      rows: [
        {
          area: "Such-Kontinuität",
          control: "URLs, Canonicals und indexierbare Inhalte",
          evidence: "Inventur und Weiterleitungsspezifikation",
        },
        {
          area: "Umsatz-Kontinuität",
          control: "Formulare, Checkout-Pfade und Integrationen",
          evidence: "Ende-zu-Ende-Testprotokoll auf der Staging-Umgebung",
        },
        {
          area: "Mess-Kontinuität",
          control: "Analytics, Einwilligung und Conversion-Ereignisse",
          evidence: "Ausgangswerte und QA-Protokoll der Ereignisse",
        },
        {
          area: "Betriebs-Kontinuität",
          control: "DNS, Verantwortliche für den Livegang, Überwachung und Rückfall",
          evidence: "Launch-Runbook mit benannten Verantwortlichen",
        },
      ],
      caption:
        "Beispielhafte Übergabestruktur. Ihr angenommener Leistungsumfang legt die tatsächlichen Systeme, Prüfungen, Verantwortlichkeiten und Abnahmenachweise fest.",
    },

    build: {
      eyebrow: "Unsere Expertise",
      title: "Migrationen, gebaut um das herum,",
      titleAccent: "was brechen kann.",
      lead:
        "Drei Schwerpunkte, ein Ziel: Ihr Geschäft schneller, günstiger im Betrieb und schwerer zu übersehen zu machen. Wir inventarisieren Seiten, Inhalte, Analytics, Formulare und Integrationen, bevor die Bauarbeit beginnt, und prüfen die Umschaltung anschließend gegen schriftliche Abnahmekriterien.",
      pillars: [
        {
          title: "Migrationen und Neubauten",
          body:
            "Ist Ihre WordPress-, Wix-, Squarespace- oder Webflow-Website langsam, fragil oder teuer im Unterhalt? Wir überführen sie in individuellen Code, mit URL-Inventur, Weiterleitungsplan und Prüfung vor dem Umschalten.",
          bullets: [
            "Keine Plugin-Updates mehr zu überwachen",
            "Kleinere Angriffsfläche: keine Schwachstellen aus Plugins",
            "Übernahme von Inhalten, Metadaten und Weiterleitungen inbegriffen",
          ],
        },
        {
          title: "Webanwendungen und Dashboards",
          body:
            "Für Verantwortliche, die mehr als eine Website brauchen: Kundenportale, interne Dashboards, KI-gestützte Werkzeuge und Oberflächen, die zuerst für mobile Geräte entworfen werden.",
          bullets: [
            "Läuft auf iPhone und Android",
            "KI-gestützte Abfrage Ihrer eigenen Daten",
            "Zahlungen, Abonnements und Administrationsoberflächen in Echtzeit",
          ],
        },
        {
          title: "Hochperformanter Handel",
          body:
            "Standard-Shopify-Themes sind langsam. Wir bauen vollständig individuelle Storefronts, während Ihr bestehendes Backend Produkte, Bestellungen und Zahlungen weiterführt.",
          bullets: [
            "Schluss mit monatlichen Gebühren für überflüssige Apps",
            "Anbindung an den Shopify- oder WooCommerce-Bestand",
            "Kaufprozess, der auf Ihren Katalog zugeschnitten ist",
          ],
        },
      ],
      platformsLabel: "Häufige Ausgangsplattformen",
      platforms: [
        "WordPress",
        "Shopify",
        "WooCommerce",
        "Wix",
        "Squarespace",
        "Webflow",
        "GoHighLevel",
      ],
    },

    audience: {
      eyebrow: "Für wen wir arbeiten",
      title: "Beginnen Sie mit der Ausgangslage.",
      lead:
        "Das sind häufige Ausgangslagen. Wir untersuchen die passendste, bevor wir einen Neubau, eine Migration oder eine Integration empfehlen.",
      signalLabel: "Ausgangslage",
      approachLabel: "Unser Vorgehen",
      segments: [
        {
          signal: "Die Berichte aus bezahlten Kampagnen decken sich nicht mit den tatsächlichen Anfragen oder Verkäufen.",
          approach:
            "Wir prüfen Browser- und Serverereignisse, Einwilligung, Attributionsgrenzen und Plattformdiagnosen, bevor wir Änderungen am Tracking vorschlagen.",
        },
        {
          signal: "Kundinnen und Kunden springen irgendwo zwischen Produktsuche und abgeschlossenem Checkout ab.",
          approach:
            "Wir messen Seitenperformance und Checkout-Pfad, benennen die belegbaren Ursachen und kalkulieren nur die Änderungen, die die Belege rechtfertigen.",
        },
        {
          signal: "Die aktuelle Website-Plattform erzeugt messbare Performance- oder Wartungsgrenzen.",
          approach:
            "Wir kartieren URLs, Inhalte, Integrationen, DNS, Analytics, Rückfallbedarf und Plattformkosten, bevor wir Optimierung oder Migration empfehlen.",
        },
        {
          signal: "Abonnierte Werkzeuge überschneiden sich, erzeugen Handarbeit oder lassen sich als Gesamtpaket schwer bewerten.",
          approach:
            "Wir inventarisieren Abonnements und Ersatzkosten und empfehlen individuelle Software nur dort, wo der erwartete Nutzen Bau und Wartung rechtfertigt.",
        },
        {
          signal: "Wichtige Inhalte sind für Such- und Antwortsysteme schwer auffindbar, deutbar oder zuordenbar.",
          approach:
            "Wir prüfen Crawlbarkeit, Entitätsklarheit, strukturierte Daten, Antwortformatierung und Quellenqualität. Aufnahme und Zitierung entscheiden weiterhin Dritte.",
        },
        {
          signal: "Eine Agentur braucht Engineering-Kapazität mit klaren Rollen und nachvollziehbarer Kommunikation.",
          approach:
            "Wir halten Lieferrollen, Markenauftritt, Vertraulichkeit, Freigaben, Zeitannahmen und kommerzielle Bedingungen in der Partnervereinbarung fest.",
        },
      ],
    },

    process: {
      title: "Vom ersten Gespräch bis zum",
      titleAccent: "Livegang.",
      lead: "Vier prüfbare Phasen, in denen die wichtigen Entscheidungen vor dem Livegang festgehalten werden.",
      stepLabel: "Schritt",
      steps: [
        {
          number: "01",
          title: "Discovery",
          body:
            "Wir inventarisieren die bestehenden URLs, Inhalte, Formulare, Analytics, Integrationen und messbaren Ausgangswerte, bevor wir einen Migrationsumfang empfehlen.",
        },
        {
          number: "02",
          title: "Architektur",
          body:
            "Wir dokumentieren, was bleiben, umziehen, angebunden oder ersetzt werden soll, dazu Abhängigkeiten, Risiken, Abnahmekriterien und Betriebskosten.",
        },
        {
          number: "03",
          title: "Umsetzung",
          body:
            "Die neue Implementierung wird in prüfbaren Zwischenständen geliefert, damit Inhalte, Verhalten, Integrationen und Sonderfälle vor dem Umschalten validiert werden können.",
        },
        {
          number: "04",
          title: "Livegang",
          body:
            "Vor dem Umschalten prüfen wir Weiterleitungen, Formulare, Analytics, Barrierefreiheit, Metadaten, Überwachung und den Rückfallweg gegen die freigegebene Launch-Checkliste.",
        },
      ],
    },

    controls: {
      eyebrow: "Entscheidungskontrollen",
      title: "Die kaufmännischen Annahmen sichtbar machen.",
      lead:
        "Ein individueller Build ist nicht automatisch günstiger, schneller oder passender als eine gemanagte Plattform. Der nützliche Vergleich betrifft den dokumentierten Leistungsumfang, das Betriebsmodell, das Risiko und die Messmethode für genau diese Website.",
      items: [
        {
          number: "01",
          title: "Inventur vor Architektur",
          body:
            "URLs, Inhalte, CMS-Modelle, Formulare, Integrationen, Analytics, Anforderungen an Barrierefreiheit, Beteiligte und Umschaltbedingungen sichten, bevor ein Technologie-Stack gewählt wird.",
        },
        {
          number: "02",
          title: "Gesamtkosten vergleichen",
          body:
            "Aktuelle und geplante Kosten für Plattform, Apps, Hosting, Datenbank, E-Mail, Observability, Zahlungen, Support und Migration anhand datierter Anbieterpreise und Nutzungsannahmen dokumentieren.",
        },
        {
          number: "03",
          title: "Abnahme gegen schriftliche Belege",
          body:
            "Leistungen, Ausschlüsse, Testbedingungen, Eigentum, Lizenzen, Änderungssteuerung, Gewährleistung, Support, Rechtsbehelfe und Übergabe gehören ins Angebot.",
        },
      ],
    },

    founders: {
      eyebrow: "Das Team",
      title: "Von den Gründern gebaut,",
      titleAccent: "nicht ausgelagert.",
      lead:
        "Wenn Sie ein Gespräch buchen, antwortet Hassan. Er schreibt den Code. Imran verantwortet die Architektur. Verträge und Support aus den USA, mit direktem Zugang zu den Gründern in jedem Projekt: keine Kundenbetreuung dazwischen, kein White-Label-Outsourcing.",
      people: [
        {
          name: "Hassan Jamal",
          role: "Mitgründer und leitender Ingenieur",
          bio:
            "Entwirft die Architekturen und schreibt den Code. Die Person aus dem Erstgespräch ist die Person, die das Projekt umsetzt.",
          tags: [
            "WordPress-Migrationen",
            "E-Commerce-Umsetzungen",
            "Performance-Optimierung",
            "Individuelle Plattformen",
          ],
        },
        {
          name: "Imran Raza Ladhani",
          role: "Mitgründer und leitender Architekt",
          bio:
            "Hat PandaCodeGen gemeinsam mit Hassan gegründet und verantwortet die Architektur: Machbarkeit von Migrationen, Systemdesign und Umschaltungen ohne Ausfallzeit.",
          tags: [
            "Next.js-Architektur",
            "Plattform-Migrationen",
            "Systemdesign",
            "Headless-Commerce",
          ],
        },
      ],
      note: "Die Code-Beiträge sind öffentlich und auf GitHub überprüfbar.",
    },

    antiAgency: {
      eyebrow: "Der Engineering-Standard",
      title: "Wir sind keine „Digitalagentur“.",
      lead:
        "Agenturen verkaufen Stunden. Wir liefern technische Ergebnisse. Wir haben die Zwischenschichten entfernt, an denen B2B-Projekte in Zeit und Budget scheitern.",
      pillars: [
        {
          title: "Gründer statt Kundenbetreuung",
          body:
            "Sie arbeiten direkt mit dem Mitgründer und Ingenieur, der Ihre Website baut: eine feste Ansprechperson von der Discovery bis zum Livegang. Keine Ticket-Warteschlangen, keine Dienstleister, die mitten im Projekt verschwinden.",
        },
        {
          title: "Kein Outsourcing",
          body:
            "Wir lagern nicht aus. Jede Zeile Code stammt von unseren eigenen Ingenieuren, denselben Personen, mit denen Sie im Erstgespräch sprechen.",
        },
        {
          title: "Das geistige Eigentum liegt bei Ihnen",
          body:
            "Wir übergeben den vollständigen Quellcode und deployen auf Ihr Hosting-Konto, nicht auf unseres. Ein monatlicher Wartungsvertrag ist nicht erforderlich: Die Kontrolle bleibt bei Ihnen.",
        },
      ],
      ctaTitle: "Bereit, mit Ingenieuren statt mit Kundenbetreuung zu arbeiten?",
      ctaBody: "Nennen Sie uns Ihre aktuelle Plattform, Ihr größtes Risiko und den angestrebten Zeitplan.",
    },

    proof: {
      eyebrow: "Belege statt Inszenierung",
      title: "Kundenstimmen mit einer Quelle,",
      titleAccent: "die Sie selbst öffnen können.",
      lead:
        "Keine Stockfotos, keine rotierenden Sterne, keine anonymen Ergebnisbehauptungen. Das sind kurze Auszüge aus öffentlichen Bewertungsseiten, verlinkt, damit Sie den vollständigen Zusammenhang selbst nachlesen können.",
      quoteLanguageNote:
        "Die Bewertungen stehen unübersetzt in ihrer Veröffentlichungssprache Englisch, damit sie dem publizierten Wortlaut entsprechen.",
      record: {
        label: "Kundenprojekt",
        value: "22 Tage",
        title: "Projekt MyCustomPatches, unabhängiger Kunde",
        body:
          "Vom Inhaber bestätigter Projektnachweis, festgehalten am 21. Juli 2026: Lieferung in 22 Tagen, Rankings gehalten und Hosting-Kosten im erfassten Zeitraum von 150 $/Monat auf 0 $/Monat gesenkt.",
      },
      quotes: [
        {
          // Sourced from reviews.ts, not retyped. A verbatim quote is the one
          // string on the site that must never differ between surfaces, and it
          // stays in English on the translated pages because translating what
          // someone said turns a quotation into a paraphrase.
          quote: reviewQuote("mycustompatches"),
          source: "Verifizierte Clutch-Bewertung",
          detail: "März 2026",
          href: "https://clutch.co/profile/panda-code-gen#reviews",
        },
        {
          quote: "Hassan was super helpful and communicative throughout the process.",
          source: "Marshall James auf Trustpilot",
          detail: "März 2026",
          href: "https://www.trustpilot.com/review/pandacodegen.com",
        },
        {
          quote: "They worked with me to make a website that I could afford.",
          source: "James Peace auf Trustpilot",
          detail: "März 2026",
          href: "https://www.trustpilot.com/review/pandacodegen.com",
        },
      ],
      clutchLabel: "Clutch-Bewertungen",
      trustpilotLabel: "Trustpilot-Bewertungen",
      affiliation: {
        label: "Eigentumsverhältnis, klar gekennzeichnet",
        title: "Panda Patches gehört Imran Raza Ladhani, Mitgründer von PandaCodeGen.",
        body:
          "Wir haben die Plattform gebaut. Das Projekt steht hier als Betriebserfahrung, nicht als Empfehlung eines unabhängigen Kunden.",
      },
    },

    closing: {
      title: "Sprechen wir über Ihre Migration.",
      body:
        "Beschreiben Sie Ihre aktuelle Plattform, das größte Risiko und den angestrebten Zeitplan. Annahmen und offene Fragen dokumentieren wir vor jeder Kalkulation, und wir sagen es Ihnen, wenn die Reparatur der bestehenden Website die bessere Antwort ist.",
    },
  },

  services: {
    meta: {
      title: "Website-Migration und individuelles Web-Engineering | PandaCodeGen",
      description:
        "Website-Migration, Commerce-Diagnose und individuelles Web-Engineering, strukturiert entlang von Belegen, Abnahme, Umschaltung und Übergabe.",
    },
    hero: {
      eyebrow: "Was wir bauen",
      title: "Leistungen und",
      titleAccent: "Architektur.",
      lead:
        "Drei Kernbereiche. Ein Ziel: Ihr Geschäft schneller, günstiger im Betrieb und schwerer zu übersehen zu machen.",
    },
    summary:
      "PandaCodeGen bietet drei Leistungsfamilien: Website-Migration von WordPress, Wix, Squarespace, Webflow, WooCommerce und GoHighLevel; individuelles Web-Engineering für Anwendungen, Portale und Dashboards; sowie hochperformanten Headless-Commerce. Jede Leistung wird zum Festpreis für einen schriftlichen Leistungsumfang kalkuliert und trägt einen Lighthouse-Zielwert von 90+ bei der Übergabe auf Mobilgeräten und Desktop, für die im Umfang benannten repräsentativen Seiten, geprüft über drei aufgezeichnete Durchläufe.",
    sections: [
      {
        title: "01 · WordPress-Migration",
        body:
          "Ist Ihre WordPress-Website langsam, wird sie angegriffen oder bricht sie regelmäßig? Wir überführen sie auf eine moderne Plattform aus individuellem Code, mit URL-Inventur, Weiterleitungsplan und Prüfung vor dem Umschalten.",
        bullets: [
          "Keine Plugin-Updates mehr zu überwachen",
          "Kleinere Angriffsfläche: keine Schwachstellen aus Plugins",
          "Übernahme von Inhalten, Metadaten und Weiterleitungen inbegriffen",
          "Lighthouse-Ziel 90+ auf den vereinbarten repräsentativen Seiten",
        ],
      },
      {
        title: "02 · Webanwendungen und Dashboards",
        body:
          "Für Gründerinnen und Gründer, die mehr als eine Website brauchen. Wir bauen Kundenportale, interne Dashboards, KI-Werkzeuge und mobiltaugliche Anwendungen.",
        bullets: [
          "Läuft auf iPhone und Android",
          "KI-gestützte Abfrage Ihrer eigenen Daten",
          "Zahlungen und Abonnements",
          "Administrationsoberflächen in Echtzeit",
        ],
      },
      {
        title: "03 · Hochperformante Shops",
        body:
          "Standard-Shopify-Themes sind langsam. Wir bauen vollständig individuelle Storefronts, die sofort laden, während Ihr bestehendes Backend Produkte, Bestellungen und Zahlungen weiterführt.",
        bullets: [
          "Schluss mit monatlichen Gebühren für überflüssige Apps",
          "Individuelle Upsell-Logik",
          "Anbindung an den Shopify- oder WooCommerce-Bestand",
          "Kaufprozess, der auf Ihren Katalog zugeschnitten ist",
        ],
      },
      {
        title: "Festpreis für den schriftlichen Leistungsumfang",
        body:
          "Vier Stufen, keine Abrechnung nach Stunden: Starter ab 1.500 $, Growth ab 3.500 $, Scale von 5.000 $ bis 10.000 $ und Scale+ individuell kalkuliert für Enterprise-Umfänge. Eine übliche Zahlungsoption sind 30 % zum Projektstart und 70 % zum Liefermeilenstein, der in den angenommenen Projektbedingungen definiert ist; ein anderer Zahlungsplan kann schriftlich vereinbart werden.",
      },
      {
        title: "Wie die Performance geprüft wird",
        body:
          "Die angenommenen Projektbedingungen benennen die repräsentativen Seiten und die reproduzierbaren Testbedingungen für Mobilgeräte und Desktop. Jeder der drei aufgezeichneten Lighthouse-Durchläufe vor der Übergabe muss je vereinbarter Seite und Profil 90 oder mehr erreichen. Das ist ein Laborabnahmeziel und keine Zusicherung von Core Web Vitals aus Felddaten, von Rankings oder von Umsatz.",
      },
    ],
    faq: [
      {
        q: "Von welchen Plattformen migrieren Sie?",
        a: "WordPress, WooCommerce, Wix, Squarespace, Webflow, GoHighLevel und Shopify sowie bestehende Individualentwicklungen. Der Umfang richtet sich nach URL- und Inhaltsvolumen, Content-Modell, Integrationen und Umschaltrisiko, nicht nach der Seitenzahl allein.",
      },
      {
        q: "Kann ich mein CRM oder mein Commerce-Backend behalten?",
        a: "Ja, das ist ein häufiger Fall. In einer Headless-Architektur wird die Storefront-Schicht durch individuellen Code ersetzt, während Ihr bestehendes Backend Produkte, Bestellungen und Zahlungen weiterführt.",
      },
      {
        q: "Was passiert vor einem Angebot?",
        a: "Wir sichten die aktuelle Plattform und die URLs, das Hauptziel, den Umfang von Inhalten und Traffic, die notwendigen Integrationen, den Zeitplan, den Budgetrahmen und bekannte Einschränkungen. Annahmen und offene Fragen werden vor jeder Kalkulation dokumentiert.",
      },
    ],
  },

  pricing: {
    meta: {
      title: "Preise und Leistungsumfang der Website-Migration | PandaCodeGen",
      description:
        "Migrationspakete beginnen bei 1.500 $, 3.500 $ und 5.000 $–10.000 $; Seiten und Funktionen werden in einem schriftlichen Angebot angepasst.",
    },
    hero: {
      eyebrow: "Vertragliche Klarheit",
      title: "Beispielhafte Migrationsumfänge.",
      titleAccent: "Ein schriftliches Angebot für Ihr tatsächliches Risiko.",
      lead:
        "Wählen Sie das nächstgelegene Startpaket und ergänzen oder streichen Sie Seiten und Funktionen in einem schriftlichen Angebot. Eine übliche Zahlungsstruktur sind 30 % zum Projektstart und 70 % zum Liefermeilenstein, der in den angenommenen Projektbedingungen definiert ist; für ein bestimmtes Projekt kann ein anderer schriftlicher Zahlungsplan vereinbart werden.",
    },
    summary:
      "Die Migrationspakete von PandaCodeGen beginnen bei 1.500 $ (Starter), 3.500 $ (Growth) und 5.000 $ bis 10.000 $ (Scale). Das sind Ausgangspunkte: Der Umfang ergibt sich aus URL- und Inhaltsvolumen, CMS-Modellen, Integrationen, Messung, Compliance-Anforderungen, Beteiligten und Migrationsrisiko, nicht aus der Seitenzahl allein. Maßgeblich für den endgültigen Preis sind die angenommenen schriftlichen Bedingungen.",
    tiersHeading: "Beispielhafte Startpakete",
    currencyNote:
      "Alle Beträge in US-Dollar (USD). Währung, Steuern und Fälligkeiten werden in den angenommenen Projektbedingungen festgehalten.",
    tiers: [
      {
        name: "Starter",
        price: "1.500 $",
        priceNote: "Startpaket · exakter Umfang im Angebot",
        fit: "Websites kleiner Unternehmen, 5 bis 7 Seiten.",
        features: [
          "5 bis 7 individuelle Seiten, mit den im Umfang aufgeführten Templates und Inhaltsverantwortlichkeiten",
          "Next.js-Deployment mit dokumentiertem Repository, dokumentierten Umgebungen und Übergabeverantwortlichkeiten",
          "Lighthouse-Zielwert 90+ auf Mobilgeräten und Desktop für die vereinbarten repräsentativen Seiten",
          "Drei aufgezeichnete Durchläufe vor der Übergabe je vereinbarter Seite und Profil; jeder Durchlauf muss das Ziel erreichen",
          "Mobile-First umgesetzt: zuerst für kleine Bildschirme entworfen, dann nach oben skaliert",
          "Hosting- und Drittanbieteroptionen vor der Freigabe dokumentiert",
          "15 Arbeitstage inkludierter Support für die vereinbarten Leistungen; Startzeitpunkt und Umfang stehen in den angenommenen Bedingungen",
        ],
      },
      {
        name: "Growth",
        price: "3.500 $",
        priceNote: "Startpaket · exakter Umfang im Angebot",
        fit: "10 bis 20 Seiten, CMS, vollständige Migration.",
        features: [
          "Individuelle Website mit 10 bis 20 Seiten: Leistungsseiten, Fallstudien und Ressourcen",
          "Sanity-CMS-Integration: Ihr Team pflegt Inhalte, ohne Code anzufassen",
          "Blog-Migration mit URL-Inventur, Weiterleitungskarte, Erhalt der Metadaten und Überwachung nach dem Livegang",
          "Lighthouse-Zielwert 90+ auf Mobilgeräten und Desktop, mit drei bestandenen Durchläufen je vereinbarter Seite und Profil",
          "Hosting- und Drittanbieterkosten vor der Freigabe aufgeführt",
          "30 Arbeitstage inkludierter Support für die vereinbarten Leistungen; Startzeitpunkt und Umfang stehen in den angenommenen Bedingungen",
        ],
      },
      {
        name: "Scale",
        price: "5.000 $–10.000 $",
        priceNote: "Startspanne · exakter Umfang im Angebot",
        fit: "Headless-Commerce und mehr als 30 Seiten.",
        features: [
          "Headless-Commerce: Shopify- oder WooCommerce-Backend, Next.js-Frontend",
          "Umfang von mehr als 30 Seiten oder Templates für Produkte, Kollektionen, Inhalte und Landingpages",
          "Geprüfte Integrationen wie Klaviyo, HubSpot, Salesforce, Stripe-Abonnements oder eine andere dokumentierte API",
          "Lighthouse-Zielwert 90+ auf Mobilgeräten und Desktop, mit drei bestandenen Durchläufen je vereinbarter Seite und Profil",
          "Sanity CMS und ein Content-Modell, das für Ihre Redaktion entworfen wird, statt generischer Templates",
          "30 Arbeitstage inkludierter Support für die vereinbarten Leistungen; Startzeitpunkt und Umfang stehen in den angenommenen Bedingungen",
        ],
      },
    ],
    termsHeading: "Flexible Ausgangspunkte",
    terms: [
      {
        number: "01",
        title: "Umfang und Ergänzungen",
        body:
          "Das Startpaket wird an die freigegebenen Seiten und Funktionen angepasst. Leistungen, Integrationen, Inhaltsverantwortlichkeiten, Ausschlüsse und separat bepreiste Ergänzungen werden ausdrücklich aufgeführt.",
      },
      {
        number: "02",
        title: "Schutz des schriftlichen Umfangs",
        body:
          "Wenn dieser Schutz in den angenommenen Projektbedingungen enthalten ist, erstattet PandaCodeGen 100 % der unter diesem Umfang gezahlten Honorare, sofern die zugesagten Leistungen nicht erbracht werden. Die schriftlichen Bedingungen definieren den auslösenden Fall und das Nachbesserungsverfahren; es handelt sich nicht um eine Erstattung bei Meinungsänderung.",
      },
      {
        number: "03",
        title: "Performance-Ziel 90+ bei der Übergabe",
        body:
          "Die angenommenen Projektbedingungen benennen die repräsentativen Seiten und die Testbedingungen für Mobilgeräte und Desktop. Jeder der drei aufgezeichneten Durchläufe je vereinbarter Seite und Profil muss vor der Übergabe 90+ erreichen. Das ist ein im Labor gemessenes Abnahmeziel und keine Zusicherung eines Scores, eines Rankings oder eines Umsatzes.",
      },
      {
        number: "04",
        title: "Support-Option",
        body:
          "Paketgespräche können mit 15 Arbeitstagen für Starter und 30 Arbeitstagen für Growth und Scale beginnen. Support gilt nur dann, wenn die angenommenen Bedingungen festhalten, wann er beginnt, welche Mängel oder kleineren Anpassungen er abdeckt und welche Sonderregelungen gelten.",
      },
      {
        number: "05",
        title: "Zahlung, Änderungen und Eigentum",
        body:
          "Eine übliche Zahlungsoption sind 30 % zum Projektstart und 70 % zum definierten Liefermeilenstein; die Parteien können schriftlich etwas anderes vereinbaren. Währung, Steuern, Korrekturschleifen, separat bepreiste Ergänzungen, Eigentumsübertragung, Lizenzen, Konten und Drittanbieterkosten werden vor der Umsetzung festgehalten.",
      },
      {
        number: "06",
        title: "Livegang und Rückfall",
        body:
          "Verantwortlichkeiten für Weiterleitungen, Analytics, Formulare, DNS, Überwachung, Rückfall und die Nachbetrachtung nach dem Livegang sind Teil des Umschaltplans.",
      },
    ],
    sections: [
      {
        title: "So entsteht das schriftliche Angebot",
        body:
          "Zuerst inventarisieren wir Seiten, Inhalte, Integrationen, Rahmenbedingungen, Beteiligte und Abnahmetests. Die schriftliche Projektzusammenfassung hält anschließend fest, was enthalten, ausgeschlossen und angenommen ist. Korrekturschleifen werden vor Arbeitsbeginn festgelegt, und wesentliche Anfragen außerhalb des Umfangs erhalten eine separate schriftliche Schätzung und benötigen eine Freigabe.",
      },
      {
        title: "Vergleichen Sie den Umfang, nicht nur den Schlagzeilenpreis",
        body:
          "Ein grob gehaltenes Angebot kann wichtige Annahmen offenlassen. Ein geprüfter Projektumfang benennt Abnahme-, Eigentums-, Kosten- und Änderungsregeln.",
        bullets: [
          "Umfang: URLs, Inhalte, Integrationen und Ausschlüsse aufgeführt",
          "Performance: Lighthouse-Ziel 90+, Seiten, Profil und Prüfung über drei Durchläufe schriftlich im Umfang",
          "Migration: Inventur, Weiterleitungskarte, QA und Rückfallplan",
          "Eigentum: Eigentums- und Lizenzbedingungen im Angebot benannt",
          "Laufende Kosten: bekannte Drittanbieterkosten vor der Freigabe dokumentiert",
          "Änderungen: Arbeiten außerhalb des Umfangs erfordern ein separates schriftliches Angebot",
        ],
      },
    ],
    faq: [
      {
        q: "Mit welchem Paket sollte ich starten?",
        a: "Starter beginnt bei 1.500 $, Growth bei 3.500 $, und Scale liegt normalerweise zwischen 5.000 $ und 10.000 $. Wählen Sie die nächstgelegene Basis; zusätzliche Seiten oder Funktionen werden vor Arbeitsbeginn im schriftlichen Umfang besprochen und bepreist.",
      },
      {
        q: "Brauche ich für jedes Projekt einen langen Vertrag?",
        a: "Nein. Ein unkompliziertes Projekt kann über ein klares schriftliches Angebot oder eine Auftragszusammenfassung laufen, die per E-Mail oder Chat angenommen wird. Regulierte, sensible oder komplexe Arbeiten benötigen unter Umständen eine unterzeichnete Leistungsbeschreibung. In jedem Fall sind die angenommenen schriftlichen Projektbedingungen maßgeblich.",
      },
      {
        q: "Wie funktionieren die Zahlungsmeilensteine?",
        a: "Eine übliche Option sind 30 % zum Projektstart und 70 % zum Liefermeilenstein, der in den angenommenen Projektbedingungen definiert ist; die Parteien können auch einen anderen schriftlichen Zahlungsplan vereinbaren. Die angenommenen Bedingungen halten zudem Währung, Steuern, Fälligkeiten, Freigabepunkte sowie Pausen- oder Kündigungsregelungen fest.",
      },
      {
        q: "Was, wenn mein Projekt größer ist als Scale?",
        a: "Größere, mehrregionale, E-Commerce-, Anwendungs- und integrationsintensive Vorhaben werden nach einer Discovery-Phase separat kalkuliert. Das Angebot listet Team, Leistungen, Abhängigkeiten, Ausschlüsse und Zeitplan der Zusammenarbeit auf.",
      },
      {
        q: "Wie wird das Performance-Ziel von 90+ geprüft?",
        a: "Die angenommenen Projektbedingungen benennen die repräsentativen Seiten und die reproduzierbaren Lighthouse-Bedingungen für Mobilgeräte und Desktop. Jeder der drei aufgezeichneten Durchläufe vor der Übergabe muss je vereinbarter Seite und Profil 90 oder mehr erreichen. Das ist ein Laborabnahmeziel, keine Zusicherung von Core Web Vitals aus Felddaten, von Rankings, von Umsatz oder von unveränderten Ergebnissen nach Änderungen durch Dritte oder durch den Kunden.",
      },
      {
        q: "Wann greift die Erstattung von 100 %?",
        a: "Wenn dieser Schutz in den angenommenen Projektbedingungen enthalten ist, greift er, sofern PandaCodeGen die unter diesem schriftlichen Umfang zugesagten Leistungen nicht erbringt. Die Bedingungen definieren den auslösenden Fall, die Prüfung und ein etwaiges Nachbesserungsverfahren. Er greift nicht allein deshalb, weil sich Präferenzen ändern oder Arbeiten außerhalb des vereinbarten Umfangs gewünscht werden.",
      },
    ],
  },

  contact: {
    meta: {
      title: "Migrationsplan für Ihre Website anfordern | PandaCodeGen",
      description:
        "Beschreiben Sie PandaCodeGen Ihre aktuelle Plattform, Ihre Migrationsrisiken, Ihre Integrationen und Ihren Zieltermin.",
    },
    hero: {
      eyebrow: "Kontaktaufnahme",
      title: "Fordern Sie einen Plan für Ihre",
      titleAccent: "Website-Migration an.",
      lead:
        "Beschreiben Sie Ihre aktuelle Plattform, die Migrationsrisiken, die vorhandenen Integrationen und den angestrebten Zeitplan. Annahmen und offene Fragen dokumentieren wir vor jeder Kalkulation.",
    },
    summary:
      "Zur Einschätzung eines Projekts benötigt PandaCodeGen die Adresse der aktuellen Website, die eingesetzte Plattform, das Hauptziel, die Größenordnung des Traffics, den Zeitplan und den Budgetrahmen. Die erste Antwort beschreibt Annahmen, offene Fragen und erkannte Migrationsrisiken, bevor ein bepreistes Angebot entsteht.",
    checklistHeading: "Das gehört in Ihre Nachricht",
    checklist: [
      "Adresse der aktuellen Website und eingesetzte Plattform (WordPress, Webflow, Wix, Squarespace, Shopify, WooCommerce, GoHighLevel oder Individualentwicklung)",
      "Ihr Hauptziel: Migration ohne SEO-Verluste, Performance, geringere Plattformkosten, Relaunch, Headless-Commerce oder individuelle Integration",
      "Größenordnung des monatlichen Traffics und ungefähre Anzahl der URLs",
      "Unverzichtbare Integrationen: CRM, E-Mail-Marketing, Zahlung, Analytics, ERP",
      "Angestrebter Zeitplan und Budgetrahmen",
      "Bekannte Einschränkungen: Compliance, Sprachen, Beteiligte, Vertragsverlängerungstermine",
    ],
    emailLabel: "E-Mail",
    addressLabel: "Anschrift",
    formNote:
      "Das ausführliche Anfrageformular steht derzeit auf Englisch zur Verfügung. Sie können auch direkt auf Deutsch an die oben genannte Adresse schreiben: Die Abstimmung zum Leistungsumfang ist auf Deutsch oder Englisch möglich.",
    formLinkLabel: "Anfrageformular öffnen (auf Englisch)",
    sections: [
      {
        title: "Was als Nächstes passiert",
        body:
          "Wir sichten die aktuelle Plattform, den URL-Bestand, das Content-Modell, die Integrationen, das Traffic-Profil, das Geschäftsziel, den Zeitplan und den Budgetrahmen. Annahmen, offene Fragen, Abhängigkeiten, Ausschlüsse, Abnahmekriterien und Drittanbieterkosten werden vor der Umsetzung dokumentiert.",
      },
      {
        title: "Was wir nicht tun",
        body:
          "Wir sagen keine Suchmaschinen-Rankings zu, und wir empfehlen keinen Neubau, wenn die Belege dafür sprechen, die bestehende Website zu reparieren. Sie werden nicht an eine Kundenbetreuung übergeben: Die beiden Mitgründer, die Ihr Projekt kalkulieren, sind die beiden Ingenieure, die es umsetzen.",
      },
    ],
    faq: [
      {
        q: "In welchen Sprachen arbeiten Sie?",
        a: "Abstimmung und Support laufen auf Englisch; schriftlicher Austausch auf Deutsch ist möglich. Die angenommenen Projektbedingungen werden auf Englisch verfasst und sind die maßgebliche Fassung.",
      },
      {
        q: "Wie schnell kommt eine Antwort?",
        a: "Wir antworten per E-Mail mit Rückfragen zum Umfang oder einem Terminvorschlag. Es wird keine automatische Diagnose verschickt: Die erste Antwort entsteht, nachdem die übermittelten Angaben gelesen wurden.",
      },
    ],
  },

  about: {
    meta: {
      title: "Über PandaCodeGen | Standards für Migrationsprojekte",
      description:
        "Lernen Sie die Mitgründer von PandaCodeGen kennen und sehen Sie, wie das im Februar 2026 gegründete Unternehmen Website-Migrationen, Abnahmekriterien, Umschaltrisiko und Übergabe strukturiert.",
    },
    hero: {
      eyebrow: "Die Anti-Agentur · Gegründet im Februar 2026 · Von den Mitgründern geführt",
      title: "Migrationsrisiko senken,",
      titleAccent: "bevor Produktionscode entsteht.",
      lead:
        "PandaCodeGen unterstützt Unternehmen bei Planung und Umsetzung von Website-Migrationen, wenn URLs, Inhalte, Integrationen, Messbarkeit und operative Kontrolle zählen. Die Arbeit beginnt mit Belegen und einem schriftlichen Leistungsumfang, nicht mit dem automatischen Versprechen, dass eine Website neu gebaut werden muss.",
    },
    summary:
      "PandaCodeGen ist ein im Februar 2026 gegründetes Webentwicklungsstudio mit Sitz in Stafford, Texas. Das Unternehmen wird von seinen beiden Mitgründern geführt: Hassan Jamal, Mitgründer und leitender Ingenieur, sowie Imran Raza Ladhani, Mitgründer und leitender Architekt. Die beiden Personen, die ein Projekt kalkulieren, sind die beiden Ingenieure, die es umsetzen.",
    sections: [
      {
        title: "Migrationskontinuität",
        body:
          "Der Leistungsumfang benennt die bestehenden URLs, Inhalte, Integrationen, Weiterleitungen, Analytics, Verantwortlichkeiten beim Umschalten und die Bedingungen für einen Rückfall.",
      },
      {
        title: "Schriftliche Abnahme",
        body:
          "Leistungen, Ausschlüsse, Testseiten, Browserunterstützung, Performance-Methodik, Eigentum, Gewährleistung und Rechtsbehelfe gehören in die angenommenen Projektbedingungen.",
      },
      {
        title: "Dokumentierter Zugang und dokumentierte Übergabe",
        body:
          "Repository, Hosting, Domains, Konten, Lizenzen und der Zeitpunkt der Übergabe werden dokumentiert, damit Kontrolle weder stillschweigend vorausgesetzt noch bis zum Livegang aufgeschoben wird.",
      },
      {
        title: "Unser Vorgehen",
        body: "Vier Schritte, in dieser Reihenfolge.",
        bullets: [
          "Die aktuelle Plattform, den URL-Bestand, das Content-Modell, die Integrationen, das Traffic-Profil, das Geschäftsziel, den Zeitplan und den Budgetrahmen sichten.",
          "Annahmen, offene Fragen, Abhängigkeiten, Ausschlüsse, Abnahmekriterien und Drittanbieterkosten vor der Umsetzung dokumentieren.",
          "Repräsentative Templates bauen und testen, danach Weiterleitungen, Formulare, Analytics, Barrierefreiheit und Verantwortlichkeiten beim Livegang prüfen.",
          "Anhand einer schriftlichen Checkliste umschalten, einen Rückfallweg vorhalten und die in den angenommenen Projektbedingungen definierten Belege sowie die Übergabe abschließen.",
        ],
      },
    ],
    faq: [
      {
        q: "Wer führt die Arbeit tatsächlich aus?",
        a: "Die beiden Mitgründer. Hassan Jamal ist Mitgründer und leitender Ingenieur; Imran Raza Ladhani ist Mitgründer und leitender Architekt. Nach der Beauftragung erfolgt keine Übergabe an eine Kundenbetreuung.",
      },
      {
        q: "Empfehlen Sie immer einen Neubau?",
        a: "Nein. Wenn die Belege dafür sprechen, die bestehende Website zu reparieren, sagen wir das, statt einen Neubau zu verkaufen.",
      },
      {
        q: "Wo hat das Unternehmen seinen Sitz?",
        a: "PandaCodeGen wurde im Februar 2026 gegründet; die Anschrift lautet 12250 S Kirkwood Rd, Apt 1128, Stafford, TX 77477, USA.",
      },
    ],
  },

  leadForm: {
    eyebrow: "Hier starten",
    heading: "Haben Sie ein Projekt oder eine Frage?",
    intro:
      "Wir sind da, um zu helfen. Nennen Sie uns Ihre Website oder alles, worüber Sie dazu sprechen möchten, und ein Gründer antwortet Ihnen. Jede Nachricht bekommt eine Antwort, ob daraus ein Angebot wird oder nicht.",
    nameLabel: "Name",
    emailLabel: "E-Mail",
    urlLabel: "Ihre Website",
    urlHint: "optional",
    detailsLabel: "Worum geht es Ihnen",
    detailsPlaceholder:
      "Eine Migration, ein Relaunch, schnellere Seiten oder eine Frage, die Sie beantwortet haben möchten. Ein Satz genügt.",
    submit: "Absenden",
    submitting: "Wird gesendet…",
    successHeading: "Vielen Dank, Ihre Nachricht ist angekommen.",
    successBody: "Sie hören von info@pandacodegen.com, in der Regel innerhalb eines Werktags.",
    directHeading: "Lieber direkt sprechen?",
    directBody:
      "Schreiben Sie uns oder buchen Sie einen Termin. Beides erreicht die Gründer direkt, nicht ein Vertriebsteam.",
    bookLabel: "Kennenlerngespräch buchen",
    errorFallback: "Wir konnten Ihre Anfrage nicht senden. Bitte schreiben Sie an info@pandacodegen.com.",
    honeypotLabel: "Dieses Feld bitte leer lassen",
    replyNote:
      "Schreiben Sie uns auf Deutsch, wir antworten auf Deutsch. Vertragsunterlagen werden auf Englisch erstellt.",
  },
};

export default de;

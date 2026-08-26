export const projects = [
  {
    id: 1,
    meta: [
      { label: "Data", value: "styczeń-luty 2025" },
      {
        label: "Zakres",
        value: "identyfikacja wizualna, UI Design, materiały promocyjne",
      },
    ],

    title: "Młodzieżowa Rada Miejska w Aleksandrowie Łódzkim",

    description:
      "Projekt kompleksowej identyfikacji wizualnej dla Młodzieżowej Rady Miejskiej, obejmujący stworzenie spójnego języka wizualnego wykorzystywanego zarówno w materiałach drukowanych, jak i w przestrzeni cyfrowej.\n\nCelem było zaprojektowanie nowoczesnej i przystępnej komunikacji skierowanej do młodych odbiorców, zachowując jednocześnie charakter oficjalnej organizacji.",

    image: "/assets/project1/info.png",
    mockup: "/assets/project1/laptop2.jpeg",

    sections: {
      visualIdentity: {
        title: "Identyfikacja wizualna",

        description:
          "Finalny znak oparty został na połączeniu dwóch sylwetek symbolizujących współpracę i społeczność. Ich forma tworzy literę „M”, dzięki czemu logo nawiązuje bezpośrednio do nazwy organizacji.\n\nZaokrąglona konstrukcja pozwala zachować przyjazny charakter projektu, jednocześnie pozostając czytelna i odpowiednia dla oficjalnej organizacji.",

        colors: [
          { hex: "#F66055" },
          { hex: "#59BAFF" },
          { hex: "#FFCD43" },
          { hex: "#F9F6F3" },
        ],

        components: "/assets/project1/components.png",

        typography: [
          {
            fontFamily: "Anybody",
            sample: "Aa",
            alphabet:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n1234567890",
          },
          {
            fontFamily: "Work Sans",
            sample: "Aa",
            alphabet:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n1234567890",
          },
        ],

        afterText:
          "Kolorystyka została oparta na barwach miasta obecnych w herbie i fladze Aleksandrowa Łódzkiego. Dodatkowym elementem systemu zostały geometryczne wzory inspirowane lokalnym wzornictwem, wykorzystywane głównie na kartach młodzieżowych.\n\nTypografia łączy bardziej charakterystyczny font Anybody z prostym i czytelnym Work Sans, dzięki czemu identyfikacja zachowuje młodzieżowy charakter bez utraty profesjonalnego wyglądu.",

        images: [],
      },

      printMaterials: {
        title: "Materiały drukowane i promocyjne",

        images: [
          {
            src: "/assets/project1/bento3.png",
            alt: "Karty Młodzieżowe",
          },
          {
            src: "/assets/project1/bento6.png",
            alt: "Plakat",
          },
          {
            src: "/assets/project1/bento1.png",
            alt: "Wzór geometryczny",
          },
          {
            src: "/assets/project1/bento5.png",
            alt: "Ulotki",
          },
          {
            src: "/assets/project1/bento2.png",
            alt: "Karta Młodzieżowa",
          },
          {
            src: "/assets/project1/bento4.png",
            alt: "Rollup",
          },
        ],
      },

      process: {
        title: "Proces projektowy",
        paragraphs: [
          "Projekt rozwijał się etapami. Początkowo zakres obejmował jedynie zaprojektowanie kart młodzieżowych, jednak w trakcie prac został rozszerzony o pełną identyfikację wizualną, materiały promocyjne oraz stronę internetową.",
          "Podczas projektowania szukałam balansu między oficjalnym charakterem organizacji działającej przy samorządzie a bardziej otwartą komunikacją skierowaną do młodych osób. Testowałam różne kierunki wizualne, skupiając się głównie na motywie społeczności i współpracy.",
          "Finalny znak powstał z połączenia dwóch sylwetek oraz litery „M”, dzięki czemu identyfikacja nawiązuje bezpośrednio do nazwy organizacji, ale nadal pozostaje prostym i rozpoznawalnym symbolem.",
        ],
        image: {
          src: "/assets/project1/concept.png",
          alt: "Koncept logo",
        },
      },

      website: {
        title: "Strona internetowa",

        paragraphs: [
          "Strona internetowa została zaprojektowana jako główny punkt komunikacji Młodzieżowej Rady Miejskiej oraz programu karty młodzieżowej. Najważniejszym założeniem było uporządkowanie informacji i ułatwienie użytkownikom przejścia przez proces uzyskania karty.",

          "Warstwa wizualna została oparta na stworzonej wcześniej identyfikacji. Jasne tło, wyraziste kolory oraz modułowy układ pozwoliły zachować spójność z materiałami drukowanymi.",

          "Projekt obejmuje stronę informacyjną organizacji, proces składania wniosku, instrukcję uzyskania karty, regulamin, kontakt oraz panel administracyjny umożliwiający zarządzanie zgłoszeniami, wyszukiwanie użytkowników i analizę podstawowych statystyk.",
        ],

        image: {
          src: "/assets/project1/laptop3.jpeg",
          alt: "Projekt strony internetowej",
        },
      },
    },
  },
  {
    id: 2,
    meta: [
      { label: "Data", value: "kwiecień 2026" },
      {
        label: "Zakres",
        value: "UI Design, Responsive Web Design, Ikonografia",
      },
    ],

    title: "Orkiestra dęta GOK w Kuryłówce",

    description:
      "Projekt strony internetowej dla Orkiestry Dętej GOK w Kuryłówce, której celem było stworzenie przejrzystego i nowoczesnego serwisu prezentującego działalność zespołu, jego historię oraz aktualne wydarzenia.\n\nProjekt został zaprojektowany tak, aby połączyć elegancki charakter orkiestry z prostą i wygodną strukturą informacji dostępną zarówno na komputerze, jak i urządzeniach mobilnych.",

    image: "/assets/project2/info.png",
    mockup: "/assets/project2/main.png",

    sections: {
      visualIdentity: {
        title: "Kierunek wizualny",

        description:
          "Projekt został oparty na eleganckiej i spokojnej estetyce dopasowanej do charakteru orkiestry. Jasne tło, głęboka bordowa kolorystyka oraz klasyczna typografia pozwalają nawiązać do atmosfery występów scenicznych, jednocześnie zachowując prostotę i czytelność interfejsu.",

        colors: [
          { hex: "#312B2C" },
          { hex: "#860E2B" },
          { hex: "#BF0231" },
          { hex: "#FDF7F8" },
        ],

        components: "/assets/project2/components.png",

        typography: [
          {
            fontFamily: "Corinthia",
            sample: "Aa",
            alphabet:
              "ABCDEFGHIJKLM\nNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n1234567890",
          },
          {
            fontFamily: "Libre Caslon Text",
            sample: "Aa",
            alphabet:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n1234567890",
          },
        ],

        afterText:
          "W typografii wykorzystałam font Corinthia jako charakterystyczny element wizualny nawiązujący do muzycznego charakteru projektu. Uzupełnieniem został Libre Caslon Text, który dzięki klasycznej formie zapewnia dobrą czytelność większych ilości tekstu.\n\nProjekt obejmował przygotowanie kompletnego interfejsu strony w wersji desktopowej i mobilnej, wraz z układem podstron oraz zestawem elementów graficznych wykorzystanych w serwisie.",

        images: [],
      },

      process: {
        title: "Założenia projektowe",

        paragraphs: [
          "Projekt powstał jako odświeżenie sposobu prezentowania działalności orkiestry w internecie. Głównym założeniem było stworzenie uporządkowanego serwisu, który pozwoli mieszkańcom oraz potencjalnym organizatorom wydarzeń szybko znaleźć najważniejsze informacje.",

          "Podczas projektowania skupiłam się na zachowaniu równowagi pomiędzy bardziej klasycznym charakterem muzyki orkiestry a nowoczesnym sposobem prezentacji treści. Interfejs miał wyglądać elegancko, ale jednocześnie pozostać prosty w odbiorze.",

          "Projekt obejmował osiem głównych widoków przygotowanych w wersji desktopowej oraz mobilnej. Szczególną uwagę zwracałam na zachowanie czytelności treści oraz spójności układu niezależnie od rozmiaru ekranu.",
        ],

        image: {
          src: "/assets/project2/tablet.jpeg",
          alt: "Makieta strony internetowej",
        },
      },

      customIcons: {
        title: "Dedykowana ikonografia",

        paragraphs: [
          "Na potrzeby strony stworzyłam zestaw ikon przedstawiających instrumenty wykorzystywane przez orkiestrę. Zamiast korzystać z gotowych symboli, zaprojektowałam własne ilustracje dopasowane do stylu całego interfejsu.",

          "Proces tworzenia rozpoczął się od zdjęć rzeczywistych instrumentów, które następnie uprościłam do form wektorowych. Ostatnim etapem było dodanie delikatnego efektu pędzla, dzięki któremu ikony lepiej pasują do bardziej artystycznego charakteru projektu.",

          "Ikony zostały wykorzystane przy prezentacji sekcji instrumentów, pomagając wizualnie uporządkować informacje o składzie orkiestry.",
        ],

        images: [
          { src: "/assets/project2/icon1.png", alt: "Ikona instrumentu" },
          { src: "/assets/project2/icon2.png", alt: "Ikona instrumentu" },
          { src: "/assets/project2/icon3.png", alt: "Ikona instrumentu" },
          { src: "/assets/project2/icon4.png", alt: "Ikona instrumentu" },
          { src: "/assets/project2/icon5.png", alt: "Ikona instrumentu" },
          { src: "/assets/project2/icon6.png", alt: "Ikona instrumentu" },
          { src: "/assets/project2/icon7.png", alt: "Ikona instrumentu" },
          { src: "/assets/project2/icon8.png", alt: "Ikona instrumentu" },
          { src: "/assets/project2/icon9.png", alt: "Ikona instrumentu" },
          { src: "/assets/project2/icon10.png", alt: "Ikona instrumentu" },
        ],
      },

      desktop: {
        title: "Projekt interfejsu",

        paragraphs: [
          "Projekt obejmuje stronę główną, historię orkiestry, skład zespołu, galerię zdjęć, materiały wideo, aktualności wraz z widokiem pojedynczego wpisu oraz sekcję kontaktową.",

          "Poszczególne widoki zostały zaprojektowane z wykorzystaniem spójnych elementów interfejsu, dzięki czemu całość zachowuje jednolity wygląd niezależnie od podstrony.",
        ],

        image: {
          src: "/assets/project2/mockup.png",
          alt: "Wersja desktopowa strony",
        },
      },

      mobile: {
        title: "Responsywność",

        paragraphs: [
          "Projekt został przygotowany również w wersji mobilnej, dostosowanej do mniejszych ekranów. Najważniejszym założeniem było zachowanie czytelności informacji oraz wygody korzystania ze strony na urządzeniach mobilnych.",

          "Elementy interfejsu zostały odpowiednio przeskalowane i uporządkowane, aby zachować spójność z wersją desktopową bez utraty funkcjonalności.",
        ],

        image: {
          src: "/assets/project2/mobile.png",
          alt: "Wersja mobilna strony",
        },
      },
    },
  },
  {
    id: 3,
    meta: [
      { label: "Data", value: "czerwiec – lipiec 2025" },
      {
        label: "Zakres",
        value: "Frontend Development, UI Design",
      },
      {
        label: "Repozytorium",
        value: "https://github.com/astrea444/admin-panel",
      },
    ],
    title: "Dashboard Administracyjny",
    description:
      "Interfejs administracyjny do monitorowania aktywności serwera, zarządzania użytkownikami oraz kontroli systemu uprawnień. Projekt został zaprojektowany jako nowoczesna aplikacja SPA z ciemnym interfejsem, przejrzystą strukturą informacji i naciskiem na wygodną obsługę dużej ilości danych.",
    image: "/assets/project3/info.png",
    mockup: "/assets/project3/mockup.png",

    sections: {
      description:
        "Projekt panelu administracyjnego typu SPA łączący projekt interfejsu oraz implementację frontendu. Aplikacja umożliwia monitorowanie aktywności serwera, zarządzanie użytkownikami oraz konfigurację systemu ról i uprawnień.\n\nOdpowiadałam zarówno za przygotowanie projektu w Figmie, jak i implementację całego frontendu we Vue 3.",

      project: {
        title: "Założenia projektu",

        paragraphs: [
          "Projekt powstał na podstawie wymagań klienta określających funkcjonalność panelu administracyjnego. Interfejs ma nowoczesny wygląd oraz ciemny motyw charakterystyczny dla tego typu narzędzi.",

          "Prace rozpoczęłam od przygotowania projektu w Figmie, a następnie zaimplementowałam cały frontend we Vue 3. Aplikacja została przygotowana jako SPA z wykorzystaniem mockowych danych oraz struktur umożliwiających późniejszą integrację z backendem.",

          "Największy nacisk położyłam na czytelność interfejsu oraz wygodną pracę z dużą ilością danych. Ważne było również zachowanie spójnego wyglądu wszystkich widoków i komponentów.",
        ],

        image: {
          src: "/assets/project3/mockup.png",
          alt: "Makieta panelu administracyjnego",
        },
      },
      visualIdentity: {
        title: "Kierunek wizualny",

        description:
          "Projekt został utrzymany w nowoczesnej estetyce inspirowanej interfejsami aplikacji administracyjnych. Ciemna kolorystyka, wyraźny kontrast oraz ograniczona liczba kolorów akcentujących pozwalają skupić uwagę na danych i najważniejszych funkcjach systemu.",

        colors: [
          { hex: "#121212" },
          { hex: "#2B2B31" },
          { hex: "#00A6F4" },
          { hex: "#74D4FF" },
          { hex: "#F9FAFB" },
        ],

        components: "/assets/project3/components.png",

        typography: [
          {
            fontFamily: "Inter",
            sample: "Aa",
            alphabet:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n1234567890",
          },
        ],

        afterText:
          "W projekcie wykorzystałam font Inter, który dzięki wysokiej czytelności dobrze sprawdza się w aplikacjach prezentujących dużą ilość danych. Projekt obejmował przygotowanie kompletnego systemu komponentów, formularzy, tabel, kart oraz elementów nawigacyjnych wykorzystywanych we wszystkich widokach panelu.",

        images: [],
      },

      interfaceDesign: {
        title: "Projekt interfejsu",

        paragraphs: [
          "Interfejs został zaprojektowany z myślą o administratorach wykonujących powtarzalne zadania. Poszczególne funkcje zostały podzielone na logiczne sekcje, co ułatwia odnajdywanie informacji oraz poruszanie się po aplikacji.",

          "Podczas projektowania skupiłam się na odpowiedniej hierarchii informacji, czytelnych odstępach oraz ograniczeniu liczby elementów widocznych jednocześnie. Dzięki temu nawet rozbudowane widoki pozostają łatwe do skanowania.",

          "System logów umożliwia przełączanie pomiędzy widokiem siatki i listy, pozwalając administratorowi wybrać sposób prezentacji danych najlepiej dopasowany do aktualnej pracy.",
        ],

        groups: [
          {
            images: [
              {
                src: "/assets/project3/logs1.png",
                alt: "Logowanie",
              },
              {
                src: "/assets/project3/logs2.png",
                alt: "Dashboard",
              },
            ],
            caption: "Logowanie i ekran główny",
          },
          {
            images: [
              {
                src: "/assets/project3/logs3.png",
                alt: "Logi w widoku siatki",
              },
              {
                src: "/assets/project3/logs4.png",
                alt: "Logi w widoku listy",
              },
            ],
            caption: "System logów",
          },
          {
            images: [
              {
                src: "/assets/project3/logs5.png",
                alt: "Lista użytkowników",
              },
              {
                src: "/assets/project3/logs6.png",
                alt: "Zarządzanie permisjami",
              },
            ],
            caption: "Zarządzanie użytkownikami",
          },
        ],
      },

      implementation: {
        title: "Implementacja",

        paragraphs: [
          "Po zakończeniu etapu projektowego zaimplementowałam cały frontend z wykorzystaniem Vue 3, Vite, Pinia oraz Vue Router. Poszczególne widoki zostały podzielone na mniejsze komponenty, co ułatwia dalszy rozwój aplikacji.",

          "Projekt wykorzystuje mockowe dane oraz przygotowaną warstwę komunikacji z API, dzięki czemu może zostać rozbudowany o rzeczywisty backend bez przebudowy interfejsu.",
        ],

        image: {
          src: "/assets/project3/laptop.png",
          alt: "Dashboard",
        },
      },
    },

    techStack: {
      title: "Technologie",
      stack: [
        { icon: "material-icon-theme:vue", label: "Vue 3" },
        { icon: "material-icon-theme:vite", label: "Vite" },
        { icon: "logos:pinia", label: "Pinia" },
        { icon: "material-icon-theme:sass", label: "SCSS" },
        { icon: "material-icon-theme:vitest", label: "Vitest" },
        { icon: "material-icon-theme:vue", label: "Vue Router" },
      ],
    },
  },
  {
    id: 4,
    meta: [
      { label: "Data", value: "lipiec–sierpień 2026" },
      {
        label: "Zakres",
        value: "identyfikacja wizualna, UI/UX Design, frontend (w toku)",
      },
    ],

    title: "Aplikacja mobilna MNIAM",

    description:
      "MNIAM to aplikacja mobilna wspierająca planowanie posiłków i organizację codziennych zakupów. Umożliwia tworzenie planów posiłków, zapisywanie przepisów, zarządzanie domową spiżarnią oraz automatyczne przygotowywanie list zakupowych w jednym miejscu.",

    image: "/assets/project4/info.png",
    mockup: "/assets/project4/mockup2.png",

    sections: {
      visualIdentity: {
        title: "Kierunek wizualny i system interfejsu",

        description:
          "Kierunek wizualny został oparty na prostych, miękkich formach i kolorystyce nawiązującej do świeżości oraz produktów spożywczych. Główną rolę pełni zieleń, uzupełniona jasnym tłem i ciemnym granatem, który zapewnia odpowiedni kontrast dla najważniejszych treści.",

        colors: [
          { hex: "#16233B" },
          // { hex: "#E7F6ED" },
          { hex: "#78CA7A" },
          { hex: "#64BE5B" },
          { hex: "#F2F4F7" },
        ],

        components: "/assets/project4/components.png",

        typography: [
          {
            fontFamily: "Inter",
            sample: "Aa",
            alphabet:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n1234567890",
          },
        ],

        afterText:
          "Interfejs został zaprojektowany z wykorzystaniem spójnego zestawu komponentów, typografii i zasad dotyczących odstępów. Miękkie zaokrąglenia oraz subtelne cienie nadają całości lekki charakter, jednocześnie zachowując czytelną strukturę informacji. Typografia została dostosowana do różnych rozmiarów ekranów, aby zapewnić komfortowe korzystanie z aplikacji.",

        images: [],
      },

      process: {
        title: "Założenia projektowe i proces",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Projekt MNIAM powstał jako odpowiedź na codzienny problem związany z planowaniem posiłków, organizacją zakupów i kontrolowaniem produktów dostępnych w domu. Założeniem było stworzenie jednej aplikacji, która łączy te czynności w spójny i prosty proces.",

              "Podczas projektowania szczególną uwagę poświęciłam ograniczeniu liczby czynności wymaganych od użytkownika. Lista zakupów jest generowana na podstawie zaplanowanych posiłków, a podczas ręcznego dodawania produktów użytkownik otrzymuje odpowiednie podpowiedzi. Po zakończeniu zakupów oznaczone produkty można również przenieść bezpośrednio do spiżarni, bez konieczności ponownego wprowadzania tych samych informacji.",

              "Główny przepływ opiera się na naturalnym połączeniu kolejnych funkcji: od planowania posiłków i wyboru przepisów, przez przygotowanie listy zakupów, aż po aktualizację zawartości domowej spiżarni. Celem było stworzenie systemu, w którym poszczególne etapy wspierają się wzajemnie i ograniczają powtarzanie tych samych działań.",
            ],
          },
          {
            type: "image",
            src: "/assets/project4/layout.png",
            alt: "Schemat przepływu użytkownika w aplikacji MNIAM",
            size: "large",
          },
        ],
      },

      pantry: {
        title: "Zarządzanie domową spiżarnią",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Spiżarnia stanowi jeden z głównych elementów aplikacji i pozwala użytkownikowi kontrolować produkty dostępne w domu. Produkty zostały podzielone na podstawowe kategorie, co ułatwia ich przeglądanie i organizację.",

              "Podczas projektowania tego modułu skupiłam się na szybkim wykonywaniu podstawowych czynności. Użytkownik może w prosty sposób zmieniać ilość produktu, oznaczać go jako zużyty oraz aktualizować zawartość spiżarni bez przechodzenia przez rozbudowane formularze.",

              "Interfejs wykorzystuje proste jednostki i intuicyjne kontrolki, dzięki czemu zarządzanie produktami nie wymaga dokładnego ręcznego uzupełniania każdej wartości. Ważne informacje, takie jak zbliżający się termin ważności, czy kończący sie produkt są odpowiednio wyróżnione, aby ułatwić ich zauważenie podczas codziennego korzystania z aplikacji.",
            ],
          },
        ],
        images: [
          {
            src: "/assets/project4/pantry1.png",
            alt: "Widok dodawania produktu do spiżarni",
          },
          {
            src: "/assets/project4/pantry4.png",
            alt: "Widok główny spiżarni z podziałem na kategorie",
          },
          {
            src: "/assets/project4/pantry2.png",
            alt: "Widok dodawania produktu do spiżarni",
          },
          {
            src: "/assets/project4/pantry3.png",
            alt: "Widok główny spiżarni z podziałem na kategorie",
          },
        ],
      },

      recipes: {
        title: "Przepisy i planowanie posiłków",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Moduł przepisów został zaprojektowany jako narzędzie wspierające codzienne planowanie posiłków. Użytkownik może przeglądać dostępne przepisy, zapisywać wybrane propozycje oraz dodawać je do własnego planu posiłków.",

              "Przy projektowaniu kart przepisów ważna była czytelna hierarchia informacji. Najważniejsze dane, takie jak czas przygotowania, poziom trudności oraz lista składników, są dostępne w uporządkowanej formie. Składniki zostały również rozdzielone na produkty dostępne w spiżarni i te, które należy dodać do zakupów.",

              "Wybrane posiłki tworzą podstawę do automatycznego przygotowania listy zakupowej. Dzięki połączeniu planowania, przepisów i spiżarni użytkownik nie musi samodzielnie analizować każdego przepisu i tworzyć listy brakujących produktów.",
            ],
          },
        ],
        images: [
          {
            src: "/assets/project4/recipe1.png",
            alt: "Lista przepisów dostępnych w aplikacji MNIAM",
          },
          {
            src: "/assets/project4/recipe2.png",
            alt: "Widok szczegółów przepisu i listy składników",
          },
          {
            src: "/assets/project4/recipe3.png",
            alt: "Widok planowania posiłków",
          },
        ],
      },
      development: {
        title: "Rozwój projektu",

        blocks: [
          {
            type: "text",
            paragraphs: [
              "MNIAM jest projektem rozwijanym zarówno pod względem projektowym, jak i technicznym. Oprócz przygotowania warstwy UI/UX pracuję również nad implementacją front-endu, który obecnie jest zrealizowany w około 70%.",

              "Przed zakończeniem projektu planuję dopracować część istniejących widoków oraz uzupełnić brakujące elementy aplikacji, w tym proces onboardingu i logowania. Pozostałe szczegóły interfejsu będą rozwijane i dostosowywane wraz z kolejnymi etapami implementacji.",

              "Docelowym założeniem jest stworzenie w pełni działającej aplikacji, w której zaprojektowane funkcje będą połączone z kompletną warstwą front-endową. Po zakończeniu obecnego etapu projekt będzie dalej rozwijany o kolejne rozwiązania związane z planowaniem posiłków, zarządzaniem produktami i organizacją codziennych zakupów.",
            ],
          },
          {
            type: "image",
            src: "/assets/project4/mockup3.png",
            alt: "Schemat przepływu użytkownika w aplikacji MNIAM",
            size: "large",
          },
        ],
      },
      uiShowcase: {
        title: "Wybrane widoki interfejsu",
        blocks: [
          {
            type: "text",
            paragraphs: [
              "Poniższe widoki prezentują wybrane elementy finalnego interfejsu oraz sposób zastosowania wcześniej określonych zasad wizualnych. Projekt opiera się na spójnej siatce, konsekwentnej typografii i powtarzalnych komponentach, dzięki czemu kolejne ekrany zachowują jednolity charakter.",

              "Uwzględniono również stany wymagające dodatkowej komunikacji z użytkownikiem, takie jak onboarding, puste widoki oraz podstawowe ekrany związane z profilem i organizacją danych. Każdy z nich został zaprojektowany tak, aby jasno informować o aktualnym stanie aplikacji i wskazywać możliwe kolejne działania.",
            ],
          },
          {
            type: "image",
            src: "/assets/project4/layout2.png",
            alt: "Blabla",
            size: "xl",
          },
          // {
          //   type: "gallery",
          //   images: [
          //     {
          //       src: "/assets/project4/home.png",
          //       alt: "Ekran powitalny aplikacji",
          //     },
          //     {
          //       src: "/assets/project4/home2.png",
          //       alt: "Ekran powitalny aplikacji",
          //     },
          //     {
          //       src: "/assets/project4/pantry1.png",
          //       alt: "Widok dodawania produktu do spiżarni",
          //     },
          //     {
          //       src: "/assets/project4/recipe1.png",
          //       alt: "Lista przepisów dostępnych w aplikacji MNIAM",
          //     },
          //     {
          //       src: "/assets/project4/recipe3.png",
          //       alt: "Lista przepisów dostępnych w aplikacji MNIAM",
          //     },
          //     {
          //       src: "/assets/project4/shopping1.png",
          //       alt: "Lista przepisów dostępnych w aplikacji MNIAM",
          //     },
          //   ],
          // },
          // {
          //   type: "gallery",
          //   images: [
          //     {
          //       src: "/assets/project4/onboarding1.png",
          //       alt: "Ekran powitalny aplikacji",
          //     },
          //     {
          //       src: "/assets/project4/onboarding2.png",
          //       alt: "Pusty stan spiżarni",
          //     },
          //     {
          //       src: "/assets/project4/onboarding3.png",
          //       alt: "Ekran główny aplikacji MNIAM",
          //     },
          //     {
          //       src: "/assets/project4/onboarding4.png",
          //       alt: "Widok profilu użytkownika",
          //     },
          //   ],
          // },
        ],
      },
    },
  },
];

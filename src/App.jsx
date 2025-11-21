import { useState } from "react";
import img from './assets/logo-gap.png'
import { Link } from "react-router-dom";
import TopHomeSection from "./section/topHomeSection";
import ServicesSection from "./section/ServicesSection";
import AboutUsSection from "./section/AboutUsSection";
import CircleLeft from "./otherComponents/CircleLeft";
import { MdContentPasteSearch, MdAppRegistration  } from "react-icons/md";
import { LuMicroscope } from "react-icons/lu";



function App() {
  const [lang, setLang] = useState("pl");

  const translate = {
    pl: {
      menuItem: ["usługi", "o nas", "kontakt", "dokumenty"],
      hello: "Placówka badawczo-rozwojowa w zakresie środków ochrony roślin",
      btnTopText: "Usługi",
      headerService: "Usługi",
      serviceSectionIcons: [
        <MdContentPasteSearch />,<MdAppRegistration />,<LuMicroscope />,<MdAppRegistration />

      ],
      serviceSectionHeader: ["Badania", "Rejestracja", "Rozwój", "Doradztwo"],
      serviceSectionHeaderBoxP: [
        `Posiadamy akredytację Głównego Inspektora Ochrony Roślin i Nasiennictwa na przeprowadzanie badań polowych zgodnie z DPD (Dobrą Praktyką Doświadczalną). Zapewniamy wysokiej jakości badania polowe DPD w celu określenia skuteczności i bezpieczeństwa upraw pod kątem zastosowania innowacyjnych, jak i istniejących, generycznych produktów. Zakres usług:
        - Badania polowe i pod osłonami zgodne z wymogami DPD oraz wytycznymi EPPO,
        - Testy demonstracyjne oraz screeningowe w celu wsparcia marketingu, reklamy i pozycjonowania produktów,
        - Wstępne badania nad rozwojem formulacji i poszukiwaniem dawki docelowej na potrzeby rejestracyjne,
        - Wsparcie techniczne w zakresie rozwoju portfolio produktowego.`,
        `Wspieramy naszych klientów w działaniach rejestracyjnych w następującym zakresie:
          - Analiza zakresu badań niezbędnych do opracowania dokumentacji rejestracyjnej dla substancji i finalnych produktów (Data Gap Analysis),
          - Zarządzanie projektem i koordynacja badań,
          - Wsparcie w przygotowywaniu dokumentacji rejestracyjnej,
          - Doradztwo w zakresie badań objętych ochroną danych oraz alternatywnych możliwości uzyskania dostępu do badań,
          - Tworzenie draftów etykiet i dostosowywanie tabel GAP w oparciu o ocenę ryzyka,
          - Koordynacja lokalnych przedłożeń dokumentacji rejestracyjnej, reprezentowanie aplikantów przed jednostkami oceniającymi i Ministerstwem, organizacja spotkań przed aplikacyjnych z ekspertami.`,
        `Naszą misją jest zapewnienie przewagi konkurencyjnej naszym klientom poprzez świadczenie szerokiego wachlarza usług w zakresie rozwoju środków ochrony roślin. Jest to możliwe, dzięki dogłębnej znajomości branży środków ochrony roślin i trendów rozwoju produktów na rynku.`,
        `Prowadzimy usługi doradcze w zakresie badań, rozwoju i rejestracji środków ochrony roślin. Wysoka jakość obsługi, wiedza oraz doświadczenie zapewniają wsparcie merytoryczne potrzebne na etapie:
          -Badań
          -Procedury rejestracyjnej
          -Marketingu i sprzedaży`
      ],
      headerAboutUs: "Dlaczego my",
      aboutUsSectionP: [
        `Green & Property Consulting jest placówką badawczą oraz jednostką doradczą z siedzibą w Polsce Centralnej. 
        Naszą misją jest zapewnienie przewagi konkurencyjnej naszym klientom poprzez świadczenie szerokiego wachlarza usług w 
        zakresie rozwoju i rejestracji środków ochrony roślin.`,
        `Oferowane przez nas usługi badawczo-rozwojowe i rejestracyjne oparte są o gruntowną wiedzę i wieloletnie doświadczenie naszych pracowników. 
        Zajmujemy się koordynacją i wykonaniem badań rejestracyjnych, marketingowych, przed rejestracyjnych, rozwojowych. 
        Posiadająca szerokie doświadczenie w zakresie doświadczalnictwa i rozwoju kadra Green & Property Consulting pomaga naszym klientom 
        w weryfikacji i wdrożeniu środków ochrony roślin na rynki Polski i innych krajów Unii Europejskiej.`,
        `Zapewniamy wysokiej jakości badania terenowe DPD w celu określenia skuteczności i bezpieczeństwa upraw pod kątem zastosowania innowacyjnych, 
        jak i istniejących, generycznych produktów, dodając wartość i przewagę konkurencyjną, 
        dzięki dogłębnej znajomości branży ochrony roślin i trendów rozwoju produktów.`
      ]

    },
    en: {
      menuItem: ["services", "about us", "contact", "documents"],
      hello: "Research and development facility in the field of plant protection products",
      btnTopText: "Services",
      headerService: "Services",
      serviceSectionIcons: [
        <MdContentPasteSearch />,<MdAppRegistration />,<LuMicroscope />,<MdAppRegistration />

      ],
      serviceSectionHeader: ["Research", "Registration", "Development", "Consulting"],
      serviceSectionHeaderBoxP: [
        `We deliver high quality GEP field studies to determine the efficacy and crop safety of both new and existing products, adding value and competitive advantage for our clients through in-depth knowledge of the crop protection industry. Range of services:
      - GEP field & greenhouse trials generation
      - marketing, demonstrate and screening trials coordination
      - preliminary & ratio finding tests
      - technical support in product development strategy`,
        `We are supporting our clients in the registration processes in the following areas: - Data gap analysis (DGA) which provides you 
        information on active substance and formulation profile, costs involved in required studies and dossier preparation before deciding to 
        invest product development,
      - Coordination of study and project management
      - Studies summaries & technical advice
      - Advice on data protection studies and alternative access
      - Drafts label design & GAP tables adaptation
      - Support for the dossier preparation for the active substance and formulated products
      - BADs writing, efficacy summaries, comparative assessments, national addendum
      - Coordination of national submissions
      - Support in coordination of pre-submission meetings`,
        `Our mission is to deliver competitive advantage to our clients by providing wide range of service in Agro segment. 
        R&D and regulatory services based on our staff’s expertise in crop production.`,
        `We provide consultancy services in the field of research, development and 
        registration of plant protection products. High quality of service, knowledge and experience provide substantive support 
        needed at every stage of research and the registration procedure.`
      ],
      headerAboutUs: "About us",
      aboutUsSectionP: [
        `Green & Property Consulting is a research facility and advisory unit based in Central Poland. Our mission is to provide a 
        competitive advantage to our clients by providing a
         wide range of services in the field of the development of plant protection products.`,
         `Our research, development and registration services are based on the deep knowledge and many years of experience of our employees. 
         We coordinate and perform registration, marketing, pre-registration and development research; 
         with extensive experience in the field of experimentation and development of plant protection products.`,
         `We will provide high-quality GEP field studies to determine the efficacy and safety of crops for the use of innovative as well as 
         existing generic products, adding value and competitive advantage to our customers through in-depth knowledge of the 
         crop protection industry and product conversation trends.
`
      ]
    }
  };

  return (
    <>
      <nav className="fixed shadow-xl p-4 flex items-center justify-center w-full bg-white z-10">
        <div className="flex w-[1200px] justify-between">
          <img src={img} alt="Logo firmy" className='w-[120px]' />
          <ul className="flex justify-around w-100 items-center">
            {translate[lang].menuItem.map((el, index) => (
              <li key={index} className="">
                <a to="# text-l">{el}</a>
              </li>
            ))}
          </ul>
          <button onClick={() => setLang(lang === "pl" ? "en" : "pl")}>
            {lang === "pl" ? "English" : "Polski"}
          </button>
        </div>
      </nav>
      <TopHomeSection text={translate[lang].hello} buttonText={translate[lang].btnTopText} />
      <ServicesSection
        header={translate[lang].headerService}
        headers={translate[lang].serviceSectionHeader}
        texts={translate[lang].serviceSectionHeaderBoxP}
        icons={translate[lang].serviceSectionIcons}
      />
      <AboutUsSection
        header={translate[lang].headerAboutUs}
        texts={translate[lang].aboutUsSectionP}
      />
    </>
  );
}

export default App

import { useState } from "react";
import img from './assets/logo-gap.png'
import { Link } from "react-router-dom";
import TopHomeSection from "./section/topHomeSection";
import ServicesSection from "./section/ServicesSection";

function App() {
  const [lang, setLang] = useState("pl");

  const translate = {
    pl: {
      menuItem: ["usługi", "o nas", "kontakt", "dokumenty"],
      hello: "Placówka badawczo-rozwojowa w zakresie środków ochrony roślin",
      btnTopText: "Usługi",
      headerAboutUs: "Usługi",
      aboutUsSectionIcons: [],
      aboutUsSectionHeader: ["Badania", "Rejestracja", "Rozwój", "Doradztwo"],
      aboutUsSectionHeaderBoxP: [
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

    },
    en: {
      menuItem: ["services", "about us", "contact", "documents"],
      hello: "Research and development facility in the field of plant protection products",
      btnTopText: "Services",
      headerAboutUs: "Services",
      aboutUsSectionIcons: [],
      aboutUsSectionHeader: ["Research", "Registration", "Development", "Consulting"],
      aboutUsSectionHeaderBoxP: [
        `We deliver high quality GEP field studies to determine the efficacy and crop safety of both new and existing products, adding value and competitive advantage for our clients through in-depth knowledge of the crop protection industry. Range of services:
- GEP field & greenhouse trials generation
- marketing, demonstrate and screening trials coordination
- preliminary & ratio finding tests
- technical support in product development strategy`,
        `We are supporting our clients in the registration processes in the following areas: - Data gap analysis (DGA) which provides you information on active substance and formulation profile, costs involved in required studies and dossier preparation before deciding to invest product development,
- Coordination of study and project management
- Studies summaries & technical advice
- Advice on data protection studies and alternative access
- Drafts label design & GAP tables adaptation
- Support for the dossier preparation for the active substance and formulated products
- BADs writing, efficacy summaries, comparative assessments, national addendum
- Coordination of national submissions
- Support in coordination of pre-submission meetings`,
        `Our mission is to deliver competitive advantage to our clients by providing wide range of service in Agro segment. R&D and regulatory services based on our staff’s expertise in crop production.`,
        `<p>We provide consultancy services in the field of research, development and registration of plant protection products. High quality of service, knowledge and experience provide substantive support needed at every stage of research and the registration procedure.</p>`
      ]
    }
  };

  return (
    <>
      <nav className="fixed shadow-xl p-4 flex items-center justify-center w-full bg-white">
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
        header={translate[lang].headerAboutUs}
        headers={translate[lang].aboutUsSectionHeader}
        texts={translate[lang].aboutUsSectionHeaderBoxP}
      />
    </>
  );
}

export default App

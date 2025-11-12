import { useState } from "react";
import img from './assets/logo-gap.png'
import { Link } from "react-router-dom";
import TopHomeSection from "./section/topHomeSection";

function App() {
  const [lang, setLang] = useState("pl");

  const translate = {
    pl: {
      hello: "Placówka badawczo-rozwojowa w zakresie środków ochrony roślin",
      menuItem: ["usługi", "o nas", "kontakt","dokumenty"],
    },
    en: {
      hello: "Research and development facility in the field of plant protection products",
      menuItem: ["services", "cos"],
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
                <a to="# flex-1">{el}</a>
                </li>
            ))}
          </ul>
                  <button onClick={() => setLang(lang === "pl" ? "en" : "pl")}>
          {lang === "pl" ? "🇬🇧 English" : "🇵🇱 Polski"}
        </button>
        </div>
      </nav>
      <TopHomeSection value={translate[lang].hello} />
    </>
  );
}

export default App

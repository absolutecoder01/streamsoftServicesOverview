import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Kalendarz from './Kalendarz';
import Wdrozenia from './Wdrozenia';
import Klienci from './Klienci';
import Produkty from './Produkty';
import '../index.css';


const Sidebar = () => {
    return (      
        <div className="flex flex-row bg-white h-240">
        <div className="flex flex-col w-70 bg-white overflow-hidden pl-5">
            <ul className="flex flex-col py-4">
            <li>
                <a href="https://www.streamsoft.pl/streamsoft-prestiz/moduly/zarzadzanie-produkcja/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                        <img decoding="async" src="https://www.streamsoft.pl/wp-content/uploads/miniatura_modul_ZP.svg" alt="Moduł Zarządzanie Produkcją" width="80" data-lazy-src="https://www.streamsoft.pl/wp-content/uploads/miniatura_modul_ZP.svg" data-ll-status="loaded" />
                    </span>
                    <span className="text-sm font-medium">Zarządzanie produkcją</span>
                </a>
            </li>

            <li>
                <a href="https://www.streamsoft.pl/streamsoft-prestiz/moduly/handlowo-magazynowy/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                        <img decoding="async" src="https://www.streamsoft.pl/wp-content/uploads/miniatura_modul_HM.svg" alt="Moduł Handlowo Magazynowy" width="80" data-lazy-src="https://www.streamsoft.pl/wp-content/uploads/miniatura_modul_HM.svg" data-ll-status="loaded" />
                    </span>
                <span className="text-sm font-medium">Handlowo-Magazynowy</span>
                </a>
            </li>
            <li>
                <a href="https://www.streamsoft.pl/streamsoft-prestiz/moduly/logistyka/" className="flex flex-row items-center h-12 pb-1 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <img decoding="async" src="https://www.streamsoft.pl/wp-content/uploads/logistyka.svg" alt="Moduł Logistyka" width="80" data-lazy-src="https://www.streamsoft.pl/wp-content/uploads/logistyka.svg" data-ll-status="loaded"/>
                </span>
                <span className="text-sm font-medium pt-3">Logistyka</span>
                </a>
            </li>
            <li>
                <a href="https://www.streamsoft.pl/streamsoft-prestiz/moduly/crm/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-10 w-12 text-lg text-gray-400">
                <img decoding="async" src="https://www.streamsoft.pl/wp-content/uploads/crm.svg" alt="Moduł CRM" width="80" data-lazy-src="https://www.streamsoft.pl/wp-content/uploads/crm.svg" data-ll-status="loaded" />
                </span>
                <span className="text-sm font-medium inline-flex items-center justify-center pt-4">CRM</span>
                </a>
            </li>
            <li>
                <a href="https://www.streamsoft.pl/streamsoft-prestiz/moduly/dms/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-10 w-12 text-lg text-gray-400">
                <img decoding="async" src="https://www.streamsoft.pl/wp-content/uploads/dms.svg" alt="Moduł DMS" width="80" data-lazy-src="https://www.streamsoft.pl/wp-content/uploads/dms.svg" data-ll-status="loaded"/>
                </span>
                <span className="text-sm font-medium pt-4 pl-1">DMS</span>
                </a>
            </li>
            <li>
                <a href="https://www.streamsoft.pl/business-intelligence/" className="flex flex-row items-center h-12 pt-3 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <img decoding="async" src="https://www.streamsoft.pl/wp-content/uploads/miniatura_modul_BI.svg" alt="Moduł Business Intelligence" width="80" data-lazy-src="https://www.streamsoft.pl/wp-content/uploads/miniatura_modul_BI.svg" data-ll-status="loaded" />
                </span>
                <span className="text-sm font-medium">Business Intelligence</span>
                </a>
            </li>
            <li>
                <a href="https://www.streamsoft.pl/streamsoft-prestiz/moduly/finanse-i-ksiegowosc/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <img decoding="async" src="https://www.streamsoft.pl/wp-content/uploads/finanse_ksiegowosc.svg" alt="Moduł Finanse i Księgowość" width="80" data-lazy-src="https://www.streamsoft.pl/wp-content/uploads/finanse_ksiegowosc.svg" data-ll-status="loaded" />
                </span>
                <span className="text-sm font-medium pt-4">Finanse i Księgowość</span>
                <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                </a>
            </li>
            <li>
                <a href="https://www.streamsoft.pl/streamsoft-prestiz/moduly/rozrachunki/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <img decoding="async" src="https://www.streamsoft.pl/wp-content/uploads/rozrachunki.svg" alt="Moduł Rozrachunki" width="80" data-lazy-src="https://www.streamsoft.pl/wp-content/uploads/rozrachunki.svg" data-ll-status="loaded" />
                </span>
                <span className="text-sm font-medium pt-4">Rozrachunki</span>
                </a>
            </li>
            <li>
                <a href="https://www.streamsoft.pl/streamsoft-prestiz/moduly/kadry-i-place/" className="flex flex-row items-center h-10 pt-4 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <img decoding="async" src="https://www.streamsoft.pl/wp-content/uploads/miniatura_modul_KdPl.svg" alt="Moduł Kadry i Płace" width="80" data-lazy-src="https://www.streamsoft.pl/wp-content/uploads/miniatura_modul_KdPl.svg" data-ll-status="loaded"/>
                </span>
                <span className="text-sm font-medium">Kadry i Płace</span>
                </a>
            </li>            <li>
                <a href="https://www.streamsoft.pl/streamsoft-prestiz/moduly/srodki-trwale/" className="flex flex-row items-center h- transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <img decoding="async" src="https://www.streamsoft.pl/wp-content/uploads/srodki_trwale.svg" alt="Moduł Środki Trwałe" width="80" data-lazy-src="https://www.streamsoft.pl/wp-content/uploads/srodki_trwale.svg" data-ll-status="loaded" />
                </span>
                <span className="text-sm font-medium pt-4 pl-1">Środki Trwałe</span>
                </a>
            </li>            <li>
                <a href="https://www.streamsoft.pl/streamsoft-prestiz/moduly/serwis/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <img decoding="async" src="https://www.streamsoft.pl/wp-content/uploads/serwis.svg" alt="Moduł Serwis" width="80" data-lazy-src="https://www.streamsoft.pl/wp-content/uploads/serwis.svg" data-ll-status="loaded" />
                </span>
                <span className="text-sm font-medium pt-3">Serwis</span>
                </a>
            </li>            <li>
                <a href="https://www.streamsoft.pl/streamsoft-prestiz/moduly/raporty-i-formularze/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <img decoding="async" src="https://www.streamsoft.pl/wp-content/uploads/miniatura_modul_RiF.svg" alt="Moduł Raporty i Formularze" width="80" data-lazy-src="https://www.streamsoft.pl/wp-content/uploads/miniatura_modul_RiF.svg" data-ll-status="loaded" />
                </span>
                <span className="text-sm font-medium">Raporty i Formularze</span>
                </a>
            </li>
            <li>
                <a href="https://www.streamsoft.pl/streamsoft-prestiz/moduly/modul-administratora/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <img decoding="async" src="https://www.streamsoft.pl/wp-content/uploads/miniatura_modul_administratora.svg" alt="Moduł Administratora" width="80" data-lazy-src="https://www.streamsoft.pl/wp-content/uploads/miniatura_modul_administratora.svg" data-ll-status="loaded"/>
                </span>
                <span className="text-sm font-medium">Moduł Administratora</span>
                </a>
            </li>            
            <li>
                <a href="https://www.streamsoft.pl/streamsoft-prestiz/moduly/wyposazenie/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <img decoding="async" src="https://www.streamsoft.pl/wp-content/uploads/miniatura_modul_wyposa%C5%BCenie.svg" alt="Moduł Wyposażenie" width="80" data-lazy-src="https://www.streamsoft.pl/wp-content/uploads/miniatura_modul_wyposa%C5%BCenie.svg" data-ll-status="loaded" />
                </span>
                <span className="text-sm font-medium">Wyposażenie</span>
                </a>
            </li>
            </ul>
        </div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/kalendarz" element={<Kalendarz /> }/>
          <Route path ="/klienci" element={<Klienci /> }/>
          <Route path="/wdrozenia" element={<Wdrozenia /> }/>
          <Route path="/produkty" element={<Produkty /> }/>
        </Routes>
        </div>
    );
}

export default Sidebar;
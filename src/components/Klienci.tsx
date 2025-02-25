import '../index.css';

const Klienci = () => {
  return (
    <div className="relative h-screen w-screen bg-gray-100 overflow-hidden top-0">
      {/* Tło z rozmyciem */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-200 blur-sm">
        {/* Lewitujące loga */}
        <div className="absolute inset-0 flex justify-center items-center logos-container animate-logo-move">
          <div className="flex gap-8">
            <img
              src="https://rbb-stal.com.pl/wp-content/uploads/2021/05/rbb-logo-sk.png"
              alt="Logo RBB Stal"
              className="h-32 w-auto"
            />
            <img
              src="https://novita.pl/wp-content/uploads/2022/11/novita_logo_header_pantone_348c_r.png"
              alt="Logo Novita"
              className="h-32 w-auto"
            />
            <img
              src="https://el-metal.pl/wp-content/uploads/2016/02/logo-1.png"
              alt="Logo El-Metal"
              className="h-32 w-auto"
            />
            <img
              src="https://vaupe.pl/wp-content/uploads/2019/12/logo-vaupe.jpg"
              alt="Logo Vaupe"
              className="h-32 w-auto"
            />
            <img
              src="https://www.drogbruk.pl/images/drogbruk/logo.png"
              alt="Logo DrogBruk"
              className="h-32 w-auto"
            />
            <img
              src="https://gambitgl.pl/themes/custom/investmag/logo.svg"
              alt="Logo Gambit"
              className="h-32 w-auto bg-[#2D3D88]"
            />
          </div>
        </div>
      </div>

      {/* Tekst podziękowania na środku */}
      <div className="relative z-10 flex justify-center items-start h-full text-center p-5 mt-30">
        <div>
          <h2 id='streamsoft' className="text-4xl text-[#3B5CD2] mb-25">Dziękujemy za Zaufanie!</h2>
          <p id='streamsoft_podziekowania' className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto p-5">
            Jesteśmy ogromnie wdzięczni każdej firmie, która wybrała naszą wtyczkę. Wasze zaufanie i wsparcie pozwalają nam kontynuować pracę nad jej rozwojem i wprowadzać kolejne ulepszenia. Dziękujemy za współpracę i zaufanie!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Klienci;

const Klienci = () => {
    return (
        
        <div className="max-w-3xl mx-auto px-5 mt-28">
    <div className="flex flex-col justify-center">

        <div className="text-center">

            <h2 className="font-semibold text-3xl">Nasi klienci</h2>

            <p className="max-w-md mx-auto mt-2 text-gray-500">
            Jesteśmy ogromnie wdzięczni każdej firmie, która wybrała naszą wtyczkę. Wasze zaufanie i wsparcie pozwalają nam kontynuować pracę nad jej rozwojem i wprowadzać kolejne ulepszenia. Dziękujemy za współpracę i zaufanie!
            </p>
            <br/>
        </div>


        <div className="flex flex-wrap items-center justify-center gap-10 mt-2 md:justify-around">


            <div className="text-gray-400">
            <img
                        className="h-20 w-50 rounded"
                        src="https://rbb-stal.com.pl/wp-content/uploads/2021/05/rbb-logo-sk.png"
                        alt="Logo RBB Stal"
                    />
            </div>


            <div className="text-gray-400 ">
            <img
                        className="h-20 w-80 rounded"
                        src="https://novita.pl/wp-content/uploads/2022/11/novita_logo_header_pantone_348c_r.png"
                        alt="Logo Novita"
                    />
            </div>


            <div className="text-gray-400 ">
            <img
                        className="h-20 w-70 rounded"
                        src="https://el-metal.pl/wp-content/uploads/2016/02/logo-1.png"
                        alt="Logo El-Metal"
                    />
            </div>


            <div className="text-gray-400 ">
            <img
                        className="h-20 w-70 rounded"
                        src="https://vaupe.pl/wp-content/uploads/2019/12/logo-vaupe.jpg"
                        alt="Logo Vaupe"
                    />
            </div>


            <div className="text-gray-400 ">
            <img
                        className="h-20 w-70 rounded"
                        src="https://www.drogbruk.pl/images/drogbruk/logo.png"
                        alt="Logo DrogBruk"
                    />
            </div>
            <div className="text-gray-400 ">
            <img
                        className="h-20 w-70 bg-[#0C2840] rounded"
                        src="https://gambitgl.pl/themes/custom/investmag/logo.svg"
                        alt="Logo Gambit"
                    />
            </div>
        </div>

    </div>

</div>
    );
}

export default Klienci;
import CircleLeft from "../otherComponents/CircleLeft"

const ServicesSection = (props) => {
    return(
        <section id="ServicesSection" className="w-full h-[100vh] bg-white flex justify-center flex-col items-center gap-10 py-20 relative">
            <h2 className="text-5xl font-bold">{props.header}</h2> 
            <ul className="flex gap-5 flex-wrap justify-center w-[1200px]">
                {props.headers.map((title, index) => (
                    <li key={index} className="p-10 shadow-xl rounded-2xl bg-white w-[48%] overflow-hidden relative">
                        <h3 
                            className="text-3xl font-semibold mb-6 flex items-center gap-4">
                            <span>{title}</span>
                            <span className="text-5xl">{props.icons[index]}</span>
                        </h3>
                        <p className="text-gray-700 whitespace-pre-line">
                            {props.texts[index]}
                        </p>
                        <span className="block absolute bg-[var(--greenPrimary)] rounded-full w-[40px] h-[40px] top-[-20px] right-[-20px]"></span>
                        <span className="block absolute bg-[var(--greenPrimary)] rounded-full w-[40px] h-[40px] bottom-[-20px] left-[-20px]"></span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default ServicesSection
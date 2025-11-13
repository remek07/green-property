const ServicesSection = (props) => {
    return(
        <section id="ServicesSection" className="w-full h-[100vh] bg-white flex justify-center flex-col items-center gap-10 py-20">
            <h2>{props.header}</h2> 
            <ul className="flex gap-5 w-full flex-wrap justify-center">
                {props.headers.map((title, index) => (
                    <li key={index} className="p-4 shadow-lg rounded-2xl bg-white w-[48%]">
                        <h3 className="text-xl font-semibold mb-3">{title}</h3>
                        <p className="text-gray-700 whitespace-pre-line">
                            {props.texts[index]}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default ServicesSection
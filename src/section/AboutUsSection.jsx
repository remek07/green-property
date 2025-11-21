const AboutUsSection = (props) =>{
    return(
        <section id="about-us" className="flex items-center flex-col">
            <h2>{props.header}</h2>
            {props.texts.map((paragraph, index) => (
                <p key={index} className="max-w-4xl text-center mb-4 px-4">{paragraph}</p>
            ))}
        </section>
    )
}   
export default AboutUsSection;
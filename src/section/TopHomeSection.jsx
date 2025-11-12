const TopHomeSection = (props) =>{
    return(
        <section id="TopHomeSection" className="w-full h-[100vh] bg-[url(./assets/bgImage.jpg)] bg-cover bg-center flex items-center justify-center">
            <div className="flex flex-col items-center">
                <h1 className="text-8xl">Green & Property</h1>
                <p>{props.value}</p>
                <a href=""></a>
            </div>
        </section>
    )
}
export default TopHomeSection
interface Title{
    title: String;
}
export function TitlePage( { title }: Title ) {
    return(
        <div>
            <div className="pl-35 pt-25.5 pb-18.5 bg-[url('/background.png')] bg-cover bg-center">
                <h1 className="text-6xl font-bold leading-16 text-white pb-2">{title}</h1>
            </div>
        </div>
    )
}
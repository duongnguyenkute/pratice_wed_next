interface Text {
    text: String;
}



export function Button({text}: Text) {
    return (
        <button className="py-4.5 px-11.5 bg-primary text-xl font-semibold rounded-[3.125rem] 
            cursor-pointer transition duration-300 hover:opacity-70"
        >
            {text}
        </button>
    )
}

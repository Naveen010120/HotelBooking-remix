interface Props{
title:string,
subtitle:string,
align?:string,
font?:string
}

export function Title({title,subtitle,align,font}:Props){
    return(
        <div className={`flex flex-col justify-center items-center ${align=='left' &&"md:items-start md:text-left"}`}>
            <h1 className={`text-4xl md:text-[40px] ${font ||'font-serif font-bold'} `}>{title}</h1>
            <p className={`text-sm md:text-base text-gray-500/90 mt-2 max-w-174`}>{subtitle}</p>
        </div>
    )
}
interface Projects {
    title: string, 
    description: string,
    img: string,
    link: string
}

export default function WebDev() {

    const projects: Projects[] = [
        {title: "Pierro MMA Website", description: "Mixed Martial Arts team website", img:"Hello", link: "https://pierromma.com"},
        {title: "Macstudio CMS", description: "hello", img:"Hello", link: ""},
        {title: "Kalshi Trading Bot", description: "hello", img:"Hello", link: ""},
        ];

    return (
        <div className="grid grid-cols-1">
                 <div>
                balls
            </div>
        </div>
    )
}
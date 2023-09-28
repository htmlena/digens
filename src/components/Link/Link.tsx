import { FunctionComponent } from 'react'
interface LinkProps {
    href: string;
    text: string;
}

const Link: FunctionComponent<LinkProps> = ({href, text}) => {
    return (
        <div className="inline-flex gap-x-2.5">
            <a href={href} className="text-textWhite uppercase text-sm tracking-wider font-extrabold">
                {text}
            </a>
            <object type="image/svg+xml" data="/src/assets/icon-arrow.svg" className="opacity-80"></object>
        </div>
    )
}

export default Link;
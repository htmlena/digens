import { FunctionComponent, PropsWithChildren } from 'react'

interface DescriptionBlockProps extends PropsWithChildren <{
    headingElement: string;
    heading: string;
    shortDescription: string;
}> {}

const DescriptionBlock: FunctionComponent<DescriptionBlockProps> = ({headingElement, heading, shortDescription, children}) => {
    return (
    <div className="flex flex-col justify-start">
        <div className="inline-flex text-textMain gap-x-2">
            <object type="image/svg+xml" data="/src/assets/icon-triangle.svg" width="18.5" height="16"></object>
            <span className="text-textMain font-raleway uppercase text-xs font-bold leading-5 tracking-widest">{headingElement}</span>
        </div>
        <h2 className="font-raleway font-bold text-4xl md:text-5xl mt-3.5 capitalize leading-[43px]">{heading}</h2>
        <p className="font-mulish text-xl md:text-2xl text-textOnDark mt-[30px] leading-8">{shortDescription}</p>
        <div>{children}</div>
    </div>
    )
}

export default DescriptionBlock;
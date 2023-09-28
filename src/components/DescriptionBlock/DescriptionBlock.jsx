
const DescriptionBlock = ({headingElement, heading}) => {
    return (
    <div className="flex flex-col justify-start font-bold text-4xl md:text-5xl">
        <div className="inline-flex text-textMain gap-x-2">
            <object type="image/svg+xml" data="/src/assets/icon-triangle.svg" width="18.5" height="16"></object>
            <span className="uppercase text-xs">{headingElement}</span>
        </div>
        <h1>{heading}</h1>
    </div>
    )
}

export default DescriptionBlock;
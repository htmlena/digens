import Link from '../Link/Link'

const Card = ({heading, iconPath, shortDescription}) => {
    return (
        <div className="flex flex-col border-2 border-textOnDark/10 border-solid py-16 px-14 w-[330px] h-[420px]">
            <object type="image/svg+xml" data={iconPath} width="125" height="78"></object>
            <span className="font-semibold text-lg md:text-xl capitalize pt-11">{heading}</span>
            <p className="text-textOnDark pt-5">{shortDescription}</p>
            {/* <span className='-m-2 pt-12'>
                <Link />
            </span> */}
        </div>
    )
}

export default Card
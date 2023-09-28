import { FunctionComponent, PropsWithChildren } from 'react'

interface LayoutContainerProps extends PropsWithChildren <{
    backgroundColor: string;
}> {}

const LayoutContainer: FunctionComponent<LayoutContainerProps> = ({backgroundColor, children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default LayoutContainer;
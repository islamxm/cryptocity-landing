export type buttonPropsType = {
    text?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    before?: React.ReactNode,
    after?: React.ReactNode,
    size?: 'sm' | 'md' | 'lg'
 
}
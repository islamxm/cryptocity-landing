export type faqItemPropsType = {
    isActive: boolean,
    index: number,
    head: string,
    text: string,
    setActive: (index: number) => void
}
import { Variant, Variants } from "framer-motion"

export const defContainer: Variants = {
    hidden: { opacity: 1},
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
      }
    }
}


export const whenVisible = {
    initial:"hidden",
    whileInView: 'visible',
    viewport:{once: true}
}

export const defItem: Variants = {
  hidden: {y: 20, opacity: 0},
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'ease',
    }
  }
}





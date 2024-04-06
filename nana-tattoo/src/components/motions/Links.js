import { motion } from "framer-motion"

export  function PopLink({ href, className, children }) {
    return (
        <motion.a 
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.3 }}
            transition={{ duration: 0.2 }}
            href={href} 
            className={className}
        >
            {children}
        </motion.a>
    )
}

export function JumpLink({ href, className, children }) {
    return (
        <motion.a 
            initial={{ y: 0 }}
            whileHover={{ y: -5 }}
            whileTap={{ y: 5 }}
            transition={{ duration: 0.2 }}
            href={href} 
            className={className}
        >
            {children}
        </motion.a>
    )
}
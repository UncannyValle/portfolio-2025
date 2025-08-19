import { motion } from "framer-motion";
import { ComponentProps, forwardRef } from "react";

const Path = (props: ComponentProps<typeof motion.path>) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(254.0625, 67.36842105263158%, 62.745098039215684%)"
    strokeLinecap="round"
    {...props}
  />
);

interface HamburgerMenuProps {
  isOpen?: boolean;
}

export const HamburgerMenu = forwardRef<HTMLButtonElement, HamburgerMenuProps>(
  ({ isOpen = false, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className="inline-block lg:hidden cursor-pointer border-black"
        animate={isOpen ? "open" : "closed"}
        {...props}
      >
        <motion.svg width="23" height="23" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </motion.svg>
      </motion.button>
    );
  },
);
HamburgerMenu.displayName = "HamburgerMenu";

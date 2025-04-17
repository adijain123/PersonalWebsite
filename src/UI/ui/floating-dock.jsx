import { cn } from "../lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-1.5">
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.03,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.03 }}>
                <a
                  href={item.href}
                  key={item.title}
                  className="flex items-center justify-start px-3 h-8 rounded-full bg-gray-50 dark:bg-neutral-900 shadow-sm">
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">{item.title}</span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-16 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800 shadow-md">
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-12 items-end gap-2 rounded-2xl px-4 pb-2 md:flex",
        className
      )}>
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  href
}) {
  let ref = useRef(null);
  const textRef = useRef(null);
  const [baseWidth, setBaseWidth] = useState(0);

  // Calculate base width based on text length
  useEffect(() => {
    if (textRef.current) {
      // Get the actual text width plus some padding
      const textWidth = textRef.current.offsetWidth;
      // Set a minimum width of 70px and add 20px padding
      setBaseWidth(Math.max(70, textWidth + 30));
    }
  }, [title]);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Modified width transform that takes text length into account
  let widthTransform = useTransform(distance, [-150, 0, 150], 
    [baseWidth, baseWidth * 1.2, baseWidth]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [30, 36, 30]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  // Scale for title text based on distance
  let textScale = useTransform(distance, [-100, 0, 100], [0.9, 1.1, 0.9]);
  let textScale2 = useSpring(textScale, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        className="relative flex items-center justify-center rounded-full">
        <motion.div className="flex items-center justify-center">
          <motion.span 
            ref={textRef}
            className="text-lg font-bold text-black dark:text-neutral-300 hover:text-white whitespace-nowrap"
            style={{ 
              scale: textScale2,
              transformOrigin: "center center"
            }}
          >
            {title}
          </motion.span>
        </motion.div>
      </motion.div>
    </a>
  );
}
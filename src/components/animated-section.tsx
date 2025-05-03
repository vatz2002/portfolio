"use client";

import { motion, type MotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedSectionProps extends MotionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  id,
  ...motionProps
}) => {
  return (
    <motion.section
      id={id}
      className={`section-padding ${className || ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      {...motionProps}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;

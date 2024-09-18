"use client";
import { motion, useAnimation, MotionGlobalConfig } from "framer-motion";
import { Flex, Box, Button } from "@chakra-ui/react";
import styles from "./Marquee.module.scss";

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  const controls = useAnimation();

  controls.stop();

  const n = 8;
  return (
    <div role="region" aria-label="Announcement banner">
      <div className={styles.marquee}>
        <motion.div className={styles.track} variants={marqueeVariants} animate="animate">
          <Flex direction="row" gap={10} className={styles.text}>
            {[...Array(n)].map((e, i) => (
              <Box key={i}>Announcement</Box>
            ))}
          </Flex>
        </motion.div>
      </div>
      <motion.button animate aria-label="Close">
        X
      </motion.button>
    </div>
  );
};

export default Marquee;

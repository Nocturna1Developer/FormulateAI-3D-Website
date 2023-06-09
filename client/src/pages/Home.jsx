// Basically makes animations work, located in motion.js
import { motion, AnimatePresence } from 'framer-motion';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

import { useSnapshot } from 'valtio';
import state from '../store';
import { CustomButton } from '../components';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {/* Checks if we are currently on the home page */}
      {snap.intro &&
        (<motion.section className="home" {...slideAnimation('left')}>

          <motion.header {...slideAnimation("down")}>
            <img src="./threejs.png" alt="logo" className="w-8 h-8 object-contain"></img>
          </motion.header>

          <motion.div className="home-content" {...headContentAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                FORMULATE! 3D <br className="x1:block hidden" />
              </h1>
            </motion.div>

            <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
              <p className="max-w-md font-normal text-grey-600 text-base">
                Unleash your creativity with ChatGPT's 3D object customization! Upload your own logo or picture, or create a new one from scratch. The possibilities are endless.
              </p>
              {/* Check tailwind for more options on customizing buttons "w-fit" etc */}
              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
                customStyles={"w-fit px-4 py-2.5 font-bold text-sm"} />

              {/* <CustomButton
                type="filled"
                title="Change Model"
                handleClick={() => { }}
                customStyles={"w-fit px-2.5 py-2.5 font-bold text-sm"} /> */}

            </motion.div>
          </motion.div>

        </motion.section>)
      }
    </AnimatePresence>
  )
}
export default Home

import { useEffect, useState } from "react";
import Logger from "../utils/log";
import { AnimatePresence, motion } from "motion/react";

const box: React.CSSProperties = {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#923146"
}

function FullScreenRipple(props: { notify: boolean }) {

    const context = "Ripple Handler";
    const label = "Entering_Task_Room_._._.".split('');

    const [showRipple, setShowRipple] = useState(false);
    const [initialLoad, setInitialLoad] = useState(true);
    const [timeoutContext, setTimeoutContext] = useState(-1);
    
    useEffect(() => {
        log("Ripple was notified")
        
        const handleRippleContainer = (rippleState: boolean) => {

            log("State: " + rippleState)

            if (rippleState) {
                log("Openning ripple")
                setShowRipple(rippleState);

                // timeout created for automatic closing
                setTimeoutContext(
                    window.setTimeout(
                        () => {
                            log("clearing ripple timeout");
                            // handle closing
                            handleRippleContainer(!rippleState);
                            
                            // clear timeout
                            window.clearTimeout(timeoutContext);
                            setTimeoutContext(-1);
                            
                        },
                        5000
                    )
                );                
                return;
            }
            
            log("hiding ripple");
            setShowRipple(rippleState);

        }

        if (initialLoad) {
            log("Initial Load, cancelling execution")
            setInitialLoad(false);
            return;
        }

        handleRippleContainer(!showRipple);

    }, [props.notify]);


    const log = (message: string) => {
        Logger.log(context, message);
    }

    return (

      <div className="hide justify-center items-center absolute w-full h-full top-0 left-0">
        <AnimatePresence initial={true}>
          { showRipple? (
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              style={box}
              key="box"
            >

                <div className="flex justify-center items-center h-full w-full">
                    {label.map((letter, id) => (
                        <h1 key={id} style={{ fontFamily: "Arco" , fontSize: '5vw', color: "#fff", padding: (letter === '_')? "0 15px" : "0" }}>
                            <motion.div 
                                 
                                initial={{ y: 0 }}
                                animate={{ y: -15 }} 
                                exit={{ y: 0 }}
                                transition={{ 
                                    type: "spring", 
                                    delay: 0.1 * id,
                                    damping: 3,
                                }}
                                >
                                    {(letter === '_')? "" : letter}
                            </motion.div>
                        </h1>
                    ))}
                </div>

            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    )
}

export default FullScreenRipple;
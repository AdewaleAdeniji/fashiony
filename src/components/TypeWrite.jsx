import Typewriter from "typewriter-effect";


const TypeWrite = (props) => {
    return (
        <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    ...props,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(props.text)
                      .pauseFor(props?.pause||2500)
                      .deleteAll()
                      .start();
                  }}
                />
    )
}
export default TypeWrite;
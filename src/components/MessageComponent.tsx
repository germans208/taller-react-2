import { useEffect } from "react";

type Props = {
  name: string;
};

const MessageComponent: React.FC<Props> = ({ name }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Component Montado", name);
    }, 1000);

    //FUncion limpiadora, "Cleanup"
    return () => {
      console.log("Desmontado");
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h4>{name}</h4>
    </>
  );
};

export default MessageComponent;

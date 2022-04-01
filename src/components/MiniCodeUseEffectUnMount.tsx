import { useState } from "react";
import MessageComponent from "./MessageComponent";

export const MiniCodeUseEffectUnMount: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {visible && <MessageComponent name="Thanos" />}
      <button onClick={() => setVisible(!visible)}>I'm inevitable</button>
    </>
  );
};

export default MiniCodeUseEffectUnMount;

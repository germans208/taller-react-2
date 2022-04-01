import { useEffect, useState } from "react";

const MiniCodeUseEffectMount: React.FC = () => {
  const [state, setState] = useState<string>("Alberto");

  useEffect(() => {
    setTimeout(() => {
      console.log("MiniCodeUseEffectMount");
      setState("TEST");
    }, 2000);
  }, []);

  return (
    <div>
      <input
        type="text"
        value={state}
        onChange={(event) => setState(event.target.value)}
      />
    </div>
  );
};

export default MiniCodeUseEffectMount;

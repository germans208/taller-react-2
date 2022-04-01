import { useState } from "react";

const MiniCodeInput: React.FC = () => {
  const [state, setState] = useState<string>('Alberto');
  return (
    <div>
      <h3>Mini Code Input</h3>
      <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
    </div>
  );
};

export default MiniCodeInput;

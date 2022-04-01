import { useState } from "react";

const MiniCodeStateCallback: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [multiplier, setMultiplier] = useState<number>(1);

  return (
    <div>
      <h2>Total:{count}</h2>
      <input
        type="number"
        min={1}
        value={multiplier}
        onChange={(e) => setMultiplier(e.target.valueAsNumber)}
      />
      <br />

      <button
        onClick={() => {
          for (let i = 1; i <= multiplier; i++) {
            setCount((prevCount) => {
              return prevCount + 1;
            });
          }
        }}
      >
        Multiplicar
      </button>
    </div>
  );
};

export default MiniCodeStateCallback;

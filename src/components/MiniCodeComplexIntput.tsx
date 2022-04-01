import { useState } from "react";

type Avenger = {
  name: string;
  surname: string;
};

const MiniCodeComplexInput: React.FC = () => {
  const [avenger, setAvenger] = useState<Avenger>({
    name: "Thor",
    surname: "Odin",
  });

  const { name, surname } = avenger;

  return (
    <div>
      <h1>
        Nombre: {name} y Apellido: {surname}
      </h1>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) =>
          setAvenger({
            ...avenger,
            name: e.target.value,
          })
        }
      />
      <input
        id="surname"
        type="text"
        value={surname}
        onChange={(e) =>
          setAvenger({
            ...avenger,
            surname: e.target.value,
          })
        }
      />
    </div>
  );
};

export default MiniCodeComplexInput;

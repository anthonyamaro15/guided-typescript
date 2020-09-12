import React, { useState } from "react";

interface Person {
  firstName: string;
  lastNmae: string;
}
interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  person: Person;
}

// desctructuring Props
export const TextField: React.FC<Props> = ({ person }) => {
  const [count, setCount] = useState<number | null>(5);
  const [increment, setIncrement] = useState<number>(0);

  const add = () => {
    setIncrement(increment + 1);
  };
  return (
    <div>
      <input type="text" />
      <p>{`count starts at: ${increment}`}</p>
      <button onClick={add}>add</button>
    </div>
  );
};

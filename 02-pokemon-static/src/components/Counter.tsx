import type { JSX } from "astro/jsx-runtime";
import { createSignal, type Component } from "solid-js";

interface Props {
  initValue: number;
  children?: JSX.Element;
}

export const Counter: Component<Props> = (props) => {
  // Usamos el valor inicial pasado por las props
  const [counter, setCounter] = createSignal(props.initValue);

  return (
    <>
      {/* <h1 class="text-5xl">Counter</h1> */}
      {props.children}
      <h3 class="text-xl">Value: {counter()}</h3>

      <button
        class="bg-blue-500 p-2 mr-2 rounded"
        onClick={() => setCounter(counter() + 1)}
      >
        +1
      </button>
      <button
        class="bg-blue-500 p-2 mr-2 rounded"
        onClick={() => setCounter(counter() - 1)}
      >
        -1
      </button>
    </>
  );
};

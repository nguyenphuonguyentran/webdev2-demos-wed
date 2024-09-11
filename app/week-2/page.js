import Heading from "./heading";

export default function Page() {
  const a = 5;
  const b = 10;

  return (
    <main>
      <Heading />
      <p> This is a demo for Week 2. </p>
      <p> The sum of a and b is {a + b}. </p>
    </main>
  );
}

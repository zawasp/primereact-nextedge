import { Button } from "primereact/button";

// This gives a console error: Prop `className` did not match. Server: "null"
export const runtime = "edge";

export default function Home() {
  return (
    <div>
      <Button label="TEST" />
    </div>
  );
}

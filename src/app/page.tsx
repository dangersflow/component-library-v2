import Button from "../../lib/Button";
import PopoverDemo from "../../lib/Popover";
import { Column, Row } from "../../lib/Primitives";

export default function Home() {
  return (
    <Column>
      <Row>
        Hello World!
        <Button size="small">Click Me!</Button>
        <PopoverDemo />
        <Button size="large">Large!</Button>
      </Row>
    </Column>
  );
}

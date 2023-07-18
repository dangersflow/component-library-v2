import { Rubik } from "next/font/google";
import Button from "../../lib/Button";
import PopoverDemo from "../../lib/Popover";
import { Column, Row } from "../../lib/Primitives";

const rubik = Rubik({ weight: "300", style: "normal", subsets: ["latin"] });

export default function Home() {
  return (
    <Column>
      <Row>
        Hello World!
        <Button className={rubik.className} size="small">
          Click Me!
        </Button>
        <PopoverDemo className={rubik.className} />
        <Button size="large" className={rubik.className}>
          Large!
        </Button>
      </Row>
    </Column>
  );
}

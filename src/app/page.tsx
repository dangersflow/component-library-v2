import Button from '../../lib/Button'
import PopoverDemo from '../../lib/Popover'
import { Section } from '../../lib/Primitives'


export default function Home() {
  return (
    <Section>
      Hello World!

      <Button>
        Click Me!
      </Button>

      <PopoverDemo />
    </Section>
  )
}

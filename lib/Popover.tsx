'use client'

import * as Popover from '@radix-ui/react-popover';
import Button from './Button';

const PopoverDemo = () => {
    return (
        <Popover.Root>
        <Popover.Trigger asChild>
            <Button>Trigger</Button>
        </Popover.Trigger>
        <Popover.Anchor />
        <Popover.Portal>
          <Popover.Content>
            I AM THE CONTENT
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    
    )
}

export default PopoverDemo;
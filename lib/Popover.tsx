"use client";

import * as Popover from "@radix-ui/react-popover";
import styled from "styled-components";
import Button from "./Button";

const PopoverDemo = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button size="medium">Trigger</Button>
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <PopoverContent>I AM THE CONTENT</PopoverContent>
      </Popover.Portal>
    </Popover.Root>
  );
};

const PopoverContent = styled(Popover.Content)`
  border: 1px solid grey;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export default PopoverDemo;

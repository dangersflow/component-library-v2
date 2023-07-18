"use client";

import * as Popover from "@radix-ui/react-popover";
import styled from "styled-components";
import Button from "./Button";

interface PopoverProps {
  children?: React.ReactNode;
  className?: string;
}

const StyledPopoverContent = styled(Popover.Content)``;

const PopoverDemo = (props: PopoverProps) => {
  return (
    <Popover.Root {...props}>
      <Popover.Trigger asChild>
        <Button size="medium" className={props.className}>
          Trigger
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <PopoverContent className={props.className}>
          I am the content for the popover component!
        </PopoverContent>
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

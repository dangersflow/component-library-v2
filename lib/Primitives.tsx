"use client";

import styled from "styled-components";

export const Row = styled("section")`
  display: flex;
  flex-direction: row;
  padding-left: 1rem;
  padding-right: 1rem;
  gap: 1.5rem;
  flex: 1 1 auto;
  width: 100%;
  align-items: center;
`;

export const Column = styled("section")`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 1rem;
  gap: 1.5rem;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

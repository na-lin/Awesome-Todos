import React from "react";

// Circum Icons from React icons
import { CiSquareCheck, CiMemoPad } from "react-icons/ci";

// Boostrap
import Stack from "react-bootstrap/Stack";

export default function Sidebar() {
  return (
    <Stack gap={3} className="px-3 py-2 bg-primary h-100">
      <CiSquareCheck className="fs-3" />
      <CiMemoPad className="fs-3" />
    </Stack>
  );
}

"use client"

import { Box, Stack } from "@mui/material"
import Image from "next/image"

interface ProfileCardProps {
  imageUrl: string
  name: string
  studentNumber: string
  major: string
}

export default function ProfileCard({
  imageUrl,
  name,
  studentNumber,
  major,
}: ProfileCardProps) {
  return (
    <Stack
      pt="24px"
      width="calc(100vw - 16px)"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        p="8px"
        gap="8px"
        width="80%"
        border="1px solid #ddd"
        borderRadius="8px"
        textAlign="center"
      >
        <Image src={imageUrl} width="100" height="400" alt="profileImage" />
        <Box fontWeight="bold">{major}</Box>
        <Box>{studentNumber}학번</Box>
        <Box>{name}</Box>
      </Stack>
    </Stack>
  )
}

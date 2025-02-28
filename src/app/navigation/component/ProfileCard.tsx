"use client"

import { Box, Stack } from "@mui/material"
import Image from "next/image"
import TempProfileImage from "./temp_profile_image.png"

interface ProfileCardProps {
  imageUrl: string
  name: string
  studentNumber: string
  major: string
}

export default function ProfileCard({
  name,
  studentNumber,
  major,
}: ProfileCardProps) {
  return (
    <Stack pt="24px" width="100vw" justifyContent="center" alignItems="center">
      <Stack
        p="8px"
        gap="8px"
        width="80%"
        border="1px solid #ddd"
        borderRadius="8px"
        textAlign="center"
        justifyContent="center"
        alignContent="center"
      >
        <Image src={TempProfileImage} alt="profileImage" />
        <Box fontWeight="bold">{major}</Box>
        <Box>{studentNumber}학번</Box>
        <Box>{name}</Box>
      </Stack>
    </Stack>
  )
}

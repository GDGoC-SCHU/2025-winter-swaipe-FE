"use client"

import mainLogo from "@/common/images/mainLogo.png"
import { Box, Button, Stack } from "@mui/material"
import Image from "next/image"
import { useState } from "react"
import PhoneNumberVerification from "./PhoneNumberVerification"
import { useRouter } from "next/navigation"

export default function Intro() {
  const router = useRouter()
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0)

  function CurrentDisplayComponent() {
    switch (currentComponentIndex) {
      case 0:
        return <PhoneNumberVerification />
      case 1:
        return <div>PhoneCheck</div>
      case 2:
        return <div>PhoneCheck</div>
      default:
        return <div>PhoneCheck</div>
    }
  }

  function handleNext() {
    setCurrentComponentIndex((prev) => {
      if (prev === 2) {
        router.push("/navigation/home")
        return 0
      }
      return prev + 1
    })
  }

  return (
    <Stack className="p-4" height="100svh" alignItems="center" gap="12px">
      <Image
        src={mainLogo}
        className="logo_image"
        alt="mainLogo"
        width="101"
        height="111"
      />
      <Box fontSize="20px">본인인증</Box>
      <Stack className="flex-1">
        <CurrentDisplayComponent />
      </Stack>
      <Stack direction="row" gap="8px">
        <Box
          width="12px"
          height="12px"
          borderRadius="30px"
          bgcolor={currentComponentIndex === 0 ? "black" : "grey"}
        />
        <Box
          width="12px"
          height="12px"
          borderRadius="30px"
          bgcolor={currentComponentIndex === 1 ? "black" : "grey"}
        />
        <Box
          width="12px"
          height="12px"
          borderRadius="30px"
          bgcolor={currentComponentIndex === 2 ? "black" : "grey"}
        />
      </Stack>
      <Button
        onClick={handleNext}
        variant="contained"
        fullWidth
        className="bg-black"
      >
        다음
      </Button>
    </Stack>
  )
}

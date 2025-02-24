"use client"

import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import mainLogo from "@/common/images/mainLogo.png"
import { Box, Button, Stack } from "@mui/material"

import Information from "./Information"
import ProfileImage from "./ProfileImage"
import PhoneNumberVerification from "./PhoneNumberVerification"

export default function Intro() {
  const router = useRouter()
  const [disableNextButton, setDisableNextButton] = useState(true)
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0)

  function CurrentDisplayComponent() {
    switch (currentComponentIndex) {
      case 0:
        return (
          <PhoneNumberVerification
            setDisableNextButton={setDisableNextButton}
          />
        )

      case 1:
        return <ProfileImage setDisableNextButton={setDisableNextButton} />
      case 2:
        return <Information setDisableNextButton={setDisableNextButton} />
      default:
        return undefined
    }
  }

  function handleNext() {
    if (currentComponentIndex === 2) {
      router.push("/navigation")
      return
    }
    setDisableNextButton(true)
    setCurrentComponentIndex((prev) => prev + 1)
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
      <Stack className="flex-1">{CurrentDisplayComponent()}</Stack>
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
        disabled={disableNextButton}
        className="bg-black"
      >
        다음
      </Button>
    </Stack>
  )
}

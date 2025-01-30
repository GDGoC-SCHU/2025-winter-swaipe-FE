"use client"

import mainLogo from "@/common/images/mainLogo.png"
import { Button, Stack } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function NavigationLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter()

  function goToPage(page: "home" | "heart" | "my" | "alarm") {
    router.push(`/navigation/${page}`)
  }

  return (
    <Stack height="100svh" direction="column" gap="12px" width="100%">
      <Stack className="p-4 flex-1 " alignItems="center" width="100%">
        <Image src={mainLogo} width="101" alt="mainLogo" />
        <Stack>{children}</Stack>
      </Stack>
      <Stack direction="row" gap="8px" height="40px">
        <Button
          className="flex-1"
          variant="outlined"
          onClick={() => goToPage("home")}
        >
          home
        </Button>
        <Button
          className="flex-1"
          variant="outlined"
          onClick={() => goToPage("heart")}
        >
          heart
        </Button>
        <Button
          className="flex-1"
          variant="outlined"
          onClick={() => goToPage("my")}
        >
          my
        </Button>
        <Button
          className="flex-1"
          variant="outlined"
          onClick={() => goToPage("alarm")}
        >
          Alarm
        </Button>
      </Stack>
    </Stack>
  )
}

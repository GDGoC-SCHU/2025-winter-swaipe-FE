"use client"

import { profileCardDataList } from "@/api/profileCardData"
import { Button, Stack } from "@mui/material"
import { useRouter } from "next/navigation"

export default function Alarm() {
  const router = useRouter()

  function goToPay() {
    router.push("/pay")
  }

  return (
    <Stack height="100%" flex="1">
      <Stack textAlign="center" fontSize="20px" p="16px">
        곧 연락이 올 인연이
        <br />
        기다리고 있습니다.
      </Stack>
      <Stack flex="1">
        {profileCardDataList.map((profileCardData, index) => (
          <Stack
            p="8px"
            m="8px"
            key={index}
            border="1px solid #ddd"
            borderRadius="8px"
          >
            <Stack direction="row" gap="12px" fontSize="20px">
              <Stack>{profileCardData.major}</Stack>
              <Stack>{profileCardData.studentNumber}</Stack>
              <Stack>{profileCardData.name}</Stack>
            </Stack>
            <Stack direction="row" gap="12px">
              {profileCardData.tag.map((tag, index) => (
                <Stack key={index} p="8px" fontSize="12px" color="gray">
                  {tag}
                </Stack>
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

"use client"

import { Stack } from "@mui/material"
import ProfileCard from "../component/ProfileCard"
import { profileCardDataList } from "@/api/profileCardData"

export default function My() {
  return (
    <Stack height="100%">
      <Stack textAlign="center" fontSize="20px" p="16px">
        당신의 선택이
        <br />
        새로운 인연을 만듭니다.
      </Stack>
      <Stack
        width="100vw"
        direction="row"
        overflow="auto"
        position="static"
        alignItems="center"
        flex="1"
        style={{
          scrollSnapType: "x mandatory",
          msOverflowStyle: "none",
        }}
      >
        {profileCardDataList.map((profileCardData, index) => (
          <Stack
            m="0"
            key={index}
            style={{
              scrollSnapAlign: "start",
            }}
          >
            <ProfileCard {...profileCardData} />
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

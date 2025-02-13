"use client"

import { Stack } from "@mui/material"
import ProfileCard from "../component/ProfileCard"

export default function My() {
  const profileCardDataList = [
    {
      imageUrl:
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png",
      name: "홍길동1",
      studentNumber: "23",
      major: "컴퓨터공학과",
    },
    {
      imageUrl:
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png",
      name: "홍길동2",
      studentNumber: "23",
      major: "컴퓨터공학과",
    },
    {
      imageUrl:
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png",
      name: "홍길동3",
      studentNumber: "23",
      major: "컴퓨터공학과",
    },
    {
      imageUrl:
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png",
      name: "홍길동4",
      studentNumber: "23",
      major: "컴퓨터공학과",
    },
  ]

  return (
    <Stack>
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

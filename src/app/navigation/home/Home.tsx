"use client"

import { profileCardDataList } from "@/api/profileCardData"
import { Stack } from "@mui/material"
import ProfileCard from "../component/ProfileCard"
import HeartFill from "./heart_fill.png"
import HeartEmpty from "./heart_empty.png"
import { useState } from "react"
import Image from "next/image"

export default function Home() {
  const [like, setLike] = useState<number[]>([])

  const handleLike = (index: number) => {
    if (like.includes(index)) {
      setLike(like.filter((i) => i !== index))
    } else {
      setLike([...like, index])
    }
  }

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
            <Stack
              mt="12px"
              mx="40px"
              direction="row"
              width="calc(80vw)"
              alignContent="center"
              justifyContent="space-between"
            >
              <Stack direction="row">
                {profileCardData.tag.map((tag, index) => (
                  <Stack key={index} p="8px" fontSize="12px" color="gray">
                    {tag}
                  </Stack>
                ))}
              </Stack>

              <Stack>
                <Image
                  src={like.includes(index) ? HeartFill : HeartEmpty}
                  alt="heart"
                  width="24"
                  height="24"
                  onClick={() => handleLike(index)}
                />
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

import { Button, Stack } from "@mui/material"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

export default function ProfileImage({
  setDisableNextButton,
}: {
  setDisableNextButton: Dispatch<SetStateAction<boolean>>
}) {
  const [imageData, setImageData] = useState<string | undefined>()
  useEffect(() => {
    loadCamera()
  }, [])

  async function loadCamera() {
    if ("getUserMedia" in navigator.mediaDevices) {
      const video = await navigator.mediaDevices.getUserMedia({
        video: true,
      })
      const cameraView = document.getElementById("video") as HTMLVideoElement
      if (!video || !cameraView) {
        return
      }
      cameraView.srcObject = video
      cameraView.play()
    }
  }

  function takePicture() {
    if (imageData) {
      setImageData(undefined)
      setDisableNextButton(true)
      loadCamera()
      return
    }
    const cameraView = document.getElementById("video") as HTMLVideoElement
    const canvas = document.createElement("canvas")
    canvas.width = cameraView.videoWidth
    canvas.height = cameraView.videoHeight
    canvas.getContext("2d")?.drawImage(cameraView, 0, 0)
    const data = canvas.toDataURL("image/png")
    setDisableNextButton(false)
    setImageData(data)
  }

  return (
    <Stack gap="12px">
      <Stack fontSize="20px" textAlign="center">
        시작 전에 몇가지
        <br />
        사항만 입력 할게요
      </Stack>
      <Stack width="300px">
        {imageData ? (
          <img src={imageData} alt="profile" />
        ) : (
          <video id="video" width="300" />
        )}
      </Stack>
      <Stack textAlign="center">본인 사진을 등록해 주세요.</Stack>
      <Stack mt="12px">
        <Button variant="contained" onClick={takePicture}>
          {imageData ? "다시 찍기" : "사진 찍기"}
        </Button>
      </Stack>
    </Stack>
  )
}

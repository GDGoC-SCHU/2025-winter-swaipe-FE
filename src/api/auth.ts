//import axios from "@axios"

export enum UserStatus {
  PENDING = "PENDING",
  ACTIVE = "ACTIVE",
  SUSPENDED = "SUSPENDED",
  DELETED = "DELETED",
}

export type User = {
  id: string
  kakao_id: string
  phone_number: string
  email: string
  status: UserStatus
  points: number
  created_at: Date
  updated_at: Date
}

export async function kakaoLogin() {
  return new Promise<{ data: User; status: number }>((resolve) => {
    resolve({
      data: {
        id: "id",
        kakao_id: "00000000001",
        phone_number: "010-0000-0000",
        email: "abc@abc.com",
        status: UserStatus.PENDING,
        points: 0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      status: 200,
    })
  })
}

import { type NextRequest, NextResponse } from "next/server"

const comedyComments = [
  {
    id: 1,
    postId: 1,
    name: "Aziz Azizov",
    email: "aziz@uzbekjson.uz",
    body: "Hahaha! Mening mushugim ham xuddi shunday! Ular bizni o'z xizmatkorlari deb o'ylashadi 😂",
  },
  {
    id: 2,
    postId: 1,
    name: "Feruza Feruzova",
    email: "feruza@uzbekjson.uz",
    body: "Mushuklar haqiqatan ham boshqa sayyoradan kelgan. Ular bizni o'rganib yurganlar! 🐱👽",
  },
  {
    id: 3,
    postId: 2,
    name: "Otabek Otabekov",
    email: "otabek@uzbekjson.uz",
    body: "Kosmik palov retseptini ulashing! Bizda ham sinab ko'ramiz 🚀🍚",
  },
]

const dramaComments = [
  {
    id: 1,
    postId: 1,
    name: "Madina Madinova",
    email: "madina@uzbekjson.uz",
    body: "Qanchalik chuqur fikrlar... Vaqt haqiqatan ham eng qimmat ne'mat. Har bir lahzani qadrlashimiz kerak.",
  },
  {
    id: 2,
    postId: 2,
    name: "Jamshid Jamshidov",
    email: "jamshid@uzbekjson.uz",
    body: "Ona tilimiz - bizning ruhiy boyligimiz. Uni asrashimiz va rivojlantirishimiz - burchimiz.",
  },
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const style = searchParams.get("style") || "comedy"
  const postId = searchParams.get("postId")

  let comments
  switch (style) {
    case "drama":
      comments = dramaComments
      break
    default:
      comments = comedyComments
  }

  if (postId) {
    const filteredComments = comments.filter((c) => c.postId === Number.parseInt(postId))
    return NextResponse.json(filteredComments)
  }

  return NextResponse.json(comments)
}

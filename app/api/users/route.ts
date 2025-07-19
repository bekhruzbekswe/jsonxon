import { type NextRequest, NextResponse } from "next/server"

const comedyUsers = [
  {
    id: 1,
    name: "Komil Karimov",
    username: "komil_kulgi",
    email: "komil@uzbekjson.uz",
    phone: "+998-90-123-45-67",
    website: "komil-kulgi.uz",
    bio: "Hayotni kulgili tomoni bilan ko'raman 😄",
    city: "Toshkent",
    profession: "Komediyachi",
    hobbies: ["hazil qilish", "kitob o'qish", "futbol"],
  },
  {
    id: 2,
    name: "Malika Toshmatova",
    username: "malika_chef",
    email: "malika@uzbekjson.uz",
    phone: "+998-91-234-56-78",
    website: "malika-oshpaz.uz",
    bio: "Oshxonada sehrgar, hayotda optimist ✨",
    city: "Samarqand",
    profession: "Oshpaz",
    hobbies: ["ovqat pishirish", "rasm chizish", "bog'bonchilik"],
  },
]

const dramaUsers = [
  {
    id: 1,
    name: "Sardor Rahimov",
    username: "sardor_poet",
    email: "sardor@uzbekjson.uz",
    phone: "+998-93-345-67-89",
    website: "sardor-she'r.uz",
    bio: "So'zlar orqali qalblarni terib beraman 💫",
    city: "Buxoro",
    profession: "Shoir",
    hobbies: ["she'r yozish", "musiqa tinglash", "tabiat bilan suhbat"],
  },
  {
    id: 2,
    name: "Nilufar Karimova",
    username: "nilufar_writer",
    email: "nilufar@uzbekjson.uz",
    phone: "+998-94-456-78-90",
    website: "nilufar-yozuvchi.uz",
    bio: "Har bir so'z - qalb zarbasidek 💝",
    city: "Farg'ona",
    profession: "Yozuvchi",
    hobbies: ["kitob yozish", "sayohat", "san'at"],
  },
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const style = searchParams.get("style") || "comedy"
  const id = searchParams.get("id")

  let users
  switch (style) {
    case "drama":
      users = dramaUsers
      break
    default:
      users = comedyUsers
  }

  if (id) {
    const user = users.find((u) => u.id === Number.parseInt(id))
    return NextResponse.json(user || null)
  }

  return NextResponse.json(users)
}

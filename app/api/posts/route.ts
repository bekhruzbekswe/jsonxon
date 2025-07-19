import { type NextRequest, NextResponse } from "next/server"

const comedyPosts = [
  {
    id: 1,
    title: "Mening mushukimning kundalik hayoti",
    body: "Bugun mushugim yana meni soat 5 da uyg'otdi. Sababi? Uning idishi yarim bo'sh edi! Tabiiyki, bu dunyoning oxiri edi uning fikriga ko'ra. Keyin esa butun kun davomida uxlab yotdi. Mushuklar haqiqatan ham boshqa sayyoralik ekanlar.",
    userId: 1,
    author: "Komil Karimov",
    date: "2024-01-15",
    likes: 42,
    category: "hayot",
  },
  {
    id: 2,
    title: "Oshxonada ajoyib kashfiyot",
    body: "Bugun oshxonada yangi retsept sinab ko'rdim. Aslida palov pishirmoqchi edim, lekin oxirida g'alati bir taom chiqdi. Oilam buni 'kosmik palov' deb atashdi. Yaxshiyamki, mazasi yomon emas edi!",
    userId: 2,
    author: "Malika Toshmatova",
    date: "2024-01-14",
    likes: 28,
    category: "ovqat",
  },
]

const dramaPosts = [
  {
    id: 1,
    title: "Vaqt o'tishi haqida o'ylar",
    body: "Kecha eski fotosuratlarni ko'rib o'tirdim. Qanday tez o'tib ketgan yillar... Har bir surat - bu bir lahza, bir xotira. Ba'zan o'tmishga qaytishni xohlayman, lekin bilaman ki, oldinda yangi sarguzashtlar kutmoqda.",
    userId: 1,
    author: "Sardor Rahimov",
    date: "2024-01-15",
    likes: 156,
    category: "falsafa",
  },
  {
    id: 2,
    title: "Ona tilimizning go'zalligi",
    body: "O'zbek tili - bu bizning qalbimizning tili. Har bir so'z, har bir ibora ichida asrlar davomida to'plangan donolik mujassam. Biz bu tilni avloddan avlodga o'tkazib, uning go'zalligini saqlashimiz kerak.",
    userId: 2,
    author: "Nilufar Karimova",
    date: "2024-01-14",
    likes: 203,
    category: "madaniyat",
  },
]

const romancePosts = [
  {
    id: 1,
    title: "Bahor sevgisi",
    body: "Bahor keldi, va men yana sevib qoldim. Bu safar olmalar gullagan bog'da, quyosh nuri ostida. Uning kulgi ovozi shamol bilan aralashib, qalbimda abadiy saqlanib qoldi. Sevgi - bu eng go'zal his.",
    userId: 1,
    author: "Jasur Alimov",
    date: "2024-01-15",
    likes: 89,
    category: "sevgi",
  },
  {
    id: 2,
    title: "Birinchi uchrashuv",
    body: "Kitob do'konida uchrashgan edik. U she'riyat bo'limida turgan edi, men esa roman qidirayotgan edim. Bir kitob uchun ikkalamiz qo'l uzatganimizda, qo'llarimiz tegishdi. O'sha lahzada vaqt to'xtab qolgandek bo'ldi.",
    userId: 2,
    author: "Gulnora Yusupova",
    date: "2024-01-14",
    likes: 134,
    category: "sevgi",
  },
]

const adventurePosts = [
  {
    id: 1,
    title: "Chimyon tog'laridagi sarguzasht",
    body: "Chimyon tog'lariga ko'tarilish - bu haqiqiy sinov edi. Qiyalik yo'llar, noma'lum burilishlar, va eng muhimi - cho'qqida kutayotgan ajoyib manzara. Tog'lar bizga sabr va qat'iyatni o'rgatadi.",
    userId: 1,
    author: "Bobur Nazarov",
    date: "2024-01-15",
    likes: 67,
    category: "sayohat",
  },
  {
    id: 2,
    title: "Samarqand yo'llarida",
    body: "Samarqandga sayohat - bu vaqt mashinasida sayohat qilishga o'xshaydi. Registon maydonida turganda, o'zingni Amir Temur davrida his qilasan. Har bir tosh, har bir naqsh tarix haqida gapiradi.",
    userId: 2,
    author: "Zarina Mirzayeva",
    date: "2024-01-14",
    likes: 198,
    category: "sayohat",
  },
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const style = searchParams.get("style") || "comedy"
  const limit = Number.parseInt(searchParams.get("_limit") || "10")
  const page = Number.parseInt(searchParams.get("_page") || "1")

  let posts
  switch (style) {
    case "drama":
      posts = dramaPosts
      break
    case "romance":
      posts = romancePosts
      break
    case "adventure":
      posts = adventurePosts
      break
    default:
      posts = comedyPosts
  }

  // Simulate pagination
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedPosts = posts.slice(startIndex, endIndex)

  return NextResponse.json(paginatedPosts)
}

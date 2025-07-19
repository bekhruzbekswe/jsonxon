"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Palette, ImageIcon } from "lucide-react"

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent mb-4">
            JsonXon Qo'llanma
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            JsonXon API xizmatidan qanday foydalanishni o'rganing
          </p>
          <p className="text-sm text-blue-600 mt-2">Uzbekify tomonidan yaratilgan</p>
        </div>

        <Tabs defaultValue="getting-started" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="getting-started">Boshlash</TabsTrigger>
            <TabsTrigger value="endpoints">API yo'nalishlari</TabsTrigger>
            <TabsTrigger value="styles">Uslublar</TabsTrigger>
            <TabsTrigger value="patterns">Naqsh generatori</TabsTrigger>
            <TabsTrigger value="culture">Madaniyat</TabsTrigger>
            <TabsTrigger value="examples">Misollar</TabsTrigger>
          </TabsList>

          <TabsContent value="getting-started" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="w-5 h-5" />
                  <span>Tezkor boshlash</span>
                </CardTitle>
                <CardDescription>JsonXon bilan ishlashni boshlash uchun quyidagi qadamlarni bajaring</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">1. API manzili</h4>
                  <code className="bg-gray-100 px-3 py-1 rounded">https://jsonxon.uz/api</code>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2. Birinchi so'rov</h4>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    <code>{`fetch('https://jsonxon.uz/api/posts')
  .then(response => response.json())
  .then(json => console.log(json))`}</code>
                  </pre>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3. Uslub tanlash</h4>
                  <p className="text-gray-600 mb-2">
                    Ma'lumot uslubini tanlash uchun <code>style</code> parametridan foydalaning:
                  </p>
                  <code className="bg-gray-100 px-3 py-1 rounded">?style=comedy</code>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="endpoints" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { path: "/posts", desc: "Maqolalar", icon: "📝", count: "100 ta" },
                { path: "/comments", desc: "Izohlar", icon: "💬", count: "500 ta" },
                { path: "/albums", desc: "Albomlar", icon: "📸", count: "100 ta" },
                { path: "/photos", desc: "Rasmlar", icon: "🖼️", count: "5000 ta" },
                { path: "/todos", desc: "Vazifalar", icon: "✅", count: "200 ta" },
                { path: "/users", desc: "Foydalanuvchilar", icon: "👤", count: "10 ta" },
                { path: "/patterns", desc: "Naqshlar", icon: "🎨", count: "∞ ta", isNew: true },
              ].map((endpoint) => (
                <Card key={endpoint.path}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{endpoint.icon}</span>
                        <span>{endpoint.desc}</span>
                      </div>
                      {endpoint.isNew && (
                        <span className="text-xs bg-amber-500 text-white px-2 py-1 rounded">YANGI</span>
                      )}
                    </CardTitle>
                    <CardDescription className="font-mono">/api{endpoint.path}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">
                      {endpoint.desc} ma'lumotlarini olish uchun ushbu yo'nalishdan foydalaning.
                    </p>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{endpoint.count}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="styles" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  id: "comedy",
                  name: "Komediya",
                  color: "bg-yellow-500",
                  desc: "Kulgili va qiziqarli ma'lumotlar. Hazil va o'yin-kulgi bilan to'ldirilgan.",
                },
                {
                  id: "drama",
                  name: "Drama",
                  color: "bg-purple-500",
                  desc: "Hissiyotli va chuqur ma'lumotlar. Falsafiy va ma'naviy mavzular.",
                },
                {
                  id: "romance",
                  name: "Romantika",
                  color: "bg-pink-500",
                  desc: "Sevgi va muhabbat haqidagi ma'lumotlar. Yurak ishlari va his-tuyg'ular.",
                },
                {
                  id: "adventure",
                  name: "Sarguzasht",
                  color: "bg-blue-500",
                  desc: "Qiziqarli sayohat va kashfiyot hikoyalari. Yangi joylar va tajribalar.",
                },
              ].map((style) => (
                <Card key={style.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <div className={`w-4 h-4 rounded-full ${style.color}`}></div>
                      <span>{style.name}</span>
                    </CardTitle>
                    <CardDescription>?style={style.id}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{style.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="patterns" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Palette className="w-5 h-5" />
                  <span>Naqsh generatori</span>
                </CardTitle>
                <CardDescription>O'zbek naqshlarini yaratish uchun API</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Asosiy foydalanish</h4>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    <code>{`// Oddiy geometrik naqsh
https://jsonxon.uz/api/patterns?type=geometric

// Ranglar bilan
https://jsonxon.uz/api/patterns?type=floral&colors=blue,gold,red

// To'liq sozlamalar bilan
https://jsonxon.uz/api/patterns?type=ceramic&size=600&colors=#1e40af,#d97706&complexity=7&rotation=45`}</code>
                  </pre>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Parametrlar</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div>
                        <code className="text-sm bg-gray-100 px-2 py-1 rounded">type</code>
                        <p className="text-sm text-gray-600 mt-1">
                          Naqsh turi: geometric, floral, ceramic, textile, calligraphy, architectural
                        </p>
                      </div>
                      <div>
                        <code className="text-sm bg-gray-100 px-2 py-1 rounded">size</code>
                        <p className="text-sm text-gray-600 mt-1">Rasm o'lchami (pikselda, standart: 400)</p>
                      </div>
                      <div>
                        <code className="text-sm bg-gray-100 px-2 py-1 rounded">colors</code>
                        <p className="text-sm text-gray-600 mt-1">
                          Vergul bilan ajratilgan ranglar (masalan: blue,gold,red)
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <code className="text-sm bg-gray-100 px-2 py-1 rounded">complexity</code>
                        <p className="text-sm text-gray-600 mt-1">Murakkablik darajasi (1-10, standart: 5)</p>
                      </div>
                      <div>
                        <code className="text-sm bg-gray-100 px-2 py-1 rounded">rotation</code>
                        <p className="text-sm text-gray-600 mt-1">Aylanish burchagi (0-360, standart: 0)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Naqsh turlari</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { type: "geometric", name: "Geometrik", desc: "Yulduz va ko'pburchak naqshlar" },
                      { type: "floral", name: "Gul", desc: "Tabiiy gul va barg naqshlari" },
                      { type: "ceramic", name: "Keramika", desc: "Plitkali kulolchilik naqshlari" },
                      { type: "textile", name: "To'qima", desc: "Ikat va atlas naqshlari" },
                      { type: "calligraphy", name: "Xattotlik", desc: "Arab yozuvi elementlari" },
                      { type: "architectural", name: "Me'moriy", desc: "Bino bezaklari" },
                    ].map((pattern) => (
                      <div key={pattern.type} className="bg-gray-50 p-3 rounded">
                        <div className="h-16 bg-gray-200 rounded mb-2 flex items-center justify-center">
                          <ImageIcon className="w-8 h-8 text-gray-400" />
                        </div>
                        <h5 className="font-medium text-sm">{pattern.name}</h5>
                        <p className="text-xs text-gray-600">{pattern.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="culture" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">🇺🇿</span>
                  <span>Uzbekify haqida</span>
                </CardTitle>
                <CardDescription>O'zbek madaniyati va uslubidagi dasturiy ta'minot</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Bizning missiyamiz</h4>
                  <p className="text-gray-600 mb-4">
                    Uzbekify - bu O'zbekistonning boy madaniy merosini zamonaviy texnologiyalar bilan birlashtiruvchi
                    kompaniya. Biz o'zbek uslubidagi dasturiy ta'minot va xizmatlar yaratamiz.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-2">Madaniy boylik</h5>
                    <p className="text-sm text-blue-600">O'zbek xalqining an'analari va qiymatlarini saqlash</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-amber-800 mb-2">Innovatsiya</h5>
                    <p className="text-sm text-amber-600">An'anaviy naqshlarni zamonaviy texnologiyalar bilan</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">Jamoa</h5>
                    <p className="text-sm text-green-600">Mahalliy dasturchilar va dizaynerlar jamoasi</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Boshqa loyihalarimiz</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-medium">UzbekUI</h5>
                      <p className="text-sm text-gray-600">O'zbek uslubidagi UI komponentlar kutubxonasi</p>
                    </div>
                    <div className="border-l-4 border-amber-500 pl-4">
                      <h5 className="font-medium">Naqshlar</h5>
                      <p className="text-sm text-gray-600">An'anaviy o'zbek naqshlari generatori</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-medium">UzbekAPI</h5>
                      <p className="text-sm text-gray-600">O'zbek dasturchilar uchun API xizmatlar to'plami</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Amaliy misollar</CardTitle>
                <CardDescription>Turli dasturlash tillari va kutubxonalar bilan foydalanish misollari</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">JavaScript (Fetch API)</h4>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    <code>{`// Ma'lumotlarni olish
fetch('https://jsonxon.uz/api/posts?style=comedy')
  .then(response => response.json())
  .then(posts => {
    posts.forEach(post => {
      console.log(post.title);
    });
  });

// Naqsh yaratish
const patternUrl = 'https://jsonxon.uz/api/patterns?type=geometric&colors=blue,gold';
const img = document.createElement('img');
img.src = patternUrl;
document.body.appendChild(img);`}</code>
                  </pre>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Python (requests)</h4>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    <code>{`import requests

# JSON ma'lumotlari
response = requests.get('https://jsonxon.uz/api/users?style=drama')
users = response.json()

for user in users:
    print(f"{user['name']} - {user['profession']}")

# Naqsh yuklab olish
pattern_url = 'https://jsonxon.uz/api/patterns?type=floral&size=600'
pattern_response = requests.get(pattern_url)

with open('uzbek_pattern.svg', 'wb') as f:
    f.write(pattern_response.content)`}</code>
                  </pre>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">React komponenti</h4>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    <code>{`import { useState, useEffect } from 'react';

function JsonXonData({ style = 'comedy' }) {
  const [posts, setPosts] = useState([]);
  const [patternUrl, setPatternUrl] = useState('');
  
  useEffect(() => {
    // Ma'lumotlarni olish
    fetch(\`https://jsonxon.uz/api/posts?style=\${style}\`)
      .then(res => res.json())
      .then(setPosts);
    
    // Naqsh URL yaratish
    const pattern = \`https://jsonxon.uz/api/patterns?type=geometric&colors=blue,gold\`;
    setPatternUrl(pattern);
  }, [style]);
  
  return (
    <div style={{ backgroundImage: \`url(\${patternUrl})\` }}>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

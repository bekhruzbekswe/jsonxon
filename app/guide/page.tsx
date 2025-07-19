"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code } from "lucide-react"

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent mb-4">
            UzbekJSON Qo'llanma
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            UzbekJSON API xizmatidan qanday foydalanishni o'rganing
          </p>
        </div>

        <Tabs defaultValue="getting-started" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="getting-started">Boshlash</TabsTrigger>
            <TabsTrigger value="endpoints">API yo'nalishlari</TabsTrigger>
            <TabsTrigger value="styles">Uslublar</TabsTrigger>
            <TabsTrigger value="examples">Misollar</TabsTrigger>
          </TabsList>

          <TabsContent value="getting-started" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="w-5 h-5" />
                  <span>Tezkor boshlash</span>
                </CardTitle>
                <CardDescription>UzbekJSON bilan ishlashni boshlash uchun quyidagi qadamlarni bajaring</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">1. API manzili</h4>
                  <code className="bg-gray-100 px-3 py-1 rounded">https://uzbekjson.uz/api</code>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2. Birinchi so'rov</h4>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    <code>{`fetch('https://uzbekjson.uz/api/posts')
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
                { path: "/posts", desc: "Maqolalar", icon: "📝" },
                { path: "/comments", desc: "Izohlar", icon: "💬" },
                { path: "/albums", desc: "Albomlar", icon: "📸" },
                { path: "/photos", desc: "Rasmlar", icon: "🖼️" },
                { path: "/todos", desc: "Vazifalar", icon: "✅" },
                { path: "/users", desc: "Foydalanuvchilar", icon: "👤" },
              ].map((endpoint) => (
                <Card key={endpoint.path}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <span className="text-2xl">{endpoint.icon}</span>
                      <span>{endpoint.desc}</span>
                    </CardTitle>
                    <CardDescription className="font-mono">/api{endpoint.path}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      {endpoint.desc} ma'lumotlarini olish uchun ushbu yo'nalishdan foydalaning.
                    </p>
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
                    <code>{`// Komediya uslubida maqolalar olish
fetch('https://uzbekjson.uz/api/posts?style=comedy')
  .then(response => response.json())
  .then(posts => {
    posts.forEach(post => {
      console.log(post.title);
    });
  });`}</code>
                  </pre>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Python (requests)</h4>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    <code>{`import requests

# Drama uslubida foydalanuvchilar olish
response = requests.get('https://uzbekjson.uz/api/users?style=drama')
users = response.json()

for user in users:
    print(f"{user['name']} - {user['profession']}")`}</code>
                  </pre>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">React Hook misoli</h4>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    <code>{`import { useState, useEffect } from 'react';

function UzbekPosts({ style = 'comedy' }) {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch(\`https://uzbekjson.uz/api/posts?style=\${style}\`)
      .then(res => res.json())
      .then(setPosts);
  }, [style]);
  
  return (
    <div>
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

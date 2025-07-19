"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy, Star, Users, MessageCircle, Heart, Laugh, Drama } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [selectedStyle, setSelectedStyle] = useState("comedy")
  const [animatePattern, setAnimatePattern] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatePattern((prev) => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const styles = [
    {
      id: "comedy",
      name: "Komediya",
      icon: Laugh,
      color: "bg-yellow-500",
      description: "Kulgili va qiziqarli ma'lumotlar",
    },
    {
      id: "drama",
      name: "Drama",
      icon: Drama,
      color: "bg-purple-500",
      description: "Hissiyotli va chuqur ma'lumotlar",
    },
    { id: "romance", name: "Romantika", icon: Heart, color: "bg-pink-500", description: "Sevgi va muhabbat haqida" },
    {
      id: "adventure",
      name: "Sarguzasht",
      icon: Star,
      color: "bg-blue-500",
      description: "Qiziqarli sayohat hikoyalari",
    },
  ]

  const endpoints = [
    { path: "/posts", description: "Maqolalar", count: "100 ta" },
    { path: "/comments", description: "Izohlar", count: "500 ta" },
    { path: "/albums", description: "Albomlar", count: "100 ta" },
    { path: "/photos", description: "Rasmlar", count: "5000 ta" },
    { path: "/todos", description: "Vazifalar", count: "200 ta" },
    { path: "/users", description: "Foydalanuvchilar", count: "10 ta" },
    { path: "/patterns", description: "O'zbek naqshlari", count: "∞ ta", isNew: true },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50 relative overflow-hidden">
      {/* Animated Uzbek Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className={`w-full h-full bg-repeat transition-transform duration-3000 ${
            animatePattern ? "scale-105 rotate-1" : "scale-100 rotate-0"
          }`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23d4af37' fillOpacity='0.4'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">UZ</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent">
                  JsonXon
                </h1>
                <span className="text-xs text-gray-500">by Uzbekify</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/guide" className="text-gray-600 hover:text-blue-600 transition-colors">
                Qo'llanma
              </Link>
              <Link href="/examples" className="text-gray-600 hover:text-blue-600 transition-colors">
                Misollar
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                Biz haqimizda
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-amber-500 rounded-xl flex items-center justify-center animate-pulse">
              <span className="text-white font-bold text-lg">🇺🇿</span>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
              JsonXon
            </h1>
          </div>

          <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
            Test va prototiplash uchun bepul va ishonchli API xizmati
          </p>

          <p className="text-lg text-gray-500 mb-2">O'zbek madaniyati bilan boyitilgan • Turli xil uslublar bilan</p>

          <p className="text-sm text-blue-600 mb-8">
            <span className="font-semibold">Uzbekify</span> tomonidan yaratilgan - O'zbek uslubidagi dasturiy ta'minot
          </p>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 mb-8">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Oyiga ~1 million so'rov</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>100% bepul</span>
            </div>
          </div>

          {/* Style Selector */}
          <Card className="max-w-md mx-auto mb-8 border-2 border-amber-200 bg-gradient-to-r from-blue-50 to-amber-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-center">Ma'lumot uslubini tanlang</CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {styles.map((style) => (
                    <SelectItem key={style.id} value={style.id}>
                      <div className="flex items-center space-x-2">
                        <style.icon className="w-4 h-4" />
                        <span>{style.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm text-gray-500 mt-2 text-center">
                {styles.find((s) => s.id === selectedStyle)?.description}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* API Endpoints */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Mavjud API yo'nalishlari</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {endpoints.map((endpoint, index) => (
              <Card
                key={endpoint.path}
                className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 ${
                  endpoint.isNew
                    ? "border-l-amber-500 bg-gradient-to-br from-amber-50 to-white"
                    : "border-l-blue-500 bg-gradient-to-br from-white to-blue-50"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <span>{endpoint.description}</span>
                      {endpoint.isNew && <Badge className="bg-amber-500 text-white text-xs">YANGI</Badge>}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className={endpoint.isNew ? "bg-amber-100 text-amber-800" : "bg-blue-100 text-blue-800"}
                    >
                      {endpoint.count}
                    </Badge>
                  </div>
                  <CardDescription className="font-mono text-blue-600">
                    /api{endpoint.path}?style={selectedStyle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full hover:bg-blue-50 bg-transparent"
                    onClick={() => {
                      navigator.clipboard.writeText(`https://jsonxon.uz/api${endpoint.path}?style=${selectedStyle}`)
                    }}
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Nusxalash
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pattern Generation Demo */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">O'zbek naqsh generatori</h2>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Naqsh namunalari</CardTitle>
              <CardDescription className="text-center">
                API orqali turli xil o'zbek naqshlarini yarating
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {["geometric", "floral", "ceramic", "textile"].map((type) => (
                  <div key={type} className="text-center">
                    <div className="w-full h-32 bg-gray-100 rounded-lg mb-2 overflow-hidden">
                      <img
                        src={`/api/patterns?type=${type}&size=200&colors=blue,gold,turquoise`}
                        alt={`${type} naqsh`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm font-medium capitalize">{type}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">API orqali o'z naqshlaringizni yarating:</p>
                <code className="bg-gray-100 px-4 py-2 rounded text-sm">
                  /api/patterns?type=geometric&size=400&colors=blue,gold&complexity=5
                </code>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Example Usage */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Foydalanish misoli</h2>

          <Tabs defaultValue="fetch" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="fetch">Fetch API</TabsTrigger>
              <TabsTrigger value="axios">Axios</TabsTrigger>
              <TabsTrigger value="curl">cURL</TabsTrigger>
            </TabsList>

            <TabsContent value="fetch">
              <Card>
                <CardContent className="p-6">
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    <code>{`fetch('https://jsonxon.uz/api/posts?style=${selectedStyle}')
  .then(response => response.json())
  .then(json => console.log(json))`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="axios">
              <Card>
                <CardContent className="p-6">
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    <code>{`axios.get('https://jsonxon.uz/api/posts?style=${selectedStyle}')
  .then(response => {
    console.log(response.data);
  });`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="curl">
              <Card>
                <CardContent className="p-6">
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    <code>{`curl -X GET "https://jsonxon.uz/api/posts?style=${selectedStyle}" \\
     -H "Accept: application/json"`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">O'zbek tilida</h3>
            <p className="text-gray-600">Barcha ma'lumotlar o'zbek tilida va madaniyatiga mos</p>
          </Card>

          <Card className="text-center p-6 bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Drama className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Turli uslublar</h3>
            <p className="text-gray-600">Komediya, drama, romantika va boshqa uslublarda ma'lumotlar</p>
          </Card>

          <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Bepul va tez</h3>
            <p className="text-gray-600">Hech qanday ro'yxatdan o'tmasdan darhol foydalaning</p>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">🇺🇿</span>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold">JsonXon</h3>
              <span className="text-sm text-gray-400">by Uzbekify</span>
            </div>
          </div>
          <p className="text-gray-400 mb-4">O'zbek uslubidagi dasturiy ta'minot va xizmatlar yaratamiz</p>
          <p className="text-sm text-gray-500">© 2024 Uzbekify. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
    </div>
  )
}

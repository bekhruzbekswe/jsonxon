"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Heart, Users, Code, Palette, Star, Mail, Github, Twitter } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-amber-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">🇺🇿</span>
            </div>
            <div className="text-left">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent">
                Uzbekify
              </h1>
              <p className="text-lg text-gray-600">O'zbek uslubidagi dasturiy ta'minot</p>
            </div>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Biz O'zbekistonning boy madaniy merosini zamonaviy texnologiyalar bilan birlashtiramiz. Har bir loyihamiz
            milliy ruh va an'analarni aks ettiradi.
          </p>

          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5" />
              <span>O'zbekiston, Toshkent</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-red-500" />
              <span>Madaniyat sevgisi bilan</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>15+ jamoa a'zosi</span>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-blue-600" />
                <span>Bizning missiyamiz</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                O'zbek madaniyatining go'zalligini dunyo miqyosida tanishtirishimiz va zamonaviy dasturiy ta'minot
                orqali milliy an'analarni saqlab qolishimizdir. Biz har bir loyihada o'zbek xalqining boy tarixiy
                merosini aks ettiramiz.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Palette className="w-6 h-6 text-amber-600" />
                <span>Bizning ko'z o'ngimiz</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                O'zbek uslubidagi dasturiy ta'minotning yetakchi brendiga aylanish va butun dunyoga o'zbek
                madaniyatining zamonaviy ko'rinishini namoyish etish. Texnologiya va madaniyat o'rtasida ko'prik
                vazifasini bajarish.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Products */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Bizning mahsulotlarimiz</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg">JsonXon</h3>
                    <Badge variant="secondary" className="text-xs">
                      ASOSIY
                    </Badge>
                  </div>
                </CardTitle>
                <CardDescription>O'zbek uslubidagi JSON API xizmati</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Test va prototiplash uchun o'zbek madaniyati elementlari bilan boyitilgan API xizmati. Naqsh
                  generatori va turli xil uslublar bilan.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    API
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    SVG
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    O'zbek tili
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg">UzbekUI</h3>
                    <Badge variant="secondary" className="text-xs bg-amber-100 text-amber-800">
                      RIVOJDA
                    </Badge>
                  </div>
                </CardTitle>
                <CardDescription>O'zbek uslubidagi UI komponentlar</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  An'anaviy o'zbek naqshlari va ranglar bilan yaratilgan React komponentlar kutubxonasi. Zamonaviy
                  dizayn va milliy uslub birlashgan.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Tailwind
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg">UzbekAPI</h3>
                    <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                      REJA
                    </Badge>
                  </div>
                </CardTitle>
                <CardDescription>API xizmatlar to'plami</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  O'zbek dasturchilar uchun maxsus yaratilgan API xizmatlar to'plami. Mahalliy ma'lumotlar va
                  xizmatlarni oson integratsiya qilish.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    REST API
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    GraphQL
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    WebSocket
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg">Naqshlar</h3>
                    <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-800">
                      BETA
                    </Badge>
                  </div>
                </CardTitle>
                <CardDescription>O'zbek naqshlari generatori</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  An'anaviy o'zbek naqshlarini yaratuvchi maxsus vosita. Geometrik, gul, keramika va boshqa uslublarda
                  naqshlar yaratish.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    SVG
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Canvas
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    AI
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg">UzbekFonts</h3>
                    <Badge variant="secondary" className="text-xs bg-red-100 text-red-800">
                      REJA
                    </Badge>
                  </div>
                </CardTitle>
                <CardDescription>O'zbek xattotligi shriftlari</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  An'anaviy o'zbek xattotligi asosida yaratilgan zamonaviy shriftlar to'plami. Veb va bosma
                  materiallarda foydalanish uchun.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    OpenType
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Web Fonts
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Variable
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg">UzbekCLI</h3>
                    <Badge variant="secondary" className="text-xs bg-indigo-100 text-indigo-800">
                      REJA
                    </Badge>
                  </div>
                </CardTitle>
                <CardDescription>Buyruq qatori vositalari</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  O'zbek dasturchilar uchun qulay CLI vositalari to'plami. Loyiha yaratish, deploy qilish va boshqarish
                  uchun.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    CLI
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Templates
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Bizning qiymatlarimiz</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Madaniy meros</h3>
              <p className="text-sm text-gray-600">O'zbek madaniyatini saqlash va rivojlantirish</p>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-white border-2 border-green-200">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Sifat</h3>
              <p className="text-sm text-gray-600">Yuqori sifatli mahsulot va xizmatlar</p>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Innovatsiya</h3>
              <p className="text-sm text-gray-600">Zamonaviy texnologiyalar va yondashuvlar</p>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Jamoa</h3>
              <p className="text-sm text-gray-600">Birgalikda muvaffaqiyatga erishish</p>
            </Card>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Bizning jamoa</h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Aziz Azizov",
                role: "Asoschisi & CEO",
                bio: "10 yillik tajriba, o'zbek madaniyati ishtiyoqchisi",
                avatar: "AA",
              },
              {
                name: "Malika Karimova",
                role: "Dizayner",
                bio: "An'anaviy san'at va zamonaviy dizayn mutaxassisi",
                avatar: "MK",
              },
              {
                name: "Bobur Rahimov",
                role: "Frontend dasturchi",
                bio: "React va TypeScript bo'yicha mutaxassis",
                avatar: "BR",
              },
              {
                name: "Nilufar Tosheva",
                role: "Backend dasturchi",
                bio: "API va ma'lumotlar bazasi mutaxassisi",
                avatar: "NT",
              },
            ].map((member, index) => (
              <Card key={index} className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{member.avatar}</span>
                </div>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Biz bilan bog'laning</CardTitle>
            <CardDescription className="text-center">
              Loyihalarimiz haqida ko'proq bilish yoki hamkorlik qilish uchun
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex justify-center space-x-4 mb-6">
              <Button variant="outline" size="sm">
                <Mail className="w-4 h-4 mr-2" />
                info@uzbekify.uz
              </Button>
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="sm">
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </Button>
            </div>

            <p className="text-sm text-gray-600">
              O'zbekiston, Toshkent shahar
              <br />
              IT Park, Uzbekify ofisi
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

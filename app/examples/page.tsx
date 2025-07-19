"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Copy, Play, Eye, Download } from "lucide-react"

export default function ExamplesPage() {
  const [activeStyle, setActiveStyle] = useState("comedy")
  const [activePattern, setActivePattern] = useState("geometric")

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent mb-4">
            JsonXon Misollari
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            JsonXon API bilan yaratilgan amaliy misollar va kodlar
          </p>
          <p className="text-sm text-blue-600 mt-2">Uzbekify tomonidan yaratilgan</p>
        </div>

        <Tabs defaultValue="data-examples" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="data-examples">Ma'lumot misollari</TabsTrigger>
            <TabsTrigger value="pattern-examples">Naqsh misollari</TabsTrigger>
            <TabsTrigger value="integration">Integratsiya</TabsTrigger>
            <TabsTrigger value="projects">Loyihalar</TabsTrigger>
          </TabsList>

          <TabsContent value="data-examples" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>API ma'lumotlari misollari</span>
                </CardTitle>
                <CardDescription>Turli uslublarda ma'lumotlarni olish misollari</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-6">
                  <label className="text-sm font-medium">Uslub tanlang:</label>
                  <Select value={activeStyle} onValueChange={setActiveStyle}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="comedy">Komediya</SelectItem>
                      <SelectItem value="drama">Drama</SelectItem>
                      <SelectItem value="romance">Romantika</SelectItem>
                      <SelectItem value="adventure">Sarguzasht</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    size="sm"
                    onClick={() => copyToClipboard(`https://jsonxon.uz/api/posts?style=${activeStyle}`)}
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    URL nusxalash
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Javob namunasi</h4>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg max-h-96 overflow-y-auto">
                      <pre>
                        <code>
                          {JSON.stringify(
                            [
                              {
                                id: 1,
                                title:
                                  activeStyle === "comedy"
                                    ? "Mushugimning kundalik hayoti"
                                    : activeStyle === "drama"
                                      ? "Vaqt o'tishi haqida o'ylar"
                                      : activeStyle === "romance"
                                        ? "Bahor sevgisi"
                                        : "Chimyon tog'laridagi sarguzasht",
                                body:
                                  activeStyle === "comedy"
                                    ? "Bugun mushugim yana meni soat 5 da uyg'otdi..."
                                    : activeStyle === "drama"
                                      ? "Kecha eski fotosuratlarni ko'rib o'tirdim..."
                                      : activeStyle === "romance"
                                        ? "Bahor keldi, va men yana sevib qoldim..."
                                        : "Chimyon tog'lariga ko'tarilish - bu haqiqiy sinov edi...",
                                userId: 1,
                                author: "Komil Karimov",
                                date: "2024-01-15",
                                likes: 42,
                                category: activeStyle,
                              },
                            ],
                            null,
                            2,
                          )}
                        </code>
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">JavaScript kodi</h4>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
                      <pre>
                        <code>
                          {`// ${activeStyle} uslubida ma'lumot olish
async function getData() {
  try {
    const response = await fetch(
      'https://jsonxon.uz/api/posts?style=${activeStyle}'
    );
    const data = await response.json();
    
    data.forEach(post => {
      console.log(post.title);
      console.log(post.body);
    });
  } catch (error) {
    console.error('Xato:', error);
  }
}

getData();`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>API yo'nalishlari misollari</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { endpoint: "posts", title: "Maqolalar", count: "100" },
                    { endpoint: "users", title: "Foydalanuvchilar", count: "10" },
                    { endpoint: "comments", title: "Izohlar", count: "500" },
                    { endpoint: "todos", title: "Vazifalar", count: "200" },
                    { endpoint: "albums", title: "Albomlar", count: "100" },
                    { endpoint: "photos", title: "Rasmlar", count: "5000" },
                  ].map((item) => (
                    <Card key={item.endpoint} className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium">{item.title}</h5>
                        <Badge variant="secondary">{item.count}</Badge>
                      </div>
                      <code className="text-sm text-blue-600">/api/{item.endpoint}</code>
                      <div className="flex space-x-2 mt-3">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            copyToClipboard(`https://jsonxon.uz/api/${item.endpoint}?style=${activeStyle}`)
                          }
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(`https://jsonxon.uz/api/${item.endpoint}?style=${activeStyle}`)}
                        >
                          <Eye className="w-3 h-3" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pattern-examples" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="w-5 h-5" />
                  <span>Naqsh generatori misollari</span>
                </CardTitle>
                <CardDescription>Turli xil o'zbek naqshlarini yaratish</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-6">
                  <label className="text-sm font-medium">Naqsh turi:</label>
                  <Select value={activePattern} onValueChange={setActivePattern}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="geometric">Geometrik</SelectItem>
                      <SelectItem value="floral">Gul naqshlari</SelectItem>
                      <SelectItem value="ceramic">Keramika</SelectItem>
                      <SelectItem value="textile">To'qimachilik</SelectItem>
                      <SelectItem value="calligraphy">Xattotlik</SelectItem>
                      <SelectItem value="architectural">Me'moriy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Naqsh ko'rinishi</h4>
                    <div className="bg-gray-100 rounded-lg p-4 text-center">
                      <img
                        src={`/api/patterns?type=${activePattern}&size=300&colors=blue,gold,turquoise`}
                        alt="Naqsh namunasi"
                        className="max-w-full h-auto mx-auto rounded"
                      />
                      <div className="flex justify-center space-x-2 mt-4">
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Yuklab olish
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            copyToClipboard(`https://jsonxon.uz/api/patterns?type=${activePattern}&size=400`)
                          }
                        >
                          <Copy className="w-4 h-4 mr-2" />
                          URL nusxalash
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">API so'rovi</h4>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
                      <pre>
                        <code>
                          {`// ${activePattern} naqshini yaratish
const patternUrl = 'https://jsonxon.uz/api/patterns?' +
  'type=${activePattern}&' +
  'size=400&' +
  'colors=blue,gold,turquoise&' +
  'complexity=5&' +
  'rotation=0';

// HTML img elementi
const img = document.createElement('img');
img.src = patternUrl;
img.alt = '${activePattern} naqsh';
document.body.appendChild(img);

// CSS background
document.body.style.backgroundImage = 
  \`url(\${patternUrl})\`;`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Turli parametrlar bilan</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { colors: "blue,gold", complexity: 3 },
                      { colors: "red,green,white", complexity: 5 },
                      { colors: "purple,pink", complexity: 7 },
                      { colors: "orange,yellow,brown", complexity: 4 },
                    ].map((params, index) => (
                      <div key={index} className="text-center">
                        <img
                          src={`/api/patterns?type=${activePattern}&size=150&colors=${params.colors}&complexity=${params.complexity}`}
                          alt={`Naqsh ${index + 1}`}
                          className="w-full h-24 object-cover rounded mb-2"
                        />
                        <div className="text-xs text-gray-600">
                          <div>Murakkablik: {params.complexity}</div>
                          <div>Ranglar: {params.colors}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integration" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>React integratsiyasi</CardTitle>
                  <CardDescription>React loyihalarida JsonXon ishlatish</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>
                      {`import React, { useState, useEffect } from 'react';

function JsonXonComponent() {
  const [data, setData] = useState([]);
  const [pattern, setPattern] = useState('');

  useEffect(() => {
    // Ma'lumotlar olish
    fetch('https://jsonxon.uz/api/posts?style=comedy')
      .then(res => res.json())
      .then(setData);
    
    // Naqsh yaratish
    const patternUrl = 'https://jsonxon.uz/api/patterns' +
      '?type=geometric&colors=blue,gold';
    setPattern(patternUrl);
  }, []);

  return (
    <div style={{
      backgroundImage: \`url(\${pattern})\`,
      backgroundSize: 'cover'
    }}>
      {data.map(item => (
        <div key={item.id} className="post">
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}`}
                    </code>
                  </pre>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Vue.js integratsiyasi</CardTitle>
                  <CardDescription>Vue loyihalarida JsonXon ishlatish</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>
                      {`<template>
  <div :style="{ backgroundImage: backgroundPattern }">
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const posts = ref([])
const patternType = ref('floral')

const backgroundPattern = computed(() => {
  return \`url(https://jsonxon.uz/api/patterns?type=\${patternType.value}&colors=blue,gold)\`
})

onMounted(async () => {
  const response = await fetch('https://jsonxon.uz/api/posts?style=romance')
  posts.value = await response.json()
})
</script>`}
                    </code>
                  </pre>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Python integratsiyasi</CardTitle>
                  <CardDescription>Python dasturlarida JsonXon ishlatish</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>
                      {`import requests
import json
from PIL import Image
from io import BytesIO

class JsonXonClient:
    BASE_URL = "https://jsonxon.uz/api"
    
    def get_data(self, endpoint, style="comedy", limit=10):
        """Ma'lumotlarni olish"""
        url = f"{self.BASE_URL}/{endpoint}"
        params = {"style": style, "_limit": limit}
        
        response = requests.get(url, params=params)
        return response.json()
    
    def get_pattern(self, pattern_type="geometric", 
                   size=400, colors=None, complexity=5):
        """Naqsh yaratish"""
        if colors is None:
            colors = ["blue", "gold", "turquoise"]
        
        url = f"{self.BASE_URL}/patterns"
        params = {
            "type": pattern_type,
            "size": size,
            "colors": ",".join(colors),
            "complexity": complexity
        }
        
        response = requests.get(url, params=params)
        return response.content  # SVG content

# Foydalanish
client = JsonXonClient()

# Ma'lumot olish
posts = client.get_data("posts", "drama", 5)
for post in posts:
    print(f"Sarlavha: {post['title']}")

# Naqsh yaratish va saqlash
pattern_svg = client.get_pattern("floral", 600, ["red", "gold"])
with open("uzbek_pattern.svg", "wb") as f:
    f.write(pattern_svg)`}
                    </code>
                  </pre>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Flutter integratsiyasi</CardTitle>
                  <CardDescription>Flutter ilovalarida JsonXon ishlatish</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                    <code>
                      {`import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class JsonXonService {
  static const String baseUrl = 'https://jsonxon.uz/api';
  
  static Future<List<dynamic>> getPosts(String style) async {
    final response = await http.get(
      Uri.parse('\$baseUrl/posts?style=\$style'),
    );
    
    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Ma\\'lumot olinmadi');
    }
  }
  
  static String getPatternUrl(String type, 
      {int size = 400, String colors = 'blue,gold'}) {
    return '\$baseUrl/patterns?type=\$type&size=\$size&colors=\$colors';
  }
}

class JsonXonWidget extends StatefulWidget {
  @override
  _JsonXonWidgetState createState() => _JsonXonWidgetState();
}

class _JsonXonWidgetState extends State<JsonXonWidget> {
  List<dynamic> posts = [];
  
  @override
  void initState() {
    super.initState();
    loadPosts();
  }
  
  loadPosts() async {
    final data = await JsonXonService.getPosts('comedy');
    setState(() {
      posts = data;
    });
  }
  
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        image: DecorationImage(
          image: NetworkImage(
            JsonXonService.getPatternUrl('geometric')
          ),
          fit: BoxFit.cover,
          opacity: 0.1,
        ),
      ),
      child: ListView.builder(
        itemCount: posts.length,
        itemBuilder: (context, index) {
          return Card(
            child: ListTile(
              title: Text(posts[index]['title']),
              subtitle: Text(posts[index]['body']),
            ),
          );
        },
      ),
    );
  }
}`}
                    </code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Blog loyihasi</CardTitle>
                  <CardDescription>O'zbek uslubidagi blog</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 h-32 rounded mb-4 flex items-center justify-center text-gray-500">
                    Blog Demo
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    JsonXon API ishlatilgan blog loyihasi, o'zbek naqshlari bilan bezatilgan.
                  </p>
                  <div className="flex space-x-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">JsonXon</Badge>
                    <Badge variant="secondary">Tailwind</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>E-commerce</CardTitle>
                  <CardDescription>Onlayn do'kon</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 h-32 rounded mb-4 flex items-center justify-center text-gray-500">
                    Shop Demo
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Mahsulot ma'lumotlari uchun JsonXon API, fon naqshlari bilan.
                  </p>
                  <div className="flex space-x-2">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">JsonXon</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Portfolio sayt</CardTitle>
                  <CardDescription>Shaxsiy portfolio</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 h-32 rounded mb-4 flex items-center justify-center text-gray-500">
                    Portfolio Demo
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    JsonXon naqshlari bilan bezatilgan portfolio sayt, dinamik ma'lumotlar bilan.
                  </p>
                  <div className="flex space-x-2">
                    <Badge variant="secondary">Vue.js</Badge>
                    <Badge variant="secondary">JsonXon</Badge>
                    <Badge variant="secondary">SCSS</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mobil ilova</CardTitle>
                  <CardDescription>Flutter ilovasi</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 h-32 rounded mb-4 flex items-center justify-center text-gray-500">
                    Mobile Demo
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    JsonXon API bilan ishluvchi mobil ilova, o'zbek madaniyati elementlari bilan.
                  </p>
                  <div className="flex space-x-2">
                    <Badge variant="secondary">Flutter</Badge>
                    <Badge variant="secondary">JsonXon</Badge>
                    <Badge variant="secondary">Dart</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dashboard</CardTitle>
                  <CardDescription>Admin panel</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 h-32 rounded mb-4 flex items-center justify-center text-gray-500">
                    Dashboard Demo
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    JsonXon ma'lumotlarini boshqarish uchun admin dashboard, o'zbek naqshlari bilan.
                  </p>
                  <div className="flex space-x-2">
                    <Badge variant="secondary">Angular</Badge>
                    <Badge variant="secondary">JsonXon</Badge>
                    <Badge variant="secondary">Material</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>API dokumentatsiya</CardTitle>
                  <CardDescription>Interaktiv docs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 h-32 rounded mb-4 flex items-center justify-center text-gray-500">
                    Docs Demo
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    JsonXon API uchun interaktiv dokumentatsiya, jonli misollar bilan.
                  </p>
                  <div className="flex space-x-2">
                    <Badge variant="secondary">Docusaurus</Badge>
                    <Badge variant="secondary">JsonXon</Badge>
                    <Badge variant="secondary">MDX</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>O'z loyihangizni yarating</CardTitle>
                <CardDescription>JsonXon bilan qanday boshlash mumkin</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">API ni o'rganing</h4>
                      <p className="text-sm text-gray-600">
                        JsonXon qo'llanmasini o'qing va API imkoniyatlari bilan tanishing.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Loyiha yarating</h4>
                      <p className="text-sm text-gray-600">
                        O'zingizga mos framework tanlang va yangi loyiha yarating.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">JsonXon ni ulang</h4>
                      <p className="text-sm text-gray-600">
                        API so'rovlarini qo'shing va o'zbek naqshlari bilan bezating.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Deploy qiling</h4>
                      <p className="text-sm text-gray-600">
                        Loyihangizni ishga tushiring va boshqalar bilan bo'lishing.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

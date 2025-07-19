import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get("type") || "geometric"
  const size = Number.parseInt(searchParams.get("size") || "400")
  const colors = searchParams.get("colors")?.split(",") || ["#1e40af", "#d97706", "#0891b2"]
  const complexity = Number.parseInt(searchParams.get("complexity") || "5")
  const rotation = Number.parseInt(searchParams.get("rotation") || "0")

  const svg = generateUzbekPattern(type, size, colors, complexity, rotation)

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=3600",
    },
  })
}

function generateUzbekPattern(
  type: string,
  size: number,
  colors: string[],
  complexity: number,
  rotation: number,
): string {
  const center = size / 2

  let patternElements = ""

  switch (type) {
    case "geometric":
      patternElements = generateGeometricPattern(center, size, colors, complexity, rotation)
      break
    case "floral":
      patternElements = generateFloralPattern(center, size, colors, complexity, rotation)
      break
    case "ceramic":
      patternElements = generateCeramicPattern(size, colors, complexity)
      break
    case "textile":
      patternElements = generateTextilePattern(size, colors, complexity, rotation)
      break
    case "calligraphy":
      patternElements = generateCalligraphyPattern(center, size, colors, complexity, rotation)
      break
    case "architectural":
      patternElements = generateArchitecturalPattern(size, colors, complexity, rotation)
      break
    default:
      patternElements = generateGeometricPattern(center, size, colors, complexity, rotation)
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:${colors[0]};stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:${colors[1] || colors[0]};stop-opacity:0.3" />
    </radialGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="2" dy="2" stdDeviation="3" flood-opacity="0.3"/>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#centerGradient)" opacity="0.1"/>
  
  ${patternElements}
</svg>`
}

function generateGeometricPattern(
  center: number,
  size: number,
  colors: string[],
  complexity: number,
  rotation: number,
): string {
  let elements = ""

  // Central star pattern
  for (let layer = 0; layer < complexity; layer++) {
    const radius = (layer + 1) * (size * 0.08)
    const points = 8 + layer * 2
    const color = colors[layer % colors.length]
    const opacity = 0.8 - layer * 0.1

    const starPoints = []
    for (let i = 0; i < points * 2; i++) {
      const angle = (i * Math.PI) / points + (rotation * Math.PI) / 180
      const r = i % 2 === 0 ? radius : radius * 0.6
      const x = center + r * Math.cos(angle)
      const y = center + r * Math.sin(angle)
      starPoints.push(`${x},${y}`)
    }

    elements += `
      <polygon 
        points="${starPoints.join(" ")}" 
        fill="${color}" 
        opacity="${opacity}"
        filter="url(#shadow)"
        transform="rotate(${rotation + layer * 15} ${center} ${center})"
      />
    `
  }

  // Corner decorations
  const cornerSize = size * 0.15
  for (let i = 0; i < 4; i++) {
    const angle = (i * 90 + 45) * (Math.PI / 180)
    const distance = size * 0.35
    const x = center + distance * Math.cos(angle)
    const y = center + distance * Math.sin(angle)
    const color = colors[(i + 1) % colors.length]

    elements += `
      <circle 
        cx="${x}" 
        cy="${y}" 
        r="${cornerSize}" 
        fill="${color}" 
        opacity="0.6"
        filter="url(#shadow)"
      />
      <circle 
        cx="${x}" 
        cy="${y}" 
        r="${cornerSize * 0.6}" 
        fill="none" 
        stroke="${colors[0]}" 
        stroke-width="2"
        opacity="0.8"
      />
    `
  }

  return elements
}

function generateFloralPattern(
  center: number,
  size: number,
  colors: string[],
  complexity: number,
  rotation: number,
): string {
  let elements = ""

  // Central flower
  const petalCount = 8
  const petalLength = size * 0.12
  const petalWidth = size * 0.06

  for (let i = 0; i < petalCount; i++) {
    const angle = (i * 360) / petalCount + rotation
    const x = center + Math.cos((angle * Math.PI) / 180) * (size * 0.08)
    const y = center + Math.sin((angle * Math.PI) / 180) * (size * 0.08)
    const color = colors[i % colors.length]

    elements += `
      <ellipse 
        cx="${x}" 
        cy="${y}" 
        rx="${petalLength}" 
        ry="${petalWidth}"
        fill="${color}"
        opacity="0.7"
        filter="url(#shadow)"
        transform="rotate(${angle} ${x} ${y})"
      />
    `
  }

  // Surrounding flowers
  for (let ring = 1; ring <= complexity - 1; ring++) {
    const ringRadius = ring * (size * 0.15)
    const flowersInRing = ring * 6

    for (let i = 0; i < flowersInRing; i++) {
      const angle = (i * 360) / flowersInRing
      const flowerX = center + Math.cos((angle * Math.PI) / 180) * ringRadius
      const flowerY = center + Math.sin((angle * Math.PI) / 180) * ringRadius
      const color = colors[(ring + i) % colors.length]
      const flowerSize = petalLength * (0.8 - ring * 0.1)

      for (let p = 0; p < 6; p++) {
        const petalAngle = p * 60 + angle + rotation
        const px = flowerX + Math.cos((petalAngle * Math.PI) / 180) * (flowerSize * 0.5)
        const py = flowerY + Math.sin((petalAngle * Math.PI) / 180) * (flowerSize * 0.5)

        elements += `
          <ellipse 
            cx="${px}" 
            cy="${py}" 
            rx="${flowerSize}" 
            ry="${flowerSize * 0.4}"
            fill="${color}"
            opacity="${0.6 - ring * 0.1}"
            transform="rotate(${petalAngle} ${px} ${py})"
          />
        `
      }
    }
  }

  return elements
}

function generateCeramicPattern(size: number, colors: string[], complexity: number): string {
  let elements = ""
  const tileSize = size / (complexity + 2)

  for (let x = 0; x < complexity + 2; x++) {
    for (let y = 0; y < complexity + 2; y++) {
      const tileX = x * tileSize
      const tileY = y * tileSize
      const centerX = tileX + tileSize / 2
      const centerY = tileY + tileSize / 2
      const color = colors[(x + y) % colors.length]
      const secondaryColor = colors[(x + y + 1) % colors.length]

      // Tile background
      elements += `
        <rect 
          x="${tileX + 2}" 
          y="${tileY + 2}" 
          width="${tileSize - 4}" 
          height="${tileSize - 4}"
          fill="${color}"
          opacity="0.8"
          rx="4"
          filter="url(#shadow)"
        />
      `

      // Central motif
      const motifSize = tileSize * 0.3
      elements += `
        <circle 
          cx="${centerX}" 
          cy="${centerY}" 
          r="${motifSize}"
          fill="${secondaryColor}"
          opacity="0.9"
        />
        <circle 
          cx="${centerX}" 
          cy="${centerY}" 
          r="${motifSize * 0.6}"
          fill="none"
          stroke="${colors[0]}"
          stroke-width="2"
          opacity="0.7"
        />
      `

      // Corner decorations
      for (let corner = 0; corner < 4; corner++) {
        const cornerAngle = corner * 90 + 45
        const cornerDistance = tileSize * 0.35
        const cornerX = centerX + Math.cos((cornerAngle * Math.PI) / 180) * cornerDistance
        const cornerY = centerY + Math.sin((cornerAngle * Math.PI) / 180) * cornerDistance

        elements += `
          <circle 
            cx="${cornerX}" 
            cy="${cornerY}" 
            r="${tileSize * 0.08}"
            fill="${secondaryColor}"
            opacity="0.6"
          />
        `
      }
    }
  }

  return elements
}

function generateTextilePattern(size: number, colors: string[], complexity: number, rotation: number): string {
  let elements = ""
  const waveHeight = size * 0.1
  const waveCount = complexity * 2

  for (let i = 0; i < waveCount; i++) {
    const y = (i * size) / waveCount
    const color = colors[i % colors.length]
    const amplitude = waveHeight * (1 - (i * 0.1) / waveCount)

    let pathData = `M 0 ${y}`

    for (let x = 0; x <= size; x += size / 20) {
      const waveY = y + Math.sin((x / size) * Math.PI * 4 + (i * Math.PI) / 4) * amplitude
      pathData += ` L ${x} ${waveY}`
    }

    elements += `
      <path 
        d="${pathData}" 
        stroke="${color}" 
        stroke-width="${3 + (i % 3)}" 
        fill="none" 
        opacity="${0.7 - i * 0.05}"
        transform="rotate(${rotation} ${size / 2} ${size / 2})"
      />
    `
  }

  // Add diamond patterns
  const diamondSize = size * 0.08
  for (let x = 0; x < size; x += diamondSize * 3) {
    for (let y = 0; y < size; y += diamondSize * 3) {
      const color = colors[Math.floor((x + y) / (diamondSize * 3)) % colors.length]

      elements += `
        <polygon 
          points="${x + diamondSize},${y} ${x + diamondSize * 2},${y + diamondSize} ${x + diamondSize},${y + diamondSize * 2} ${x},${y + diamondSize}"
          fill="${color}"
          opacity="0.4"
          transform="rotate(${rotation} ${size / 2} ${size / 2})"
        />
      `
    }
  }

  return elements
}

function generateCalligraphyPattern(
  center: number,
  size: number,
  colors: string[],
  complexity: number,
  rotation: number,
): string {
  let elements = ""

  const curves = [
    `M ${center - size * 0.2} ${center - size * 0.1} Q ${center} ${center - size * 0.3} ${center + size * 0.2} ${center - size * 0.1} Q ${center} ${center + size * 0.1} ${center - size * 0.2} ${center - size * 0.1}`,
    `M ${center - size * 0.15} ${center + size * 0.2} Q ${center + size * 0.1} ${center - size * 0.1} ${center - size * 0.15} ${center - size * 0.2} Q ${center - size * 0.3} ${center} ${center - size * 0.15} ${center + size * 0.2}`,
    `M ${center + size * 0.1} ${center - size * 0.15} Q ${center + size * 0.25} ${center + size * 0.05} ${center + size * 0.1} ${center + size * 0.15} Q ${center - size * 0.05} ${center + size * 0.05} ${center + size * 0.1} ${center - size * 0.15}`,
  ]

  for (let i = 0; i < Math.min(complexity, curves.length); i++) {
    const color = colors[i % colors.length]
    const strokeWidth = 4 + i * 2

    elements += `
      <path 
        d="${curves[i]}"
        stroke="${color}"
        stroke-width="${strokeWidth}"
        fill="none"
        opacity="${0.8 - i * 0.1}"
        stroke-linecap="round"
        stroke-linejoin="round"
        filter="url(#shadow)"
        transform="rotate(${rotation + i * 30} ${center} ${center})"
      />
    `
  }

  // Add decorative dots
  for (let i = 0; i < complexity * 3; i++) {
    const angle = (i * 360) / (complexity * 3) + rotation
    const radius = size * 0.25 + (i % 3) * size * 0.05
    const x = center + Math.cos((angle * Math.PI) / 180) * radius
    const y = center + Math.sin((angle * Math.PI) / 180) * radius
    const color = colors[i % colors.length]

    elements += `
      <circle 
        cx="${x}" 
        cy="${y}" 
        r="${3 + (i % 4)}"
        fill="${color}"
        opacity="0.6"
      />
    `
  }

  return elements
}

function generateArchitecturalPattern(size: number, colors: string[], complexity: number, rotation: number): string {
  let elements = ""
  const archWidth = size * 0.15
  const archHeight = size * 0.2

  // Create arch grid
  const archsPerRow = complexity
  const spacing = size / (archsPerRow + 1)

  for (let row = 0; row < archsPerRow; row++) {
    for (let col = 0; col < archsPerRow; col++) {
      const x = (col + 1) * spacing
      const y = (row + 1) * spacing
      const color = colors[(row + col) % colors.length]

      // Main arch
      elements += `
        <path 
          d="M ${x - archWidth / 2} ${y + archHeight / 2} 
             Q ${x - archWidth / 2} ${y - archHeight / 2} ${x} ${y - archHeight / 2}
             Q ${x + archWidth / 2} ${y - archHeight / 2} ${x + archWidth / 2} ${y + archHeight / 2}
             Z"
          fill="${color}"
          opacity="0.7"
          filter="url(#shadow)"
          transform="rotate(${rotation} ${size / 2} ${size / 2})"
        />
      `

      // Decorative border
      elements += `
        <path 
          d="M ${x - archWidth / 2} ${y + archHeight / 2} 
             Q ${x - archWidth / 2} ${y - archHeight / 2} ${x} ${y - archHeight / 2}
             Q ${x + archWidth / 2} ${y - archHeight / 2} ${x + archWidth / 2} ${y + archHeight / 2}"
          stroke="${colors[0]}"
          stroke-width="2"
          fill="none"
          opacity="0.9"
          transform="rotate(${rotation} ${size / 2} ${size / 2})"
        />
      `

      // Central decoration
      elements += `
        <circle 
          cx="${x}" 
          cy="${y}" 
          r="${archWidth * 0.15}"
          fill="${colors[(row + col + 1) % colors.length]}"
          opacity="0.8"
          transform="rotate(${rotation} ${size / 2} ${size / 2})"
        />
      `
    }
  }

  return elements
}

import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

let idSequence = 5
const planets = [
  {
    id: 1,
    name: "Mercúrio",
    description: "Mercúrio é o planeta mais próximo do Sol e o menor do sistema solar.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg"
  },
  {
    id: 2,
    name: "Vênus",
    description: "Vênus é o planeta mais quente do sistema solar devido ao forte efeito estufa.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg"
  },
  {
    id: 3,
    name: "Terra",
    description: "A Terra é o único planeta conhecido que abriga vida.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
  },
  {
    id: 4,
    name: "Marte",
    description: "Marte é conhecido como o planeta vermelho devido ao óxido de ferro em sua superfície.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg"
  }
]





export  function GET(req: NextRequest) {
     return NextResponse.json({planets})
}

export async function POST(req: NextRequest) {
  const {name, description,imageUrl} = await req.json()

  const newPlanet = {
    id: idSequence++,
    name: name,
    description: description,
    imageUrl:imageUrl
  }
  
  planets.push(newPlanet)
   return NextResponse.json(newPlanet,{status: 201})
}

export async function PUT(req: NextRequest) {
  const { id, name, description } = await req.json()

  const planetIndex = planets.findIndex(planet => planet.id === +id);
  if (planetIndex === -1) {
    return NextResponse.json({ error: 'Planeta não encontrado' }, { status: 404 });
  }

  if (name) planets[planetIndex].name = name;
  if (description) planets[planetIndex].description = description;
  

  return NextResponse.json(planets[planetIndex]);
}


export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  const planetIndex = planets.findIndex(planet => planet.id === +id);
  if (planetIndex === -1) {
    return NextResponse.json({ error: 'Planeta não encontrado' }, { status: 404 });
  }

  const [deletedPlanet] = planets.splice(planetIndex, 1)

  return NextResponse.json({ deletedPlanet })
}
import { db } from "@/db"
import { Elements } from "@/db/schema"

type ElementData = {
  elements: {
    name: string
    number: number
    symbol: string
  }[]
}

async function main () {
  const res = await fetch('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json')

  if (res.status !== 200) {
    throw new Error(`received status code ${res.status} when fetching elements JSON`)
  }

  const elementJson = await res.json() as ElementData

  const values = elementJson.elements.map(el => {
    const { symbol, name, number } = el

    return {
      symbol, name, atomicNumber: number
    }
  })
  
  await db.delete(Elements)
  await db.insert(Elements).values(values)
}

main()

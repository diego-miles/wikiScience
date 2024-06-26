 
import * as React from "react"
import { Minus, Plus } from "lucide-react"
import Image from 'next/image'
import PeriodicTable from '@/periodic-table/PeriodicTable2'
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import PeriodicTablesvg from '@/components/PeriodicTablesvg'



export default function PeriodicDrawer() {
  // const [goal, setGoal] = React.useState(350)

  // function onClick(adjustment: number) {
  //   setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  // }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
            <figure> 
              <PeriodicTablesvg></PeriodicTablesvg>
                {/* <Image src={"/periodic-table.svg"} alt="" width={22} height={25} unoptimized>

                </Image> */}
            </figure>
            </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto  ">
          <DrawerHeader>
            {/* <DrawerTitle>Periodic Table</DrawerTitle> */}
            {/* <DrawerDescription>Chemical Elements</DrawerDescription> */}
          </DrawerHeader>
          <div className="overflow-x-auto w-lvw px-2  ">

<PeriodicTable></PeriodicTable>
          </div>


          <DrawerFooter>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

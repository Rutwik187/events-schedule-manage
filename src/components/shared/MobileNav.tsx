import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import Image from "next/image"
  import { Separator } from "../ui/separator"
  import NavItems from "./NavItems"
import { Menu } from "lucide-react"
  
  
  const MobileNav = () => {
    return (
      <nav className="md:hidden block">
        <Sheet>
          <SheetTrigger className="align-middle h-full">
            <Menu  className="my-auto mx-4 "/>
            
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
            <Image 
              src="/assets/logo.png"
              alt="logo"
              width={128}
              height={38}
            />
            <Separator className="border border-gray-50" />
            <NavItems />
          </SheetContent>
        </Sheet>
      </nav>
    )
  }
  
  export default MobileNav
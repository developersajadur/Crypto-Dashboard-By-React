
import {
  IconCirclePlusFilled,
  IconMail,
  type Icon,
} from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        {/* Top Quick Actions */}
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/90 min-w-8 duration-200 ease-linear"
            >
              <IconCirclePlusFilled className="text-white" />
              <span className="text-white">Quick Create</span>
            </SidebarMenuButton>
            <Button
              size="icon"
              className="size-8 group-data-[collapsible=icon]:opacity-0 text-white hover:text-white"
              variant="outline"
            >
              <IconMail />
              <span className="sr-only text-white">Inbox</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* Dynamic Menu Items */}
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <Link
                to={item.url}
                title={item.title}
                className="flex items-center gap-2 px-3 py-2 rounded-md bg-blue-400 text-black hover:bg-blue-500 transition-colors duration-200"
              >
                {item.icon && <item.icon className="text-black" />}
                <span className="text-black">{item.title}</span>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

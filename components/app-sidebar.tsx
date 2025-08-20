"use client"

import * as React from "react"
import {
  AudioWaveform,
  Blocks,
  BotMessageSquare,
  Calendar,
  CirclePlus,
  Command,
  GalleryVerticalEnd,
  Home,
  Inbox,
  MessageCircleQuestion,
  Search,
  Settings2,
  Sparkles,
  Trash2,
} from "lucide-react"

import { NavFavorites } from "@/components/nav-favorites"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavWorkspaces } from "@/components/nav-workspaces"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavUser } from "./nav-user"
import { Separator } from "./ui/separator"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: Command,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "New Chat",
      url: "#",
      icon: CirclePlus,
    },
    {
      title: "Quick Ask",
      url: "#",
      icon: Sparkles,
    },
    {
      title: "Home",
      url: "#",
      icon: Home,
      isActive: true,
    },
  ],
  chats: [
    {
      name: "Project Management & Task Tracking",
      url: "#",
      emoji: "📊",
    },
    {
      name: "Acquisitions Pipeline & Due Diligence",
      url: "#",
      emoji: "🧭",
    },
    {
      name: "Leasing Performance & Tenant Relations",
      url: "#",
      emoji: "🤝",
    },
    {
      name: "CapEx Planning & Project Controls",
      url: "#",
      emoji: "🏗️",
    },
    {
      name: "Cash Flow Forecasting & Budget Variance",
      url: "#",
      emoji: "💹",
    },
    {
      name: "Enterprise Risk Register & Compliance",
      url: "#",
      emoji: "🛡️",
    },
    {
      name: "Facilities Ops & Preventive Maintenance",
      url: "#",
      emoji: "🛠️",
    },
  ],
  workspaces: [
    {
      name: "Corporate Management",
      emoji: "💼",
      pages: [
        {
          name: "Strategic Planning & OKRs",
          url: "#",
          emoji: "🎯",
        },
        {
          name: "Financial Reporting & Cash Management",
          url: "#",
          emoji: "🧮",
        },
        {
          name: "Governance, Compliance & Risk Controls",
          url: "#",
          emoji: "⚖️",
        },
      ],
    },
    {
      name: "Asset & Property Operations",
      emoji: "🏬",
      pages: [
        {
          name: "Leasing Pipeline & Tenant CRM",
          url: "#",
          emoji: "📇",
        },
        {
          name: "Maintenance Schedule & Work Orders",
          url: "#",
          emoji: "🛠️",
        },
        {
          name: "HSE Logs & Incident Reports",
          url: "#",
          emoji: "🧯",
        },
      ],
    },
    {
      name: "Development & Projects",
      emoji: "🏗️",
      pages: [
        {
          name: "Feasibility Studies & Site Selection",
          url: "#",
          emoji: "🧭",
        },
        {
          name: "Project Schedule, Budget & Controls",
          url: "#",
          emoji: "📆",
        },
        {
          name: "Procurement & Vendor Management",
          url: "#",
          emoji: "🧾",
        },
      ],
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <BotMessageSquare className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">MegaGPT</span>
                  <span className="text-xs text-neutral-500">v1.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <Separator></Separator>
      <SidebarContent>
        <NavFavorites favorites={data.chats} />
        <NavWorkspaces workspaces={data.workspaces} />

      </SidebarContent>

      <Separator></Separator>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}

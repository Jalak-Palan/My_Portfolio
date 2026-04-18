"use client"

import { useEffect, useState } from "react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Home, User, Code, Briefcase, Mail, Github, Linkedin, Twitter, Youtube, Award } from "lucide-react"

const commands = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Certificates", href: "#certificates", icon: Award },
  { name: "Contact", href: "#contact", icon: Mail },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Jalak-Palan", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/jalak-palan-726597367/", icon: Linkedin },
  { name: "Twitter", href: "https://x.com/Jalak_Palan", icon: Twitter },
  { name: "YouTube", href: "https://www.youtube.com/@JALAKPALAN-q8i", icon: Youtube },
]

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const handleSelect = (href: string) => {
    onOpenChange(false)
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    } else {
      window.open(href, "_blank")
    }
  }

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          {commands.map((command) => (
            <CommandItem
              key={command.name}
              onSelect={() => handleSelect(command.href)}
              className="cursor-pointer"
            >
              <command.icon className="mr-2 h-4 w-4" />
              <span>{command.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Social">
          {socialLinks.map((link) => (
            <CommandItem
              key={link.name}
              onSelect={() => handleSelect(link.href)}
              className="cursor-pointer"
            >
              <link.icon className="mr-2 h-4 w-4" />
              <span>{link.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}

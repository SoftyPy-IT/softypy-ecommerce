import React from "react"
import Link from "next/link"
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react"

import Container from "../shared/Container"
import { Separator } from "@/components/ui/separator"

const infoItems = [
  {
    icon: Phone,
    label: "+880 1722 222222",
    href: "tel:+8801722222222",
  },
  {
    icon: Mail,
    label: "softypy@gmail.com",
    href: "mailto:softypy@gmail.com",
  },
  {
    icon: Clock,
    label: "Mon – Fri 9:00 – 17:00",
  },
  {
    icon: MapPin,
    label: "Dhaka, Bangladesh",
  },
]

const socialLinks = [
  {
    icon: Facebook,
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: Twitter,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: Instagram,
    href: "https://instagram.com",
    label: "Instagram",
  },
]

export default function TopBar() {
  return (
    <div className="border-b bg-muted/40 text-sm ">
      <Container>
        <div className="flex h-10 items-center justify-between">
          {/* Left info */}
          <div className="flex items-center gap-6">
            {infoItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex items-center gap-2 text-muted-foreground">
                  <Icon className="h-4 w-4" />
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span>{item.label}</span>
                  )}

                  {index !== infoItems.length - 1 && (
                    <Separator orientation="vertical" className="h-4" />
                  )}
                </div>
              )
            })}
          </div>

          {/* Right social */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

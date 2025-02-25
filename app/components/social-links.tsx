import { Mail, MessageCircle } from "lucide-react"
import { InstagramIcon, TwitterXIcon, PixelfedIcon, MastodonIcon } from "./icons/social-icons"
import { Github, Linkedin } from "lucide-react"

interface SocialLinksProps {
  className?: string
  showContactInfo?: boolean
}

export function SocialLinks({ className = "", showContactInfo = true }: SocialLinksProps) {
  const socialLinks = [
    {
      href: "https://github.com/aliizarinkolah",
      icon: Github,
      label: "GitHub Profile",
    },
    {
      href: "https://www.linkedin.com/in/zarinkolahaliii/",
      icon: Linkedin,
      label: "LinkedIn Profile",
    },
    {
      href: "https://www.instagram.com/aliizarinkolah/",
      icon: InstagramIcon,
      label: "Instagram Profile",
    },
    {
      href: "https://x.com/aliizarinkolah",
      icon: TwitterXIcon,
      label: "Twitter Profile",
    },
    {
      href: "https://ieji.de/@alizarinkolah",
      icon: MastodonIcon,
      label: "Mastodon Profile",
    },
    {
      href: "https://pixelfed.social/alizarinkolah",
      icon: PixelfedIcon,
      label: "Pixelfed Profile",
    },
  ]

  const contactLinks = [
    {
      href: "mailto:info@alizarinkolah.ir",
      icon: Mail,
      label: "Email Contact",
    },
    {
      href: "https://t.me/thealizarinkolah",
      icon: MessageCircle,
      label: "Telegram Contact",
    },
  ]

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {[...socialLinks, ...(showContactInfo ? contactLinks : [])].map(({ href, icon: Icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
          aria-label={label}
        >
          <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </a>
      ))}
    </div>
  )
}


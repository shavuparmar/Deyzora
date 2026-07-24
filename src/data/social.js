import { Instagram, Linkedin, MessageCircle, Mail, Phone, Send } from 'lucide-react';
import { companyInfo } from './company';

export const socialLinks = [
  {
    name: 'Instagram',
    url: companyInfo.instagramUrl,
    icon: Instagram,
    color: 'text-pink-500',
    hoverColor: 'hover:border-pink-500 hover:text-pink-500',
    handle: companyInfo.instagram
  },
  {
    name: 'LinkedIn',
    url: companyInfo.linkedinUrl,
    icon: Linkedin,
    color: 'text-blue-600',
    hoverColor: 'hover:border-blue-600 hover:text-blue-600',
    handle: 'Deyzora Infotech'
  },
  {
    name: 'WhatsApp',
    url: `https://wa.me/${companyInfo.whatsapp}`,
    icon: MessageCircle,
    color: 'text-green-500',
    hoverColor: 'hover:border-green-500 hover:text-green-500',
    handle: companyInfo.phone
  },
  {
    name: 'Telegram',
    url: 'https://t.me/deyzorainfotech',
    icon: Send,
    color: 'text-blue-400',
    hoverColor: 'hover:border-blue-400 hover:text-blue-400',
    handle: '@deyzorainfotech'
  }
];

import Image from "next/image"
import Link from "next/link"
import { Mail, Instagram, Youtube, Send, ThumbsUp } from "lucide-react"

export default function TapLink() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start py-8 px-4">
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        {/* Profile Image */}
        <div className="w-24 h-24 rounded-full overflow-hidden bg-white border-4 border-white shadow-lg mb-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-03-16%2005.51.47.jpg-Vw0lXnMKQ70jSzgPC91pe16NW54W64.jpeg"
            alt="Jamshidxon Ziyoxonov"
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Profile Info */}
        <div className="w-full bg-[#343a40] text-white rounded-lg p-4 mb-4 text-center">
          <h1 className="text-xl font-semibold mb-2">Jamshidxon Ziyoxonov</h1>
          <div className="space-y-1 text-sm">
            <p>⚡ Something new about the world</p>
            <p>🌊 Traveler index 51/12</p>
            <p>📝 Storyteller</p>
            <p>🧡 Beloved husband and father</p>
          </div>
        </div>

        {/* Links */}
        <div className="w-full space-y-3">
          <Link
            href="https://t.me/ziyokhonov_ads"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[#343a40] text-white rounded-lg p-4 text-center justify-center"
          >
            <ThumbsUp className="w-5 h-5 mr-2" />
            <span>НАМКОРЛИК/ ПО РЕКЛАМЕ СЮДА</span>
          </Link>

          <Link
            href="https://t.me/ziyokhonovads"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[#343a40] text-white rounded-lg p-4 text-center justify-center"
          >
            <Mail className="w-5 h-5 mr-2" />
            <span>TAKLIF VA MUROJAATLAR UCHUN</span>
          </Link>

          <Link
            href="https://www.instagram.com/ziyokhonov/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[#343a40] text-white rounded-lg p-4 text-center justify-center"
          >
            <Instagram className="w-5 h-5 mr-2" />
            <span>INSTAGRAM</span>
          </Link>

          <Link
            href="https://www.youtube.com/@Ziyokhonov"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[#343a40] text-white rounded-lg p-4 text-center justify-center"
          >
            <Youtube className="w-5 h-5 mr-2" />
            <span>YOUTUBE</span>
          </Link>

          <Link
            href="https://t.me/ziyokhonov"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[#343a40] text-white rounded-lg p-4 text-center justify-center"
          >
            <Send className="w-5 h-5 mr-2" />
            <span>TELEGRAM</span>
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <Link
            href="https://t.me/lazizme1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors"
          >
            by t.me/lazizme1
          </Link>
        </div>
      </div>
    </div>
  )
}

import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex justify-center items-center gap-2 bg-gray-900 h-16">
        <h3 className="font-semibold text-[#f5f5f4]">Built by Lauren Molloy</h3>
        <FaHeart className="font-semibold text-[#f5f5f4]" />
    </div>
  )
}

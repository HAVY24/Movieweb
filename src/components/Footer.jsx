import React from "react";
import { Facebook } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full py-4 border-t border-gray-800 mb-[-40px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">DANH MỤC</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-400">
                  Phim Mới
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Phim Sắp Chiếu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Phim Bộ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Phim Lẻ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  TV Show
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">THỂ LOẠI</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-400">
                  Phim Cổ Trang
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Phim Kinh Dị
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Phim Học Đường
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Phim Viễn Tưởng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Phim Hoạt Hình
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">ĐIỀU KHOẢN</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-400">
                  DMCA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Liên Hệ
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/vyvixrex"
                  className="hover:text-orange-400"
                >
                  Chillme.one
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">SOCIAL</h2>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/vyvixrex"
                className="text-white hover:text-orange-400"
              >
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-orange-400">
                <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
                  <span className="text-xs">Z</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-gray-800 pt-4">
          <p className="text-sm text-gray-400">
            © 2025 Chillme. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

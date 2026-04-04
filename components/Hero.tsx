import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className=" flex items-start justify-center px-4 pt-16 pb-10">
      <div className="w-full max-w-sm flex flex-col items-center text-center">
        {/* Logo */}
        <div className="w-28 h-28 rounded-full overflow-hidden bg-white/70 backdrop-blur-md shadow-md flex items-center justify-center">
          <Image
            src="/logo.jpg"
            alt="HUMI Beauty Logo"
            width={112}
            height={112}
            priority
            className="object-cover"
          />
        </div>

        {/* Store name */}
        <h1 className="mt-4 text-xl font-semibold text-gray-800">
          HUMI Beauty
        </h1>
        {/* <p className="mt-1 text-sm font-semibold text-gray-600 leading-relaxed">
          Shop mỹ phẩm, phụ kiện
        </p> */}
        {/* Description */}
        <p className="mt-4 text-sm font-semibold text-red-500 leading-relaxed">
          KHAI TRƯƠNG CHI NHÁNH
          <br />
          TRI TÔN - AN GIANG
          <br />
          NGÀY 9,10,11 THÁNG 4 ĐẾN SHOP
          <br /> LÀ CÓ QUÀ CHO MỌI NGƯỜI NHA!!!
        </p>
        {/* <p className="mt-1 text-sm font-semibold text-gray-600 leading-relaxed">
          Shop mỹ phẩm, phụ kiện
          <br />
          Giá học sinh, sinh viên
        </p> */}

        {/* Buttons */}
        <div className="mt-4 w-full flex flex-col gap-4">
          <Link
            href="https://www.facebook.com/humibeautyandcosmetics"
            target="_blank"
            className="
                      w-full rounded-xl
                      bg-white/80
                      py-3.5 px-4
                      text-base font-medium text-gray-800
                      shadow-sm
                      backdrop-blur

                      text-center
                      break-words
                      whitespace-normal
                      leading-relaxed

                      transition-all
                      duration-300
                      ease-out

                      hover:-translate-y-1
                      hover:shadow-lg

                      active:translate-y-0
                      active:scale-[0.985]
                    "
          >
            Hỗ trợ tư vấn qua Facebook từ 8h đến 20h hàng ngày.
          </Link>
        </div>
        <div className="mt-4 w-full flex flex-col gap-4">
          <Link
            href="https://zalo.me/g/butsyz719"
            target="_blank"
            className="
                      w-full rounded-xl
                      bg-white/80
                      py-3.5 px-4
                      text-base font-medium text-gray-800
                      shadow-sm
                      backdrop-blur

                      text-center
                      break-words
                      whitespace-normal
                      leading-relaxed

                      transition-all
                      duration-300
                      ease-out

                      hover:-translate-y-1
                      hover:shadow-lg

                      active:translate-y-0
                      active:scale-[0.985]
                    "
          >
            Tham gia nhóm Zalo báo giá
          </Link>
        </div>
        <div className="mt-4 w-full flex flex-col gap-4">
          <Link
            href="https://www.facebook.com/humibeautyandcosmetics"
            target="_blank"
            className="
                      w-full rounded-xl
                      bg-white/80
                      py-3.5 px-4
                      text-base font-medium text-gray-800
                      shadow-sm
                      backdrop-blur

                      text-center
                      break-words
                      whitespace-normal
                      leading-relaxed

                      transition-all
                      duration-300
                      ease-out

                      hover:-translate-y-1
                      hover:shadow-lg

                      active:translate-y-0
                      active:scale-[0.985]
                    "
          >
            Chia sẻ góp ý để Humi phục vụ bạn tốt hơn.
          </Link>
        </div>
      </div>
    </section>
  );
}

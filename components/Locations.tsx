import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";

const locations = [
  {
    name: "Humi Long Xuyên",
    address: "Gần trường Nguyễn Hiền, Bình Khánh, Long Xuyên, AG",
    hours: "8:00 AM - 8:00 PM",
    mapUrl: "https://maps.app.goo.gl/exSQP8dbU8kb3muw5"
  },
  {
    name: "Humi An Châu",
    address: "Gần trường THPT Nguyễn Bỉnh Khiêm, An Châu, AG",
    hours: "8:00 AM - 8:00 PM",
    mapUrl: "https://maps.app.goo.gl/RF4J5HGziAjfNnfp6"
  },
  {
    name: "Humi Cần Đăng",
    address: "Đối diện cây xăng Huy Dũng, Cần Đăng, AG",
    hours: "8:00 AM - 8:00 PM",
    mapUrl: "https://maps.app.goo.gl/9Rh92vDeRujzPYj68"
  },
  {
    name: "Humi Tri Tôn",
    address: "105 Nguyễn Trãi, Khóm 4, Tri Tôn, AG",
    hours: "8:00 AM - 8:00 PM",
    mapUrl: "https://maps.app.goo.gl/HgLZYR111RyixbX68"
  },
  {
    name: "Humi Châu Đốc",
    address: "Ngay cổng chợ Phường B, Thủ Khoa Huân, Châu Đốc, AG",
    hours: "8:00 AM - 8:00 PM",
    mapUrl: "https://maps.app.goo.gl/xrDWpXaQZmof8uCN8"
  },
  {
    name: "Humi Cái Dầu",
    address: "Đường vào trường Trần Văn Thành, tt Cái Dầu, Châu Phú, AG",
    hours: "8:00 AM - 8:00 PM",
    mapUrl: "https://maps.app.goo.gl/iq6XmweFH8PDTC346"
  },
  {
    name: "Humi Tân Châu",
    address: "Long Thạnh D, Tân Châu",
    hours: "8:00 AM - 8:00 PM",
    mapUrl: "https://maps.app.goo.gl/qZizpD6WTeKuG1718"
  },
  {
    name: "Humi Phú Mỹ",
    address:
      "Xéo quán nhậu 3 She, Đường 954 Tôn Đức Thắng, Phú Mỹ, Phú Tân, AG",
    hours: "8:00 AM - 8:00 PM",
    mapUrl: "https://maps.app.goo.gl/hS2DHWsidtTUv4xy7"
  },
  {
    name: "Humi An Phú",
    address: "Đường Tôn Đức Thắng xéo Cafe Vyvy",
    hours: "8:00 AM - 8:00 PM",
    mapUrl: "https://maps.app.goo.gl/Pehc9DsHjTUbvuHQ8"
  },
  {
    name: "Humi Thạnh Mỹ Tây",
    address: "Đối diện trường THPT Thạnh Mỹ Tây, Châu Phú, AG",
    hours: "8:00 AM - 6:30 PM",
    mapUrl: "https://maps.app.goo.gl/o2ZxKAnHX48AyKpJ7"
  },
  {
    name: "Humi Mỹ Đức",
    address: "Mỹ Thiện, Mỹ Đức, Châu Phú, AG",
    hours: "8:00 AM - 6:30 PM",
    mapUrl: "https://maps.app.goo.gl/nUJLNHHKnTBMpkXC8"
  }
];

const Locations = () => {
  return (
    <section className="py-8 px-4">
      <div className="mx-auto max-w-sm">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            11 chi nhánh Humi tại An Giang
          </h2>
          <p className="text-gray-600 mt-1 text-sm">
            Chạm vào chi nhánh để xem đường đi
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {locations.map((loc, index) => {
            return (
              <a
                key={index}
                href={loc.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                          bg-white rounded-xl
                          p-4 flex items-start gap-3
                          shadow-sm

                          transition-all
                          duration-300
                          ease-out

                          hover:-translate-y-1
                          hover:shadow-lg

                          active:translate-y-0
                          active:scale-[0.985]
                        "
              >
                <MapPinIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />

                <div className="flex flex-col">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {loc.name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {loc.address}
                  </p>

                  <p className="text-gray-500 text-xs mt-1">
                    Open: {loc.hours}
                  </p>

                  {/* CTA text */}
                  <p className="mt-2 text-xs font-medium text-blue-600">
                    Xem đường đi →
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Locations;

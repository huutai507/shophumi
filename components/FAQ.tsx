"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Sản phẩm của HUMI Beauty có chính hãng không?",
    answer:
      "HUMI Beauty chọn lọc và cung cấp các sản phẩm có nguồn gốc rõ ràng, ưu tiên hàng chính hãng và an toàn cho người dùng."
  },
  {
    question: "Làm sao để được tư vấn sản phẩm phù hợp?",
    answer:
      "Bạn có thể inbox Facebook HUMI Beauty để được tư vấn theo nhu cầu. Thời gian hỗ trợ từ 8h đến 20h mỗi ngày."
  },
  {
    question: "HUMI Beauty có hỗ trợ sau khi mua không?",
    answer:
      "HUMI Beauty luôn hỗ trợ giải đáp thắc mắc sau mua, hướng dẫn sử dụng và tiếp nhận phản hồi từ khách hàng."
  }
];

export default function FAQ(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="flex justify-center px-4 pb-16">
      <div className="w-full max-w-sm flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-gray-800 text-center">
          Câu hỏi thường gặp
        </h2>

        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="
                w-full rounded-xl
                bg-white/80
                backdrop-blur
                px-4 py-4
                shadow-sm
                cursor-pointer

                transition-all
                duration-300
                ease-out

                hover:-translate-y-1
                hover:shadow-lg

                active:translate-y-0
                active:scale-[0.985]
              "
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-gray-800 leading-relaxed">
                  {faq.question}
                </p>
                <span className="text-lg text-gray-500">
                  {isOpen ? "−" : "+"}
                </span>
              </div>

              {isOpen && (
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

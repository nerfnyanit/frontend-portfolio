import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | nerfnyanit"
}


export default function page() {
  return (
    <div className="flex items-center justify-center px-6">
      <section className="min-h-[70vh] flex flex-col justify-center gap-6">
        <h1 
          className="
            text-3xl
            sm:text-4xl
            lg:text-5xl 
            font-bold 
            leading-tight
            "
          >
            人の感情に寄り添う体験を、<br />
            画面の裏側まで考えて形にする。
        </h1>

        <p 
          className="
            text-base
            sm:text-lg
            text-gray-400
            max-w-xl
            ">
          Next.js / React を軸に、<br />
          ユーザーの「気持ち」を起点としたフロントエンド開発をしています。<br />
          Linux やインフラも学び、動く仕組みまで理解したものづくりを目指しています
        </p>

        <div 
          className="
            flex
            flex-col
            sm:flex-row 
            gap-4 
            mt-4
            "
          >
          <Link 
            href="/projects" 
            className="
              px-6 
              py-3 
              bg-white 
              text-black 
              rounded-full
              text-center 
              transition-all 
              hover:-translate-y-1 
              hover:shadow-lg
              "
            >
              Projectsを見る
          </Link>

          <Link 
            href="/about" 
            className="
              px-6 
              py-3 
              border 
              rounded-full
              text-center 
              transition-all 
              hover:-translate-y-1 
              hover:shadow-lg
              "
              >
              About Me
          </Link>
        </div>
      </section>
    </div>
  )
}

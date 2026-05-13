"use client";

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function CoffeeBrochure() {
  const coffeeBrown = "#4E342E";
  const forestGreen = "#2E7D32";
  const goldAccent = "#D4AF37";

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-900 pb-8" style={{ color: coffeeBrown }}>

      {/* SECTION 1: BOLAVEN STORY (Image 1 Reference) */}
      <section className="relative overflow-hidden w-full">
        {/* Ensure the container has a specific height and relative positioning (no Tailwind required) */}
        <div className="relative w-full" style={{ height: 320 }}>
          <Image
            src="/demo/images/1_2.png"
            alt="Bolaven Story Header"
            fill
            className='border-round-lg'
            sizes="100vw"
            priority
            style={{ objectFit: 'cover', filter: 'brightness(0.5)' }}
          />

          {/* Overlay text above the image */}
          <div
            className="absolute inset-0 flex flex-column align-items-center justify-content-center"
            style={{ zIndex: 10, color: '#ffffff', padding: 16 }}
          >
            <h1 style={{ fontWeight: 800, fontSize: 44, lineHeight: 1.1, marginBottom: 8, color: '#ffffff' }}>
              BOLAVEN STORY
            </h1>
            <p
              style={{
                textAlign: 'center',
                fontSize: 22,
                lineHeight: 1.3,
                borderTop: '1px solid rgba(255,255,255,0.6)',
                paddingTop: 6,
              }}
            >
              라오스 남부의 빛나는 보석, 볼라벤 고원
            </p>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto p-4 md:p-6">
          <Card className="surface-card shadow-4 border-round-xl mt-[-50px] relative z-2">
            <div className="grid">
              {/* English Side */}
              <div className="col-12 md:col-6 p-4 border-right-1 border-200">
                <h2 className="text-3xl font-bold mb-4" style={{ color: forestGreen }}>The Bolaven Story</h2>
                <p className="line-height-3 text-lg mb-4">
                  The Bolaven Plateau is the <strong>"crown jewel"</strong> of southern Laos.
                  Formed thousands of years ago by volcanic activity, the nutrient-dense red volcanic soil
                  provides a unique natural heritage for the world's finest coffee.
                </p>
                <div className="mt-3">
                  <h4 className="font-bold mb-1">Home of the Laven</h4>
                  <p className="text-sm">"Bolaven" translates to "The home of the Laven people," the indigenous group of this region.</p>
                </div>
              </div>

              {/* Korean Side */}
              <div className="col-12 md:col-6 p-4">
                <h2 className="text-3xl font-bold mb-4" style={{ color: forestGreen }}>볼라벤 이야기</h2>
                <p className="line-height-3 text-lg mb-4">
                  볼라벤 고원은 라오스 남부의 <strong>"빛나는 보석"</strong>과도 같습니다.
                  수천 년 전 화산 활동으로 형성된 비옥한 적색 화산토는
                  세계 최고급 커피를 재배하기 위한 천혜의 환경을 제공합니다.
                </p>
                <div className="mt-3">
                  <h4 className="font-bold mb-1">라벤족의 고향</h4>
                  <p className="text-sm">"볼라벤"은 이 지역의 토착 민족인 '라벤족의 고향'이라는 아름다운 의미를 담고 있습니다.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* SECTION 2: COFFEE VARIETIES (Image 2 Reference) */}
      <section className="max-w-screen-xl mx-auto p-4 md:p-6 mt-6">
        <div className="text-center mb-6">
          <Tag value="Premium Quality / 프리미엄 품질" className="bg-green-700 mb-2 px-3" />
          <h2 className="text-4xl font-bold">Lao Coffee Varieties</h2>
        </div>

        <div className="grid">
          {/* Arabica Section */}
          <div className="col-12 md:col-6">
            <Card className="h-full border-top-3 border-green-500 shadow-2 hover:shadow-5 transition-duration-300">
              <div className="flex justify-content-between align-items-center mb-3">
                <h3 className="text-2xl font-bold m-0">Arabica</h3>
                <h3 className="text-2xl font-bold m-0">아라비카</h3>
              </div>
              <p className="font-italic mb-3 text-green-700">Elegance & Fragrance / 천연의 우아한 향미</p>
              <Divider />
              <ul className="list-none p-0 m-0">
                <li className="mb-3 flex justify-content-between">
                  <span className="text-sm">Wildflowers & Sweet fruits</span>
                  <span className="text-sm font-bold">야생화와 달콤한 과일 향</span>
                </li>
                <li className="mb-3 flex justify-content-between">
                  <span className="text-sm">Bright, balanced acidity</span>
                  <span className="text-sm font-bold">산뜻하고 균형 잡힌 산미</span>
                </li>
                <li className="mb-3 flex justify-content-between">
                  <span className="text-sm">Silky & Smooth finish</span>
                  <span className="text-sm font-bold">부드럽고 깔끔한 목넘김</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Robusta Section */}
          <div className="col-12 md:col-6">
            <Card className="h-full border-top-3 border-orange-700 shadow-2 hover:shadow-5 transition-duration-300">
              <div className="flex justify-content-between align-items-center mb-3">
                <h3 className="text-2xl font-bold m-0">Robusta</h3>
                <h3 className="text-2xl font-bold m-0">로부스타</h3>
              </div>
              <p className="font-italic mb-3 text-orange-900">Boldness & Energy / 화산 토양의 강렬한 에너지</p>
              <Divider />
              <ul className="list-none p-0 m-0">
                <li className="mb-3 flex justify-content-between">
                  <span className="text-sm">Deep nutty undertones</span>
                  <span className="text-sm font-bold">고소하고 깊은 풍미</span>
                </li>
                <li className="mb-3 flex justify-content-between">
                  <span className="text-sm">Toasted wood & Warm spice</span>
                  <span className="text-sm font-bold">구운 토스트와 나무 향</span>
                </li>
                <li className="mb-3 flex justify-content-between">
                  <span className="text-sm">Heavy & Full-bodied</span>
                  <span className="text-sm font-bold">묵직한 바디감</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        <div className="mt-4 border-round-xl overflow-hidden shadow-4">
          <Image src="/demo/images/2_2.png" alt="Coffee Grains" width={1200} height={400} className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* SECTION 3: CERTIFICATES */}
      <section className="bg-white py-8 mt-6 border-y-1 border-200">
        <div className="max-w-screen-xl mx-auto p-4 md:p-6">
          <div className="grid align-items-center">

            {/* Left Column: Text Content */}
            <div className="col-12 md:col-5 pr-0 md:pr-6">
              <span className="text-primary font-bold uppercase tracking-wider mb-2 block">Quality Assurance</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-900">Certified Excellence</h2>
              <p className="text-lg mb-6 line-height-3 text-600">
                Our quality is backed by international standards.
                <strong> Donepasith Inthapakdy</strong> is a certified Q-Processing Professional,
                ensuring every bean meets rigorous specialty criteria.
              </p>

              <Divider className="my-5" />

              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-900">검증된 탁월함</h2>
              <p className="text-lg mb-4 line-height-3 text-600">
                우리의 품질은 국제 표준에 의해 증명됩니다.
                전문적인 <strong>Q-Processing</strong> 인증을 통해 수확부터 가공까지
                모든 단계에서 최상의 원두 품질을 보장합니다.
              </p>
            </div>

            {/* Right Column: 4-Image Certificate Grid */}
            <div className="col-12 md:col-7">
              <div className="grid">
                {/* Certificate 1 */}
                <div className="col-6 mb-4">
                  <div className="surface-card p-2 shadow-2 border-round hover:shadow-4 transition-duration-300">
                    <Image
                      src="/demo/images/3_1.png"
                      alt="Certificate 1"
                      width={400}
                      height={500}
                      className="w-full border-round object-contain"
                    />
                  </div>
                </div>
                {/* Certificate 2 */}
                <div className="col-6 mb-4">
                  <div className="surface-card p-2 shadow-2 border-round hover:shadow-4 transition-duration-300">
                    <Image
                      src="/demo/images/3_2.png"
                      alt="Certificate 2"
                      width={400}
                      height={500}
                      className="w-full border-round object-contain"
                    />
                  </div>
                </div>
                {/* Certificate 3 */}
                <div className="col-6 mb-4">
                  <div className="surface-card p-2 shadow-2 border-round hover:shadow-4 transition-duration-300">
                    <Image
                      src="/demo/images/3_3.png"
                      alt="Certificate 3"
                      width={400}
                      height={500}
                      className="w-full border-round object-contain"
                    />
                  </div>
                </div>
                {/* Certificate 4 */}
                <div className="col-6 mb-4">
                  <div className="surface-card p-2 shadow-2 border-round hover:shadow-4 transition-duration-300">
                    <Image
                      src="/demo/images/3_4.png"
                      alt="Certificate 4"
                      width={400}
                      height={500}
                      className="w-full border-round object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: THE SECRET (Image 4 Reference) */}
      <section className="max-w-screen-xl mx-auto p-4 md:p-6 mt-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold underline" style={{ textDecorationColor: goldAccent }}>The Secrets of Our Coffee</h2>
          <p className="text-xl mt-2">라오스 남부 커피가 특별한 진짜 비밀</p>
        </div>

        <div className="grid align-items-center mb-8">
          {/* MAIN IMAGE: Keeping your col-4 focal point */}
          <div className="col-12 md:col-4">
            <Image
              src="/demo/images/4_2.png"
              alt="Production Process"
              width={400}
              height={400}
              className="w-full border-round-xl shadow-3"
            />
          </div>

          {/* CONTENT AREA: col-8 */}
          <div className="col-12 md:col-8 pl-0 md:pl-6">
            <div className="flex flex-column gap-5">

              {/* SECTION 1: Volcanic Terroir */}
              <div className="surface-50 p-4 border-round-xl shadow-1">
                <div className="flex flex-column md:flex-row gap-4">
                  {/* Bigger Sub-Image */}
                  <div className="flex-shrink-0 w-10rem h-10rem border-round-lg overflow-hidden shadow-2 border-2 border-green-100">
                    <Image
                      src="/demo/images/4_2.png"
                      alt="Volcanic Soil Detail"
                      width={160}
                      height={160}
                      className="object-cover w-full h-full hover:scale-110 transition-duration-300"
                    />
                  </div>

                  <div className="flex-grow-1">
                    <h3 className="text-2xl font-bold text-green-800 mb-3 border-bottom-1 border-green-100 pb-2">
                      1. Volcanic Terroir / 화산토의 풍미
                    </h3>
                    <div className="grid">
                      <div className="col-12 md:col-6">
                        <p className="text-700 line-height-3 text-sm">
                          Ancient mineral-rich soil creates a <strong>"Clean Cup"</strong> flavor unique to the Bolaven Plateau.
                        </p>
                      </div>
                      <div className="col-12 md:col-6 border-left-1 border-200">
                        <p className="text-700 line-height-3 text-sm">
                          고대 화산토는 어디에서도 맛볼 수 없는 명료하고 깔끔한 풍미인 <strong>'클린 컵'</strong>을 선사합니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 2: Art of the Roast */}
              <div className="surface-50 p-4 border-round-xl shadow-1">
                <div className="flex flex-column md:flex-row gap-4">
                  {/* Bigger Sub-Image */}
                  <div className="flex-shrink-0 w-10rem h-10rem border-round-lg overflow-hidden shadow-2 border-2 border-orange-100">
                    <Image
                      src="/demo/images/2_2.png"
                      alt="Roasting Detail"
                      width={160}
                      height={160}
                      className="object-cover w-full h-full hover:scale-110 transition-duration-300"
                    />
                  </div>

                  <div className="flex-grow-1">
                    <h3 className="text-2xl font-bold text-orange-800 mb-3 border-bottom-1 border-orange-100 pb-2">
                      2. Art of the Roast / 로스팅의 예술
                    </h3>
                    <div className="grid">
                      <div className="col-12 md:col-6">
                        <p className="text-700 line-height-3 text-sm">
                          Meticulous roasting balance for both <strong>vibrant light</strong> and <strong>deep dark</strong> profiles.
                        </p>
                      </div>
                      <div className="col-12 md:col-6 border-left-1 border-200">
                        <p className="text-700 line-height-3 text-sm">
                          현대적인 라이트 로스팅부터 전통적인 다크 로스팅까지 원두 본연의 매력을 극대화합니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* QR Section */}
        <div className="surface-900 text-white border-round-xl p-6 text-center">
          <h3 className="text-2xl mb-4 text-orange-400">Global Yeongdo Coffee Festival - Connect With Us</h3>
          <div className="flex flex-wrap justify-content-center gap-6">
            <div className="flex flex-column align-items-center">
              <div className="bg-white p-2 border-round-md mb-2">
                <i className="pi pi-facebook text-4xl text-blue-800"></i>
              </div>
              <span className="text-xs">Facebook Scan</span>
            </div>
            <div className="flex flex-column align-items-center">
              <div className="bg-white p-2 border-round-md mb-2">
                <i className="pi pi-whatsapp text-4xl text-green-600"></i>
              </div>
              <span className="text-xs">WhatsApp Scan</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FOOTER (Image 5 Reference) */}
      <section className="max-w-screen-xl mx-auto p-4 md:p-6 mt-8">
        <Card className="surface-50 border-none shadow-2">
          <div className="grid align-items-center">
            <div className="col-12 md:col-6">
              <h2 className="text-3xl font-bold mb-4">Contact Our Booth</h2>
              <div className="flex flex-column gap-3 mb-4">
                <div className="flex align-items-center gap-3">
                  <FontAwesomeIcon icon={faLocationDot} className="text-green-700 w-2rem" />
                  <span>Pakse, Champasak Province, Lao PDR</span>
                </div>
                <div className="flex align-items-center gap-3">
                  <FontAwesomeIcon icon={faPhone} className="text-green-700 w-2rem" />
                  <span>+856 20 99 82 22 455</span>
                </div>
                <div className="flex align-items-center gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-green-700 w-2rem" />
                  <span>LA: donepasith@gmail.com</span>
                </div>
                <div className="flex align-items-center gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-green-700 w-2rem" />
                  <span>EN: dayeriveren@gmail.com</span>
                </div>
              </div>
              <Divider />
              <div className="flex gap-4 grayscale opacity-70">
                <span className="font-bold">SK FOOD</span>
                <span className="font-bold">XAIPASITH</span>
                <span className="font-bold">MADE IN LAOS</span>
              </div>
            </div>
            <div className="col-12 md:col-6">
              <Image src="/demo/images/5_2-removebg-preview.png" alt="Laos Coffee Heritage" width={600} height={400} className="w-full border-round-xl" />
            </div>
          </div>
        </Card>
        <p className="text-center mt-6 text-500 font-bold tracking-widest">PRODUCT OF LAOS | 라오스 제품</p>
      </section>

      {/* Floating Call to Action */}
      <div className="fixed bottom-0 left-0 w-full p-3 md:p-4 z-5 flex justify-content-center">
        <Button
          label="Visit Our Booth / 상담 신청하기"
          icon="pi pi-external-link"
          className="p-button-rounded p-button-lg shadow-6 font-bold"
          style={{ backgroundColor: forestGreen, borderColor: forestGreen }}
          onClick={() => window.location.href = 'mailto:donepasith@gmail.com'}
        />
      </div>

      <style jsx global>{`
        body {
          background-color: #fdfaf7;
        }
        .p-card {
          border-radius: 1.5rem;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

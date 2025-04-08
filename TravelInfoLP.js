import React, { useState } from "react";
import uneishaPhoto from './assets/Uneisha.JPG';



export default function TravelInfoLP() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ヒーロー：日本の魅力 */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          background: "url(/tokyo.png)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-xl text-white text-center">
          <h1 className="text-5xl font-bold mb-4">ようこそ、日本へ</h1>
          <p className="text-lg max-w-xl mx-auto">
            歴史と現代が融合する美しい国。<br />
            あなたの心に残る旅をお手伝いします。
          </p>
        </div>
      </section>

      {/* スクロールで写真が移り変わるセクション */}
      <section className="space-y-16 py-20">
        <div
          className="h-screen bg-cover bg-center relative flex items-center justify-center"
          style={{
            background: "url(/kyoto.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {/* // 日本風の写真①：神社など */}
        </div>

       
         {/* 料金プラン：写真と写真の間 */}
         <div className="flex justify-center px-4 mt-[-5rem]">

          <section className="bg-white p-8 rounded-2xl shadow-md max-w-5xl w-full">
            <h2 className="text-2xl font-semibold mb-6 text-center">料金プラン</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="border rounded-xl p-4 bg-gray-50">
                <h3 className="text-xl font-bold mb-2">ライトプラン</h3>
                <p className="mb-2">ホテル・観光地・飛行機の提案</p>
                <p className="text-lg font-semibold">¥3,000（税込）</p>
              </div>
              <div className="border rounded-xl p-4 bg-gray-50">
                <h3 className="text-xl font-bold mb-2">スタンダード</h3>
                <p className="mb-2">ライト＋オーダーメイド旅のしおり作成</p>
                <p className="text-lg font-semibold">¥8,000（税込）</p>
              </div>
              <div className="border rounded-xl p-4 bg-gray-50">
                <h3 className="text-xl font-bold mb-2 text-blue-700">プレミアム</h3>
                <p className="mb-2">スタンダード＋旅行中の質問対応（1週間）</p>
                <p className="text-lg font-semibold text-blue-700">¥15,000（税込）</p>
              </div>
            </div>
          </section>
        </div>


        {/* // 日本風の写真②：京都の街並みなどと無料相談フォーム */}
        <div
          className="h-screen bg-cover bg-center relative flex items-end justify-center"
          style={{
            background: "url(/tokyo.png)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {/* 無料相談フォーム */}
          <div className="w-full max-w-3xl mb-12 px-4">
            <section className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-md w-full">
              <h2 className="text-2xl font-semibold mb-4 text-center">まずは無料相談から</h2>
              <p className="mb-6 text-center">
                旅の目的地が決まっていなくてもOK！行きたい雰囲気や希望を教えてください。<br />
                あなたにぴったりの観光地やアクセス方法をご提案します。
              </p>
              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLScaKHm0nCsZwSHYbi98yTNtu3SaIDDkbA56plHoy-B7atjBOQ/formResponse"
                method="POST"
                target="_blank"
                className="grid gap-4"
              >
                <input
                  type="text"
                  name="entry.987493299"
                  placeholder="お名前"
                  className="border p-2 rounded"
                  required
                />
                <input
                  type="email"
                  name="entry.725743282"
                  placeholder="メールアドレス"
                  className="border p-2 rounded"
                  required
                />
                <textarea
                  name="entry.534772082"
                  placeholder="相談内容（例：東京で自然を感じられる場所が知りたい）"
                  className="border p-2 rounded h-32"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  無料相談を送信する
                </button>
              </form>
            </section>
          </div>
        </div>

        <div className="h-screen bg-cover bg-center flex items-center justify-center bg-gray-100">
          {/* // サービス運営者の写真や自己紹介スペース */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">運営者紹介</h2>
            <p className="max-w-xl mx-auto mb-4">日本在住の旅の案内人が、あなたの旅を一緒にプランニングします。</p>
            {/* 運営者の写真をここに入れる */}
            <div className="w-40 h-40 mx-auto rounded-full bg-gray-300 overflow-hidden">
              { <img src={uneishaPhoto} alt="運営者" className="w-full h-full object-cover" /> }
             

            </div>
          </div>
        </div>
      </section>

      {/* 注意書き */}
      <section className="text-sm text-gray-600 text-center py-12">
        <p>※当サービスは情報提供を目的としており、宿泊・交通機関等の手配や予約代行は行っておりません。</p>
      </section>
    </div>
  );
}

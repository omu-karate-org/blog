import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "プライベートポリシー | 大阪公立大学空手道部",
    description: "プライベートポリシー",
  }
}
const page = () => {
  return (
    <>
      <h2 className="text-2xl text-left mb-1 mt-1">個人情報とは</h2>
      本サイトで内のプライバシーポリシーにおいて、個人情報とは個人に関する情報を意味します。具体的には、氏名、生年月日、住所、電話番号、メールアドレス等、特定の個人を識別できるものをいいます。
      <h2 className="text-2xl text-left mb-1 mt-1">個人情報の管理</h2>
      本サイト経由でお預かりした個人情報は、不正アクセス、紛失、漏えい等が起こらないよう、慎重かつ適切に管理します。
      <h2 className="text-2xl text-left mb-1 mt-1">個人情報の利用目的</h2>
      当サイトのお問い合わせやサービスへのお申し込み等を通じて、お預かりした個人情報は、以下に示す利用目的のために、適正に利用するものと致します。
      <li>お客様からのお問い合わせ等に対応するため。</li>
      <li>お客様からお申し込みいただいたサービス等の提供のため。</li>
      <li>当サイトのサービス向上・改善、新サービスを検討するための分析等を行うため。</li>
      <li>個人を識別できない形で統計データを作成し、当サイトおよびお客様の参考資料とするため。</li>
      <h2 className="text-2xl text-left mb-1 mt-1">個人情報の第三者提供</h2>
      当サイトのお問い合わせやサービスへのお申し込み等を通じて、お預かりした個人情報は、個人情報保護法その他の法令に基づき開示が認められる場合を除き、ご本人様の同意を得ずに第三者へ提供することはありません。
      <h2 className="text-2xl text-left mb-1 mt-1">広告について</h2>
      当ブログでは、第三者配信の広告サービス（Googleアドセンス）を利用しており、ユーザーの興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）を使用しております。クッキーを使用することで当サイトはお客様のコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。
      Cookieを無効にする方法やGoogleアドセンスに関する詳細は「
      <a
        href="https://policies.google.com/technologies/ads?hl=ja"
        rel="noreferrer noopener"
        target="_blank"
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        広告 – ポリシーと規約 – Google
      </a>
      」をご確認ください。
      <h2>アクセス解析ツールについて</h2>
      当ブログでは、Googleによるアクセス解析ツール「
      <a
        href="https://marketingplatform.google.com/intl/ja/about/analytics/"
        rel="noreferrer noopener"
        target="_blank"
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        Googleアナリティクス
      </a>
      」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
      この機能はクッキー（Cookie）を無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくは
      <a
        href="https://marketingplatform.google.com/about/analytics/terms/jp/"
        rel="noreferrer noopener"
        target="_blank"
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        こちら
      </a>
      をクリックしてください。
      <h2 className="text-2xl text-left mb-1 mt-1">免責事項</h2>
      当ブログに掲載されているリンクや広告などから移動したサイトで提供される情報、サービス等について一切の責任を負いません。
      また当ブログの情報について、できる限り正確にコンテンツを制作し公開することを心がけますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。
      当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
    </>
  );
};

export default page;

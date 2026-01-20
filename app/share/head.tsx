export default function Head() {
  const APP_URL = "https://donate-ronin.vercel.app";
  const IMAGE_URL = `${APP_URL}/embed.png`;

  return (
    <>
      <title>Donate Ronin</title>

      <meta property="og:title" content="Donate Ronin" />
      <meta property="og:description" content="Support my work with a small donation" />
      <meta property="og:image" content={IMAGE_URL} />

      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content={IMAGE_URL} />
      <meta property="fc:frame:button:1" content="Donate" />
      <meta property="fc:frame:button:1:action" content="launch_miniapp" />
      <meta property="fc:frame:button:1:target" content={APP_URL} />
      <meta name="base:app_id" content="696d16d7c0ab25addaaaf46a" />
    </>
  );
}

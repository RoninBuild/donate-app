const APP_URL = "https://donate-ronin.vercel.app";

export default function SharePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#000",
        fontFamily: "system-ui",
        color: "white",
      }}
    >
      <a
        href={APP_URL}
        style={{
          padding: "14px 18px",
          borderRadius: 14,
          background: "#0052FF",
          color: "#fff",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: 16,
        }}
      >
        Open Donate Ronin
      </a>
    </main>
  );
}

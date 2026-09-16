import { HudPanel } from "./components/HudPanel";

function App() {
  return (
    <div
      className="min-h-screen flex items-center justify-center gap-8"
      style={{ background: "var(--color-bg-void)" }}
    >
      <div className="circuit-bg" />

      <HudPanel title="Connector Box · firma-a-20260913-f1pp" accent="cyan">
        <div>STATUS: ONLINE</div>
        <div style={{ color: "var(--color-text-muted)" }}>MAC 00:80:41:AE:FD:79</div>
      </HudPanel>

      <HudPanel title="Warning" accent="amber">
        <div>PAIRING PENDING</div>
      </HudPanel>

      <HudPanel title="Error" accent="red">
        <div>CONNECTION LOST</div>
      </HudPanel>
    </div>
  );
}

export default App;
import PageShell from "@/components/PageShell";

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      intro="If you would like to discuss Scotch whisky supply, brand development, prestige bottlings or canned RTD projects, please use the details below."
    >
      <p>RSD Whisky</p>
      <p>5 Lochside Way</p>
      <p>Edinburgh EH12 9DT</p>
      <p>United Kingdom</p>
      <p className="mt-3">Telephone: +44 131 659 9829</p>
      <p>Mobile: +44 7831 495 163</p>
      <p className="mt-3">Email: c.shirlaw@rsdwhisky.com</p>
    </PageShell>
  );
}

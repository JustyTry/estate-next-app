export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <span>404 · OFF GRID</span>
      <h1>This page did not<br /><em>move forward.</em></h1>
      <p>A página que você procurou não está aqui.</p>
      <Link href="/pt">Voltar ao portfólio <span>→</span></Link>
    </main>
  );
}

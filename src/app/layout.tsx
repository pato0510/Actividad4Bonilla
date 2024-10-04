import './globals.css';

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }):JSX.Element {
  return (
    <html lang="es">
      <body>
        <header >
          <nav >
            <ul>
            </ul>
          </nav>
        </header>
        <main >{children}</main>
        <footer >
          <p>© Salvando vidas ciudadanas y mortales desde 1992!!!!!.</p>
        </footer>
      </body>
    </html>
  );
}


Hello, Lecturer!

+ Cara Menguji API Routes di Next.js Menggunakan Postman dengan
  Session Next-Auth 

        1. Login Melalui Aplikasi Frontend

        2. Ambil Token yang di Simpan di Cookie

                - Step-01: `F12 > Application > Storage > Cookies`

                - Step-02: Cari Cookie Bernama `next-auth.session-token`

                - Step-03: Salin (Copy-Paste) Token Tersebut

        3. Buka Aplikasi Postman

        4. Pada Bagian `Tab Headers` Tambahkan:

                Cookie: next-auth.session-token=YOUR_TOKEN_HERE

# Selamat datang di projek Front End Dev freeCodeCamp.org

Hasil projek aplikasi dapat dilihat pada link berikut [Front End Dev Libraries Project](https://fe-dev-libraries-projects.netlify.app/).

## Cara Submit Projek

- Silahkan buat akun dan login terlebih dahulu pada link berikut [https://codesandbox.io/](https://codesandbox.io/)
- Klik `new Sandbox` dan pilih `React template` untuk membuat projek react baru
- Pilih `Add Dependency` dan download beberapa package, silahkan ikuti versi dari masing - masing package dan sesuaikan package berdasarkan projek yang ingin di submit.

  Random Quote Machine :
  1. @reduxjs/toolkit (^1.8.3)
  2. node-sass (^7.0.1)
  3. react-icons (^4.4.0)
  4. react-redux (^8.0.2)
  5. react-router-dom (^6.3.0) <br /> <br />

  Markdown Previewer :
  1. @reduxjs/toolkit (^1.8.3)
  2. node-sass (^7.0.1)
  3. react-icons (^4.4.0)
  4. react-redux (^8.0.2)
  5. marked (^4.0.18) <br /> <br />

  Drum Machine : **Coming Soon**

  JavaScript Calculator : **Coming Soon**

  25 + 5 Clock : **Coming Soon**

- Lokasi component, style dan store redux untuk setiap projek (repository github) :
  | Projek Name | Component | Style | Reducer Redux | Store Redux |
  | :--- | :---- | :--- | :--- | :--- |
  | Random Quote Machine | `src/components/random_q_machine/` | `src/styles/components/random_q_machine.scss` | `src/redux/random_q_machine/` | `src/redux/store.js` |
  | Markdown Previewer | `src/components/markdown_previewer/` | `src/styles/components/markdown_previewer.scss` | `src/redux/markdown_previewer/` | `src/redux/store.js` |
  | Drum Machine | **Coming Soon** | **Coming Soon** | **Coming Soon** | **Coming Soon** |
  | JavaScript Calculator | **Coming Soon** | **Coming Soon** | **Coming Soon** | **Coming Soon** |
  | 25 + 5 Clock | **Coming Soon** | **Coming Soon** | **Coming Soon** | **Coming Soon** |

- Copy paste file component untuk projek yang ingin di submit pada file `App.js` pada **codesanbox.io**
- Copy paste file `index.js` dengan code berikut :

  <pre><code>import React from "react";
  import { createRoot } from "react-dom/client";
  import { store } from "./redux/store";
  import { Provider } from "react-redux";
  import App from "./App"; <br />
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);

  root.render(
    &nbsp; `<Provider store={store}>`
      &nbsp; &nbsp; `<App />`
    &nbsp; `</Provider>`
  );
  </code></pre>

- Klik `new directory` didalam folder `src/` pada projek **codesanbox.io** buat dengan nama `redux`
- Buat dua file didalam directory `redux/` :
  1. mp.js => copy paste file reducer redux untuk projek yang ingin di submit
  2. store.js => copy paste file store redux

- Buat file `style.scss` didalam directory `src/` dan copy paste file style untuk projek yang ingin di submit
- Final step, kalian seharusnya sudah melihat hasil aplikasi nya pada bagian kanan dari projek **codesandbox.io**
- Copy url hasil projek pada **codesandbox.io** dan paste di halaman submit projek freeCodeCamp.org

  ![The San Juan Mountains are beautiful!](https://user-images.githubusercontent.com/60939569/185047006-41142f53-ff8f-4431-bd1a-7e8fe4a278ed.png)

Thank you, jangan lupa kasih bintang nya ya jika membantu 🐱‍🏍
/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import Logo from "./Logo";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const extractLinksFromScripts = () => {
      const scripts = document.querySelectorAll<HTMLScriptElement>(
        'script[type="text/javascript"]'
      );
      const s = scripts[0].textContent || "";
      const a = s.split('"');
      const kwikLink = a.find((e) => e.startsWith("https://kwik"));
      console.log(kwikLink);
      if (kwikLink) {
        window.location.href = kwikLink;
        return;
      }
    };
    const currentUrl = window.location.href;
    if (currentUrl.startsWith("https://pahe.win")) {
      extractLinksFromScripts();
    }
  }, []);

  useEffect(() => {
    const clickDownloadButton = () => {
      const currentUrl = window.location.href;
      let a = currentUrl.split("/");
      const index = a.indexOf("f");
      a[index] = "d";
      const downloadUrl = a.join("/");

      const downloadButton = document.querySelector<HTMLButtonElement>(
        `form[action="${downloadUrl}"] button[type="submit"]`
      );

      if (downloadButton) {
        downloadButton.click();
      } else {
        console.error("Download button not found in the DOM.");
      }
    };

    const currentUrl = window.location.href;
    if (currentUrl.startsWith("https://kwik.si/")) {
      clickDownloadButton();
    }
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
